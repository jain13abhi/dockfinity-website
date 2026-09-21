# Self-healing publication TDD evidence

## User journeys

1. Transient Gemini and GitHub evidence failures retry within one run.
2. A rejected draft is repaired from the exact rejected JSON and exact local error.
3. Candidate copy must pass the existing site validator and immutable renderer before publication.
4. Infrastructure failures are not sent to Gemini and remain visible in Actions and Telegram.

## Evidence

| Behaviour | RED | GREEN guarantee |
|---|---|---|
| Gemini retry | Network and 429 tests failed before implementation | Network, 408, 429 and 5xx retry at most three request attempts. |
| Evidence retry | Simulated GitHub 503 produced fewer than two releases | Release and metadata calls retry transient failures only. |
| Exact repair | Correction prompt omitted the rejected overlong draft | The bounded correction call receives both the draft and the authoritative error. |
| Renderer gate | Renderer preflight module and candidate-file CLI were absent | Candidate JSON passes the pinned production renderer before publication. |
| Failure boundary | Non-correctable validation was not available | Infrastructure failures stop without consuming a correction draft. |

`npm test` passed 28/28 tests across the Node and TypeScript suites. `npm run test:coverage` passed with 94.80% line and 82.76% function coverage for the Node workflow modules. Lint, the production build, workflow YAML validation and the diff check passed. The registry audit endpoint returned an error rather than an advisory result; no dependency files were changed by this patch. Hosted PR checks and the staged-secret scan remain delivery gates.
