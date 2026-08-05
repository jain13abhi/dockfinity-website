"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Smartphone, Server, BarChart3, CheckCircle2, ArrowRight, Layers, Shield, Zap } from "lucide-react";

const SAMPLE_APPS = [
  {
    id: "logistics-app",
    title: "Enterprise Fleet & Logistics Mobile App",
    category: "Custom App Development",
    icon: Smartphone,
    tagline: "Real-Time Dispatch, Route Optimization & Offline POD",
    description:
      "A cross-platform mobile application engineered for fleet operators. Handles real-time GPS tracking, automated driver dispatching, proof-of-delivery signatures, and offline data sync in remote low-network regions.",
    features: [
      "Offline-first SQLite sync engine for low connectivity",
      "Real-time Geofencing & Automated Route Optimization",
      "Digital Proof-of-Delivery (E-signatures & photo logs)",
      "Role-based access for Dispatchers, Drivers & Clients",
    ],
    techStack: ["React Native", "Node.js Microservices", "PostgreSQL / PostGIS", "Redis Streams", "Docker"],
    metrics: { latency: "<150ms sync", offlineSupport: "100%", throughput: "50k events/sec" },
  },
  {
    id: "field-service-portal",
    title: "Field Service & Asset Operations Portal",
    category: "Enterprise Solutions & IoT",
    icon: Server,
    tagline: "Automated Work Orders, Equipment Telemetry & Spare Inventory",
    description:
      "An integrated web platform connecting field maintenance engineers with central operations. Automatically ingests IoT sensor alerts to trigger predictive work orders and deduct spare parts inventory in real-time.",
    features: [
      "Automated IoT telemetry alerts & ticket generation",
      "Dynamic technician scheduling with calendar drag-and-drop",
      "Automated ERP inventory deduction on job closure",
      "Audit trail compliance & equipment health history",
    ],
    techStack: ["Next.js App Router", "Python / FastAPI", "TimescaleDB", "MQTT Gateways", "AWS Elastic Container"],
    metrics: { uptime: "99.95%", ticketLatency: "<2 sec", IoTHandling: "10k messages/sec" },
  },
  {
    id: "saas-analytics",
    title: "SaaS Executive Analytics & Reporting Platform",
    category: "In-House SaaS Architecture",
    icon: BarChart3,
    tagline: "Multi-Tenant KPI Aggregation, Custom Dashboards & Automated Export",
    description:
      "A high-throughput analytics engine designed for B2B SaaS platforms. Enables multi-tenant isolation, real-time KPI streaming, customizable drag-and-drop dashboard widgets, and scheduled PDF/Excel report exports.",
    features: [
      "Isolated multi-tenant tenant-key data partitioning",
      "Real-time event streaming & instant widget re-rendering",
      "Custom scheduled report generator with email automation",
      "Granular role-based permissions (SuperAdmin, OrgAdmin, Analyst)",
    ],
    techStack: ["React / TypeScript", "Go (Golang) Microservices", "ClickHouse / PostgreSQL", "Apache Kafka"],
    metrics: { queryTime: "<80ms", multiTenancy: "Strict Row-Level Isolation", exportSpeed: "<3 sec" },
  },
];

export function SampleAppsShowcase() {
  const [selectedApp, setSelectedApp] = useState(SAMPLE_APPS[0]);

  return (
    <section className="py-20 bg-secondary/20 relative border-y border-border/60">
      <Container>
        <div className="max-w-3xl mb-14">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Sample Solution Concepts
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Software We Architect
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            Explore sample application architectures and solution blueprints designed for high-concurrency enterprise execution.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-border/80 pb-4">
          {SAMPLE_APPS.map((app) => {
            const IconComp = app.icon;
            const isSelected = selectedApp.id === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{app.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected App Detailed Card Display */}
        <div className="bg-card/85 backdrop-blur-md border border-border/80 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Description & Specs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                {selectedApp.category}
              </span>
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">
                {selectedApp.title}
              </h3>
              <p className="text-blue-500 font-mono text-sm font-medium">{selectedApp.tagline}</p>
            </div>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-normal">
              {selectedApp.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">Key Architectural Capabilities</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedApp.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-4 border-t border-border/60">
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider block mb-2 font-semibold">
                Engineered With Stack:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedApp.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium text-foreground bg-secondary px-3 py-1 rounded-lg border border-border/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Telemetry Box */}
          <div className="lg:col-span-5 bg-secondary/60 border border-border/80 rounded-2xl p-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-border/80">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-foreground">
                Performance Telemetry Benchmark
              </span>
            </div>

            <div className="space-y-4">
              {Object.entries(selectedApp.metrics).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between p-3 rounded-xl bg-card border border-border/60">
                  <span className="font-mono text-xs uppercase text-muted-foreground font-medium">{key}</span>
                  <span className="font-mono text-xs font-bold text-blue-500">{val}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-muted-foreground leading-relaxed">
              <div className="flex items-center gap-2 font-mono font-bold text-foreground mb-1">
                <Shield className="w-3.5 h-3.5 text-blue-500" />
                <span>Enterprise SLA Guarantee</span>
              </div>
              All solution blueprints include CI/CD automated deployment scripts, failover backups, and security access logging.
            </div>

            <Button
              asChild
              className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md"
            >
              <a href="#contact">
                Request Solution Blueprint <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
