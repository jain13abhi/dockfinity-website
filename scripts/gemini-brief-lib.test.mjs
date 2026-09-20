import assert from "node:assert/strict";
import test from "node:test";

import {
  buildDraftRequest,
  buildResearchRequest,
  extractResponseText,
  generateBrief,
  parseResearchIssueTitle,
} from "./gemini-brief-lib.mjs";

test("parseResearchIssueTitle accepts only an ISO-dated research issue", () => {
  assert.equal(parseResearchIssueTitle("research: 2026-09-20"), "2026-09-20");
  assert.throws(() => parseResearchIssueTitle("brief: 2026-09-20"), /research:/);
  assert.throws(() => parseResearchIssueTitle("research: 20-09-2026"), /YYYY-MM-DD/);
});

test("research request uses the collected evidence packet without a paid search tool", () => {
  const request = buildResearchRequest({
    date: "2026-09-20",
    specification: "SPEC",
    evidence: "PRIMARY RELEASE EVIDENCE",
  });

  assert.equal(request.tools, undefined);
  assert.match(request.contents[0].parts[0].text, /2026-09-20/);
  assert.match(request.contents[0].parts[0].text, /SPEC/);
  assert.match(request.contents[0].parts[0].text, /PRIMARY RELEASE EVIDENCE/);
  assert.equal(request.generationConfig?.responseMimeType, undefined);
});

test("draft request uses JSON structured output and no search tool", () => {
  const request = buildDraftRequest({
    date: "2026-09-20",
    specification: "SPEC",
    research: "RESEARCH",
    publishedNames: ["Old Tool"],
  });

  assert.equal(request.tools, undefined);
  assert.equal(request.generationConfig.responseMimeType, "application/json");
  assert.deepEqual(request.generationConfig.responseJsonSchema.properties.date.enum, ["2026-09-20"]);
  assert.equal(request.generationConfig.responseJsonSchema.properties.items.minItems, 2);
  assert.equal(request.generationConfig.responseJsonSchema.properties.items.maxItems, 3);
  assert.match(
    request.generationConfig.responseJsonSchema.properties.readThrough.description,
    /260 to 324 characters/
  );
  assert.match(
    request.generationConfig.responseJsonSchema.properties.thesis.description,
    /58 characters/
  );
  assert.match(request.contents[0].parts[0].text, /260 to 324 characters/);
  assert.match(request.contents[0].parts[0].text, /RESEARCH/);
  assert.match(request.contents[0].parts[0].text, /Old Tool/);
});

test("extractResponseText rejects blocked and empty responses", () => {
  assert.equal(
    extractResponseText({ candidates: [{ content: { parts: [{ text: "hello" }] } }] }),
    "hello"
  );
  assert.throws(() => extractResponseText({ promptFeedback: { blockReason: "SAFETY" } }), /SAFETY/);
  assert.throws(() => extractResponseText({ candidates: [] }), /no text/i);
});

test("generateBrief performs a grounded research pass then a structured drafting pass", async () => {
  const calls = [];
  const fakeFetch = async (url, options) => {
    calls.push({ url, options, body: JSON.parse(options.body) });
    const response = calls.length === 1
      ? { candidates: [{ content: { parts: [{ text: "verified research dossier" }] } }] }
      : {
          candidates: [{
            content: { parts: [{ text: JSON.stringify({
              date: "2026-09-20",
              thesis: "A concise layout-safe thesis",
              readThrough: "x".repeat(260),
            }) }] },
          }],
        };
    return { ok: true, json: async () => response };
  };

  const result = await generateBrief({
    apiKey: "test-key",
    date: "2026-09-20",
    specification: "SPEC",
    publishedNames: [],
    evidence: "PRIMARY RELEASE EVIDENCE",
    fetchImpl: fakeFetch,
  });

  assert.deepEqual(result, {
    date: "2026-09-20",
    thesis: "A concise layout-safe thesis",
    readThrough: "x".repeat(260),
  });
  assert.equal(calls.length, 2);
  assert.match(calls[0].url, /gemini-3\.5-flash-lite:generateContent$/);
  assert.match(calls[1].url, /gemini-3\.5-flash-lite:generateContent$/);
  assert.equal(calls[0].options.headers["x-goog-api-key"], "test-key");
  assert.equal(calls[0].body.tools, undefined);
  assert.equal(calls[1].body.generationConfig.responseMimeType, "application/json");
});

test("generateBrief retries one malformed layout draft with explicit correction", async () => {
  const calls = [];
  const fakeFetch = async (_url, options) => {
    calls.push(JSON.parse(options.body));
    const text = calls.length === 1
      ? "verified research dossier"
      : JSON.stringify({
          date: "2026-09-20",
          thesis: calls.length === 2
            ? "This deliberately overlong thesis must be rejected before rendering"
            : "A concise layout-safe thesis",
          readThrough: "x".repeat(260),
        });
    return {
      ok: true,
      json: async () => ({ candidates: [{ content: { parts: [{ text }] } }] }),
    };
  };

  const result = await generateBrief({
    apiKey: "test-key",
    date: "2026-09-20",
    specification: "SPEC",
    publishedNames: [],
    evidence: "PRIMARY RELEASE EVIDENCE",
    fetchImpl: fakeFetch,
  });

  assert.equal(calls.length, 3);
  assert.equal(result.readThrough.length, 260);
  assert.match(calls[2].contents[0].parts[0].text, /thesis is 67 characters/i);
});

test("generateBrief stops after one corrected draft", async () => {
  const calls = [];
  const fakeFetch = async (_url, options) => {
    calls.push(JSON.parse(options.body));
    const text = calls.length === 1
      ? "verified research dossier"
      : JSON.stringify({
          date: "2026-09-20",
          thesis: "This deliberately overlong thesis must be rejected before rendering",
          readThrough: "x".repeat(260),
        });
    return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text }] } }] }) };
  };

  await assert.rejects(
    generateBrief({
      apiKey: "test-key",
      date: "2026-09-20",
      specification: "SPEC",
      publishedNames: [],
      evidence: "PRIMARY RELEASE EVIDENCE",
      fetchImpl: fakeFetch,
    }),
    /thesis is 67 characters/i
  );
  assert.equal(calls.length, 3, "one research call plus at most two draft calls");
});

test("generateBrief deterministically pads a short readThrough without inventing facts", async () => {
  const calls = [];
  const fakeFetch = async (_url, options) => {
    calls.push(JSON.parse(options.body));
    const text = calls.length === 1
      ? "verified research dossier"
      : JSON.stringify({
          date: "2026-09-20",
          thesis: "A concise layout-safe thesis",
          readThrough: "x".repeat(198),
        });
    return {
      ok: true,
      json: async () => ({ candidates: [{ content: { parts: [{ text }] } }] }),
    };
  };

  const result = await generateBrief({
    apiKey: "test-key",
    date: "2026-09-20",
    specification: "SPEC",
    publishedNames: [],
    evidence: "PRIMARY RELEASE EVIDENCE",
    fetchImpl: fakeFetch,
  });

  assert.equal(calls.length, 2);
  assert.ok(result.readThrough.length >= 260 && result.readThrough.length <= 324);
  assert.match(result.readThrough, /teams should/i);
});

test("generateBrief fails before making a request when the free-tier key is missing", async () => {
  let called = false;
  await assert.rejects(
    generateBrief({
      apiKey: "",
      date: "2026-09-20",
      specification: "SPEC",
      publishedNames: [],
      evidence: "PRIMARY RELEASE EVIDENCE",
      fetchImpl: async () => {
        called = true;
      },
    }),
    /GEMINI_API_KEY/
  );
  assert.equal(called, false);
});

test("generateBrief identifies the model when the network request fails", async () => {
  await assert.rejects(
    generateBrief({
      apiKey: "test-key",
      date: "2026-09-20",
      specification: "SPEC",
      publishedNames: [],
      evidence: "PRIMARY RELEASE EVIDENCE",
      fetchImpl: async () => { throw new Error("offline"); },
    }),
    /gemini-3\.5-flash-lite request failed before a response: offline/
  );
});
