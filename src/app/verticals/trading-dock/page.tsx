import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, BarChart3, LineChart, BookOpen, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Trading Dock | Dockfinity",
    description: "Market research, analytics tools, and investor education.",
};

export default function TradingDockPage() {
    return (
        <>
            <Section className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
                <Container className="relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-md border border-white/10">
                            <BarChart3 className="w-12 h-12" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight tracking-tighter">Trading Dock</h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                            Democratizing financial intelligence through advanced analytics and education.
                        </p>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">What We Do</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                Trading Dock provides comprehensive market research and educational resources for retail and institutional investors. We build tools that help traders make data-driven decisions.
                            </p>
                            <div className="p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl flex gap-4 text-yellow-700 dark:text-yellow-400">
                                <AlertTriangle className="w-6 h-6 shrink-0 mt-0.5" />
                                <p className="text-sm font-medium leading-relaxed">
                                    <strong>Compliance Notice:</strong> No investment advisory services are provided unless duly registered/authorized as per applicable regulations. Our tools are for informational and educational purposes only.
                                </p>
                            </div>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <LineChart className="w-6 h-6 text-primary" /> Key Offerings
                            </h3>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Market Analytics:</strong> Real-time dashboards and scanners.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Education:</strong> Comprehensive courses on technical analysis.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Backtesting Tools:</strong> Validate strategies with historical data.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Community:</strong> A network of disciplined traders.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-secondary/20 border-y border-border/40">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">Our Approach</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-background rounded-3xl border border-border/50 shadow-lg shadow-primary/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                                <BookOpen className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-2xl mb-4">Learn</h3>
                            <p className="text-muted-foreground leading-relaxed">Master the fundamentals and advanced concepts of market dynamics through structured curricula.</p>
                        </div>
                        <div className="p-8 bg-background rounded-3xl border border-border/50 shadow-lg shadow-primary/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                                <LineChart className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-2xl mb-4">Analyze</h3>
                            <p className="text-muted-foreground leading-relaxed">Use our proprietary tools and screeners to spot high-probability setups in real-time.</p>
                        </div>
                        <div className="p-8 bg-background rounded-3xl border border-border/50 shadow-lg shadow-primary/5 hover:-translate-y-1 transition-transform duration-300">
                            <div className="w-20 h-20 mx-auto bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
                                <BarChart3 className="w-10 h-10" />
                            </div>
                            <h3 className="font-bold text-2xl mb-4">Execute</h3>
                            <p className="text-muted-foreground leading-relaxed">Trade with confidence using a disciplined, rule-based system that minimizes emotional errors.</p>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="text-center max-w-3xl bg-muted/20 p-12 md:p-16 rounded-[2.5rem] border border-border/50">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Start your journey</h2>
                    <p className="text-muted-foreground mb-10 text-xl font-light">
                        Join thousands of traders using our analytics platform today.
                    </p>
                    <Button size="lg" className="rounded-full px-10 h-12 text-base" asChild>
                        <Link href="/contact">Get Access</Link>
                    </Button>
                </Container>
            </Section>
        </>
    );
}
