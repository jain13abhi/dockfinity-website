import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, BarChart3, Gift, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Verticals",
    description: "Explore the three specialized business verticals under Dockfinity — enterprise software, financial education, and corporate gifting.",
    alternates: {
        canonical: "/verticals",
    },
};

const BREADCRUMB_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://dockfinity.com' },
        { '@type': 'ListItem', position: 2, name: 'Verticals', item: 'https://dockfinity.com/verticals' },
    ],
};

const verticals = [
    {
        id: "dockware-labs",
        name: "Dockware Labs",
        tagline: "SaaS · Automation · AI",
        headline: "The Enterprise Software Engine.",
        description: "Dockware Labs is the technology arm of Dockfinity. We partner with enterprises to design and build custom software solutions — from intelligent automation tools to scalable SaaS platforms. We don't just write code; we architect systems that solve real business problems.",
        features: ["Custom ERP & CRM Systems", "AI-Powered Workflow Automation", "End-to-End SaaS Development", "Scalable Cloud Infrastructure"],
        href: "/verticals/dockware-labs",
        icon: Cpu,
        accent: "blue",
        accentClass: "text-blue-500",
        bgClass: "bg-blue-500/10",
        borderClass: "border-blue-500/20",
        gradientFrom: "from-blue-500/10",
        badgeClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        topBorder: "via-blue-500/50",
    },
    {
        id: "trading-dock",
        name: "Trading Dock",
        tagline: "Finance · Analytics · Education",
        headline: "Where Data Meets Decision.",
        description: "Trading Dock democratizes financial intelligence. We build sophisticated analytics tools, comprehensive educational curricula, and community platforms that empower the next generation of disciplined investors. All content is for educational purposes only.",
        features: ["Real-Time Market Dashboards", "Technical Analysis Education", "Strategy Backtesting Tools", "Community of Disciplined Traders"],
        href: "/verticals/trading-dock",
        icon: BarChart3,
        accent: "emerald",
        accentClass: "text-emerald-500",
        bgClass: "bg-emerald-500/10",
        borderClass: "border-emerald-500/20",
        gradientFrom: "from-emerald-500/10",
        badgeClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        topBorder: "via-emerald-500/50",
    },
    {
        id: "impressio-dock",
        name: "Impressio Dock",
        tagline: "Gifting · Printing · Merch",
        headline: "Tangible Impressions. Lasting Brands.",
        description: "Impressio Dock helps businesses make their brand felt — literally. From curated corporate gift boxes to high-quality offset printing and custom merchandise, we handle the entire lifecycle: design, sourcing, production, and last-mile delivery.",
        features: ["Premium Corporate Gift Boxes", "Custom-Branded Merchandise", "Offset & Digital Print Media", "End-to-End Fulfillment Logistics"],
        href: "/verticals/impressio-dock",
        icon: Gift,
        accent: "amber",
        accentClass: "text-amber-500",
        bgClass: "bg-amber-500/10",
        borderClass: "border-amber-500/20",
        gradientFrom: "from-amber-500/10",
        badgeClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        topBorder: "via-amber-500/50",
    },
];

export default function VerticalsPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }}
            />
            {/* ── PAGE HERO ── */}
            <section className="relative pt-28 pb-14 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono mb-6">
                        Business Ecosystem
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-5">
                        Our <span className="text-gradient-brand">Verticals</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
                        Three specialized business units. Independent teams. One unified governance. A combined force unlike anything in the market.
                    </p>
                </Container>
            </section>


            {/* ── VERTICALS ── */}
            <section className="pb-16 md:pb-24">
                <Container>
                    <div className="space-y-8">
                        {verticals.map((v, i) => (
                            <div
                                key={v.id}
                                className={`relative rounded-2xl border border-border/50 bg-card overflow-hidden hover:border-border hover:shadow-2xl transition-all duration-500 group`}
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${v.topBorder} to-transparent`} />

                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>

                                    {/* Content */}
                                    <div className="p-10 md:p-12 space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className={`w-14 h-14 ${v.bgClass} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <v.icon className={`w-7 h-7 ${v.accentClass}`} />
                                            </div>
                                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${v.badgeClass} border font-mono`}>
                                                {v.tagline}
                                            </span>
                                        </div>

                                        <div>
                                            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-2">{v.name}</h2>
                                            <p className={`text-lg font-medium ${v.accentClass} mb-4`}>{v.headline}</p>
                                            <p className="text-muted-foreground leading-relaxed">{v.description}</p>
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
                                            <Button className={`rounded-full px-8 font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-sm`} asChild>
                                                <Link href={v.href}>
                                                    Explore {v.name} <ArrowRight className="ml-2 h-4 w-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Visual panel */}
                                    <div className={`relative ${v.gradientFrom} to-transparent bg-gradient-to-br flex items-center justify-center p-12 min-h-[300px]`}>
                                        <div className="absolute inset-0 bg-grid-dense opacity-40" />
                                        <div className="relative z-10 text-center">
                                            <v.icon className={`w-24 h-24 ${v.accentClass} opacity-20 mx-auto mb-4 group-hover:opacity-40 transition-opacity duration-500`} />
                                            <div className={`font-display text-5xl font-bold ${v.accentClass} opacity-10 group-hover:opacity-20 transition-opacity duration-500 tracking-tight`}>
                                                {v.name.split(" ")[0]}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Digital Services callout — part of Dockware Labs */}
                    <Link
                        href="/digital-services"
                        className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl border border-border/50 bg-card hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-11 h-11 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 font-mono">Also from Dockware Labs</span>
                                <p className="font-display font-bold text-foreground">Digital Services — websites, SEO, and marketing for your business.</p>
                            </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-500 shrink-0 group-hover:gap-2.5 transition-all">
                            Explore Digital Services <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </Container>
            </section>


            {/* ── CTA ── */}
            <section className="py-16 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-20 fade-seam-bottom pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Have a Custom Requirement?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 font-light">
                        Our distinct verticals allow us to offer comprehensive, end-to-end solutions for businesses of all sizes. Let&apos;s build something together.
                    </p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg" asChild>
                        <Link href="/contact">Contact Our Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
