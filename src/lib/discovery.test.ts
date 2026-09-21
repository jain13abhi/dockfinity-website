import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

import { validateDiscoveryBrief, type DiscoveryBrief } from "./discovery";

function publishedFixture(): DiscoveryBrief {
  return JSON.parse(
    fs.readFileSync(
      path.join(process.cwd(), "content", "discovery", "2026-09-18.json"),
      "utf-8"
    )
  ) as DiscoveryBrief;
}

test("GitHub release tags may contain a slash", () => {
  const brief = publishedFixture();
  const tooling = brief.items.find((item) => item.kind === "tooling");
  assert.ok(tooling);
  tooling.releaseUrl =
    "https://github.com/langchain-ai/langgraphjs/releases/tag/%40langchain/vue%401.1.1";

  assert.doesNotThrow(() => validateDiscoveryBrief(brief, "slash-tag.json"));
});

test("the GitHub releases index is not an exact release source", () => {
  const brief = publishedFixture();
  const tooling = brief.items.find((item) => item.kind === "tooling");
  assert.ok(tooling);
  tooling.releaseUrl = "https://github.com/langchain-ai/langgraphjs/releases";

  assert.throws(
    () => validateDiscoveryBrief(brief, "releases-index.json"),
    /must cite the \/releases\/tag\/ page/
  );
});

test("briefs from 22 September carry Facebook, Threads and Google Business Profile copy", () => {
  const brief = publishedFixture();
  brief.date = "2026-09-22";

  assert.throws(
    () => validateDiscoveryBrief(brief, "2026-09-22.json"),
    /social\.facebook/
  );

  Object.assign(brief.social!, {
    facebook: "A focused Facebook update for technology teams.",
    threads: "A concise Threads update for builders.",
    googleBusiness: "A concise local business update for prospective clients.",
  });
  assert.doesNotThrow(() => validateDiscoveryBrief(brief, "2026-09-22.json"));
});

test("Google Business Profile copy uses the 1500-character house limit", () => {
  const brief = publishedFixture();
  brief.date = "2026-09-22";
  Object.assign(brief.social!, {
    facebook: "Facebook copy.",
    threads: "Threads copy.",
    googleBusiness: "x".repeat(1501),
  });

  assert.throws(
    () => validateDiscoveryBrief(brief, "2026-09-22.json"),
    /googleBusiness caption is 1501 characters and the limit is 1500/
  );
});
