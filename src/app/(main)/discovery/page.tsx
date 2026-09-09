import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { DiscoveryView } from "@/components/discovery/discovery-view";
import { getAllBriefs, formatBriefDate } from "@/lib/discovery";

export const metadata: Metadata = {
  title: "Build & Market Discovery | Dockfinity",
  description:
    "A daily record of what actually shipped in AI agent tooling and developer AI — every version, licence and platform read from the project's own release page.",
  alternates: {
    canonical: "/discovery",
    types: {
      "application/rss+xml": "https://dockfinity.com/discovery/rss.xml",
    },
  },
  openGraph: {
    title: "Build & Market Discovery | Dockfinity",
    description:
      "A daily record of what actually shipped in AI agent tooling and developer AI.",
    url: "https://dockfinity.com/discovery",
    type: "website",
  },
};

export default function DiscoveryPage() {
  const briefs = getAllBriefs();
  const [latest, ...archive] = briefs;

  return (
    <div className="pt-28 pb-20">
      <Container className="max-w-3xl">
        {latest ? (
          <DiscoveryView brief={latest} />
        ) : (
          <div className="py-16">
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
              Build &amp; Market Discovery
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A daily record of what actually shipped in AI agent tooling and
              developer AI. Every version, licence and platform is read from the
              project&apos;s own release page. The first brief publishes shortly.
            </p>
          </div>
        )}

        {archive.length > 0 && (
          <section className="mt-16 pt-10 border-t border-border">
            <h2 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-6">
              Archive
            </h2>
            <ul className="grid gap-px bg-border rounded-lg overflow-hidden">
              {archive.map((brief) => (
                <li key={brief.date} className="bg-background">
                  <Link
                    href={`/discovery/${brief.date}`}
                    className="group flex flex-col gap-1 p-5 hover:bg-secondary transition-colors"
                  >
                    <time
                      dateTime={brief.date}
                      className="font-mono text-xs text-muted-foreground"
                    >
                      {formatBriefDate(brief.date)}
                    </time>
                    <span className="font-display text-lg font-semibold tracking-tight text-foreground group-hover:text-brand transition-colors text-balance">
                      {brief.title}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {brief.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>
    </div>
  );
}
