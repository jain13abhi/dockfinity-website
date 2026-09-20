# Gemini content runtime — TDD evidence

Date: 20 September 2026

## User journeys

- A dated `research:` issue produces a current Dockfinity discovery brief
  without ChatGPT, Gmail or interactive connectors.
- Gemini performs grounded research separately from schema-constrained drafting.
- Invalid, blocked, empty, quota-exhausted or unreachable model responses
  publish nothing.
- Generated JSON and manual `brief:` recovery JSON enter the same existing
  validator, URL checker, deterministic renderer and commit path.

## Evidence

| Guarantee | RED | GREEN |
|---|---|---|
| Gemini adapter and two-pass contract | New tests failed because `gemini-brief-lib.mjs` was absent | `npm test`: all 14 tests passed |
| Generated-file input with manual fallback | New tests failed because `publish-brief-input.mjs` was absent | Generated, manual and missing-input cases passed |
| Validator loads across ESM/tsx module shapes | Reproduced named-export runtime failure | Native ESM, CommonJS shape and missing-export tests passed |
| Production filing specification names the new route | Filing-contract test failed on the former Gmail instructions | Filing-contract test passed after section 9 changed |

`npm run test:coverage` reported 97.36% line, 77.14% branch and 84.21%
function coverage for the tested runtime modules. The production Next.js build
completed successfully. Changed scripts passed ESLint.

The first two controlled GitHub requests proved that Google no longer exposes
either Gemini 2.5 Flash model to new API users. New tests were written first
for a no-paid-search evidence boundary and failed against the old defaults.
The runtime now gathers primary GitHub release evidence itself and uses the
current free `gemini-3.5-flash-lite` for separate analysis and schema passes.
The collector was also exercised against live GitHub data and returned 13
eligible release records for the target date.

Implementation checkpoint: `0724471` (`feat: add Gemini research runtime`).
