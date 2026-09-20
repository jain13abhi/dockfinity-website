/**
 * Generates one Dockfinity discovery brief with the official Gemini API.
 *
 * Public GitHub release APIs collect primary evidence without a paid search
 * tool. Gemini 3.5 Flash-Lite analyses that packet, then a separate structured
 * pass produces the website JSON. The validator remains the final authority.
 */

import fs from "node:fs";
import path from "node:path";

import { loadDiscoveryValidator } from "./discovery-validator.mjs";
import { generateBrief, parseResearchIssueTitle } from "./gemini-brief-lib.mjs";
import { collectDockfinityEvidence } from "./public-evidence.mjs";

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

function publishedItemNames(contentDirectory) {
  if (!fs.existsSync(contentDirectory)) return [];
  const names = new Set();
  for (const filename of fs.readdirSync(contentDirectory)) {
    if (!filename.endsWith(".json")) continue;
    const brief = JSON.parse(fs.readFileSync(path.join(contentDirectory, filename), "utf-8"));
    for (const item of brief.items ?? []) {
      if (item?.name) names.add(item.name);
    }
  }
  return [...names].sort((a, b) => a.localeCompare(b));
}

async function main() {
  const validateDiscoveryBrief = await loadDiscoveryValidator();
  const title = process.env.RESEARCH_TITLE;
  const date = option("--date", title ? parseResearchIssueTitle(title) : undefined);
  if (!date) throw new Error("Pass --date YYYY-MM-DD or set RESEARCH_TITLE.");
  parseResearchIssueTitle(`research: ${date}`);

  const output = option("--out", "generated-brief.json");
  const root = process.cwd();
  const specification = fs.readFileSync(path.join(root, "public", "brief-spec.txt"), "utf-8");
  const publishedNames = publishedItemNames(path.join(root, "content", "discovery"));
  const evidence = await collectDockfinityEvidence({
    date,
    githubToken: process.env.GITHUB_TOKEN,
    publishedNames,
  });

  const brief = await generateBrief({
    apiKey: process.env.GEMINI_API_KEY,
    date,
    specification,
    publishedNames,
    evidence,
    researchModel: process.env.GEMINI_RESEARCH_MODEL || undefined,
    draftModel: process.env.GEMINI_DRAFT_MODEL || undefined,
  });

  validateDiscoveryBrief(brief, `${date}.json`);
  fs.writeFileSync(output, `${JSON.stringify(brief, null, 2)}\n`, "utf-8");
  console.log(`generated=${output}`);
  console.log(`date=${date}`);
  console.log(`items=${brief.items.length}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
