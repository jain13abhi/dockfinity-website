import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code2, Cpu, Laptop, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Dockware Labs | Dockfinity",
    description: "Enterprise SaaS, Automation, and Custom Software Engineering.",
};

export default function DockwareLabsPage() {
    return (
        <>
            <Section className="bg-primary text-primary-foreground pt-32 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,transparent)]" />
                <Container className="relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-8 backdrop-blur-md border border-white/10">
                            <Code2 className="w-12 h-12" />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight tracking-tighter">Dockware Labs</h1>
                        <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                            We engineer intelligent software systems that automate complexity and drive business growth.
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
                                Dockware Labs is the technology arm of Dockfinity. We partner with enterprises to build custom software solutions, from internal automation tools to customer-facing SaaS platforms. Our focus is on scalability, security, and performance.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We don't just write code; we architect systems that solve real business problems.
                            </p>
                        </div>
                        <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                <Cpu className="w-6 h-6 text-primary" /> Core Competencies
                            </h3>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Custom ERP/CRM:</strong> Tailored operational software.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>AI & Automation:</strong> Workflow automation and intelligent agents.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>SaaS Development:</strong> End-to-end product engineering.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <span><strong>Cloud Infrastructure:</strong> Scalable AWS/Azure architecture.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-secondary/20 border-y border-border/40">
                <Container>
                    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-tight">How We Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: Laptop, title: "Discovery", desc: "We deep dive into your business processes to identify bottlenecks." },
                            { icon: Code2, title: "Architecture", desc: "Designing robust, scalable systems using modern tech stacks." },
                            { icon: Cpu, title: "Development", desc: "Agile sprints with frequent deliverables and testing." },
                            { icon: Rocket, title: "Deployment", desc: "Smooth rollout with CI/CD and ongoing support." },
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to upgrade your tech stack?</h2>
                    <p className="text-muted-foreground mb-10 text-xl font-light">
                        Let's discuss how we can automate your operations and prepare your business for scale.
                    </p>
                    <Button size="lg" className="rounded-full px-10 h-12 text-base" asChild>
                        <Link href="/contact">Book a Consultation</Link>
                    </Button>
                </Container>
            </Section>
        </>
    );
}
