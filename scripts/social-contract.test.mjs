import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("Telegram exposes Facebook, Threads and Google Business Profile as separate copy blocks", () => {
  const notifier = fs.readFileSync("scripts/notify-telegram.mjs", "utf-8");
  assert.match(notifier, /Facebook/);
  assert.match(notifier, /Threads/);
  assert.match(notifier, /Google Business Profile/);
  assert.match(notifier, /Learn more/);
  assert.match(notifier, /social\.googleBusiness/);
});
