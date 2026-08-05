"use client";

import { Container } from "@/components/ui/container";
import { Server, Smartphone, Cpu, LifeBuoy, Globe, ArrowRight } from "lucide-react";

const PILLARS = [
  {
    id: "enterprise-solutions",
    layerCode: "L1 // INFRASTRUCTURE",
    title: "Enterprise Solutions",
    icon: Server,
    desc: "Custom ERP and CRM platforms, alongside our own in-house SaaS products. Engineered to streamline operations, unify data silos, and scale cloud infrastructure.",
    capabilities: ["Custom ERP & CRM Systems", "In-House SaaS Products", "Cloud & Database Architecture"],
    badge: "Operational Core",
  },
  {
    id: "app-development",
    layerCode: "L2 // CORE LOGIC",
    title: "Custom Software & App Development",
    icon: Smartphone,
    desc: "High-performance web applications and native/cross-platform mobile apps built with modern tech stacks. From MVP architecture to enterprise-scale deployment.",
    capabilities: ["Web & SaaS Applications", "iOS & Android Mobile Apps", "Scalable Microservices"],
    badge: "User Experience",
  },
  {
    id: "automation-iot",
    layerCode: "L3 // SERVICES & AI",
    title: "Automation & IoT",
    icon: Cpu,
    desc: "Intelligent workflow automation pipelines, autonomous AI agents, and IoT smart-hardware integrations that connect physical hardware with cloud software.",
    capabilities: ["Workflow Automation Pipelines", "Autonomous AI Agents", "IoT & Embedded Systems"],
    badge: "Intelligent Systems",
  },
  {
    id: "it-consulting",
    layerCode: "L4 // AUDIT & SUPPORT",
    title: "IT Consulting & Managed Support",
    icon: LifeBuoy,
    desc: "Strategic technical advisory, infrastructure audits, security hardening, and 24/7 managed support to keep mission-critical systems resilient and compliant.",
    capabilities: ["Technical Advisory & Audits", "Managed Support SLAs", "Security & Compliance"],
    badge: "System Resilience",
  },
  {
    id: "digital-presence",
    layerCode: "L4 // INTERACTION",
    title: "Digital Presence & Experiences",
    icon: Globe,
    desc: "Custom website design and digital brand platforms that give enterprise capabilities a high-credibility digital storefront. High-performance, SEO-optimized, and conversion-focused.",
    capabilities: ["Custom Website Engineering", "Performance & Technical SEO", "Digital Experience Design"],
    badge: "1 of 5 Service Lines",
  },
];

interface PillarsProps {
  onPillarHover: (index: number | null) => void;
}

export function DockwarePillars({ onPillarHover }: PillarsProps) {
  return (
    <section id="services" className="py-20 bg-[#090d14] relative">
      {/* Background Section Seam */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <Container>
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-400 mb-3">
            Core Service Architecture
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Five Capabilities.<br />One Focused Technology Arm.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-light">
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
                className="group relative p-8 rounded-2xl bg-[#0d131f] border border-slate-800/80 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/30 flex flex-col justify-between"
              >
                <div>
                  {/* Top Layer & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono text-blue-400/90 font-medium">
                      {p.layerCode}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-950/60 text-blue-300 border border-blue-800/40">
                      {p.badge}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-5 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-light">
                    {p.desc}
                  </p>
                </div>

                {/* Capabilities List */}
                <div className="pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    {p.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[11px] font-mono text-slate-300 bg-slate-900/80 border border-slate-800 px-2.5 py-1 rounded-md"
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
