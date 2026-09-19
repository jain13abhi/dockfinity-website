/**
 * The discovery brief specification, served as an ordinary web page.
 *
 * The scheduled task reads its rules from here at the start of every run, so
 * this address has to be one that an agent's browsing tool will actually
 * open. Two earlier attempts did not survive that test:
 *
 *   raw.githubusercontent.com — a ChatGPT account created for Dockfinity
 *   could not resolve the host at all.
 *
 *   /brief-spec.txt — Vercel serves everything under public/ with a
 *   Content-Disposition header, and the browsing tool refused it as a file
 *   rather than opening it as a page.
 *
 * A route handler is the fix because it controls its own headers: text/html,
 * no Content-Disposition, nothing that looks like a download. The text itself
 * still lives in public/brief-spec.txt, which stays the one place it is
 * edited; this route only dresses it for the web.
 */
import fs from "node:fs";
import path from "node:path";

/** Read at build time, so the file is never missing at request time. */
export const dynamic = "force-static";

const SOURCE = path.join(process.cwd(), "public", "brief-spec.txt");

/** The spec is plain text and must survive intact inside a <pre>. */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function GET(): Response {
  const spec = fs.readFileSync(SOURCE, "utf-8");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Dockfinity — Discovery Brief Specification</title>
<style>
  body { margin: 0; background: #ffffff; color: #111111; }
  pre {
    margin: 0;
    padding: 24px;
    font: 14px/1.5 ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    white-space: pre-wrap;
    word-break: break-word;
  }
</style>
</head>
<body><pre>${escapeHtml(spec)}</pre></body>
</html>
`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
