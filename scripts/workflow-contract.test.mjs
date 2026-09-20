import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const workflow = fs.readFileSync(".github/workflows/publish-brief.yml", "utf-8");

test("a research issue consumes Gemini only when first opened", () => {
  assert.match(workflow, /github\.event\.action == 'opened'/);
  assert.match(workflow, /startsWith\(github\.event\.issue\.title, 'brief:'\)/);
});
