import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, BookOpen, TrendingUp, Users, AlertTriangle, LineChart, Target } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Trading Dock | Dockfinity",
    description: "Institutional-grade market analytics, financial education, and tools for disciplined investors.",
};

const offerings = [
    { icon: LineChart, title: "Market Analytics", desc: "Real-time dashboards, screeners, and scanners to identify high-probability setups." },
    { icon: BookOpen, title: "Financial Education", desc: "Structured curricula covering technical analysis, risk management, and market psychology." },
    { icon: Target, title: "Backtesting Tools", desc: "Validate your strategies against years of historical data before committing capital." },
    { icon: Users, title: "Trader Community", desc: "A disciplined network of market participants focused on rule-based, data-driven trading." },
];

const approach = [
    { step: "01", title: "Learn", desc: "Master the fundamentals and advanced concepts of market dynamics through structured, practical curricula." },
    { step: "02", title: "Analyze", desc: "Use our proprietary tools and screeners to identify high-probability setups in real time." },
    { step: "03", title: "Execute", desc: "Trade with discipline using rule-based systems that eliminate emotional decision-making." },
];

export default function TradingDockPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center">
                                <BarChart3 className="w-7 h-7 text-emerald-500" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-mono">
                                Finance · Analytics · Education
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            Trading<br />
                            <span className="text-emerald-500">Dock.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                            Democratizing financial intelligence through institutional-grade analytics and comprehensive market education.
                        </p>
                    </div>
                </Container>
            </section>

            {/* COMPLIANCE */}
            <div className="bg-amber-500/10 border-y border-amber-500/20 py-4">
                <Container>
                    <div className="flex items-start gap-3 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                            <strong className="text-foreground">Important Notice:</strong> Trading Dock does not provide investment advisory services. All content, tools, and resources are strictly for educational and informational purposes. We are not SEBI registered investment advisors. Financial markets carry substantial risk of loss.
                        </p>
                    </div>
                </Container>
            </div>

            {/* OFFERINGS */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 font-mono">What We Offer</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                                Data-Driven.<br />Education-First.
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Trading Dock provides comprehensive market research tools and educational resources designed to help retail and institutional investors develop disciplined, rule-based approaches to the market.
                                </p>
                                <p>
                                    We believe the best traders are not the most emotional — they are the most educated. Our platform is built entirely around that philosophy.
                                </p>
                            </div>
                            <Button className="rounded-full px-8 font-semibold bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm" asChild>
                                <Link href="/contact">Get Access <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {offerings.map((o) => (
                                <div key={o.title} className="p-6 bg-card rounded-2xl border border-border/50 border-t-2 border-t-emerald-500/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-11 h-11 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4">
                                        <o.icon className="w-5 h-5 text-emerald-500" />
                                    </div>
                                    <h3 className="font-display font-bold text-base mb-2">{o.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* APPROACH */}
            <section className="py-14 md:py-20 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500 font-mono mb-3">Our Framework</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">The Trader Journey</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {approach.map((a) => (
                            <div key={a.step} className="p-8 bg-card rounded-2xl border border-border/50 hover:border-emerald-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center">
                                <div className="font-display text-7xl font-bold text-emerald-500/10 group-hover:text-emerald-500/20 transition-colors mb-4">{a.step}</div>
                                <h3 className="font-display text-2xl font-bold mb-3 text-emerald-500">{a.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-panel text-panel-foreground relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <TrendingUp className="w-10 h-10 text-emerald-500 mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Start Your Trading Education</h2>
                    <p className="text-xl text-panel-foreground/60 max-w-xl mx-auto mb-8 font-light">
                        Join thousands of traders using our analytics platform and educational resources to develop a disciplined approach to the markets.
                    </p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg transition-all duration-300" asChild>
                        <Link href="/contact">Get Access <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
