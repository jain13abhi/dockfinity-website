import fs from "fs";
import path from "path";

/**
 * =======================================================================
 * DOCKFINITY — DAILY BUILD & MARKET DISCOVERY SCHEMA & PIPELINE
 * =======================================================================
 *
 * Dropping a structured JSON file named `YYYY-MM-DD.json` into
 * `/content/discovery/` automatically publishes it across:
 *   - `/discovery`            latest brief + reverse-chronological archive
 *   - `/discovery/[date]`     individual permalink with Article schema
 *   - `/discovery/rss.xml`    RSS 2.0 feed
 *   - `/sitemap.xml`          auto-indexed
 *
 * -----------------------------------------------------------------------
 * EDITORIAL POLICY — VERIFIED RELEASES ONLY
 *
 * A discovery file is valid only if every version, release date, licence
 * and repository URL was read from the project's own primary source. No
 * inferred versions, no assumed licences, no reconstructed URLs. Where a
 * licence could not be confirmed, the string is exactly
 * "licence not confirmed" — never a guess.
 *
 * This audience checks a version number in ten seconds. A wrong one costs
 * more than a missing one.
 *
 * -----------------------------------------------------------------------
 * CONFIDENTIALITY — THIS FILE PUBLISHES TO THE OPEN WEB
 *
 * The internal brief carries material that must never reach this schema:
 * the two-week build assessment, the shipped counter, which tool is being
 * adopted, what is planned, which credits are being claimed, and our own
 * pricing. `validateDiscoveryBrief` fails the build if any of it appears.
 * =======================================================================
 */

/** What kind of item this is. Drives which fields are required. */
export type DiscoveryItemKind = "tooling" | "teardown" | "credits" | "pricing";

/** A single released tool, launched product, credit programme or pricing move. */
export interface DiscoveryItem {
  /** Display name of the tool, product or programme */
  name: string;
  /** Item classification — determines required fields */
  kind: DiscoveryItemKind;
  /** Semantic version. Required when kind is "tooling"; omitted otherwise. */
  version?: string;
  /** ISO date of this version's own release (YYYY-MM-DD) */
  releaseDate?: string;
  /**
   * Licence read from the repository's LICENSE file or sidebar, or the exact
   * string "licence not confirmed". Never inferred from ecosystem or style.
   */
  licence?: string;
  /** OS or runtime support exactly as the project states it */
  platform?: string;
  /** Repository root URL */
  repoUrl?: string;
  /** The /releases/tag/ URL for this exact version. Required for "tooling". */
  releaseUrl?: string;
  /** Product or programme page, for "teardown" and "credits" */
  productUrl?: string;
  /** The page the price was read from. Required whenever a price is printed. */
  priceUrl?: string;
  /** Public pricing as published, or omitted when no price is public */
  price?: string;
  /** One line on what it does */
  what: string;
  /** One line on why it differs from what already exists */
  whyDifferent?: string;
  /** True on exactly one item — the one the day's thesis rests on */
  isLead: boolean;
  /** "Source: NAME, D Mon YYYY - URL" — the page carrying the fact */
  source: string;
}

/** Sections that carried an item on a given day. */
export type DiscoverySection = "TOOLING" | "TEARDOWN" | "CREDITS" | "PRICING";

/** Complete document schema for one daily discovery brief. */
export interface DiscoveryBrief {
  /** ISO date, matches the filename (YYYY-MM-DD) */
  date: string;
  /** The day's thesis as a short headline */
  title: string;
  /** One or two sentences for meta tags and RSS */
  summary: string;
  /** The connecting thread, one sentence */
  thesis: string;
  /** Only the sections that actually carried an item today */
  sections: DiscoverySection[];
  /** The day's items, ranked */
  items: DiscoveryItem[];
  /** What this changes for a team building with these tools */
  readThrough: string;
  sources: {
    /** Every source used, with dates and page URLs */
    attribution: string;
    /** ISO date of the run */
    surveyDate: string;
    /** Fixed disclaimer string */
    disclaimer: string;
  };
}

const CONTENT_DIR = path.join(process.cwd(), "content", "discovery");

/**
 * Phrases that would mean internal material has leaked into a published file.
 *
 * Two groups:
 *   1. Confidential — capability roadmap, cost structure, the shipped counter,
 *      the build assessment. Publishing any of it is a commercial mistake.
 *   2. Method language — how the brief was produced. Correct in the internal
 *      brief, noise on a public page.
 *
 * Patterns match phrases rather than bare words so that legitimate technical
 * prose ("the runtime carries a clone of the context") does not fail a build.
 */
const FORBIDDEN_PATTERNS: { pattern: RegExp; reason: string }[] = [
  // 1 — confidential
  { pattern: /\bshipped\s+since\s+last\s+run\b/i, reason: "shipped counter is private" },
  { pattern: /\bTotal:\s*\d+\s*\/\s*25\b/i, reason: "shipped counter is private" },
  { pattern: /\b(?:could|can)\s+a\s+solo\s+(?:dev|developer)\b/i, reason: "two-week build assessment is internal" },
  { pattern: /\bin\s+under\s+two\s+weeks\b/i, reason: "two-week build assessment is internal" },
  { pattern: /\bunder\s+2\s+weeks\b/i, reason: "two-week build assessment is internal" },
  { pattern: /\bthe\s+hard\s+part\s+is\b/i, reason: "two-week build assessment is internal" },
  { pattern: /\bwe\s+(?:are|will be)\s+adopting\b/i, reason: "capability roadmap is internal" },
  { pattern: /\bwe\s+(?:are|will be)\s+claiming\b/i, reason: "cost structure is internal" },
  { pattern: /\bwe\s+plan\s+to\s+build\b/i, reason: "roadmap is internal" },
  { pattern: /\b(?:clone|rebuild)\s+(?:this|it|the\s+core)\b/i, reason: "never framed as something to copy" },

  // 2 — method language
  { pattern: /\bconfirmed\s+at\s+run\s+time\b/i, reason: "method language belongs in the internal brief" },
  { pattern: /\bsearches?\s+(?:run|were\s+run|returned)\b/i, reason: "method language belongs in the internal brief" },
  { pattern: /\brecomputed\b/i, reason: "method language belongs in the internal brief" },
  { pattern: /\bnot\s+publicly\s+verified\b/i, reason: "method language belongs in the internal brief" },
  { pattern: /\[UNVERIFIED\]/i, reason: "unverified items must not be published at all" },

  // 3 — authoring instructions leaking through the pipeline
  { pattern: /\brender\s+(?:this|it)\s+as\b/i, reason: "pipeline instruction leaked into content" },
  { pattern: /\bdo\s+not\s+(?:use|include|add|render|display)\b/i, reason: "pipeline instruction leaked into content" },
  { pattern: /\btreat\s+(?:this|it)\s+as\b/i, reason: "pipeline instruction leaked into content" },
];

const REQUIRED_DISCLAIMER =
  "Independent technology analysis published by Dockfinity. Every release, " +
  "version, licence and figure carries the primary source it was read from.";

const VALID_KINDS: DiscoveryItemKind[] = ["tooling", "teardown", "credits", "pricing"];
const VALID_SECTIONS: DiscoverySection[] = ["TOOLING", "TEARDOWN", "CREDITS", "PRICING"];

const RELEASE_TAG_URL = /^https:\/\/github\.com\/[^/]+\/[^/]+\/releases\/tag\/[^/]+$/;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/**
 * Fails the build on any file that would publish internal material, an
 * unverifiable identifier, or a structurally invalid document.
 *
 * Every error names the file, the field and the offending text, so a bad
 * commit is diagnosable from the build log alone.
 */
export function validateDiscoveryBrief(brief: DiscoveryBrief, filename?: string): void {
  const file = filename ?? `${brief.date}.json`;
  const fail = (field: string, message: string, text?: string): never => {
    throw new Error(
      `[Discovery Validation Error] ${message}\n` +
        `  File:  ${file}\n` +
        `  Field: ${field}` +
        (text ? `\n  Text:  "${text}"` : "")
    );
  };

  const scan = (field: string, text: string | undefined): void => {
    if (!text) return;
    for (const { pattern, reason } of FORBIDDEN_PATTERNS) {
      const match = text.match(pattern);
      if (match) {
        fail(field, `Content that must not be published reached the site — ${reason}.`, match[0]);
      }
    }
  };

  // ---- structure -------------------------------------------------------
  if (!ISO_DATE.test(brief.date)) fail("date", "date must be YYYY-MM-DD.", brief.date);
  if (!brief.title?.trim()) fail("title", "title is required.");
  if (!brief.summary?.trim()) fail("summary", "summary is required.");
  if (!brief.thesis?.trim()) fail("thesis", "thesis is required.");
  if (!brief.readThrough?.trim()) fail("readThrough", "readThrough is required.");
  if (!Array.isArray(brief.items) || brief.items.length === 0) {
    fail("items", "at least one item is required.");
  }
  if (!Array.isArray(brief.sections) || brief.sections.length === 0) {
    fail("sections", "sections must name at least one section carried today.");
  }

  for (const section of brief.sections) {
    if (!VALID_SECTIONS.includes(section)) {
      fail("sections", `unknown section. Allowed: ${VALID_SECTIONS.join(" | ")}.`, section);
    }
  }

  if (brief.sources?.disclaimer !== REQUIRED_DISCLAIMER) {
    fail(
      "sources.disclaimer",
      "disclaimer must be reproduced exactly; it is fixed wording.",
      brief.sources?.disclaimer
    );
  }
  if (!brief.sources?.attribution?.trim()) fail("sources.attribution", "attribution is required.");
  if (!ISO_DATE.test(brief.sources?.surveyDate ?? "")) {
    fail("sources.surveyDate", "surveyDate must be YYYY-MM-DD.", brief.sources?.surveyDate);
  }

  // ---- items -----------------------------------------------------------
  const leads = brief.items.filter((item) => item.isLead);
  if (leads.length !== 1) {
    fail("items[].isLead", `exactly one item must be the lead; found ${leads.length}.`);
  }

  brief.items.forEach((item, i) => {
    const at = `items[${i}] ("${item.name ?? "unnamed"}")`;

    if (!item.name?.trim()) fail(at, "name is required.");
    if (!item.what?.trim()) fail(at, "what is required.");
    if (!item.source?.trim()) fail(at, "source is required — every item names the page it was read from.");
    if (!VALID_KINDS.includes(item.kind)) {
      fail(`${at}.kind`, `unknown kind. Allowed: ${VALID_KINDS.join(" | ")}.`, item.kind);
    }

    if (item.kind === "tooling") {
      if (!item.version?.trim()) {
        fail(`${at}.version`, "a tooling item without its version is incomplete.");
      }
      if (!item.releaseUrl || !RELEASE_TAG_URL.test(item.releaseUrl)) {
        fail(
          `${at}.releaseUrl`,
          "tooling must cite the /releases/tag/ page for the exact version, not the releases index.",
          item.releaseUrl
        );
      }
      if (!item.licence?.trim()) {
        fail(`${at}.licence`, 'licence is required — use "licence not confirmed" if it could not be read.');
      }
    } else if (item.version) {
      fail(`${at}.version`, "only tooling items carry a version.", item.version);
    }

    if (item.releaseDate && !ISO_DATE.test(item.releaseDate)) {
      fail(`${at}.releaseDate`, "releaseDate must be YYYY-MM-DD.", item.releaseDate);
    }

    if (item.price && !item.priceUrl) {
      fail(`${at}.priceUrl`, "a published price must name the page it was read from.", item.price);
    }

    for (const [field, value] of Object.entries({
      what: item.what,
      whyDifferent: item.whyDifferent,
      platform: item.platform,
      price: item.price,
      source: item.source,
    })) {
      scan(`${at}.${field}`, value);
    }
  });

  // ---- prose -----------------------------------------------------------
  scan("title", brief.title);
  scan("summary", brief.summary);
  scan("thesis", brief.thesis);
  scan("readThrough", brief.readThrough);
  scan("sources.attribution", brief.sources.attribution);
}

/** All briefs, newest first. Throws if any file on disk is invalid. */
export function getAllBriefs(): DiscoveryBrief[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const brief = JSON.parse(raw) as DiscoveryBrief;
      validateDiscoveryBrief(brief, file);
      return brief;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** Every published date, newest first. */
export function getAllDates(): string[] {
  return getAllBriefs().map((brief) => brief.date);
}

/** The most recent brief, or null before the first one is published. */
export function getLatestBrief(): DiscoveryBrief | null {
  return getAllBriefs()[0] ?? null;
}

/** One brief by date, or null if that date has not been published. */
export function getBriefByDate(date: string): DiscoveryBrief | null {
  const filePath = path.join(CONTENT_DIR, `${date}.json`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const brief = JSON.parse(raw) as DiscoveryBrief;
  validateDiscoveryBrief(brief, `${date}.json`);
  return brief;
}

/** Human-readable date for display, e.g. "9 September 2026". */
export function formatBriefDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
