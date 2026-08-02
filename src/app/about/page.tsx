import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Target, Globe2, ArrowRight, Lightbulb, Users2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "About Us",
    description: "Dockfinity Private Limited — a forward-thinking holding company building technology-driven ventures across SaaS, finance, and corporate experiences.",
};

const values = [
    {
        icon: ShieldCheck,
        title: "Integrity",
        description: "We operate with radical transparency. Every commitment we make is backed by contractual accountability and international compliance frameworks.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We challenge the status quo constantly. Our teams are built to ask better questions and build smarter solutions — faster than the market expects.",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        icon: Target,
        title: "Excellence",
        description: "We ship nothing short of our best. From enterprise software to custom gifting, every touchpoint reflects our obsession with quality.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

const milestones = [
    { year: "2025", event: "Dockfinity Private Limited incorporated", sub: "CIN: U66190DL2025PTC454662" },
    { year: "2025", event: "DPIIT Startup India recognition awarded", sub: "Government of India" },
    { year: "2025", event: "Triple ISO Certification achieved", sub: "27001 · 9001 · 20000-1" },
    { year: "2025", event: "All three verticals operationalized", sub: "Dockware Labs · Trading Dock · Impressio Dock" },
];

export default function AboutPage() {
    return (
        <>
            {/* ── PAGE HERO ── */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-orb-amber rounded-full blur-3xl opacity-20 pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono mb-6">
                            Since 2025
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.0] mb-6">
                            We Are{" "}
                            <span className="text-gradient-brand">Dockfinity.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light">
                            A forward-thinking holding company dedicated to building, scaling, and governing technology-driven ventures that solve real business problems.
                        </p>
                    </div>
                </Container>
            </section>


            {/* ── WHO WE ARE ── */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono">Who We Are</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                                The Backbone Behind Three Verticals.
                            </h2>
                            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Founded in 2025, Dockfinity serves as the strategic and governance backbone for a growing portfolio of specialized business units. We are not a consultancy — we are builders.
                                </p>
                                <p>
                                    From enterprise SaaS at <strong className="text-foreground">Dockware Labs</strong>, to institutional-grade financial education at <strong className="text-foreground">Trading Dock</strong>, to premium corporate gifting at <strong className="text-foreground">Impressio Dock</strong> — every vertical is built to be the best in its category.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button className="rounded-full px-8 font-semibold bg-foreground text-background hover:bg-foreground/90" asChild>
                                    <Link href="/verticals">Explore Our Verticals <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                                <Button variant="outline" className="rounded-full px-8 font-semibold border-border/60" asChild>
                                    <Link href="/contact">Partner With Us</Link>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {/* Mission */}
                            <div className="p-7 bg-card rounded-2xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                                        <Target className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold">Our Mission</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    To empower businesses and individuals through technology, financial education, and premium experiences — creating measurable value at every touchpoint.
                                </p>
                            </div>

                            {/* Vision */}
                            <div className="p-7 bg-card rounded-2xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center">
                                        <Globe2 className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <h3 className="font-display text-xl font-bold">Our Vision</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    To build a self-sustaining ecosystem of high-growth ventures that collectively define a new standard of enterprise excellence in India and beyond.
                                </p>
                            </div>

                            {/* Governance note */}
                            <div className="p-5 bg-secondary/50 rounded-2xl border border-border/50 flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    <strong className="text-foreground">Governance first.</strong> Dockfinity provides strategic direction, compliance oversight, and resource allocation across all verticals — ensuring every entity operates to the highest standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


            {/* ── CORE VALUES ── */}
            <section className="py-14 md:py-20 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-3">Core Values</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                            Principles That Drive Us
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="p-8 bg-card rounded-2xl border border-border/50 hover:border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`w-12 h-12 ${v.bg} rounded-2xl flex items-center justify-center mb-5`}>
                                    <v.icon className={`w-6 h-6 ${v.color}`} />
                                </div>
                                <h3 className="font-display text-2xl font-bold mb-3">{v.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{v.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>


            {/* ── MILESTONES ── */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-3">Our Journey</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                                Built Fast. Built Right.
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-[3.25rem] top-0 bottom-0 w-px bg-border/60 hidden md:block" />

                            <div className="space-y-6">
                                {milestones.map((m, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="flex flex-col items-center shrink-0">
                                            <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center font-display font-bold text-sm z-10 group-hover:bg-brand group-hover:text-brand-foreground transition-colors duration-300">
                                                {m.year.slice(2)}
                                            </div>
                                        </div>
                                        <div className="flex-1 pb-6">
                                            <div className="p-6 bg-card rounded-2xl border border-border/50 group-hover:border-border group-hover:shadow-md transition-all duration-300">
                                                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono mb-1">{m.year}</div>
                                                <div className="font-display text-lg font-bold text-foreground mb-1">{m.event}</div>
                                                <div className="text-sm text-muted-foreground">{m.sub}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>


            {/* ── ASSOCIATE COMPANIES ── */}
            <section className="py-14 md:py-20 bg-secondary/30">
                <Container>
                    <div className="mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-3">Group Structure</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            Our Associates
                        </h2>
                        <p className="text-lg text-muted-foreground">Strategic partnerships and associate companies within the Dockfinity group.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative p-8 rounded-2xl border border-border/50 bg-card hover:border-border hover:shadow-lg transition-all duration-300 group overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 mb-5 font-mono">
                                Associate Company
                            </span>
                            <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-brand transition-colors duration-300">
                                Metaloc India Private Limited
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Focused on industrial solutions, manufacturing excellence, and supply chain optimization for heavy industries across India.
                            </p>
                        </div>

                        <div className="relative p-8 rounded-2xl border border-border/50 bg-card hover:border-border hover:shadow-lg transition-all duration-300 group overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-5 font-mono">
                                Associate Company
                            </span>
                            <h3 className="font-display text-2xl font-bold tracking-tight mb-3 group-hover:text-brand transition-colors duration-300">
                                Patra Corporations Private Limited
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Exploring opportunities in infrastructure development and specialized logistics sectors across India.
                            </p>
                        </div>
                    </div>
                </Container>
            </section>


            {/* ── CTA ── */}
            <section className="py-16 bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <Users2 className="w-10 h-10 text-brand mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Join the Dockfinity Network
                    </h2>
                    <p className="text-lg text-background/60 max-w-xl mx-auto mb-8 font-light">
                        Whether you&apos;re a potential partner, client, or investor — we&apos;d love to connect and explore how we can build something extraordinary together.
                    </p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-brand text-brand-foreground hover:bg-brand/90 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                        <Link href="/contact">Get in Touch <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
