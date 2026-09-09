/**
 * Publishes a daily discovery brief from a GitHub issue body.
 *
 * Reads the issue body from BRIEF_BODY, extracts the JSON, validates it with
 * the site's own validator, and writes content/discovery/<date>.json.
 *
 * Prints a short human-readable result to stdout, which the workflow posts
 * back as an issue comment. Exits non-zero on any failure, so a bad brief is
 * reported on the issue and never reaches the repository.
 */

import fs from "node:fs";
import path from "node:path";
import { validateDiscoveryBrief } from "../src/lib/discovery.ts";

const CONTENT_DIR = path.join(process.cwd(), "content", "discovery");

/** Pull the JSON out of a fenced code block, or fall back to the whole body. */
function extractJson(body) {
  const fenced = body.match(/```(?:json)?\s*\n([\s\S]*?)\n```/);
  const candidate = (fenced ? fenced[1] : body).trim();

  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start === -1 || end === -1 || end < start) {
    throw new Error(
      "No JSON object found in the issue. Paste the section 7 JSON block, " +
        "either inside a ```json fence or on its own."
    );
  }

  return candidate.slice(start, end + 1);
}

function main() {
  const body = process.env.BRIEF_BODY;
  if (!body || !body.trim()) {
    throw new Error("The issue body is empty. Paste the section 7 JSON into it.");
  }

  const raw = extractJson(body);

  let brief;
  try {
    brief = JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `The JSON could not be parsed, so nothing was written.\n\n${err.message}`
    );
  }

  // The site's own validator — the same one that runs at build time.
  validateDiscoveryBrief(brief, `${brief.date}.json`);

  const filePath = path.join(CONTENT_DIR, `${brief.date}.json`);
  const existed = fs.existsSync(filePath);

  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(brief, null, 2)}\n`, "utf-8");

  const relative = path.relative(process.cwd(), filePath).split(path.sep).join("/");

  console.log(`file=${relative}`);
  console.log(`date=${brief.date}`);
  console.log(`title=${brief.title}`);
  console.log(`action=${existed ? "replaced" : "added"}`);
}

try {
  main();
} catch (err) {
  console.error(err.message);
  process.exit(1);
}
