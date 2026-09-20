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

`npm run test:coverage` reported 96.34% line, 89.80% branch and 92.31%
function coverage for the tested runtime modules. The production Next.js build
completed successfully. Changed scripts passed ESLint.

The first controlled GitHub request proved that Google no longer exposes
`gemini-2.5-flash` to new API users. A regression test was changed first and
failed against that default; the runtime then moved the grounded research pass
to `gemini-2.5-flash-lite`, which Google still documents with free-tier Google
Search grounding. The separate schema pass continues to use Flash-Lite.

Implementation checkpoint: `0724471` (`feat: add Gemini research runtime`).
