import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Cpu, Smartphone, ArrowRight, Server, LifeBuoy, Globe } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Dockware Labs | Dockfinity",
    description: "Enterprise software, app development, automation & IoT, IT consulting, and digital presence — the technology arm of Dockfinity.",
};

const pillars = [
    {
        icon: Server,
        title: "Enterprise Solutions",
        desc: "Custom ERP and CRM systems, plus our own in-house SaaS products — software engineered to run your business, not just support it.",
    },
    {
        icon: Smartphone,
        title: "App Development",
        desc: "Mobile and web applications built for real users, from first version to scale.",
    },
    {
        icon: Cpu,
        title: "Automation & IoT",
        desc: "Workflow automation, AI agents, and IoT-driven systems that connect your physical and digital operations.",
    },
    {
        icon: LifeBuoy,
        title: "IT Consulting & Managed Support",
        desc: "Ongoing technical advisory and managed support so your systems stay reliable, secure, and current.",
    },
    {
        icon: Globe,
        title: "Digital Presence",
        desc: "Websites and digital marketing that get your business found — and get you leads.",
        href: "/digital-services",
        linkLabel: "Explore Digital Services",
    },
];

const process = [
    { step: "01", title: "Discovery", desc: "We deep-dive into your operations to understand every bottleneck, inefficiency, and opportunity." },
    { step: "02", title: "Architecture", desc: "We design robust, scalable systems using modern tech stacks tailored to your specific context." },
    { step: "03", title: "Development", desc: "Agile sprints with frequent deliverables, continuous testing, and complete transparency." },
    { step: "04", title: "Deployment", desc: "Smooth rollout with CI/CD pipelines, post-launch support, and performance monitoring." },
];

export default function DockwareLabsPage() {
    return (
        <>
            {/* ── HERO ── */}
            <section className="relative pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center">
                                <Cpu className="w-7 h-7 text-blue-500" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                                SaaS · Automation · AI
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            Dockware<br />
                            <span className="text-blue-500">Labs.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                            We engineer intelligent software systems that automate complexity, eliminate inefficiencies, and drive measurable business growth.
                        </p>
                    </div>
                </Container>
            </section>


            {/* ── WHAT WE DO ── */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="max-w-3xl mb-14">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">What We Do</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                            Systems That Solve.<br />Software That Scales.
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Dockware Labs is the technology arm of Dockfinity — five capabilities, one team. From enterprise systems to the websites and marketing that get you found, we cover the full stack a growing business needs.
                            </p>
                        </div>

                        <div className="mt-6 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl">
                            <p className="text-sm font-medium text-foreground flex items-start gap-3">
                                <Server className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                ISO 27001:2022 certified. Everything we build adheres to enterprise-grade security and quality standards.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pillars.map((p) => (
                            <div
                                key={p.title}
                                className="p-6 bg-card rounded-2xl border border-border/50 border-t-2 border-t-blue-500/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <p.icon className="w-5 h-5 text-blue-500" />
                                </div>
                                <h3 className="font-display font-bold text-base mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                                {p.href && (
                                    <Link href={p.href} className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-500 hover:text-blue-600 transition-colors">
                                        {p.linkLabel} <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </Container>
            </section>


            {/* ── PROCESS ── */}
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
                            <div
                                key={p.step}
                                className="relative p-7 bg-card rounded-2xl border border-border/50 hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="font-display text-6xl font-bold text-blue-500/10 group-hover:text-blue-500/20 transition-colors mb-4">
                                    {p.step}
                                </div>
                                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>


            {/* ── TECH STACK NOTE ── */}
            <section className="py-20">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">What We Use</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">Built on Modern Foundations</h2>
                        <p className="text-muted-foreground mb-10">We work with the technology stack that best fits your needs — not the one that&apos;s most comfortable for us.</p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {["React / Next.js", "Node.js", "Python", "AWS / Azure", "PostgreSQL", "Redis", "Docker", "Kubernetes", "REST & GraphQL", "CI/CD Pipelines"].map((tech) => (
                                <span key={tech} className="px-4 py-2 rounded-full bg-secondary border border-border/60 text-sm font-medium text-foreground font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>


            {/* ── CTA ── */}
            <section className="py-16 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-20 fade-seam-bottom pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Ready to Upgrade Your Tech Stack?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8 font-light">
                        Let&apos;s map your business operations and design a software architecture that actually scales.
                    </p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
                        <Link href="/contact">Book a Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
