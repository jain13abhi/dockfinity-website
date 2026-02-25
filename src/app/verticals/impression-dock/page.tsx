import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Printer, Package, Palette, Truck, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Impression Dock | Dockfinity",
    description: "Premium corporate gifting, custom merchandise, and high-quality offset printing solutions.",
};

const services = [
    { icon: Gift, title: "Corporate Gifting", desc: "Curated premium gift boxes and hampers for clients, employees, and events." },
    { icon: Palette, title: "Custom Merchandise", desc: "T-shirts, hoodies, bottles, and more — precision-branded with your identity." },
    { icon: Printer, title: "Offset & Digital Print", desc: "High-quality brochures, business cards, packaging, and large-format prints." },
    { icon: Truck, title: "End-to-End Fulfillment", desc: "Warehousing, kitting, and direct shipping to your office or individual recipients." },
];

const process = [
    { step: "01", title: "Design & Consult", desc: "Work with our creative team to select products, finalize designs, and align with your brand guidelines." },
    { step: "02", title: "Sourcing", desc: "We source premium-quality materials from our vetted, trusted vendor network across India." },
    { step: "03", title: "Production", desc: "Precision printing and brand application on every item — zero compromise on quality." },
    { step: "04", title: "Delivery", desc: "Kitting, packing, and shipping directly to your office or individual addresses across India." },
];

export default function ImpressionDockPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative pt-36 pb-24 bg-foreground text-background overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />
                <div className="absolute bottom-0 left-1/3 w-[600px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                                <Gift className="w-7 h-7 text-amber-400" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-500/20 text-amber-400 border border-amber-500/30 font-mono">
                                Gifting · Printing · Merch
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
                            Impression<br />
                            <span className="text-amber-400">Dock.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-background/70 max-w-2xl leading-relaxed font-light">
                            Curated corporate gifting and premium printing solutions that leave a mark — on every stakeholder, every time.
                        </p>
                    </div>
                </Container>
            </section>

            {/* SERVICES */}
            <section className="py-20 md:py-28">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-6">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 font-mono">What We Do</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                                Your Brand,<br />Made Tangible.
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Impression Dock helps brands connect with employees and clients through tangible, premium experiences. We specialize in end-to-end merchandising — from design and sourcing to printing and last-mile logistics.
                                </p>
                                <p>
                                    Whether it is an onboarding kit for new hires, festive hampers for clients, or event merchandise at scale — we ensure every item reflects the quality of your brand.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button className="rounded-full px-8 font-semibold bg-amber-500 text-white hover:bg-amber-600 shadow-sm" asChild>
                                    <Link href="/contact">Request a Catalog <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((s) => (
                                <div key={s.title} className="p-6 bg-card rounded-2xl border border-border/50 border-t-2 border-t-amber-500/60 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                                        <s.icon className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <h3 className="font-display font-bold text-base mb-2">{s.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* PROCESS */}
            <section className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 font-mono mb-3">How It Works</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">From Concept to Delivery</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((p) => (
                            <div key={p.step} className="p-7 bg-card rounded-2xl border border-border/50 hover:border-amber-500/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="font-display text-6xl font-bold text-amber-500/10 group-hover:text-amber-500/20 transition-colors mb-4">{p.step}</div>
                                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* WHY US */}
            <section className="py-20">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 font-mono mb-3">Why Impression Dock</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">Quality You Can Feel</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            {[
                                { icon: Star, label: "Premium Materials", desc: "Sourced from trusted vendor networks across India" },
                                { icon: Package, label: "B2B Bulk Orders", desc: "Scalable fulfillment from 50 to 50,000 units" },
                                { icon: Truck, label: "Pan-India Delivery", desc: "3–7 business day domestic shipping" },
                            ].map((w) => (
                                <div key={w.label} className="p-6 bg-card rounded-2xl border border-border/50">
                                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <w.icon className="w-5 h-5 text-amber-500" />
                                    </div>
                                    <div className="font-display font-bold mb-1">{w.label}</div>
                                    <p className="text-sm text-muted-foreground">{w.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-20 bg-foreground text-background relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <Gift className="w-10 h-10 text-amber-500 mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Make an Impression.</h2>
                    <p className="text-xl text-background/60 max-w-xl mx-auto mb-8 font-light">
                        Get a custom quote for your next corporate event, onboarding program, or gifting campaign.
                    </p>
                    <Button className="rounded-full px-10 h-14 text-base font-semibold bg-amber-500 text-white hover:bg-amber-600 shadow-lg transition-all duration-300" asChild>
                        <Link href="/contact">Request Catalog <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
