"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { X, Server, Smartphone, Bot, Cpu, LifeBuoy, Globe, CheckCircle2, ArrowRight, Shield, Zap, type LucideIcon } from "lucide-react";

interface PillarDetail {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  overview: string;
  deepDiveSpecs: { title: string; desc: string }[];
  deliverables: string[];
  techStack: string[];
  sla: string;
}

const PILLAR_DETAILS: Record<string, PillarDetail> = {
  "enterprise-solutions": {
    id: "enterprise-solutions",
    title: "Enterprise Solutions (ERP / CRM / SaaS)",
    subtitle: "Modular Core Architecture Built Around Your Custom Operations",
    icon: Server,
    overview:
      "We design and engineer enterprise-grade ERPs, CRMs, and in-house SaaS products from scratch. Unlike off-the-shelf software that forces your team into rigid workflows, our solutions are built to mirror your exact business processes, eliminate data silos, and scale infinitely on cloud infrastructure.",
    deepDiveSpecs: [
      { title: "Custom ERP Systems", desc: "Automate inventory tracking, order processing, procurement workflows, and financial ledgers with real-time auditability." },
      { title: "Enterprise CRM Portals", desc: "Pipeline tracking, lead intelligence, automated follow-ups, and role-based access for sales & ops teams." },
      { title: "In-House SaaS Products", desc: "Multi-tenant SaaS architectures with strict tenant isolation, subscription billing, and custom domain routing." },
      { title: "Multi-Region Cloud Architecture", desc: "AWS Aurora & Azure SQL setups with automated failover, zero-downtime deployments, and encrypted backups." },
    ],
    deliverables: [
      "Custom Database Schema & Microservices Codebase",
      "Admin Portal & Role-Based Access Control (RBAC)",
      "REST & GraphQL API Documentation",
      "ISO 27001 Security Audit & Automated CI/CD Pipelines",
    ],
    techStack: ["PostgreSQL", "Node.js", "Python FastAPI", "Redis", "Docker", "Kubernetes", "AWS / Azure"],
    sla: "High-Availability Multi-Region Architecture",
  },
  "app-development": {
    id: "app-development",
    title: "Custom Software & App Development",
    subtitle: "High-Performance Mobile & Web Apps Built From MVP to Enterprise Scale",
    icon: Smartphone,
    overview:
      "We build responsive web platforms and native/cross-platform mobile applications that users love. From high-concurrency B2B portals to offline-first field apps, we focus on lightning-fast load times, intuitive UX, and clean maintainable codebases.",
    deepDiveSpecs: [
      { title: "Cross-Platform Mobile Apps", desc: "Single-codebase iOS & Android apps with native device hardware access (Camera, GPS, Bluetooth, SQLite)." },
      { title: "Progressive Web Apps (PWA)", desc: "Web applications that work seamlessly offline, support push notifications, and load in under 1 second." },
      { title: "Scalable Microservices", desc: "Decoupled backend services engineered to handle sudden spikes in user traffic without performance degradation." },
      { title: "UX/UI Experience Engineering", desc: "Accessibility-first design systems built with Syne, Inter, and Tailwind v4 primitives." },
    ],
    deliverables: [
      "iOS & Android Production App Builds",
      "Headless Next.js App Router Web Platform",
      "Offline Sync Engine & Local SQLite Database",
      "Automated End-to-End Test Suite (Playwright/Jest)",
    ],
    techStack: ["React Native", "Next.js 16", "TypeScript", "Tailwind CSS v4", "GraphQL", "Node.js"],
    sla: "Edge-Optimized Low Latency Design",
  },
  "workflow-ai": {
    id: "workflow-ai",
    title: "Workflow Automation & AI Agents",
    subtitle: "Autonomous LLM Agents, Document Intelligence & Automated API Pipelines",
    icon: Bot,
    overview:
      "Eliminate manual data bottlenecks. We build custom workflow automation tools, autonomous AI agents, and document processing engines that parse unstructured data, classify support tickets, and trigger automated API workflows.",
    deepDiveSpecs: [
      { title: "Autonomous AI Agents", desc: "LLM-powered agents that parse invoices, classify support tickets, and execute multi-step API actions." },
      { title: "Workflow ETL Pipelines", desc: "Automate repetitive data transfers between legacy databases, third-party APIs, and cloud analytics." },
      { title: "Intelligent Document Processing", desc: "Extract structured JSON schema from PDFs, images, and unstructured emails automatically." },
      { title: "Custom API & Webhook Triggers", desc: "Instant automated notifications, CRM updates, and transaction logging." },
    ],
    deliverables: [
      "AI Agent Orchestration & Prompt Memory Engine",
      "Automated Document Extraction Microservices",
      "API & Webhook Integration Pipeline",
      "Automated WhatsApp & Email Alert Triggers",
    ],
    techStack: ["Python", "LangChain / OpenAI", "FastAPI", "Redis Streams", "Celery", "Go"],
    sla: "Sub-Second Workflow Trigger & Alert Execution",
  },
  "iot-systems": {
    id: "iot-systems",
    title: "IoT & Embedded Systems",
    subtitle: "Hardware Sensor Gateways & Real-Time Telemetry Data Pipelines",
    icon: Cpu,
    overview:
      "Connect physical operations with cloud software. We engineer custom hardware sensor gateways, MQTT protocol integration, and real-time telemetry streaming that feeds equipment data directly into cloud dashboards.",
    deepDiveSpecs: [
      { title: "IoT Sensor & Hardware Gateways", desc: "MQTT/HTTP protocol integration for temperature, pressure, RFID, and GPS tracking hardware." },
      { title: "Real-Time Telemetry Ingestion", desc: "High-throughput time-series data pipelines capable of handling thousands of sensor messages per second." },
      { title: "Predictive Equipment Maintenance", desc: "Machine-learning models that analyze equipment sensor patterns to flag maintenance needs." },
      { title: "Edge Computing & Local Cache", desc: "Hardware gateways that process data locally and sync with cloud databases when connected." },
    ],
    deliverables: [
      "IoT Hardware Gateway Software",
      "MQTT & WebSockets Ingestion Cluster",
      "Real-Time Equipment Telemetry Dashboard",
      "Audit Trail & Device Health Logs",
    ],
    techStack: ["Python", "TimescaleDB", "MQTT", "Timescale", "Docker Edge", "AWS IoT Core"],
    sla: "Low-Latency Sensor Ingestion & Alert Dispatch",
  },
  "it-consulting": {
    id: "it-consulting",
    title: "IT Consulting & Managed Support",
    subtitle: "Technical Advisory, Security Hardening & 24/7 Managed Operations",
    icon: LifeBuoy,
    overview:
      "Protect your technical investments and eliminate operational downtime. We act as your external technical advisory team — conducting system security audits, optimizing cloud infrastructure costs, and delivering SLA-backed 24/7 managed support.",
    deepDiveSpecs: [
      { title: "System Security & Compliance Audits", desc: "Vulnerability assessments, code audits, and ISO 27001:2022 compliance readiness checks." },
      { title: "Infrastructure Cost Optimization", desc: "Audit cloud resource utilization (AWS/Azure/GCP) to eliminate idle instances and slash monthly bills." },
      { title: "Disaster Recovery & Backup SLAs", desc: "Automated database snapshot backups, point-in-time recovery, and RTO/RPO failover drills." },
      { title: "24/7 Monitoring & Managed Ops", desc: "Round-the-clock uptime telemetry with immediate engineering incident response." },
    ],
    deliverables: [
      "Comprehensive Infrastructure Audit Report",
      "ISO 27001 Security Hardening Checklist",
      "Cloud Cost Optimization Action Plan",
      "SLA Managed Support Agreement",
    ],
    techStack: ["AWS Security Hub", "Cloudflare WAF", "Terraform", "Prometheus / Grafana", "Docker"],
    sla: "24/7 Monitoring & Proactive Support",
  },
  "digital-presence": {
    id: "digital-presence",
    title: "Digital Presence & Web Engineering",
    subtitle: "Enterprise-Grade Web Platforms That Drive Measurable Conversions",
    icon: Globe,
    overview:
      "A great digital presence is engineered, not just painted. We build custom corporate web platforms designed for speed, SEO dominance, and high-conversion user journeys. Every site is built with semantic HTML5, zero bloat, and perfect Core Web Vitals scores.",
    deepDiveSpecs: [
      { title: "Custom Web Engineering", desc: "Bespoke Next.js web applications tailored to your corporate visual identity with dynamic motion." },
      { title: "Core Web Vitals Optimization", desc: "Sub-second initial page load times, zero layout shift (CLS), and 95+ Google Lighthouse scores." },
      { title: "Technical & Local SEO Architecture", desc: "Structured JSON-LD schema, dynamic open-graph social cards, and automated sitemaps." },
      { title: "Secure Form & Lead Routing", desc: "Integrated spam shielding (Turnstile), Resend email notifications, and instant CRM/Google Sheets sync." },
    ],
    deliverables: [
      "Headless Next.js 16 Web Platform",
      "Tailwind CSS v4 Custom Design Tokens",
      "SEO JSON-LD Schema & Metadata Config",
      "Resend & Turnstile Server Actions Integration",
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Vercel Edge", "Resend API"],
    sla: "Core Web Vitals Performance Optimization",
  },
};

interface PillarDrawerProps {
  pillarId: string | null;
  onClose: () => void;
}

export function PillarDrawer({ pillarId, onClose }: PillarDrawerProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (pillarId) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [pillarId, onClose]);

  if (!pillarId || !PILLAR_DETAILS[pillarId]) return null;

  const detail = PILLAR_DETAILS[pillarId];
  const IconComp = detail.icon;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-md animate-fade-in transition-opacity duration-300">
      {/* Click Outside Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Drawer Content Panel with Smooth Slide-In & Dialog Semantics */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="pillar-drawer-title"
        className="relative z-10 w-full max-w-2xl bg-card border-l border-border h-full overflow-y-auto p-6 md:p-10 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out translate-x-0"
      >
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <IconComp className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 block">
                  Pillar Specification
                </span>
                <h2 id="pillar-drawer-title" className="font-display text-2xl font-bold text-foreground tracking-tight">
                  {detail.title}
                </h2>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close specification drawer"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Subtitle & Overview */}
          <div className="space-y-3">
            <h3 className="font-display text-lg font-semibold text-foreground">
              {detail.subtitle}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-normal">
              {detail.overview}
            </p>
          </div>

          {/* Deep Dive Specs */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" /> Core Architectural Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.deepDiveSpecs.map((spec) => (
                <div key={spec.title} className="p-4 rounded-xl bg-secondary/70 border border-border/80 space-y-1 hover:border-blue-500/40 transition-colors">
                  <span className="font-display text-sm font-bold text-foreground block">
                    {spec.title}
                  </span>
                  <span className="text-xs text-muted-foreground leading-relaxed font-normal block">
                    {spec.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" /> Standard Deliverables
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {detail.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack & SLA */}
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground uppercase font-bold">Target Architecture Profile</span>
              <span className="font-bold text-blue-500">{detail.sla}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-muted-foreground uppercase block mb-1.5 font-semibold">
                Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {detail.techStack.map((tech) => (
                  <span key={tech} className="text-[11px] font-mono font-medium text-foreground bg-card px-2.5 py-0.5 rounded-md border border-border/80">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-border mt-8 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="flex-1 h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md"
            onClick={onClose}
          >
            <a href="#contact">
              Discuss {detail.title.split(" ")[0]} <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="h-12 rounded-xl border-border text-foreground hover:bg-secondary"
          >
            Close Specification
          </Button>
        </div>
      </div>
    </div>
  );
}
