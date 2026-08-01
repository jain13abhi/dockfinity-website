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
            <section className="relative pt-36 pb-24 bg-foreground text-background overflow-hidden">
                <div className="absolute inset-0 bg-ledger-grid opacity-[0.08] pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 border border-background/30 flex items-center justify-center">
                                <BarChart3 className="w-7 h-7 text-emerald-400" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-widest border border-background/30 text-background/80 font-mono">
                                Finance · Analytics · Education
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                            Trading<br />
                            <span className="text-emerald-400">Dock.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-background/70 max-w-2xl leading-relaxed font-light">
                            Democratizing financial intelligence through institutional-grade analytics and comprehensive market education.
                        </p>
                    </div>
                </Container>
            </section>

            {/* COMPLIANCE */}
            <div className="border-y border-border bg-secondary/40 py-4">
                <Container>
                    <div className="flex items-start gap-3 text-sm">
                        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">
                            <strong className="text-foreground">Important Notice:</strong> Trading Dock does not provide investment advisory services. All content, tools, and resources are strictly for educational and informational purposes. We are not SEBI registered investment advisors. Financial markets carry substantial risk of loss.
                        </p>
                    </div>
                </Container>
            </div>

            {/* OFFERINGS */}
            <section className="py-20 md:py-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 font-mono">What We Offer</p>
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
                            <Button className="rounded-sm px-8 font-semibold bg-emerald-600 text-white hover:bg-emerald-600 shadow-sm" asChild>
                                <Link href="/contact">Get Access <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {offerings.map((o) => (
                                <div key={o.title} className="p-6 bg-card border border-border border-t-2 border-t-emerald-600/60 entry-hover">
                                    <div className="w-11 h-11 border border-border flex items-center justify-center mb-4">
                                        <o.icon className="w-5 h-5 text-emerald-600" />
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
            <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-ledger-grid opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 font-mono mb-3">Our Framework</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">The Trader Journey</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {approach.map((a) => (
                            <div key={a.step} className="p-8 bg-card border border-border hover:border-emerald-600/40 transition-colors duration-200 group text-center">
                                <div className="font-mono text-2xl font-semibold text-emerald-600 mb-4">{a.step}</div>
                                <h3 className="font-display text-2xl font-bold mb-3 text-emerald-600">{a.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 bg-ledger-grid opacity-[0.08] pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <TrendingUp className="w-10 h-10 text-emerald-600 mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Start Your Trading Education</h2>
                    <p className="text-xl text-background/60 max-w-xl mx-auto mb-8 font-light">
                        Join thousands of traders using our analytics platform and educational resources to develop a disciplined approach to the markets.
                    </p>
                    <Button className="rounded-sm px-10 h-14 text-base font-semibold bg-emerald-600 text-white hover:bg-emerald-600 shadow-lg transition-all duration-300" asChild>
                        <Link href="/contact">Get Access <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
