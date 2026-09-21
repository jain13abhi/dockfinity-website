# Manual social package — TDD evidence

## Scope

Expand the Dockfinity daily Telegram package with Facebook, Threads and Google
Business Profile copy without changing the fixed slide renderer or invalidating
published briefs.

## Red

The new schema, validator, specification and Telegram contract tests failed
before implementation because the three destinations did not exist.

## Green

- Facebook, Threads and `googleBusiness` are required for briefs dated
  2026-09-22 onward.
- Published briefs before that date remain valid.
- Limits are 2,200, 500 and 1,500 characters respectively.
- Telegram sends each as a separate copy-ready message. The Google Business
  message omits hashtags and displays the daily brief URL as the manual
  **Learn more** button target.
- The renderer specification and website specification are identical.

## Verification

- `npm test`: 29/29 script tests and 4/4 library tests passing.
- Changed-file lint: passing.
- `npm run build`: passing.
- Full-repository lint remains blocked by 16 pre-existing errors in unrelated
  policy and navigation files.
- `git diff --check`: passing.
