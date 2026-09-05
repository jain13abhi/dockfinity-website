import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { WorkShowcase } from "@/components/work/work-showcase";
import Link from "next/link";
import { ArrowRight, Code, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Delivered Systems & Case Studies | Dockfinity",
  description:
    "Production engineering and real delivered systems built by Dockfinity and Dockware Labs — including Metal Dock B2B procurement suite and Docklytics market analytics.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Delivered Systems & Case Studies | Dockfinity",
    description:
      "Production engineering and real delivered systems built by Dockfinity and Dockware Labs.",
    url: "https://dockfinity.com/work",
  },
};

export default function WorkPage() {
  return (
    <div className="pt-28 pb-20">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pb-12">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[400px] glow-orb-blue rounded-full blur-3xl opacity-20 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary border border-border text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              <Code className="w-3.5 h-3.5 text-brand" />
              Delivered Work & Production Systems
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.08] mb-6">
              Real Work. <br />
              <span className="text-gradient-brand">Delivered Engineering.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We engineer custom software platforms, industrial tools, and data systems for active commercial operations. Inspect our production work and active technical deliveries below.
            </p>
          </div>
        </Container>
      </section>

      {/* ── CASE STUDIES ── */}
      <Container>
        <WorkShowcase />

        {/* ── BOTTOM CTA ── */}
        <div className="mt-20 rounded-3xl bg-card border border-border/80 p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-mono font-semibold uppercase tracking-wider border border-brand/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Technical Partnership
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground">
              Have a Mission-Critical System to Engineer?
            </h2>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Whether you need complex calculation engines, B2B procurement portals, or custom internal platforms — talk directly with our engineering team.
            </p>
            <div className="pt-2">
              <Button asChild size="lg" className="rounded-full px-8 font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-md">
                <Link href="/contact" className="flex items-center gap-2">
                  <span>Start an Architecture Discussion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
