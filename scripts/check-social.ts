/**
 * The caption rules, exercised.
 *
 *   npx tsx scripts/check-social.ts
 *
 * Every case below is a caption that would otherwise have failed at posting
 * time, on a morning, in public. The two that cost real money are the X length
 * and the X link — a post carrying a link is billed at thirteen times a plain
 * one, every day, for an address that belongs in the profile.
 */
import {
  validateDiscoveryBrief,
  SOCIAL_REQUIRED_FROM,
  REQUIRED_DISCLAIMER,
  type DiscoveryBrief,
  type SocialCaptions,
} from "../src/lib/discovery.ts";

const CAPTIONS: SocialCaptions = {
  linkedin: "Agent workflows are absorbing infrastructure boundaries.",
  instagram: "Gemini CLI moves more security policy into the agent runtime.",
  x: "Agents are absorbing infrastructure boundaries. Source: GitHub, Product Hunt.",
  hashtags: ["#AI", "#DeveloperTools"],
};

/** The smallest brief the rest of the validator accepts, so only captions are on trial. */
const BASE: DiscoveryBrief = {
  date: SOCIAL_REQUIRED_FROM,
  title: "A brief that exists only to carry these captions",
  summary: "Enough of a brief for the validator to reach the caption rules.",
  thesis: "Agent workflows are absorbing infrastructure boundaries.",
  accentPhrase: "absorbing infrastructure boundaries",
  sections: ["TOOLING"],
  items: [
    {
      name: "Gemini CLI",
      kind: "tooling",
      version: "v0.60.0",
      releaseDate: "2026-09-15",
      licence: "Apache-2.0",
      platform: "Ubuntu 20.04+",
      repoUrl: "https://github.com/google-gemini/gemini-cli",
      releaseUrl: "https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0",
      what: "Hardens the boundaries an agent runtime enforces.",
      whyDifferent: "Security policy moves into the runtime rather than the prompt.",
      isLead: true,
      source: "Source: GitHub, 15 Sep 2026 - https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0",
    },
  ],
  readThrough: "Teams gain less integration work and inherit more concentrated trust boundaries.",
  sources: {
    attribution: "GitHub, 15 Sep 2026",
    surveyDate: SOCIAL_REQUIRED_FROM,
    // Taken from the validator rather than retyped: it is fixed wording, and a
    // copy here would drift the first time the real one is edited.
    disclaimer: REQUIRED_DISCLAIMER,
  },
};

const withCaptions = (
  over: Partial<SocialCaptions> | null,
  date = SOCIAL_REQUIRED_FROM
): DiscoveryBrief => {
  const brief = structuredClone(BASE);
  brief.date = date;
  if (over !== null) brief.social = { ...structuredClone(CAPTIONS), ...over };
  return brief;
};

const CASES: Array<[name: string, brief: DiscoveryBrief, accepted: boolean]> = [
  ["a brief older than the cutoff needs none", withCaptions(null, "2026-09-16"), true],
  ["a brief from the cutoff must carry them", withCaptions(null), false],
  ["all four present", withCaptions({}), true],
  ["X over 280 characters", withCaptions({ x: "a".repeat(281) }), false],
  ["X carrying a bare domain", withCaptions({ x: "Read more at dockfinity.com today." }), false],
  ["X carrying a full URL", withCaptions({ x: "See https://dockfinity.com for more." }), false],
  ["LinkedIn over 3000 characters", withCaptions({ linkedin: "a".repeat(3001) }), false],
  ["Instagram over 2200 characters", withCaptions({ instagram: "a".repeat(2201) }), false],
  ["a caption that is only spaces", withCaptions({ linkedin: "   " }), false],
  ["a hashtag with no #", withCaptions({ hashtags: ["AI"] }), false],
  ["a hashtag with a space in it", withCaptions({ hashtags: ["#Developer Tools"] }), false],
  ["no hashtags at all", withCaptions({ hashtags: [] }), false],
];

let wrong = 0;

for (const [name, brief, shouldPass] of CASES) {
  let passed = true;
  try {
    validateDiscoveryBrief(brief, "check-social.json");
  } catch {
    passed = false;
  }
  const correct = passed === shouldPass;
  if (!correct) wrong += 1;
  console.log(
    `${correct ? "ok  " : "FAIL"}  ${name.padEnd(38)} ${passed ? "accepted" : "rejected"}` +
      `${correct ? "" : `  (expected ${shouldPass ? "accepted" : "rejected"})`}`
  );
}

if (wrong > 0) {
  console.error(`\n${wrong} case(s) did not behave as intended.`);
  process.exit(1);
}
console.log(`\ncaptions: all ${CASES.length} cases behave as intended`);
