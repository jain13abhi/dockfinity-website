# Dockfinity evidence recovery TDD evidence

Date: 2026-09-22

## User journeys

1. A daily brief automatically expands to a larger verified repository catalog when the core catalog yields fewer than two releases.
2. A project covered previously remains eligible when it ships a distinct new release.
3. An exact release URL is never published twice.
4. Gemini receives explicit instructions to keep a distinct new version even when the project name appeared in an older brief.

## RED/GREEN checkpoints

| Guarantee | RED commit | GREEN commit |
|---|---|---|
| Staged verified fallback, new-version eligibility, and exact-release deduplication | `1d5dfdc` | `370886e` |
| Distinct new releases remain eligible during Gemini research | `795be13` | `71f1d5a` |

The RED command was:

```powershell
node --test --test-name-pattern=collectDockfinityEvidence scripts/public-evidence.test.mjs
```

It failed on all three missing behaviours. The same command passed 6/6 after the implementation. The research-prompt test likewise failed before the prompt change and passed afterward.

## Verification

| What is guaranteed | Command | Result |
|---|---|---|
| Complete Node and TypeScript suite remains green | `npm test` | PASS, 36/36 |
| Workflow modules retain strong coverage | `npm run test:coverage` | PASS, 95.77% lines and 88.89% functions overall; `public-evidence.mjs` has 98.27% lines and 86.67% functions |
| Changed workflow files meet lint and syntax rules | `npx --no-install eslint scripts/public-evidence.mjs scripts/research-brief.mjs scripts/public-evidence.test.mjs` plus `node --check` | PASS |
| Production application compiles and prerenders | `npm run build` | PASS, 44 static pages generated |
| The real 2026-09-22 evidence packet is viable before any Gemini call | evidence-only collector against GitHub's authenticated API | PASS, seven distinct unpublished stable releases found |

Full-repository lint still reports 16 pre-existing errors in unrelated TSX pages and components. None are in the changed workflow files. No lint suppression was added.

## Operational behavior

- The core catalog is checked first.
- Fallback repositories are contacted only when fewer than two core candidates remain.
- GitHub calls are bounded to eight concurrent requests.
- At most eight of the freshest candidates enter Gemini, limiting prompt size.
- Stable releases must remain inside the existing seven-day window.
- Drafts, prereleases, inaccessible evidence, and exact release URLs already published still fail closed.
