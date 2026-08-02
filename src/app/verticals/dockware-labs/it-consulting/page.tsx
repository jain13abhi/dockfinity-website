import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
    LifeBuoy, ArrowRight, ArrowLeft, Compass, Headset, ClipboardCheck, Boxes, CheckCircle,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "IT Consulting & Managed Support | Dockware Labs — Dockfinity",
    description: "Ongoing technical advisory and managed support so your systems stay reliable, secure, and current.",
};

const capabilities = [
    { icon: Compass, title: "Technical Advisory", desc: "Guidance on technology decisions, from tool selection to system architecture." },
    { icon: Headset, title: "Managed IT Support", desc: "Ongoing maintenance, monitoring, and troubleshooting for your systems." },
    { icon: ClipboardCheck, title: "System Audits", desc: "A clear-eyed review of your current setup, with a prioritized plan to fix what's not working." },
    { icon: Boxes, title: "Vendor & Tool Management", desc: "We help you evaluate and manage the software vendors you already work with." },
];

const process = [
    { step: "01", title: "Assess", desc: "We review your current systems, tools, and pain points before recommending anything." },
    { step: "02", title: "Plan", desc: "A clear, prioritized roadmap — what to fix first, and why." },
    { step: "03", title: "Support", desc: "Ongoing advisory and hands-on support as issues come up." },
    { step: "04", title: "Review", desc: "Regular check-ins to make sure your systems are still serving the business." },
];

export default function ItConsultingPage() {
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
                                <LifeBuoy className="w-7 h-7 text-blue-500" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                                Advisory · Support
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            Technology Guidance<br /><span className="text-blue-500">You Can Rely On.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-10">
                            Ongoing advisory and managed support so your systems stay reliable, secure, and never someone else&apos;s afterthought.
                        </p>
                        <Button size="xl" className="h-14 px-10 rounded-full text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto" asChild>
                            <Link href="/contact">Get Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* CAPABILITIES */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">How We Help</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">A Technology Partner, Not Just a Vendor.</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">Most businesses don&apos;t need another tool — they need someone who understands the ones they already have.</p>
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
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Need a Technology Partner?</h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8 font-light">Tell us what&apos;s not working — we&apos;ll help you figure out what to do about it.</p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
                        <Link href="/contact">Get Support <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
