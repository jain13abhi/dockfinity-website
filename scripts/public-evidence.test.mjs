import assert from "node:assert/strict";
import test from "node:test";

import { collectDockfinityEvidence } from "./public-evidence.mjs";

test("collectDockfinityEvidence keeps one current primary release per repository", async () => {
  const fetchImpl = async (url) => {
    if (url.endsWith("/releases?per_page=5")) {
      return {
        ok: true,
        json: async () => [{
          tag_name: "v1.2.3",
          name: "Release 1.2.3",
          html_url: url.replace("api.github.com/repos", "github.com").replace("/releases?per_page=5", "/releases/tag/v1.2.3"),
          published_at: "2026-09-19T12:00:00Z",
          draft: false,
          prerelease: false,
          body: "Shipped a tested feature.",
          assets: [],
        }],
      };
    }
    return {
      ok: true,
      json: async () => ({
        name: url.includes("alpha") ? "Alpha" : "Beta",
        full_name: url.includes("alpha") ? "org/alpha" : "org/beta",
        html_url: url.replace("api.github.com/repos", "github.com"),
        description: "Developer tool",
        homepage: "",
        license: { spdx_id: "Apache-2.0" },
        topics: ["ai"],
      }),
    };
  };

  const evidence = JSON.parse(await collectDockfinityEvidence({
    date: "2026-09-20",
    repositories: ["org/alpha", "org/beta"],
    fetchImpl,
  }));

  assert.equal(evidence.length, 2);
  assert.equal(evidence[0].release.tag, "v1.2.3");
  assert.match(evidence[0].release.url, /github\.com/);
  assert.equal(evidence[0].licence, "Apache-2.0");
});

test("collectDockfinityEvidence fails closed with fewer than two eligible releases", async () => {
  await assert.rejects(
    collectDockfinityEvidence({
      date: "2026-09-20",
      repositories: ["org/empty"],
      fetchImpl: async () => ({ ok: true, json: async () => [] }),
    }),
    /fewer than two/i
  );
});

test("collectDockfinityEvidence retries transient GitHub API failures", async () => {
  const attempts = new Map();
  const sleeps = [];
  const fetchImpl = async (url) => {
    const attempt = (attempts.get(url) ?? 0) + 1;
    attempts.set(url, attempt);
    if (attempt === 1) {
      return { ok: false, status: 503, json: async () => ({}) };
    }
    if (url.endsWith("/releases?per_page=5")) {
      return {
        ok: true,
        status: 200,
        json: async () => [{
          tag_name: "v1.2.3",
          html_url: url.replace("api.github.com/repos", "github.com")
            .replace("/releases?per_page=5", "/releases/tag/v1.2.3"),
          published_at: "2026-09-20T12:00:00Z",
          draft: false,
          prerelease: false,
          body: "Shipped.",
          assets: [],
        }],
      };
    }
    return {
      ok: true,
      status: 200,
      json: async () => ({
        name: url.includes("alpha") ? "Alpha" : "Beta",
        full_name: url.includes("alpha") ? "org/alpha" : "org/beta",
        html_url: url.replace("api.github.com/repos", "github.com"),
        license: { spdx_id: "MIT" },
      }),
    };
  };

  const evidence = JSON.parse(await collectDockfinityEvidence({
    date: "2026-09-21",
    repositories: ["org/alpha", "org/beta"],
    fetchImpl,
    sleepImpl: async (milliseconds) => sleeps.push(milliseconds),
  }));

  assert.equal(evidence.length, 2);
  assert.equal(sleeps.length, 4, "both release and metadata calls retry once per repository");
});
