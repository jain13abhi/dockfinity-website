/**
 * Sends the day's slides and captions to Telegram, once they are published.
 *
 *   node scripts/notify-telegram.mjs \
 *     --brief content/market-brief/2026-09-17.json \
 *     --slides "public/briefs/metaldock-brief-2026-09-17-*.png" \
 *     --label "Metal Dock" \
 *     --url https://metaldock.co.in/market-brief/2026-09-17
 *
 * The images are uploaded rather than linked, because one of the two sites is
 * private and Telegram cannot fetch from it.
 *
 * This never fails the build. A brief that published correctly has published
 * correctly, and a notification that did not arrive is not a reason to hold
 * it back — the failure is printed and the process still exits 0.
 */
import fs from "node:fs";
import path from "node:path";

const API = "https://api.telegram.org";
const MAX_MESSAGE = 4096;

/** Prints what would be sent. Lets the wiring be checked without a token. */
const DRY_RUN = process.argv.includes("--dry-run");

function arg(name, required = true) {
  const at = process.argv.indexOf(`--${name}`);
  const value = at === -1 ? undefined : process.argv[at + 1];
  if (required && !value) {
    throw new Error(`Missing --${name}`);
  }
  return value;
}

/**
 * Expands one trailing "*" the way a shell would, without a shell. The
 * workflow passes the pattern quoted so that a run with no slides reports
 * that, rather than silently passing the literal pattern to Telegram.
 */
function expand(pattern) {
  if (!pattern.includes("*")) {
    return fs.existsSync(pattern) ? [pattern] : [];
  }
  const dir = path.dirname(pattern);
  const [before, after] = path.basename(pattern).split("*");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith(before) && f.endsWith(after))
    .sort()
    .map((f) => path.join(dir, f));
}

async function call(token, method, body) {
  const response = await fetch(`${API}/bot${token}/${method}`, {
    method: "POST",
    body,
  });
  const result = await response.json().catch(() => ({}));
  if (!result.ok) {
    throw new Error(
      `${method} failed: ${result.description ?? `HTTP ${response.status}`}`
    );
  }
  return result;
}

async function sendText(token, chat, text) {
  if (DRY_RUN) {
    console.log(`\n--- message (${text.length} chars) ---\n${text}`);
    return;
  }
  // Deliberately no parse_mode. The captions are the user's own prose and
  // carry characters Markdown would choke on; an unsent notification because
  // a caption contained an underscore is not a trade worth making.
  const form = new FormData();
  form.append("chat_id", chat);
  form.append("text", text.slice(0, MAX_MESSAGE));
  form.append("disable_web_page_preview", "true");
  await call(token, "sendMessage", form);
}

const asBlob = (file) =>
  new Blob([fs.readFileSync(file)], { type: "image/png" });

async function sendSlides(token, chat, files, caption) {
  if (files.length === 0) return;
  if (DRY_RUN) {
    const how = files.length === 1 ? "sendPhoto" : "sendMediaGroup";
    console.log(
      `\n--- ${files.length} image(s), ${how} ---\n` +
        files.map((f) => `    ${f}`).join("\n") +
        `\n  caption: ${caption.split("\n").join(" | ")}`
    );
    return;
  }

  const form = new FormData();
  form.append("chat_id", chat);
  form.append("caption", caption.slice(0, 1024));

  // sendMediaGroup takes between two and ten items and rejects a group of one,
  // which is exactly what Dockfinity sends every day.
  if (files.length === 1) {
    form.append("photo", asBlob(files[0]), path.basename(files[0]));
    await call(token, "sendPhoto", form);
    return;
  }

  const batch = files.slice(0, 10);
  // In a group only the first item's caption is shown, so it carries it.
  form.delete("caption");
  form.append(
    "media",
    JSON.stringify(
      batch.map((file, i) => ({
        type: "photo",
        media: `attach://slide${i}`,
        ...(i === 0 ? { caption: caption.slice(0, 1024) } : {}),
      }))
    )
  );
  for (const [i, file] of batch.entries()) {
    form.append(`slide${i}`, asBlob(file), path.basename(file));
  }
  await call(token, "sendMediaGroup", form);
}

async function main() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!DRY_RUN && (!token || !chat)) {
    console.log("Telegram is not configured; no notification sent.");
    return;
  }

  const brief = JSON.parse(fs.readFileSync(arg("brief"), "utf-8"));
  const slides = expand(arg("slides"));
  const label = arg("label");
  const url = arg("url", false);

  const header =
    `${label} — ${brief.date}\n` +
    `${brief.title}\n\n` +
    `${slides.length} image${slides.length === 1 ? "" : "s"}` +
    (url ? `\n${url}` : "");

  await sendSlides(token, chat, slides, header);
  if (slides.length === 0) {
    await sendText(token, chat, `${header}\n\nNo slide was rendered for this brief.`);
  }

  const social = brief.social;
  if (!social) {
    await sendText(
      token,
      chat,
      "No captions in this brief. It was published before captions were carried " +
        "in the file, or the task did not write them."
    );
    return;
  }

  const tags = (social.hashtags ?? []).join(" ");

  // Each caption goes in its own message, ready to copy. Older briefs carry
  // only the original three captions, so new destinations are skipped when
  // replaying one of those archived files.
  const captions = [
    ["LinkedIn", social.linkedin, 3000, true],
    ["Instagram / WhatsApp", social.instagram, 2200, true],
    ["Facebook", social.facebook, 2200, true],
    ["X", social.x, 280, true],
    ["Threads", social.threads, 500, true],
    ["Google Business Profile", social.googleBusiness, 1500, false],
  ].filter(([, text]) => typeof text === "string" && text.trim());

  for (const [platform, text, limit, includeHashtags] of captions) {
    const full = includeHashtags && tags ? `${text}\n\n${tags}` : text;
    // The site checks the caption alone against the platform limit; hashtags
    // are added here. On X that difference decides whether it fits at all.
    const over = full.length > limit ? `  OVER by ${full.length - limit}` : "";
    await sendText(
      token,
      chat,
      `${platform} — ${full.length} of ${limit} characters` +
        (includeHashtags ? " with hashtags" : "") + `${over}\n` +
        (platform === "Google Business Profile"
          ? `Post type: Update | Button: Learn more${url ? ` | Link: ${url}` : ""}\n`
          : "") +
        `${"-".repeat(30)}\n${full}`
    );
  }
}

main().catch((error) => {
  // See the file header: the brief is already published and correct.
  console.error(`Telegram notification failed: ${error.message}`);
  process.exit(0);
});
