import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { WorkShowcase } from "@/components/work/work-showcase";
import { ArrowRight, Cpu, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Delivered Systems & Proof of Work | Dockware Labs",
  description:
    "Explore production platforms, calculation engines, and software systems engineered and delivered by Dockware Labs.",
  alternates: {
    canonical: "https://dockwarelabs.dockfinity.com/work",
  },
  openGraph: {
    title: "Delivered Systems & Proof of Work | Dockware Labs",
    description:
      "Production platforms, calculation engines, and software systems delivered by Dockware Labs.",
    url: "https://dockwarelabs.dockfinity.com/work",
  },
};

export default function DockwareLabsWorkPage() {
  return (
    <div className="py-12 md:py-16">
      {/* ── SUBDOMAIN HERO ── */}
      <section className="relative overflow-hidden pb-8">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] glow-orb-blue rounded-full blur-3xl opacity-20 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              <Terminal className="w-3.5 h-3.5 text-blue-500" />
              Dockware Labs Engineering Output
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
              Engineered Systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400">
                Delivered in Production.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We design and ship high-performance software systems. Below are live systems and active engineering platforms delivered by Dockware Labs.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CASE STUDIES ── */}
      <Container>
        <WorkShowcase />

        {/* ── CONSULTATION CTA ── */}
        <div className="mt-20 rounded-3xl bg-card border border-border/80 p-8 md:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-mono font-semibold uppercase tracking-wider border border-blue-500/20">
              <Cpu className="w-3.5 h-3.5" />
              System Architecture
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground">
              Planning Your Next Enterprise Architecture?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Schedule a direct consultation with our systems architects to scope your requirements, evaluate technology trade-offs, and map your deployment roadmap.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full px-8 font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                <a href="#contact" className="flex items-center gap-2">
                  <span>Schedule Architecture Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
