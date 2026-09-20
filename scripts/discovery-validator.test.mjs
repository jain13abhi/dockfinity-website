import assert from "node:assert/strict";
import test from "node:test";

import { getDiscoveryValidator } from "./discovery-validator.mjs";

test("gets the validator from a native ESM module", () => {
  const validator = () => "esm";
  assert.equal(getDiscoveryValidator({ validateDiscoveryBrief: validator }), validator);
});

test("gets the validator from the CommonJS shape emitted by tsx", () => {
  const validator = () => "commonjs";
  assert.equal(getDiscoveryValidator({ default: { validateDiscoveryBrief: validator } }), validator);
});

test("fails clearly if the site validator cannot be loaded", () => {
  assert.throws(() => getDiscoveryValidator({}), /validateDiscoveryBrief/);
});
