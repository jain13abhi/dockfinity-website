import fs from "node:fs";

export function readBriefInput({ env = process.env, readFile = fs.readFileSync } = {}) {
  if (env.BRIEF_FILE?.trim()) {
    return readFile(env.BRIEF_FILE, "utf-8");
  }
  if (env.BRIEF_BODY?.trim()) return env.BRIEF_BODY;
  throw new Error(
    "The issue body is empty. Paste the section 6 JSON into it, or provide BRIEF_FILE."
  );
}
