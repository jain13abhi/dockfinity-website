import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Calculator,
  Layers,
  Ship,
  TrendingUp,
  Activity,
  ArrowRight,
  CheckCircle2,
  Lock,
  Code2,
  Clock,
  Sparkles,
} from "lucide-react";

export function WorkShowcase() {
  return (
    <div className="space-y-24 py-12">
      {/* ── PROJECT 1: METAL DOCK ── */}
      <section className="relative rounded-3xl bg-card border border-border/70 p-6 md:p-10 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Production System · Live
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Client: Metal Dock (India) Pvt. Ltd.
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground">
              Metal Dock — B2B Raw Materials & Engineering Suite
            </h2>
          </div>
          
          <Button asChild className="rounded-full font-semibold shadow-md bg-blue-600 hover:bg-blue-500 text-white">
            <a href="https://metaldock.co.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Visit Live Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left: The Problem & What Was Built */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                The Procurement Problem
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Procurement of stainless steel raw stock (coils, sheets, circles, and triply blanks) in industrial hubs like Wazirpur, Delhi historically suffered from significant calculation friction:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>
                  <strong className="text-foreground">Density & Tonnage Discrepancies:</strong> Converting physical coil dimensions into exact tonnage required tedious manual formulas across alloys with differing specific gravities (SS 202, 304, 316, 430).
                </li>
                <li>
                  <strong className="text-foreground">Uncertain Quality & Finish Verification:</strong> Buyers lacked an interactive inspection standard to verify surface sheens (2B, BA, No. 4, Mirror) and chemical compositions for specific forming requirements before dispatch.
                </li>
                <li>
                  <strong className="text-foreground">Export Logistics Blind Spots:</strong> Overseas buyers faced high freight uncertainty calculating 20ft/40ft FCL container payload limits, gross weight constraints, and CBM utilization from inland container depots.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                What Was Delivered
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A full-scale B2B web platform featuring three bespoke engineering tools that allow procurement managers and export traders to inspect, calculate, and verify order requirements in seconds without waiting for manual quotes.
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3">
                Stack Delivered
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel Edge Network"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: The 3 Live Interactive Tools */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
              Three Live Engineering Tools
            </h3>

            {/* Tool 1 */}
            <div className="p-5 rounded-2xl bg-secondary/50 border border-border hover:border-blue-500/40 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-semibold text-foreground text-sm">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <span>Weight & Gauge Calculator</span>
                </div>
                <a
                  href="https://metaldock.co.in#calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-500 hover:underline flex items-center gap-1"
                >
                  Inspect <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Calculates precise weight and tonnage for SS Circles, Sheets, and Slit Coils using exact metallurgical density formulas (7.93 g/cm³ for 304/316, 7.80 g/cm³ for 430, 7.82 g/cm³ for 202) across standard SWG gauges.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="p-5 rounded-2xl bg-secondary/50 border border-border hover:border-blue-500/40 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-semibold text-foreground text-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span>Grade, Finish & Gauge Lab</span>
                </div>
                <a
                  href="https://metaldock.co.in#grade-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-500 hover:underline flex items-center gap-1"
                >
                  Inspect <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Interactive metallurgical comparator checking chemical compositions (Cr, Ni, Mn, C) and mechanical yield strengths across SS 202, 304, 316, 430, and Tri-Ply composites with high-fidelity surface sheen inspection (2B, BA, Mirror).
              </p>
            </div>

            {/* Tool 3 */}
            <div className="p-5 rounded-2xl bg-secondary/50 border border-border hover:border-blue-500/40 transition-all space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 font-semibold text-foreground text-sm">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-brand flex items-center justify-center">
                    <Ship className="w-4 h-4" />
                  </div>
                  <span>Container Load & CBM Estimator</span>
                </div>
                <a
                  href="https://metaldock.co.in#export-estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-500 hover:underline flex items-center gap-1"
                >
                  Inspect <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Calculates 20ft / 40ft FCL container payload limits, gross weight constraints (26,000–28,000 kg), pallet stacking configurations, and cubic meter (CBM) utilization with indicative freight estimation for export shipments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT 2: DOCKLYTICS ── */}
      <section className="relative rounded-3xl bg-card border border-border/70 p-6 md:p-10 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                Active Engineering
              </span>
              <span className="text-xs font-mono text-muted-foreground">
                Built for Trading Dock
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight text-foreground">
              Docklytics — Market Data & Financial Analytics Platform
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-xl bg-secondary text-xs font-mono text-muted-foreground border border-border">
              In active development · Not publicly released
            </span>
            <Button asChild variant="outline" className="rounded-full font-semibold border-border">
              <Link href="/contact" className="flex items-center gap-1.5">
                <span>Architecture Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left: The Problem & What Was Built */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                The Financial Analytics Problem
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                Active financial market participants and quantitative analysts require synthesized market telemetry, multi-timeframe correlation, and structured volatility tracking in a single coherent interface. Off-the-shelf commercial terminals are often either rigid, difficult to customize for specific analytical models, or fragmented across disconnected charting tools.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
                What Was Delivered
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                A high-throughput market data and analytics platform designed specifically for Trading Dock&apos;s analytical workflows:
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                <li>
                  <strong className="text-foreground">Real-Time Telemetry Dashboards:</strong> Unified financial views synthesizing multiple market metrics into focused operational surfaces.
                </li>
                <li>
                  <strong className="text-foreground">Multi-Timeframe Visualization:</strong> Custom analytical workspaces designed for fast, synchronized technical comparison across various horizons.
                </li>
                <li>
                  <strong className="text-foreground">Historical Volatility & Distribution:</strong> Systematic tracking of market ranges, open interest variations, and statistical distributions.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-3">
                Stack Delivered
              </h3>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                {["Next.js & React", "TypeScript", "Python", "TimescaleDB", "Redis", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-secondary border border-border text-foreground font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Engineering Complexity (Why It Was Hard) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground font-mono mb-2">
              Engineering Complexity — Why It Was Hard
            </h3>

            <div className="p-5 rounded-2xl bg-secondary/50 border border-border space-y-3">
              <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                <Activity className="w-4 h-4 text-emerald-500" />
                <span>Zero UI Degradation Under High Frequency</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Maintaining uninterrupted 60 FPS UI rendering and zero chart stutter during rapid state updates, preventing React component re-render cascades across heavy analytical layouts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-secondary/50 border border-border space-y-3">
              <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                <TrendingUp className="w-4 h-4 text-brand" />
                <span>Multi-Timeframe Synchronization</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Synchronizing complex statistical calculations across different time aggregations simultaneously on the client while maintaining strict numerical consistency and low memory footprints.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-secondary/30 border border-border text-xs text-muted-foreground space-y-2">
              <div className="flex items-center gap-2 font-mono font-medium text-foreground">
                <Lock className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Proprietary System Notice</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Per trading operation security and intellectual property guidelines, operational feed sources, internal latency benchmarks, and proprietary analytical models are withheld from public documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
