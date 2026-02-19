import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, TrendingUp, Gift } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Our Verticals",
    description: "Explore the diverse business verticals under Dockfinity Private Limited.",
};

export default function VerticalsPage() {
    return (
        <>
            <Section className="bg-muted/10 pt-32 pb-20 border-b border-border/40">
                <Container className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Our Verticals</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                        Diverse industries, one commitment to excellence. Explore our specialized business units.
                    </p>
                </Container>
            </Section>

            <div className="space-y-0">
                {/* Dockware Labs */}
                <Section className="border-b border-border/50">
                    <Container>
                        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                                    <Terminal className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Dockware Labs</h2>
                                <h3 className="text-xl md:text-2xl text-muted-foreground font-light">SaaS, Automation & Custom Software</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Dockware Labs helps businesses streamline operations through intelligent software solutions. We specialize in building custom ERPs, CRMs, and AI-driven automation tools that drive efficiency and growth.
                                </p>
                                <div className="pt-2">
                                    <Button size="lg" className="rounded-full px-8" asChild>
                                        <Link href="/verticals/dockware-labs">
                                            Explore Dockware Labs <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary rounded-3xl border border-border flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-primary/5">
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] duration-[1500ms]" />
                                    <div className="absolute inset-0 bg-grid-primary [mask-image:linear-gradient(0deg,white,transparent)] opacity-10" />
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-primary/20 group-hover:text-primary/40 transition-colors">Dockware</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Trading Dock */}
                <Section className="border-b border-border/50 bg-secondary/20">
                    <Container>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                                    <TrendingUp className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Trading Dock</h2>
                                <h3 className="text-xl md:text-2xl text-muted-foreground font-light">Market Research & Analytics</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Empowering the next generation of investors with data-backed insights and comprehensive education. We provide the tools and knowledge needed to navigate complex financial markets.
                                </p>
                                <div className="pt-2">
                                    <Button size="lg" className="rounded-full px-8" asChild>
                                        <Link href="/verticals/trading-dock">
                                            Explore Trading Dock <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="aspect-video bg-gradient-to-bl from-primary/5 to-secondary rounded-3xl border border-border flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-primary/5">
                                    <div className="absolute inset-0 bg-grid-primary [mask-image:linear-gradient(0deg,white,transparent)] opacity-10" />
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-primary/20 group-hover:text-primary/40 transition-colors">Trading Dock</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>

                {/* Impression Dock */}
                <Section>
                    <Container>
                        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                            <div className="flex-1 space-y-8">
                                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-2xl text-primary mb-2">
                                    <Gift className="w-8 h-8" />
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Impression Dock</h2>
                                <h3 className="text-xl md:text-2xl text-muted-foreground font-light">Premium Gifting & Printing</h3>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    Elevate your brand presence with our premium corporate gifting and printing solutions. From custom merchandise to high-quality print collateral, we ensure your brand leaves a lasting impression.
                                </p>
                                <div className="pt-2">
                                    <Button size="lg" className="rounded-full px-8" asChild>
                                        <Link href="/verticals/impression-dock">
                                            Explore Impression Dock <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary rounded-3xl border border-border flex items-center justify-center relative overflow-hidden group shadow-2xl shadow-primary/5">
                                    <div className="absolute inset-0 bg-grid-primary [mask-image:linear-gradient(0deg,white,transparent)] opacity-10" />
                                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-primary/20 group-hover:text-primary/40 transition-colors">Impression Dock</span>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Section>
            </div>

            <Section className="bg-primary text-primary-foreground">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold mb-6">Have a custom requirement?</h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
                        Our distinct verticals allow us to offer end-to-end solutions for businesses. Let us know how we can help.
                    </p>
                    <Button size="lg" variant="secondary" className="rounded-full px-8 font-semibold" asChild>
                        <Link href="/contact">Contact Our Team</Link>
                    </Button>
                </Container>
            </Section>
        </>
    );
}
