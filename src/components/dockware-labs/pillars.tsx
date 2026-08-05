"use client";

import { Container } from "@/components/ui/container";
import { Server, Smartphone, Cpu, LifeBuoy, Globe, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    id: "enterprise-solutions",
    layerCode: "01 // INFRASTRUCTURE & CLOUD",
    title: "Enterprise Solutions",
    icon: Server,
    desc: "Custom ERP and CRM platforms, alongside our own in-house SaaS products. Engineered to streamline operations, unify data silos, and scale cloud infrastructure.",
    capabilities: ["Custom ERP & CRM Systems", "In-House SaaS Products", "Cloud & Database Architecture"],
    badge: "Operational Core",
  },
  {
    id: "app-development",
    layerCode: "02 // DATA & STATE CORE",
    title: "Custom Software & App Development",
    icon: Smartphone,
    desc: "High-performance web applications and native/cross-platform mobile apps built with modern tech stacks. From MVP architecture to enterprise-scale deployment.",
    capabilities: ["Web & SaaS Applications", "iOS & Android Mobile Apps", "Scalable Microservices"],
    badge: "User Experience",
  },
  {
    id: "automation-iot",
    layerCode: "03 // MICROSERVICES & AI",
    title: "Automation & IoT",
    icon: Cpu,
    desc: "Intelligent workflow automation pipelines, autonomous AI agents, and IoT smart-hardware integrations that connect physical hardware with cloud software.",
    capabilities: ["Workflow Automation Pipelines", "Autonomous AI Agents", "IoT & Embedded Systems"],
    badge: "Intelligent Systems",
  },
  {
    id: "it-consulting",
    layerCode: "04 // APPLICATIONS & INTERFACES",
    title: "IT Consulting & Managed Support",
    icon: LifeBuoy,
    desc: "Strategic technical advisory, infrastructure audits, security hardening, and 24/7 managed support to keep mission-critical systems resilient and compliant.",
    capabilities: ["Technical Advisory & Audits", "Managed Support SLAs", "Security & Compliance"],
    badge: "System Resilience",
  },
  {
    id: "digital-presence",
    layerCode: "05 // INTERACTION LAYER",
    title: "Digital Presence & Experiences",
    icon: Globe,
    desc: "Custom website design and digital brand platforms that give enterprise capabilities a high-credibility digital storefront. High-performance, SEO-optimized, and conversion-focused.",
    capabilities: ["Custom Website Engineering", "Performance & Technical SEO", "Digital Experience Design"],
    badge: "1 of 5 Offerings",
  },
];

interface PillarsProps {
  onPillarHover: (index: number | null) => void;
  onPillarSelect?: (pillarId: string) => void;
}

export function DockwarePillars({ onPillarHover, onPillarSelect }: PillarsProps) {
  return (
    <section id="services" className="py-20 relative">
      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Core Service Architecture
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Five Capabilities.<br />One Focused Technology Arm.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-normal">
            Dockware Labs delivers complete technical scope. Click any pillar below to inspect deep-dive architecture specs, deliverables, and SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                aria-label={`Inspect ${p.title} architectural specifications`}
                onClick={() => onPillarSelect?.(p.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onPillarSelect?.(p.id);
                  }
                }}
                onMouseEnter={() => onPillarHover(idx)}
                onMouseLeave={() => onPillarHover(null)}
                className="group cursor-pointer relative p-8 rounded-2xl bg-card/75 backdrop-blur-md border border-border/80 hover:border-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Glowing Shimmer Accent Line on Hover */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono text-blue-500 font-semibold tracking-wider">
                      {p.layerCode}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                      {p.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-blue-500" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground tracking-tight mb-3 group-hover:text-blue-500 transition-colors flex items-center justify-between">
                    <span>{p.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-normal mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-2">
                    {p.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[11px] font-mono font-medium tracking-wide text-foreground bg-secondary/90 px-2.5 py-1 rounded-md border border-border/60"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-blue-500 mt-4 group-hover:translate-x-1 transition-transform duration-300">
                    Inspect Architectural Specs →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
