import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const specification = fs.readFileSync("public/brief-spec.txt", "utf-8");

test("production filing contract is Gemini-to-validator, not a Gmail draft", () => {
  const filing = specification.slice(specification.indexOf("9. FILING"));
  assert.match(filing, /research: YYYY-MM-DD/);
  assert.match(filing, /Gemini API/);
  assert.doesNotMatch(filing, /Create a Gmail draft/i);
  assert.doesNotMatch(filing, /DO NOT TOUCH GITHUB/);
});
