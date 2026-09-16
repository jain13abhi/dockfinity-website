/**
 * Where this business actually is, on the platforms it is actually on.
 *
 * One list, read by two things that must never disagree: the row of links in
 * the footer, and the `sameAs` array in the Organization schema. `sameAs` is
 * how a search engine learns that a profile and this website are the same
 * business; a footer link without it is a link Google reads as a stranger's.
 *
 * AN ENTRY WITH NO `href` IS NOT RENDERED AND IS NOT DECLARED. That is
 * deliberate: a dead profile link is worse than an absent one, both for a
 * visitor and for the schema, which asserts that the address is ours. Leave
 * the entry here with its href null so it is obvious what is still missing,
 * and fill it in when the account exists and has been opened and checked.
 */

export interface SocialAccount {
  /** Shown in the tooltip and read out by a screen reader. */
  name: string;
  /** The profile. Null until the account exists — see the note above. */
  href: string | null;
  /**
   * The platform's own colour, revealed on hover. X and Threads have no
   * colour of their own - they are black on light and white on dark - so they
   * carry the theme's foreground token rather than a hex that would vanish on
   * one of the two.
   */
  colour: string;
  /** Key into the icon set in components/SocialLinks.tsx. */
  icon: "instagram" | "facebook" | "linkedin" | "threads" | "youtube" | "x" | "google";
}

export const SOCIAL_ACCOUNTS: SocialAccount[] = [
  // Nothing here exists yet. The entries are listed so that what is missing
  // stays visible, and so that adding one is a single line rather than a
  // component to write.
  { name: "LinkedIn", href: null, colour: "#0A66C2", icon: "linkedin" },
  { name: "Instagram", href: null, colour: "#E4405F", icon: "instagram" },
  { name: "X", href: null, colour: "hsl(var(--foreground))", icon: "x" },
  { name: "Threads", href: null, colour: "hsl(var(--foreground))", icon: "threads" },
  { name: "YouTube", href: null, colour: "#FF0000", icon: "youtube" },
];

/** The ones that exist, in the order above. */
export const liveAccounts = (): SocialAccount[] =>
  SOCIAL_ACCOUNTS.filter((a): a is SocialAccount & { href: string } => Boolean(a.href));

/** For the Organization schema. Only addresses that resolve. */
export const sameAs = (): string[] => liveAccounts().map((a) => a.href as string);
