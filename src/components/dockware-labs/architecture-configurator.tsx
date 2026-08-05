"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Sliders, Cpu, Server, Database, Cloud, ShieldCheck, ArrowRight } from "lucide-react";

const INDUSTRIES = [
  { id: "saas", name: "SaaS & Tech" },
  { id: "manufacturing", name: "Manufacturing & Supply Chain" },
  { id: "retail", name: "Retail & E-commerce" },
  { id: "logistics", name: "Logistics & Fleet" },
];

const BOTTLENECKS = [
  { id: "manual-data", name: "Manual Data Re-Entry & Silos" },
  { id: "unscalable-db", name: "Unscalable Legacy Database" },
  { id: "slow-apps", name: "Slow Mobile / Web Performance" },
  { id: "legacy-erp", name: "Inflexible Third-Party ERP" },
];

const SCALES = [
  { id: "internal", name: "Internal Team (10-100 Users)" },
  { id: "growth", name: "Growth Phase (10k-50k Users)" },
  { id: "enterprise", name: "Enterprise (100k+ Concurrency)" },
];

const BLUEPRINTS: Record<string, { db: string; api: string; cloud: string; sla: string; summary: string }> = {
  saas: {
    db: "PostgreSQL + ClickHouse (Analytics Isolation)",
    api: "Node.js / Go Microservices + Redis Streams",
    cloud: "AWS EKS / Elastic Container Registry + Cloudflare Workers",
    sla: "99.95% Multi-Region Uptime",
    summary: "Multi-tenant SaaS stack with row-level security and real-time analytical event streaming.",
  },
  manufacturing: {
    db: "TimescaleDB (IoT Telemetry) + PostgreSQL (Core ERP)",
    api: "FastAPI Python + MQTT Industrial Gateways",
    cloud: "AWS / Azure Hybrid + Local Edge Gateways",
    sla: "99.9% Operational Continuity SLA",
    summary: "Edge-to-cloud IoT pipeline connecting factory hardware with enterprise ERP modules.",
  },
  retail: {
    db: "PostgreSQL + Redis Cache Cluster",
    api: "Next.js App Router + GraphQL Gateway",
    cloud: "Vercel Edge Network + AWS Aurora Multi-AZ",
    sla: "<100ms Global Edge Response",
    summary: "High-performance headless e-commerce & inventory sync engine built for conversion speed.",
  },
  logistics: {
    db: "PostgreSQL + PostGIS (Geospatial Spatial Indexes)",
    api: "Node.js Websockets + RabbitMQ Message Broker",
    cloud: "AWS ECS Auto-Scaling + Offline SQLite Client Sync",
    sla: "100% Offline-First Client Guarantee",
    summary: "Geospatial fleet routing system with offline mobile sync and real-time GPS streaming.",
  },
};

export function ArchitectureConfigurator() {
  const [selectedIndustry, setSelectedIndustry] = useState("saas");
  const [selectedBottleneck, setSelectedBottleneck] = useState("manual-data");
  const [selectedScale, setSelectedScale] = useState("growth");

  const activeBlueprint = BLUEPRINTS[selectedIndustry] || BLUEPRINTS.saas;

  return (
    <section className="py-20 relative bg-background">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Interactive Technical Tool
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            System Architecture Configurator
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            Select your industry, operational bottleneck, and scale parameters to generate a custom system architecture blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Parameters (Left Column) */}
          <div className="lg:col-span-6 space-y-6 bg-card/75 backdrop-blur-md border border-border/80 rounded-3xl p-7 shadow-lg">
            <div className="flex items-center gap-2 pb-3 border-b border-border/80 text-foreground font-mono text-xs font-bold uppercase">
              <Sliders className="w-4 h-4 text-blue-500" />
              <span>Configure System Requirements</span>
            </div>

            {/* 1. Industry */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
                1. Select Industry Vertical
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {INDUSTRIES.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display text-left border transition-all ${
                      selectedIndustry === ind.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-secondary/60 text-foreground border-border/80 hover:bg-secondary"
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
                2. Select Core Inefficiency
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {BOTTLENECKS.map((bot) => (
                  <button
                    key={bot.id}
                    onClick={() => setSelectedBottleneck(bot.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display text-left border transition-all ${
                      selectedBottleneck === bot.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-secondary/60 text-foreground border-border/80 hover:bg-secondary"
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
                3. Select Target User Scale
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {SCALES.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setSelectedScale(sc.id)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold font-display text-left border transition-all ${
                      selectedScale === sc.id
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-secondary/60 text-foreground border-border/80 hover:bg-secondary"
                    }`}
                  >
                    {sc.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Blueprint Output (Right Column) */}
          <div className="lg:col-span-6 bg-card border border-blue-500/30 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500" />

            <div className="flex items-center justify-between pb-3 border-b border-border/80">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-500">
                Generated Architecture Blueprint
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Live Specification
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Recommended Stack Blueprint
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                {activeBlueprint.summary}
              </p>
            </div>

            {/* Architectural Modules */}
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 space-y-1">
                <span className="text-muted-foreground uppercase text-[10px] block font-semibold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-blue-500" /> Database & Storage Layer
                </span>
                <span className="font-bold text-foreground block">{activeBlueprint.db}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 space-y-1">
                <span className="text-muted-foreground uppercase text-[10px] block font-semibold flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-blue-500" /> API Gateway & Microservices
                </span>
                <span className="font-bold text-foreground block">{activeBlueprint.api}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 space-y-1">
                <span className="text-muted-foreground uppercase text-[10px] block font-semibold flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5 text-blue-500" /> Cloud Infrastructure & Edge
                </span>
                <span className="font-bold text-foreground block">{activeBlueprint.cloud}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-secondary/80 border border-border/80 space-y-1">
                <span className="text-muted-foreground uppercase text-[10px] block font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Target Resilience SLA
                </span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400 block">{activeBlueprint.sla}</span>
              </div>
            </div>

            <Button
              asChild
              className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-lg shadow-blue-500/20"
            >
              <a href="#contact">
                Discuss This Blueprint <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
