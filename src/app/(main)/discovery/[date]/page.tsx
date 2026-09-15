import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { DiscoveryView } from "@/components/discovery/discovery-view";
import { getAllDates, getBriefByDate, formatBriefDate, getSlidePath } from "@/lib/discovery";

type Params = { params: Promise<{ date: string }> };

export function generateStaticParams() {
  return getAllDates().map((date) => ({ date }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { date } = await params;
  const brief = getBriefByDate(date);

  if (!brief) {
    return { title: "Brief not found | Dockfinity" };
  }

  const url = `https://dockfinity.com/discovery/${brief.date}`;
  const slide = getSlidePath(brief.date);

  return {
    title: `${brief.title} — ${formatBriefDate(brief.date)} | Dockfinity`,
    description: brief.summary,
    alternates: { canonical: `/discovery/${brief.date}` },
    openGraph: {
      title: brief.title,
      description: brief.summary,
      url,
      type: "article",
      publishedTime: `${brief.date}T00:00:00.000Z`,
      // The day's own slide, so a shared link previews as the card that goes
      // out on social rather than as the site-wide default.
      ...(slide
        ? { images: [{ url: slide, width: 1080, height: 1350, alt: brief.title }] }
        : {}),
    },
    ...(slide ? { twitter: { card: "summary_large_image" as const, images: [slide] } } : {}),
  };
}

export default async function DiscoveryDatePage({ params }: Params) {
  const { date } = await params;
  const brief = getBriefByDate(date);

  if (!brief) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: brief.title,
    description: brief.summary,
    datePublished: `${brief.date}T00:00:00.000Z`,
    dateModified: `${brief.date}T00:00:00.000Z`,
    author: { "@type": "Organization", name: "Dockfinity" },
    publisher: {
      "@type": "Organization",
      name: "Dockfinity",
      url: "https://dockfinity.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://dockfinity.com/discovery/${brief.date}`,
    },
  };

  return (
    <div className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Container className="max-w-3xl">
        <DiscoveryView brief={brief} slide={getSlidePath(brief.date)} />
      </Container>
    </div>
  );
}
