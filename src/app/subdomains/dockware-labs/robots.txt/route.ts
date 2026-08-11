import { NextResponse } from "next/server";

export function GET() {
  const content = `User-Agent: *\nAllow: /\n\nSitemap: https://dockwarelabs.dockfinity.com/sitemap.xml\n`;
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
