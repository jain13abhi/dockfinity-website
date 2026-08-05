"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TechBackground } from "@/components/dockware-labs/tech-background";
import { DockwarePillars } from "@/components/dockware-labs/pillars";
import { PillarDrawer } from "@/components/dockware-labs/pillar-drawer";
import { SampleAppsShowcase } from "@/components/dockware-labs/sample-apps-showcase";
import { ArchitectureConfigurator } from "@/components/dockware-labs/architecture-configurator";
import { TechStackMatrix } from "@/components/dockware-labs/tech-stack-matrix";
import { DockwareProcess } from "@/components/dockware-labs/process";
import { DockwareEnquiry } from "@/components/dockware-labs/enquiry-section";
import { Cpu, ArrowRight, ShieldCheck, Activity, Terminal, Server, CheckCircle } from "lucide-react";

export default function DockwareLabsSubdomainPage() {
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null);
  const [selectedPillarId, setSelectedPillarId] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen">
      {/* Background SVG Grid Pattern */}
      <TechBackground activePillarIndex={activePillarIndex} />

      {/* Slide-over Deep-Dive Drawer for Selected Pillar */}
      <PillarDrawer
        pillarId={selectedPillarId}
        onClose={() => setSelectedPillarId(null)}
      />

      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 min-h-[85vh] flex items-center z-10">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category Badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-blue-500" />
                </div>
                <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  Enterprise Software · Apps · Automation · Support
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                Engineering Systems.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 dark:from-blue-400 dark:via-blue-500 dark:to-indigo-400">
                  Scaling Businesses.
                </span>
              </h1>

              {/* Sub-line */}
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-normal">
                Dockware Labs is Dockfinity&apos;s technology arm. We architect custom enterprise software, mobile apps, automation pipelines, IoT hardware systems, managed IT support, and high-performance digital presence.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
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

              {/* Live System Telemetry Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono font-medium text-muted-foreground">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-border">
                  <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-border">
                  <Activity className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>SLA-Backed Ops Support</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-card border border-border">
                  <Terminal className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Custom Architecture Stack</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Engineering Standards Console */}
            <div className="lg:col-span-5 lg:mt-24 bg-card border border-border rounded-3xl p-6 md:p-8 shadow-2xl space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-border font-mono text-xs">
                <span className="font-bold text-foreground flex items-center gap-2">
                  ENGINEERING STANDARDS & TARGETS
                </span>
                <span className="text-muted-foreground uppercase">SPECIFICATION</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 flex items-center justify-between">
                  <span className="text-muted-foreground uppercase font-semibold">AVAILABILITY DESIGN</span>
                  <span className="font-bold text-foreground">High Availability Architecture</span>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 flex items-center justify-between">
                  <span className="text-muted-foreground uppercase font-semibold">SECURITY STANDARD</span>
                  <span className="font-bold text-blue-500">ISO 27001 Preparedness</span>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 flex items-center justify-between">
                  <span className="text-muted-foreground uppercase font-semibold">MULTI-TENANCY</span>
                  <span className="font-bold text-foreground">Row-Level Data Partitioning</span>
                </div>

                <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 flex items-center justify-between">
                  <span className="text-muted-foreground uppercase font-semibold">PERFORMANCE GOAL</span>
                  <span className="font-bold text-blue-500">Edge Network Optimization</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-blue-500" /> PostgreSQL / Node / Docker
                </span>
                <span className="text-blue-500 font-semibold">Production Ready</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5 SERVICE PILLARS (CLICKABLE DRAWERS) ── */}
      <div className="relative z-10">
        <DockwarePillars
          onPillarHover={setActivePillarIndex}
          onPillarSelect={(pillarId) => setSelectedPillarId(pillarId)}
        />
      </div>

      {/* ── INTERACTIVE SAMPLE APPS SHOWCASE ── */}
      <div className="relative z-10">
        <SampleAppsShowcase />
      </div>

      {/* ── SYSTEM ARCHITECTURE CONFIGURATOR TOOL ── */}
      <div className="relative z-10">
        <ArchitectureConfigurator />
      </div>

      {/* ── PROVEN TECH STACK MATRIX ── */}
      <div className="relative z-10">
        <TechStackMatrix />
      </div>

      {/* ── HOW WE WORK ── */}
      <div className="relative z-10">
        <DockwareProcess />
      </div>

      {/* ── CONTACT / ENQUIRY ── */}
      <div className="relative z-10">
        <DockwareEnquiry />
      </div>
    </div>
  );
}
