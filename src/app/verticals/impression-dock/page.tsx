import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift, Printer, Package, Palette } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Impression Dock | Dockfinity",
    description: "Corporate gifting, printing, and personalization services.",
};

export default function ImpressionDockPage() {
    return (
        <>
            <Section className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
                <Container className="relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-md border border-white/10">
                            <Gift className="w-12 h-12" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight tracking-tighter">Impression Dock</h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                            Curated corporate gifting and premium printing solutions that leave a mark.
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
                                Impression Dock helps brands connect with employees and clients through tangible experiences. We specialize in end-to-end merchandising, from design and sourcing to printing and logistics.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Whether it's onboarding kits or event swag, we ensure high-quality delivery.
                            </p>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Package className="w-6 h-6 text-primary" /> Our Services
                            </h3>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Corporate Gifting:</strong> Premium, curated gift boxes and hampers.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Custom Merch:</strong> T-shirts, hoodies, bottles with branding.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Offset & Digital Impact:</strong> Brochures, business cards, larger formats.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Fulfillment:</strong> Warehousing and shipping directly to recipients.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-secondary/20 border-y border-border/40">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Palette, title: "Design", desc: "Consult with our team to choose products and finalize designs." },
                            { icon: Package, title: "Sourcing", desc: "We source high-quality materials from trusted vendors." },
                            { icon: Printer, title: "Production", desc: "Precision printing and branding on your selected items." },
                            { icon: Gift, title: "Delivery", desc: "Kitting and shipping to your office or individual addresses." },
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 bg-background rounded-3xl border border-border/50 shadow-lg shadow-primary/5 hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-6">
                                    <step.icon className="w-7 h-7" />
                                </div>
                                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container className="text-center max-w-3xl bg-muted/20 p-12 md:p-16 rounded-[2.5rem] border border-border/50">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Make an impression</h2>
                    <p className="text-muted-foreground mb-10 text-xl font-light">
                        Get a quote for your next corporate event or gifting requirement.
                    </p>
                    <Button size="lg" className="rounded-full px-10 h-12 text-base" asChild>
                        <Link href="/contact">Request Catalog</Link>
                    </Button>
                </Container>
            </Section>
        </>
    );
}
