import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Target, Globe2 } from "lucide-react";

export const metadata = {
    title: "About Us",
    description: "Learn more about Dockfinity Private Limited, our mission, and our group companies.",
};

export default function AboutPage() {
    return (
        <>
            <Section className="bg-muted/10 pt-32 pb-20 border-b border-border/40">
                <Container className="text-center">
                    <div className="inline-flex items-center rounded-full border border-primary/10 bg-background px-3 py-1 text-xs font-medium text-foreground mb-6">
                        Since 2025
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">About Dockfinity</h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                        Dockfinity Private Limited is a forward-thinking holding company dedicated to building and scaling technology-driven ventures.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Who We Are</h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                                <p>
                                    Founded with a vision to innovate across multiple sectors, Dockfinity serves as the umbrella brand for a diverse portfolio of businesses. From enterprise software to financial education and premium corporate gifting, we are committed to excellence in every vertical.
                                </p>
                                <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl">
                                    <p className="font-medium text-foreground text-base flex items-start gap-4">
                                        <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                                        Dockfinity acts as the strategic backbone, providing governance, resources, and vision to our operational verticals.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-8 bg-secondary/30 border border-border/50 rounded-3xl flex flex-col justify-center items-center text-center hover:bg-secondary/50 transition-colors">
                                <Target className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Our Mission</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">To empower businesses and individuals through technology, education, and innovation.</p>
                            </div>
                            <div className="p-8 bg-background border border-border rounded-3xl flex flex-col justify-center items-center text-center shadow-lg shadow-primary/5 sm:mt-12">
                                <Globe2 className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-bold text-xl mb-2">Our Vision</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">Building a sustainable ecosystem of high-growth ventures that solve real-world problems.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Core Values</h2>
                            <p className="text-muted-foreground text-lg">The principles that guide every decision we make.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <ValueCard title="Integrity" description="We believe in transparent, ethical business practices. Trust is our most valuable currency." icon={<CheckCircle2 className="w-6 h-6 text-primary" />} />
                            <ValueCard title="Innovation" description="We constantly challenge the status quo to deliver better, faster, and smarter solutions." icon={<Target className="w-6 h-6 text-primary" />} />
                            <ValueCard title="Excellence" description="We strive for perfection in every product we ship and every service we provide to our clients." icon={<ShieldCheck className="w-6 h-6 text-primary" />} />
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-border/50 pb-8">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">Group Structure</h2>
                                <p className="text-muted-foreground text-lg">Our strategic partnerships and associate companies.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative overflow-hidden p-8 rounded-3xl border border-border bg-background/50 hover:bg-secondary/50 transition-colors group">
                                <div className="absolute top-8 right-8 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                    Associate
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">Metaloc India Private Limited</h3>
                                <p className="text-muted-foreground mt-4 leading-relaxed">
                                    Focused on industrial solutions, manufacturing excellence, and supply chain optimization for heavy industries.
                                </p>
                            </div>

                            <div className="relative overflow-hidden p-8 rounded-3xl border border-border bg-background/50 hover:bg-secondary/50 transition-colors group">
                                <div className="absolute top-8 right-8 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                    Associate
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">Patra Corporations Private Limited</h3>
                                <p className="text-muted-foreground mt-4 leading-relaxed">
                                    Exploring opportunities in infrastructure development and specialized logistics sectors across India.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}

function ValueCard({ title, description, icon }: { title: string, description: string, icon: React.ReactNode }) {
    return (
        <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors">
            <CardHeader>
                <div className="mb-4 p-3 bg-secondary w-fit rounded-xl">{icon}</div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </CardContent>
        </Card>
    )
}
