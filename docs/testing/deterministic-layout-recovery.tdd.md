# Deterministic layout recovery — TDD evidence

Source: first-attempt failures on 25, 28 and 29 September 2026.

## User journey

As the daily brief operator, I want safe presentational defects to be normalized
before rendering, so valid research publishes on the first workflow without
changing facts, sources or the fixed visual design.

## Evidence

| Guarantee | Test | Type | Result |
| --- | --- | --- | --- |
| Invalid accent copy becomes an exact unique three-to-five-word thesis span | `scripts/gemini-brief-lib.test.mjs` | Unit | PASS |
| Valid accent copy remains unchanged | `scripts/gemini-brief-lib.test.mjs` | Unit | PASS |
| Read-through copy uses a conservative 260–300-character fit window | `scripts/gemini-brief-lib.test.mjs` | Integration | PASS |
| Renderer rejection is returned to the existing bounded correction pass | `scripts/renderer-preflight.test.mjs` | Integration | PASS |

RED: `node --test scripts/gemini-brief-lib.test.mjs` failed because deterministic layout normalization did not exist.

GREEN: full `npm test` passed 39/39 tests (35 script tests and 4 TypeScript tests).

Normalization changes presentation fields only. It does not alter researched
items, versions, dates, licences, pricing or source URLs.
