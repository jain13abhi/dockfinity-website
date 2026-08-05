"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { TechBackground } from "@/components/dockware-labs/tech-background";
import { DockwarePillars } from "@/components/dockware-labs/pillars";
import { DockwareProcess } from "@/components/dockware-labs/process";
import { DockwareEnquiry } from "@/components/dockware-labs/enquiry-section";
import { Cpu, ArrowRight, ShieldCheck } from "lucide-react";

export default function DockwareLabsSubdomainPage() {
  const [activePillarIndex, setActivePillarIndex] = useState<number | null>(null);

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden min-h-[85vh] flex items-center">
        {/* Dynamic Architectural Geometry Canvas Background */}
        <TechBackground activePillarIndex={activePillarIndex} />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Top Category Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-950/40">
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-blue-950/80 text-blue-300 border border-blue-800/50">
                Enterprise Software · Apps · Automation · Support
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-6">
              Engineering Systems.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                Scaling Businesses.
              </span>
            </h1>

            {/* Sub-line naming the 5 business lines */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed font-light mb-8">
              Dockware Labs is Dockfinity&apos;s technology arm. We architect custom enterprise software, mobile apps, automation pipelines, IoT hardware systems, managed IT support, and high-performance digital presence.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                className="rounded-full px-8 h-14 text-base font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-900/40 transition-all duration-300"
              >
                <a href="#contact">
                  Book Architecture Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 h-14 text-base font-semibold border-slate-700 bg-slate-900/60 text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                <a href="#services">Explore Capabilities</a>
              </Button>
            </div>

            {/* Certification / Security note */}
            <div className="mt-12 inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
              <span>ISO 27001:2022 Security Standards & Enterprise Infrastructure SLA Support</span>
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
