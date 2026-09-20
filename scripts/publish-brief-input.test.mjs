import assert from "node:assert/strict";
import test from "node:test";

import { readBriefInput } from "./publish-brief-input.mjs";

test("readBriefInput reads generated JSON from BRIEF_FILE", () => {
  const reads = [];
  const body = readBriefInput({
    env: { BRIEF_FILE: "generated.json", BRIEF_BODY: "manual" },
    readFile: (file, encoding) => {
      reads.push({ file, encoding });
      return '{"date":"2026-09-20"}';
    },
  });

  assert.equal(body, '{"date":"2026-09-20"}');
  assert.deepEqual(reads, [{ file: "generated.json", encoding: "utf-8" }]);
});

test("readBriefInput preserves the manual issue-body route", () => {
  assert.equal(
    readBriefInput({ env: { BRIEF_BODY: "manual issue body" }, readFile: () => assert.fail() }),
    "manual issue body"
  );
});

test("readBriefInput fails clearly when neither input exists", () => {
  assert.throws(
    () => readBriefInput({ env: {}, readFile: () => assert.fail() }),
    /issue body is empty/i
  );
});
