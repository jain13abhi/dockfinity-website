import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Printer, Package, Palette, Truck, Star } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Impressio Dock | Dockfinity",
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

export default function ImpressioDockPage() {
    return (
        <>
            {/* HERO */}
            <section className="relative pt-36 pb-24 bg-foreground text-background overflow-hidden">
                <div className="absolute inset-0 bg-ledger-grid opacity-[0.08] pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-14 h-14 border border-background/30 flex items-center justify-center">
                                <Gift className="w-7 h-7 text-amber-400" />
                            </div>
                            <span className="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-widest border border-background/30 text-background/80 font-mono">
                                Gifting · Printing · Merch
                            </span>
                        </div>

                        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
                            Impressio<br />
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
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 font-mono">What We Do</p>
                            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                                Your Brand,<br />Made Tangible.
                            </h2>
                            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Impressio Dock helps brands connect with employees and clients through tangible, premium experiences. We specialize in end-to-end merchandising — from design and sourcing to printing and last-mile logistics.
                                </p>
                                <p>
                                    Whether it is an onboarding kit for new hires, festive hampers for clients, or event merchandise at scale — we ensure every item reflects the quality of your brand.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                <Button className="rounded-sm px-8 font-semibold bg-amber-600 text-white hover:bg-amber-600 shadow-sm" asChild>
                                    <Link href="/contact">Request a Catalog <ArrowRight className="ml-2 w-4 h-4" /></Link>
                                </Button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((s) => (
                                <div key={s.title} className="p-6 bg-card border border-border border-t-2 border-t-amber-600/60 entry-hover">
                                    <div className="w-11 h-11 border border-border flex items-center justify-center mb-4">
                                        <s.icon className="w-5 h-5 text-amber-600" />
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
                <div className="absolute inset-0 bg-ledger-grid opacity-50 pointer-events-none" />
                <Container className="relative z-10">
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 font-mono mb-3">How It Works</p>
                        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">From Concept to Delivery</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {process.map((p) => (
                            <div key={p.step} className="p-7 bg-card border border-border hover:border-amber-600/40 transition-colors duration-200 group">
                                <div className="font-mono text-2xl font-semibold text-amber-600 mb-4">{p.step}</div>
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
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600 font-mono mb-3">Why Impressio Dock</p>
                        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">Quality You Can Feel</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                            {[
                                { icon: Star, label: "Premium Materials", desc: "Sourced from trusted vendor networks across India" },
                                { icon: Package, label: "B2B Bulk Orders", desc: "Scalable fulfillment from 50 to 50,000 units" },
                                { icon: Truck, label: "Pan-India Delivery", desc: "3–7 business day domestic shipping" },
                            ].map((w) => (
                                <div key={w.label} className="p-6 bg-card border border-border">
                                    <div className="w-10 h-10 border border-border flex items-center justify-center mx-auto mb-3">
                                        <w.icon className="w-5 h-5 text-amber-600" />
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
                <div className="absolute inset-0 bg-ledger-grid opacity-[0.08] pointer-events-none" />
                <Container className="relative z-10 text-center">
                    <Gift className="w-10 h-10 text-amber-600 mx-auto mb-6" />
                    <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Make an Impression.</h2>
                    <p className="text-xl text-background/60 max-w-xl mx-auto mb-8 font-light">
                        Get a custom quote for your next corporate event, onboarding program, or gifting campaign.
                    </p>
                    <Button className="rounded-sm px-10 h-14 text-base font-semibold bg-amber-600 text-white hover:bg-amber-600 shadow-lg transition-all duration-300" asChild>
                        <Link href="/contact">Request Catalog <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </Container>
            </section>
        </>
    );
}
