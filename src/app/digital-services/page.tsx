import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
    Globe, ArrowRight, ArrowLeft, ShoppingCart, LayoutTemplate, RefreshCw, Wrench,
    Search, MapPin, Share2, Megaphone, MessageCircle, Palette, CheckCircle, Heart,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Digital Services — Websites & Marketing | Dockfinity",
    description: "Business websites, e-commerce, SEO, social media, and digital marketing — from Dockware Labs, the technology arm of Dockfinity.",
};

const websiteServices = [
    { icon: LayoutTemplate, title: "Business Websites", desc: "Clean, fast, professional sites that represent your business well." },
    { icon: ShoppingCart, title: "E-Commerce", desc: "Online stores built to convert visitors into customers." },
    { icon: Globe, title: "Landing Pages", desc: "Focused, high-conversion pages for campaigns and launches." },
    { icon: RefreshCw, title: "Website Redesign", desc: "Bring an outdated site up to modern speed and design standards." },
    { icon: Wrench, title: "Maintenance & Support", desc: "Ongoing updates, fixes, and hosting support so you never have to worry about it." },
];

const marketingServices = [
    { icon: Search, title: "SEO", desc: "Get found on Google when customers search for what you do." },
    { icon: MapPin, title: "Google Business Profile & Listings", desc: "Local visibility on Google Maps, JustDial, IndiaMART, and more." },
    { icon: Share2, title: "Social Media Marketing", desc: "Consistent, on-brand presence across Instagram, Facebook, and LinkedIn." },
    { icon: Megaphone, title: "Paid Advertising", desc: "Google and Meta ad campaigns built to bring in qualified leads." },
    { icon: MessageCircle, title: "WhatsApp Marketing", desc: "Reach customers directly, where they already are." },
    { icon: Palette, title: "Branding & Content", desc: "Logos, brand identity, and content that make you memorable." },
];

const process = [
    { step: "01", title: "Discovery", desc: "We understand your business, your goals, and who you're trying to reach." },
    { step: "02", title: "Plan", desc: "A clear scope and timeline — website, marketing, or both." },
    { step: "03", title: "Build & Launch", desc: "Design, development, and campaign setup, done right the first time." },
    { step: "04", title: "Grow & Support", desc: "Ongoing optimization and support to keep results coming." },
];

export default function DigitalServicesPage() {
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
                                <Globe className="w-7 h-7 text-blue-500" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                                Websites · Marketing
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            Get Found.<br /><span className="text-blue-500">Get Leads.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light mb-10">
                            Professional websites and digital marketing that turn your online presence into a real source of business — backed by Dockfinity.
                        </p>
                        <Button size="xl" className="h-14 px-10 rounded-full text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 w-full sm:w-auto" asChild>
                            <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                    </div>
                </Container>
            </section>

            {/* WEBSITES */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">Websites</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">A Site That Works as Hard as You Do.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">Fast, clean, and built to convert — not just to look nice.</p>
                        </div>

                        {/* Browser mockup illustration */}
                        <div className="relative animate-float">
                            <div className="absolute -top-4 -right-4 w-28 h-28 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                            <div className="relative rounded-2xl border border-border/50 bg-card shadow-2xl shadow-blue-500/10 overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/50">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                                    <div className="ml-3 flex-1 h-5 rounded-full bg-background/80 border border-border/40 flex items-center px-3">
                                        <span className="text-[10px] text-muted-foreground font-mono">yourbusiness.com</span>
                                    </div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="h-3 w-2/3 rounded-full shimmer-bar" />
                                    <div className="h-3 w-1/2 rounded-full bg-secondary" />
                                    <div className="grid grid-cols-3 gap-3 pt-2">
                                        <div className="h-16 rounded-lg bg-secondary" />
                                        <div className="h-16 rounded-lg bg-blue-500/10 border border-blue-500/20" />
                                        <div className="h-16 rounded-lg bg-secondary" />
                                    </div>
                                    <div className="h-8 w-28 rounded-full bg-blue-500 mt-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {websiteServices.map((s) => (
                            <div key={s.title} className="p-6 bg-card rounded-2xl border border-border/50 hover:border-blue-500/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-11 h-11 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <s.icon className="w-5 h-5 text-blue-500" />
                                </div>
                                <h3 className="font-display font-bold text-base mb-2">{s.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* MARKETING */}
            <section className="py-14 md:py-20 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-20 fade-seam-bottom pointer-events-none" />
                <Container className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="max-w-xl mb-10">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">Marketing</p>
                                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Be Where Your Customers Are Looking.</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">A website alone isn&apos;t enough — we help people actually find it.</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                                {marketingServices.map((s) => (
                                    <div key={s.title} className="flex items-start gap-3">
                                        <s.icon className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h3 className="font-semibold text-foreground text-sm mb-0.5">{s.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social post mockup illustration */}
                        <div className="relative animate-float flex justify-center lg:justify-end">
                            <div className="absolute -bottom-4 right-8 w-28 h-28 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />
                            <div className="relative w-full max-w-xs rounded-2xl border border-border/50 bg-card shadow-2xl shadow-blue-500/10 overflow-hidden">
                                <div className="flex items-center gap-3 p-4 border-b border-border/50">
                                    <div className="w-9 h-9 rounded-full bg-blue-500/20 shrink-0" />
                                    <div className="flex-1 space-y-1.5">
                                        <div className="h-2.5 w-2/3 rounded-full bg-secondary" />
                                        <div className="h-2 w-1/3 rounded-full bg-secondary/70" />
                                    </div>
                                </div>
                                <div className="h-32 shimmer-bar" />
                                <div className="flex items-center gap-4 p-4">
                                    <Heart className="w-4 h-4 text-blue-500" />
                                    <MessageCircle className="w-4 h-4 text-muted-foreground" />
                                    <Share2 className="w-4 h-4 text-muted-foreground" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* PROCESS */}
            <section className="py-14 md:py-20">
                <Container>
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 font-mono mb-3">How It Works</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">From First Call to Live Results</h2>
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
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">Not a Freelancer. A Certified Company.</h2>
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
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready to Get Online the Right Way?</h2>
                    <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-8 font-light">Tell us about your business — we&apos;ll tell you exactly what you need.</p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-blue-500/25 transition-all duration-300" asChild>
                        <Link href="/contact">Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
