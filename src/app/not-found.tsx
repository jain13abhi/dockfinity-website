import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Page Not Found",
};

export default function NotFound() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden min-h-[70vh] flex items-center">
            <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] glow-orb-amber rounded-full blur-3xl opacity-20 pointer-events-none" />

            <Container className="relative z-10">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono mb-6">
                        404
                    </div>
                    <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-5">
                        Page not{" "}
                        <span className="text-gradient-brand">found.</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light mb-10">
                        The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button asChild size="lg" className="rounded-full px-8">
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" /> Back to Home
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                            <Link href="/contact">
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
