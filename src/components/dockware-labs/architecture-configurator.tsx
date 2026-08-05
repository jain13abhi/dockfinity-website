"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Sliders, Database, Server, Cloud, ShieldCheck, ArrowRight, Layers, Cpu, Globe, CheckCircle2, type LucideIcon } from "lucide-react";

const INDUSTRIES = [
  { id: "saas", name: "SaaS & B2B Tech" },
  { id: "manufacturing", name: "Manufacturing & Supply Chain" },
  { id: "retail", name: "Retail & E-Commerce" },
  { id: "logistics", name: "Fleet & Logistics" },
];

const BOTTLENECKS = [
  { id: "manual-data", name: "Manual Data Entry & Silos" },
  { id: "unscalable-db", name: "Unscalable Legacy Database" },
  { id: "slow-apps", name: "Slow App & Web Speed" },
  { id: "legacy-erp", name: "Inflexible Third-Party ERP" },
];

const SCALES = [
  { id: "internal", name: "Internal Team (10-100 Users)" },
  { id: "growth", name: "Growth Phase (10k-50k Users)" },
  { id: "enterprise", name: "Enterprise (100k+ Concurrency)" },
];

const TOPOLOGIES: Record<string, { nodes: { id: string; name: string; type: string; icon: LucideIcon }[]; summary: string; sla: string }> = {
  saas: {
    summary: "Multi-tenant SaaS topology with tenant-key data partitioning and real-time Kafka event streams.",
    sla: "Multi-Region High Availability",
    nodes: [
      { id: "client", name: "Headless Web / Mobile", type: "Client Layer", icon: Globe },
      { id: "gateway", name: "GraphQL & REST Gateway", type: "API Layer", icon: Server },
      { id: "logic", name: "Go / Node Microservices", type: "Logic Layer", icon: Cpu },
      { id: "db", name: "PostgreSQL + ClickHouse", type: "Storage Layer", icon: Database },
      { id: "cloud", name: "AWS EKS Multi-AZ", type: "Cloud Infra", icon: Cloud },
    ],
  },
  manufacturing: {
    summary: "Edge-to-cloud IoT pipeline connecting factory sensor hardware with enterprise ERP modules.",
    sla: "High-Continuity Hardware Pipeline",
    nodes: [
      { id: "client", name: "Factory Sensor Gateways", type: "Hardware Layer", icon: Cpu },
      { id: "gateway", name: "MQTT Broker & Gateway", type: "Ingestion Layer", icon: Server },
      { id: "logic", name: "Python FastAPI Telemetry", type: "AI Engine", icon: Layers },
      { id: "db", name: "TimescaleDB + PostgreSQL", type: "Storage Layer", icon: Database },
      { id: "cloud", name: "AWS Hybrid Edge", type: "Cloud Infra", icon: Cloud },
    ],
  },
  retail: {
    summary: "High-throughput e-commerce inventory sync engine built for sub-100ms global edge response.",
    sla: "Edge-Optimized Low Latency",
    nodes: [
      { id: "client", name: "Next.js PWA Storefront", type: "Client Layer", icon: Globe },
      { id: "gateway", name: "Cloudflare Edge Workers", type: "API Layer", icon: Server },
      { id: "logic", name: "Inventory Sync Service", type: "Logic Layer", icon: Cpu },
      { id: "db", name: "PostgreSQL + Redis Cache", type: "Storage Layer", icon: Database },
      { id: "cloud", name: "Vercel Edge + AWS Aurora", type: "Cloud Infra", icon: Cloud },
    ],
  },
  logistics: {
    summary: "Geospatial fleet routing system with offline mobile sync engine and real-time GPS streaming.",
    sla: "Offline-First Reliable Sync",
    nodes: [
      { id: "client", name: "React Native Drivers App", type: "Client Layer", icon: Globe },
      { id: "gateway", name: "Websockets GPS Stream", type: "API Layer", icon: Server },
      { id: "logic", name: "PostGIS Routing Engine", type: "Geospatial Logic", icon: Cpu },
      { id: "db", name: "PostgreSQL / Spatial DB", type: "Storage Layer", icon: Database },
      { id: "cloud", name: "AWS Auto-Scaling Cluster", type: "Cloud Infra", icon: Cloud },
    ],
  },
};

export function ArchitectureConfigurator() {
  const [selectedIndustry, setSelectedIndustry] = useState("saas");
  const [selectedBottleneck, setSelectedBottleneck] = useState("manual-data");
  const [selectedScale, setSelectedScale] = useState("growth");

  const activeTopology = TOPOLOGIES[selectedIndustry] || TOPOLOGIES.saas;

  return (
    <section className="py-20 relative bg-background">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Interactive Architecture Generator
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            System Architecture Configurator
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            Select your industry, operational bottleneck, and scale parameters to generate an interactive system topology diagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Options (Left Column) */}
          <div className="lg:col-span-5 space-y-6 bg-card border border-border rounded-3xl p-7 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-border text-foreground font-mono text-xs font-bold uppercase">
                <Sliders className="w-4 h-4 text-blue-500" />
                <span>Configure System Parameters</span>
              </div>

              {/* 1. Industry */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  1. Industry Vertical
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold font-display text-left border transition-all ${
                        selectedIndustry === ind.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-secondary text-foreground border-border/80 hover:bg-secondary/80"
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Bottleneck */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  2. Operational Inefficiency
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {BOTTLENECKS.map((bot) => (
                    <button
                      key={bot.id}
                      onClick={() => setSelectedBottleneck(bot.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold font-display text-left border transition-all ${
                        selectedBottleneck === bot.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-secondary text-foreground border-border/80 hover:bg-secondary/80"
                      }`}
                    >
                      {bot.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Scale */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  3. User Concurrency Scale
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {SCALES.map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => setSelectedScale(sc.id)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold font-display text-left border transition-all ${
                        selectedScale === sc.id
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-secondary text-foreground border-border/80 hover:bg-secondary/80"
                      }`}
                    >
                      {sc.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Architecture Summary Box */}
            <div className="pt-4 border-t border-border/80 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-muted-foreground font-bold">
                <span>ACTIVE CONFIGURATION</span>
                <span className="text-blue-500 uppercase">{selectedIndustry}</span>
              </div>
              <div className="p-3 rounded-xl bg-secondary/80 border border-border/60 text-[11px] text-muted-foreground leading-relaxed flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>
                  Configured for <strong className="text-foreground">{INDUSTRIES.find((i) => i.id === selectedIndustry)?.name}</strong> solving <strong className="text-foreground">{BOTTLENECKS.find((b) => b.id === selectedBottleneck)?.name}</strong> at <strong className="text-foreground">{SCALES.find((s) => s.id === selectedScale)?.name}</strong>.
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Topology Visualizer (Right Column) */}
          <div className="lg:col-span-7 bg-card border border-border rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-500">
                  System Topology Blueprint
                </span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-bold">
                  {activeTopology.sla}
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  System Flow Diagram
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                  {activeTopology.summary}
                </p>
              </div>

              {/* Connected Node Topology Diagram */}
              <div className="space-y-3 pt-2">
                {activeTopology.nodes.map((node, i) => {
                  const NodeIcon = node.icon;
                  return (
                    <div key={node.id} className="relative">
                      {/* Node Card */}
                      <div className="p-4 rounded-2xl bg-secondary/70 border border-border/80 flex items-center justify-between transition-all hover:border-blue-500/40">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                            <NodeIcon className="w-4 h-4 text-blue-500" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-muted-foreground uppercase font-semibold block">
                              {node.type}
                            </span>
                            <span className="font-display text-sm font-bold text-foreground block">
                              {node.name}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono font-bold text-blue-500 bg-background px-2.5 py-1 rounded-md border border-border">
                          STAGE 0{i + 1}
                        </span>
                      </div>

                      {/* Connecting Pipe */}
                      {i < activeTopology.nodes.length - 1 && (
                        <div className="w-0.5 h-3 bg-blue-500/30 mx-auto my-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <Button
              asChild
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-lg shadow-blue-500/20 mt-4"
            >
              <a href="#contact">
                Request Architecture Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
