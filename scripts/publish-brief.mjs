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
import { checkUrls, describe } from "./check-urls.mjs";
import { loadDiscoveryValidator } from "./discovery-validator.mjs";
import { readBriefInput } from "./publish-brief-input.mjs";

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

async function main() {
  const body = readBriefInput();
  const validateDiscoveryBrief = await loadDiscoveryValidator();

  const raw = extractJson(body);

  let brief;
  try {
    brief = JSON.parse(raw);
  } catch (err) {
    throw new Error(
      `The JSON could not be parsed, so nothing was written.\n\n${err.message}`
    );
  }

  // The run sometimes writes sources.attribution as a list and sometimes as
  // one string. Both say the same thing; the page renders a paragraph, so the
  // list is joined here rather than teaching the schema two shapes.
  if (Array.isArray(brief.sources?.attribution)) {
    brief.sources.attribution = brief.sources.attribution.join(" | ");
  }

  // The site's own validator — the same one that runs at build time.
  validateDiscoveryBrief(brief, `${brief.date}.json`);

  // And the addresses it cites, which the validator can only check the shape
  // of. On 9 September a release tag with a perfectly valid shape reached a
  // slide and returned 404.
  const urls = await checkUrls(brief);
  if (urls.dead.length > 0) {
    throw new Error(`The brief cites addresses that do not exist.

${describe(urls)}`);
  }
  if (urls.unverified.length > 0) {
    console.error(describe(urls));
  }

  const filePath = path.join(CONTENT_DIR, `${brief.date}.json`);
  const existed = fs.existsSync(filePath);
  const contents = `${JSON.stringify(brief, null, 2)}\n`;

  // Replacing a brief that is already published is a correction, and a
  // correction is something somebody decided to make. It must say so.
  //
  // Ported from Metal Dock, where on 19 September 2026 the day's brief
  // published at 10:11 and a second run at 11:01 quietly overwrote it with
  // a thinner one. Both were valid, both passed every check, and the only
  // outward sign was a second Telegram message that looked like the first.
  if (existed && fs.readFileSync(filePath, "utf-8") !== contents) {
    if (!/^\s*CORRECTION:/m.test(body)) {
      throw new Error(
        `${brief.date} is already published and this differs from what is ` +
          `on the site, so nothing was written.\n\n` +
          `If this is a deliberate correction, put a line beginning ` +
          `"CORRECTION:" in the issue, outside the JSON fence, saying what ` +
          `is being corrected and why.\n\n` +
          `If you did not mean to file this date twice, the brief on the ` +
          `site is the one that stands and there is nothing to do.`
      );
    }
  }

  fs.mkdirSync(CONTENT_DIR, { recursive: true });
  fs.writeFileSync(filePath, contents, "utf-8");

  const relative = path.relative(process.cwd(), filePath).split(path.sep).join("/");

  console.log(`file=${relative}`);
  console.log(`date=${brief.date}`);
  console.log(`title=${brief.title}`);
  console.log(`action=${existed ? "replaced" : "added"}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
