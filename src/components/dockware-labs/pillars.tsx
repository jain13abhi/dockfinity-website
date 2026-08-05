"use client";

import { Container } from "@/components/ui/container";
import { Server, Smartphone, Cpu, LifeBuoy, Globe } from "lucide-react";

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
    layerCode: "04 // INTERACTION LAYER",
    title: "Digital Presence & Experiences",
    icon: Globe,
    desc: "Custom website design and digital brand platforms that give enterprise capabilities a high-credibility digital storefront. High-performance, SEO-optimized, and conversion-focused.",
    capabilities: ["Custom Website Engineering", "Performance & Technical SEO", "Digital Experience Design"],
    badge: "1 of 5 Offerings",
  },
];

interface PillarsProps {
  onPillarHover: (index: number | null) => void;
}

export function DockwarePillars({ onPillarHover }: PillarsProps) {
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
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            Dockware Labs delivers complete technical scope — from backend ERP databases and custom mobile apps to smart automation, security support, and digital web presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILLARS.map((p, idx) => {
            const IconComponent = p.icon;
            return (
              <div
                key={p.id}
                onMouseEnter={() => onPillarHover(idx)}
                onMouseLeave={() => onPillarHover(null)}
                className="group relative p-8 rounded-2xl bg-card/75 backdrop-blur-md border border-border/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono text-blue-500 font-medium">
                      {p.layerCode}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {p.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all">
                    <IconComponent className="w-6 h-6 text-blue-500" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-2">
                    {p.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[11px] font-mono text-muted-foreground bg-secondary/80 px-2.5 py-1 rounded-md border border-border/50"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
