import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, BarChart3, Gift, ChevronRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Verticals",
    description: "Explore the three specialized business verticals under Dockfinity — enterprise software, financial education, and corporate gifting.",
};

const verticals = [
    {
        id: "dockware-labs",
        entryNo: "01",
        name: "Dockware Labs",
        tagline: "SaaS · Automation · AI",
        headline: "The Enterprise Software Engine.",
        description: "Dockware Labs is the technology arm of Dockfinity. We partner with enterprises to design and build custom software solutions — from intelligent automation tools to scalable SaaS platforms. We don't just write code; we architect systems that solve real business problems.",
        features: ["Custom ERP & CRM Systems", "AI-Powered Workflow Automation", "End-to-End SaaS Development", "Scalable Cloud Infrastructure"],
        href: "/verticals/dockware-labs",
        icon: Cpu,
        accentClass: "text-blue-600",
        tabClass: "tab-blue",
    },
    {
        id: "trading-dock",
        entryNo: "02",
        name: "Trading Dock",
        tagline: "Finance · Analytics · Education",
        headline: "Where Data Meets Decision.",
        description: "Trading Dock democratizes financial intelligence. We build sophisticated analytics tools, comprehensive educational curricula, and community platforms that empower the next generation of disciplined investors. All content is for educational purposes only.",
        features: ["Real-Time Market Dashboards", "Technical Analysis Education", "Strategy Backtesting Tools", "Community of Disciplined Traders"],
        href: "/verticals/trading-dock",
        icon: BarChart3,
        accentClass: "text-emerald-600",
        tabClass: "tab-emerald",
    },
    {
        id: "impressio-dock",
        entryNo: "03",
        name: "Impressio Dock",
        tagline: "Gifting · Printing · Merch",
        headline: "Tangible Impressions. Lasting Brands.",
        description: "Impressio Dock helps businesses make their brand felt — literally. From curated corporate gift boxes to high-quality offset printing and custom merchandise, we handle the entire lifecycle: design, sourcing, production, and last-mile delivery.",
        features: ["Premium Corporate Gift Boxes", "Custom-Branded Merchandise", "Offset & Digital Print Media", "End-to-End Fulfillment Logistics"],
        href: "/verticals/impressio-dock",
        icon: Gift,
        accentClass: "text-amber-600",
        tabClass: "tab-amber",
    },
];

export default function VerticalsPage() {
    return (
        <>
            {/* ── PAGE HERO ── */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-ledger-grid opacity-60 pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono mb-6">
                        Business Ecosystem
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight mb-5">
                        Our Verticals
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Three specialized business units. Independent teams. One unified governance. A combined force unlike anything in the market.
                    </p>
                </Container>
            </section>


            {/* ── VERTICALS ── */}
            <section className="pb-24 md:pb-32">
                <Container>
                    <div className="space-y-6">
                        {verticals.map((v) => (
                            <div
                                key={v.id}
                                className={`border border-border bg-card entry-hover ${v.tabClass}`}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 p-10 md:p-12">

                                    {/* Content */}
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs text-muted-foreground">ENTITY NO. {v.entryNo}</span>
                                            <v.icon className={`w-6 h-6 ${v.accentClass}`} />
                                        </div>

                                        <div>
                                            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] font-mono ${v.accentClass}`}>{v.tagline}</span>
                                            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mt-2 mb-2">{v.name}</h2>
                                            <p className="text-lg font-medium text-foreground/80 mb-4">{v.headline}</p>
                                            <p className="text-muted-foreground leading-relaxed max-w-xl">{v.description}</p>
                                        </div>

                                        <ul className="space-y-2">
                                            {v.features.map((f) => (
                                                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <ChevronRight className={`w-4 h-4 ${v.accentClass} shrink-0`} />
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="pt-2">
                                            <Button className="px-8 font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-sm" asChild>
                                                <Link href={v.href}>
                                                    Explore {v.name} <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Registry mark */}
                                    <div className="hidden lg:flex flex-col items-center justify-center border-l border-border pl-16 w-48">
                                        <v.icon className={`w-10 h-10 ${v.accentClass} mb-4`} />
                                        <span className="font-mono text-6xl font-semibold text-border">{v.entryNo}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>


            {/* ── CTA ── */}
            <section className="py-20 bg-foreground text-background">
                <Container className="text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                        Have a Custom Requirement?
                    </h2>
                    <p className="text-lg text-background/60 max-w-xl mx-auto mb-8">
                        Our distinct verticals allow us to offer comprehensive, end-to-end solutions for businesses of all sizes. Let&apos;s build something together.
                    </p>
                    <Button variant="brand" className="px-10 h-14 text-base font-semibold" asChild>
                        <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
