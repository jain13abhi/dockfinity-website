import { getAllBriefs } from "@/lib/discovery";

const BASE_URL = "https://dockfinity.com";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const briefs = getAllBriefs();
  const updated = briefs[0]?.date;

  const items = briefs
    .map((brief) => {
      const url = `${BASE_URL}/discovery/${brief.date}`;
      return [
        "    <item>",
        `      <title>${escapeXml(brief.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(`${brief.date}T00:00:00Z`).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(brief.summary)}</description>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    "    <title>Dockfinity — Build &amp; Market Discovery</title>",
    `    <link>${BASE_URL}/discovery</link>`,
    "    <description>A daily record of what actually shipped in AI agent tooling and developer AI.</description>",
    "    <language>en</language>",
    `    <atom:link href="${BASE_URL}/discovery/rss.xml" rel="self" type="application/rss+xml" />`,
    updated
      ? `    <lastBuildDate>${new Date(`${updated}T00:00:00Z`).toUTCString()}</lastBuildDate>`
      : "",
    items,
    "  </channel>",
    "</rss>",
  ]
    .filter(Boolean)
    .join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
