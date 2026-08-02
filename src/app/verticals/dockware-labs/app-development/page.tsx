import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
    Smartphone, ArrowRight, ArrowLeft, Apple, AppWindow, Rocket, RefreshCw, CheckCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "App Development | Dockware Labs — Dockfinity",
    description: "Mobile and web applications built for real users, from first version to scale.",
};

const capabilities = [
    { icon: Apple, title: "iOS & Android Apps", desc: "Native and cross-platform mobile apps for your customers or your internal team." },
    { icon: AppWindow, title: "Web Applications", desc: "Full-featured apps that run in the browser — no install required, works everywhere." },
    { icon: Rocket, title: "MVP Development", desc: "Launch fast, validate your idea with real users, and iterate based on what you learn." },
    { icon: RefreshCw, title: "App Modernization", desc: "Rebuild or upgrade an existing app that's become slow, outdated, or hard to maintain." },
];

const process = [
    { step: "01", title: "Discovery", desc: "We understand your users, your goals, and what the app actually needs to do." },
    { step: "02", title: "Design", desc: "Wireframes and interfaces built for how people actually use their phones and browsers." },
    { step: "03", title: "Build", desc: "Agile development with frequent builds you can test along the way." },
    { step: "04", title: "Launch & Iterate", desc: "App store submission, deployment, and ongoing updates based on real usage." },
];

export default function AppDevelopmentPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <Link href="/verticals/dockware-labs" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft className="w-3.5 h-3.5" /> Dockware Labs
                    </Link>
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                                <Smartphone className="w-7 h-7 text-blue-500" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                                Mobile · Web
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            Apps Built<br /><span className="text-blue-500">For Real Users.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-10">
                            From your first version to something that scales — mobile and web apps engineered to work, and built to last.
                        </p>
                        <Button size="xl" className="h-14 px-10 rounded-full text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto" asChild>
                            <Link href="/contact">Discuss Your App <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* CAPABILITIES */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">What We Build</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">From First Version to Scale.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">Whether it&apos;s a brand-new idea or an app that&apos;s outgrown its foundations, we build for where you&apos;re headed.</p>
                        </div>

                        {/* Phone mockup illustration */}
                        <div className="relative animate-float flex justify-center">
                            <div className="absolute -top-4 right-1/4 w-28 h-28 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                            <div className="relative w-56 rounded-[2rem] border-4 border-border/50 bg-card shadow-2xl shadow-blue-500/10 overflow-hidden">
                                <div className="h-6 bg-secondary/50 flex items-center justify-center">
                                    <div className="w-16 h-2.5 rounded-full bg-border/70" />
                                </div>
                                <div className="p-4 space-y-3">
                                    <div className="h-3 w-2/3 rounded-full shimmer-bar" />
                                    <div className="h-3 w-1/2 rounded-full bg-secondary" />
                                    <div className="h-24 rounded-xl bg-blue-500/10 border border-blue-500/20" />
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="h-12 rounded-lg bg-secondary" />
                                        <div className="h-12 rounded-lg bg-secondary" />
                                    </div>
                                    <div className="h-8 w-full rounded-full bg-blue-500 mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {capabilities.map((c) => (
                            <div key={c.title} className="p-6 bg-card rounded-2xl border border-border/50 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <c.icon className="w-5 h-5 text-blue-500" />
                                </div>
                                <h3 className="font-display font-bold text-base mb-2">{c.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* PROCESS */}
            <section className="py-14 md:py-20 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-20 fade-seam-bottom pointer-events-none" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">Our Process</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">How We Work</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((p) => (
                            <div key={p.step} className="relative p-7 bg-card rounded-2xl border border-border/50 hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="font-display text-6xl font-bold text-blue-500/10 group-hover:text-blue-500/20 transition-colors mb-4">{p.step}</div>
                                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* TRUST */}
            <section className="py-16">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">Backed By Dockfinity</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">Enterprise-Grade, From Day One.</h2>
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
                            {["ISO 27001:2022", "ISO 9001:2015", "ISO 20000-1:2018", "DPIIT Recognized"].map((c) => (
                                <span key={c} className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0" /> {c}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-20 fade-seam-bottom pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Have an App Idea?</h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8 font-light">Let&apos;s talk through what you&apos;re building and how to get there.</p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
                        <Link href="/contact">Discuss Your App <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
