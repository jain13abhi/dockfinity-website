export interface SubdomainConfig {
  id: string;
  rewritePrefix: string;
  legacyPaths: string[];
}

export const SUBDOMAINS: Record<string, SubdomainConfig> = {
  dockwarelabs: {
    id: "dockwarelabs",
    rewritePrefix: "/subdomains/dockware-labs",
    legacyPaths: [
      "/verticals/dockware-labs",
      "/verticals/dockware-labs/enterprise-solutions",
      "/verticals/dockware-labs/app-development",
      "/verticals/dockware-labs/automation-iot",
      "/verticals/dockware-labs/it-consulting",
    ],
  },
  // Future verticals can be enabled by adding entries here:
  // tradingdock: { id: 'tradingdock', rewritePrefix: '/subdomains/trading-dock', legacyPaths: [...] },
  // impressiodock: { id: 'impressiodock', rewritePrefix: '/subdomains/impressio-dock', legacyPaths: [...] },
};

/**
 * Extract subdomain key from host header or query param in local dev.
 */
export function getSubdomainFromHost(host: string | null, searchParams?: URLSearchParams): string | null {
  if (searchParams?.has("subdomain")) {
    const devSub = searchParams.get("subdomain");
    if (devSub && SUBDOMAINS[devSub]) {
      return devSub;
    }
  }

  if (!host) return null;

  // Clean host (remove port number e.g., localhost:3000)
  const cleanHost = host.split(":")[0].toLowerCase();

  // Match host prefixes (e.g. dockwarelabs.dockfinity.com or dockwarelabs.localhost)
  for (const key of Object.keys(SUBDOMAINS)) {
    if (cleanHost.startsWith(`${key}.`)) {
      return key;
    }
  }

  return null;
}
