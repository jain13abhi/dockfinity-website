import type { NextConfig } from "next";

// Note: If THEME_TIME_SEED_SCRIPT in src/app/layout.tsx is ever updated,
// this sha256 hash MUST be recomputed and updated here.
const THEME_SCRIPT_HASH = "sha256-hPVHFcAQfpXEplmAsJV/h0s9KuuAYkjTEQQ6pVvnJrg=";

const strictCsp = `
  default-src 'self';
  script-src 'self' '${THEME_SCRIPT_HASH}' https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data:;
  connect-src 'self' https://*.dockfinity.com https://dockfinity.com https://vitals.vercel-insights.com https://va.vercel-scripts.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const contactCsp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://challenges.cloudflare.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data:;
  connect-src 'self' https://*.dockfinity.com https://dockfinity.com https://challenges.cloudflare.com https://vitals.vercel-insights.com https://va.vercel-scripts.com;
  frame-src 'self' https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, " ").trim();

const baseHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/contact",
        headers: [...baseHeaders, { key: "Content-Security-Policy", value: contactCsp }],
      },
      {
        source: "/((?!contact).*)",
        headers: [...baseHeaders, { key: "Content-Security-Policy", value: strictCsp }],
      },
    ];
  },
};

export default nextConfig;
