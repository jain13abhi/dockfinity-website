import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUBDOMAINS, getSubdomainFromHost } from "@/lib/subdomains";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");

  // Skip static assets, internal Next.js paths, and public files
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.includes(".") // e.g. favicon.ico, images, icons
  ) {
    return NextResponse.next();
  }

  const activeSubdomainKey = getSubdomainFromHost(host, url.searchParams);

  if (activeSubdomainKey) {
    const config = SUBDOMAINS[activeSubdomainKey];
    if (config) {
      // Rewrite request internally to the subdomain route group
      url.pathname = `${config.rewritePrefix}${url.pathname === "/" ? "" : url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }

  // Handle Main Domain Redirects for Legacy Paths (/verticals/dockware-labs*)
  const legacySubdomain = Object.values(SUBDOMAINS).find((sub) =>
    sub.legacyPaths.some((p) => url.pathname.startsWith(p))
  );

  if (legacySubdomain && !activeSubdomainKey) {
    // Redirect to subdomain
    const targetHost = process.env.NODE_ENV === "production"
      ? `${legacySubdomain.id}.dockfinity.com`
      : `${legacySubdomain.id}.localhost:3000`;
    const protocol = req.nextUrl.protocol || "https:";
    
    return NextResponse.redirect(`${protocol}//${targetHost}`, 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
