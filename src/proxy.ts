import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SUBDOMAINS, getSubdomainFromHost } from "@/lib/subdomains";

export function proxy(req: NextRequest) {
  return handleRouting(req);
}

export function middleware(req: NextRequest) {
  return handleRouting(req);
}

function handleRouting(req: NextRequest) {
  const url = req.nextUrl.clone();
  
  // Direct Hostname from Headers or NextRequest (Vercel Edge & Subdomain Proxy Compatible)
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || req.nextUrl.hostname;

  // Skip static assets and internal Next.js paths
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    /\.(png|jpg|jpeg|gif|ico|svg|css|js|woff2?)$/.test(url.pathname)
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
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
