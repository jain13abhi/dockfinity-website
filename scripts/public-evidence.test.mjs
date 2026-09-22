import assert from "node:assert/strict";
import test from "node:test";

import { collectDockfinityEvidence } from "./public-evidence.mjs";

function releaseFetch({ empty = new Set(), tags = new Map() } = {}) {
  return async (url) => {
    const repository = url.match(/repos\/([^/]+\/[^/]+)/)?.[1];
    if (url.includes("/releases?per_page=")) {
      if (empty.has(repository)) return { ok: true, json: async () => [] };
      const tag = tags.get(repository) ?? "v1.2.3";
      return {
        ok: true,
        json: async () => [{
          tag_name: tag,
          name: `Release ${tag}`,
          html_url: `https://github.com/${repository}/releases/tag/${tag}`,
          published_at: "2026-09-19T12:00:00Z",
          draft: false,
          prerelease: false,
          body: "Shipped a tested feature.",
          assets: [],
        }],
      };
    }
    const name = repository?.split("/")[1] ?? "unknown";
    return {
      ok: true,
      json: async () => ({
        name: name[0].toUpperCase() + name.slice(1),
        full_name: repository,
        html_url: `https://github.com/${repository}`,
        description: "Developer tool",
        homepage: "",
        license: { spdx_id: "Apache-2.0" },
        topics: ["ai"],
      }),
    };
  };
}

test("collectDockfinityEvidence keeps one current primary release per repository", async () => {
  const evidence = JSON.parse(await collectDockfinityEvidence({
    date: "2026-09-20",
    repositories: ["org/alpha", "org/beta"],
    fallbackRepositories: [],
    fetchImpl: releaseFetch(),
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
      fallbackRepositories: [],
      fetchImpl: async () => ({ ok: true, json: async () => [] }),
    }),
    /fewer than two/i
  );
});

test("collectDockfinityEvidence expands to verified fallback repositories", async () => {
  const evidence = JSON.parse(await collectDockfinityEvidence({
    date: "2026-09-20",
    repositories: ["org/empty"],
    fallbackRepositories: ["org/alpha", "org/beta"],
    fetchImpl: releaseFetch({ empty: new Set(["org/empty"]) }),
  }));

  assert.deepEqual(evidence.map((item) => item.repository), ["org/alpha", "org/beta"]);
});

test("collectDockfinityEvidence allows a new release from a previously covered project", async () => {
  const evidence = JSON.parse(await collectDockfinityEvidence({
    date: "2026-09-20",
    repositories: ["org/alpha", "org/beta"],
    fallbackRepositories: [],
    publishedNames: ["Alpha", "Beta"],
    publishedReleaseUrls: [
      "https://github.com/org/alpha/releases/tag/v1.2.2",
      "https://github.com/org/beta/releases/tag/v1.2.2",
    ],
    fetchImpl: releaseFetch(),
  }));

  assert.equal(evidence.length, 2);
  assert.ok(evidence.every((item) => item.release.tag === "v1.2.3"));
});

test("collectDockfinityEvidence never republishes an exact release URL", async () => {
  await assert.rejects(
    collectDockfinityEvidence({
      date: "2026-09-20",
      repositories: ["org/alpha", "org/beta"],
      fallbackRepositories: [],
      publishedReleaseUrls: [
        "https://github.com/org/alpha/releases/tag/v1.2.3",
        "https://github.com/org/beta/releases/tag/v1.2.3",
      ],
      fetchImpl: releaseFetch(),
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
    if (url.includes("/releases?per_page=")) {
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
    fallbackRepositories: [],
    fetchImpl,
    sleepImpl: async (milliseconds) => sleeps.push(milliseconds),
  }));

  assert.equal(evidence.length, 2);
  assert.equal(sleeps.length, 4, "both release and metadata calls retry once per repository");
});
