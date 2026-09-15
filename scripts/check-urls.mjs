/**
 * Checks that every address a brief cites is still there.
 *
 * On 9 September a slide went out carrying
 * https://github.com/NousResearch/hermes-agent/releases/tag/v0.21.1, which
 * returns 404. The shape of the URL was right, so the validator passed it; the
 * page simply did not exist. Nothing in the pipeline fetches a URL, so nothing
 * could have known.
 *
 * This runs at publish time, never at build time — a build that reaches out to
 * the network on every page would be slow, flaky, and would fail for reasons
 * that have nothing to do with the code.
 *
 * 404 and 410 block the brief: the address is wrong and a reader following it
 * lands nowhere. 403, 429 and 5xx do not: plenty of sites refuse an
 * unattended request while serving the same page to a person, and a gate that
 * fires on those gets switched off within a week. Those are reported instead.
 */

const TIMEOUT_MS = 12_000;

/** A browser's, because several of these sites refuse anything else outright. */
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36";

/** Every distinct http(s) address anywhere in the brief, punctuation trimmed. */
export function collectUrls(brief) {
  const found = JSON.stringify(brief).match(/https?:\/\/[^\s"'<>\\]+/g) ?? [];
  const cleaned = found.map((u) => u.replace(/[.,;:)\]}]+$/, ""));
  return [...new Set(cleaned)].sort();
}

async function probe(url, method) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: controller.signal,
      headers: { "User-Agent": USER_AGENT, Accept: "*/*" },
    });
    return { status: res.status };
  } catch (err) {
    return { status: 0, reason: err.name === "AbortError" ? "timed out" : String(err.message ?? err) };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * HEAD first because it is cheap, then GET: a fair number of servers answer
 * HEAD with 403 or 405 while serving the page perfectly well.
 */
async function check(url) {
  let result = await probe(url, "HEAD");
  if (result.status === 0 || result.status === 403 || result.status === 405 || result.status >= 500) {
    result = await probe(url, "GET");
  }
  return { url, ...result };
}

/**
 * Returns { dead, unverified }. `dead` blocks the brief; `unverified` is
 * reported so a pattern of them is visible, but does not stop a publish.
 */
export async function checkUrls(brief) {
  const urls = collectUrls(brief);
  const results = await Promise.all(urls.map(check));

  return {
    checked: results.length,
    dead: results.filter((r) => r.status === 404 || r.status === 410),
    unverified: results.filter(
      (r) => r.status !== 200 && r.status !== 404 && r.status !== 410 && !(r.status >= 300 && r.status < 400)
    ),
  };
}

export function describe({ checked, dead, unverified }) {
  const lines = [];
  if (dead.length > 0) {
    lines.push(`${dead.length} of ${checked} cited addresses do not exist:`);
    for (const r of dead) lines.push(`  ${r.status}  ${r.url}`);
    lines.push("");
    lines.push(
      "A 404 means the address is wrong, not that the source is unavailable. " +
        "Correct it or drop the item — do not publish a link that goes nowhere."
    );
  }
  if (unverified.length > 0) {
    if (lines.length > 0) lines.push("");
    lines.push(`${unverified.length} could not be checked from here, and were not treated as failures:`);
    for (const r of unverified) lines.push(`  ${r.status || "—"}  ${r.url}${r.reason ? `  (${r.reason})` : ""}`);
  }
  return lines.join("\n");
}
