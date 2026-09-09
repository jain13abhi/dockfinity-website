import Link from "next/link";
import { ExternalLink, Scale, MonitorCog } from "lucide-react";
import type { DiscoveryBrief, DiscoveryItem } from "@/lib/discovery";
import { formatBriefDate } from "@/lib/discovery";

const KIND_LABEL: Record<DiscoveryItem["kind"], string> = {
  tooling: "Release",
  teardown: "Teardown",
  credits: "Programme",
  pricing: "Pricing",
};

/** Repository URL shown without the scheme, so the identifier reads first. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function ItemCard({ item }: { item: DiscoveryItem }) {
  const primaryUrl = item.releaseUrl ?? item.productUrl ?? item.repoUrl;

  return (
    <article
      className={
        "rounded-xl border bg-card p-6 sm:p-7 " +
        (item.isLead ? "border-brand/40" : "border-border")
      }
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {KIND_LABEL[item.kind]}
        </span>
        {item.version && (
          <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-brand text-background">
            {item.version}
          </span>
        )}
        {item.releaseDate && (
          <span className="font-mono text-xs text-muted-foreground">
            {formatBriefDate(item.releaseDate)}
          </span>
        )}
      </div>

      <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-foreground mb-3">
        {item.name}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-3">{item.what}</p>

      {item.whyDifferent && (
        <p className="text-foreground/90 leading-relaxed border-l-2 border-brand/50 pl-4">
          {item.whyDifferent}
        </p>
      )}

      {item.price && (
        <p className="mt-4 font-mono text-sm text-foreground">
          {item.price}
          {item.priceUrl && (
            <>
              {" "}
              <a
                href={item.priceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground underline underline-offset-4 hover:text-brand"
              >
                pricing
              </a>
            </>
          )}
        </p>
      )}

      <dl className="mt-6 pt-5 border-t border-border grid gap-x-8 gap-y-3 sm:grid-cols-2 font-mono text-xs">
        {item.licence && (
          <div className="flex items-start gap-2">
            <Scale className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground" aria-hidden />
            <div>
              <dt className="sr-only">Licence</dt>
              <dd className="text-foreground">{item.licence}</dd>
            </div>
          </div>
        )}
        {item.platform && (
          <div className="flex items-start gap-2">
            <MonitorCog className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground" aria-hidden />
            <div>
              <dt className="sr-only">Platform</dt>
              <dd className="text-foreground">{item.platform}</dd>
            </div>
          </div>
        )}
        {primaryUrl && (
          <div className="sm:col-span-2 flex items-start gap-2">
            <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground" aria-hidden />
            <div className="min-w-0">
              <dt className="sr-only">Source</dt>
              <dd className="truncate">
                <a
                  href={primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline underline-offset-4 hover:text-brand"
                >
                  {displayUrl(primaryUrl)}
                </a>
              </dd>
            </div>
          </div>
        )}
      </dl>
    </article>
  );
}

export function DiscoveryView({ brief }: { brief: DiscoveryBrief }) {
  return (
    <div>
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-5">
          <span className="font-mono text-xs uppercase tracking-wider text-brand">
            Build &amp; Market Discovery
          </span>
          <time
            dateTime={brief.date}
            className="font-mono text-xs text-muted-foreground"
          >
            {formatBriefDate(brief.date)}
          </time>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.1] text-balance mb-5">
          {brief.title}
        </h1>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {brief.thesis}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {brief.sections.map((section, i) => (
            <li key={section} className="flex items-center gap-3">
              {i > 0 && <span aria-hidden className="text-border">/</span>}
              {section}
            </li>
          ))}
        </ul>
      </header>

      <div className="grid gap-5">
        {brief.items.map((item) => (
          <ItemCard key={`${item.name}-${item.version ?? item.kind}`} item={item} />
        ))}
      </div>

      <section className="mt-10 rounded-xl bg-secondary border border-border p-6 sm:p-7">
        <h2 className="font-mono text-[11px] uppercase tracking-wider text-brand mb-3">
          What this changes
        </h2>
        <p className="text-foreground text-lg leading-relaxed">{brief.readThrough}</p>
      </section>

      <footer className="mt-10 pt-6 border-t border-border">
        <h2 className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mb-3">
          Sources
        </h2>
        <p className="font-mono text-xs text-muted-foreground leading-relaxed break-words">
          {brief.sources.attribution}
        </p>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {brief.sources.disclaimer}
        </p>
        <p className="mt-5">
          <Link
            href="/discovery"
            className="font-mono text-xs text-muted-foreground underline underline-offset-4 hover:text-brand"
          >
            All briefs
          </Link>
        </p>
      </footer>
    </div>
  );
}
