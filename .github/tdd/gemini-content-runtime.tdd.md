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
| Fixed-panel read-through fit | Live run `35504714197` reached the renderer but failed with a 340 px panel against its 355 px minimum; the new regression test then failed because no length contract existed | The schema description and prompt now require 260–324 characters, and the adapter retries one rejected draft with the exact deterministic failure |
| Fixed two-line thesis header | Live run `35506527470` failed closed when a 62-character thesis wrapped to three lines; the retry test failed because only read-through length was guarded | The same pre-render correction loop now rejects thesis copy above the renderer's 58-character ceiling |

`npm run test:coverage` reported 96.08% line, 74.70% branch and 85.00%
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
