"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TechBackground } from "@/components/dockware-labs/tech-background";
import { DockwarePillars } from "@/components/dockware-labs/pillars";
import { DockwareProcess } from "@/components/dockware-labs/process";
import { DockwareEnquiry } from "@/components/dockware-labs/enquiry-section";
import { Cpu, ArrowRight, ShieldCheck, Activity, Terminal } from "lucide-react";

export default function DockwareLabsSubdomainPage() {
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden min-h-[85vh] flex items-center">
        {/* Volumetric 3D Architectural Systems Engine Canvas */}
        <TechBackground activePillarIndex={activePillarIndex} />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Top Category Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                <Cpu className="w-6 h-6 text-blue-500" />
              </div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Enterprise Software · Apps · Automation · Support
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6">
              Engineering Systems.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400">
                Scaling Businesses.
              </span>
            </h1>

            {/* Sub-line naming the 5 business lines */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed font-light mb-8">
              Dockware Labs is Dockfinity&apos;s technology arm. We architect custom enterprise software, mobile apps, automation pipelines, IoT hardware systems, managed IT support, and high-performance digital presence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full px-8 h-14 text-base font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/25 transition-all duration-300"
              >
                <a href="#contact">
                  Book Architecture Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 h-14 text-base font-semibold border-border bg-card text-foreground hover:bg-secondary"
              >
                <a href="#services">Explore Capabilities</a>
              </Button>
            </div>

            {/* Live System Telemetry Strip */}
            <div className="mt-12 flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border">
                <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                <span>ISO 27001:2022 Certified</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border">
                <Activity className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>SLA-Backed Systems Support</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border">
                <Terminal className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Custom Architecture Stack</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5 SERVICE PILLARS ── */}
      <DockwarePillars onPillarHover={setActivePillarIndex} />

      {/* ── HOW WE WORK ── */}
      <DockwareProcess />

      {/* ── CONTACT / ENQUIRY ── */}
      <DockwareEnquiry />
    </>
  );
}
