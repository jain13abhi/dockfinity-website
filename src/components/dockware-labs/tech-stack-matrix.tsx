"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Cpu, Server, Smartphone, Cloud, Shield, Database, Terminal } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Technologies" },
  { id: "backend", label: "Backend & DB" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "ai", label: "AI & Automation" },
  { id: "security", label: "Security & Audits" },
];

const STACK_ITEMS = [
  { name: "React / Next.js 16", category: "frontend", desc: "App Router, SSR, Turbopack, Edge Functions", metric: "<100ms LCP" },
  { name: "React Native", category: "frontend", desc: "Cross-platform iOS & Android, Native Modules", metric: "60 FPS Native" },
  { name: "Node.js / TypeScript", category: "backend", desc: "Event-driven REST & GraphQL microservices", metric: ">15k rps" },
  { name: "Python / FastAPI", category: "backend", desc: "Async API gateways, data ML pipelines", metric: "Sub-10ms API" },
  { name: "Go (Golang)", category: "backend", desc: "Ultra-high concurrency system services", metric: ">50k rps" },
  { name: "PostgreSQL & PostGIS", category: "backend", desc: "Relational core, geospatial indexing, JSONB", metric: "ACID Compliant" },
  { name: "TimescaleDB & ClickHouse", category: "backend", desc: "Time-series IoT telemetry & analytical columnar DB", metric: "Billion-row query <50ms" },
  { name: "Redis & RabbitMQ", category: "backend", desc: "In-memory caching, message brokers, pub-sub", metric: "Sub-millisecond" },
  { name: "AWS & Azure Cloud", category: "cloud", desc: "EKS, ECS, Lambda Serverless, Multi-AZ Aurora", metric: "99.95% SLA" },
  { name: "Docker & Kubernetes", category: "cloud", desc: "Container orchestration, automated scaling", metric: "Zero Downtime Deploy" },
  { name: "AI Agents & LangChain", category: "ai", desc: "LLM agents, vector embeddings, RAG pipelines", metric: "Autonomous Workflows" },
  { name: "MQTT & Industrial IoT", category: "ai", desc: "Hardware sensor gateways, telemetry streams", metric: "Real-Time Ingestion" },
  { name: "ISO 27001 Security", category: "security", desc: "Encrypted data at rest (AES-256) and transit (TLS 1.3)", metric: "Audited Standards" },
  { name: "WAF & Cloudflare Enterprise", category: "security", desc: "DDoS mitigation, bot protection, Turnstile", metric: "Edge Shielding" },
];

export function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? STACK_ITEMS
      : STACK_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 relative bg-secondary/20 border-t border-border/60">
      <Container>
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Technology Matrix
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Proven Engineering Stack
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            We work with Battle-tested frameworks, cloud infrastructure, and security standards tailored to your business scale.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-2xl bg-card/80 backdrop-blur-md border border-border/80 hover:border-blue-500/40 transition-all hover:shadow-lg space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-base text-foreground tracking-tight">
                    {item.name}
                  </h3>
                  <Terminal className="w-4 h-4 text-blue-500 shrink-0" />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-muted-foreground uppercase font-medium">Benchmark</span>
                <span className="text-[11px] font-mono font-bold text-blue-500">{item.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
