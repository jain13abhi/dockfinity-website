import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Seal } from "@/components/ui/seal";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Gift,
  ChevronRight,
  Cpu,
  BarChart3,
  Award,
  Building2,
  Zap,
  CheckCircle,
} from "lucide-react";

/* ─── Trust Register ─────────────────────────────────── */
const trustItems = [
  { label: "ISO 27001:2022", sub: "Information Security" },
  { label: "ISO 9001:2015", sub: "Quality Management" },
  { label: "ISO 20000-1:2018", sub: "IT Service Mgmt" },
  { label: "DPIIT Recognized", sub: "Startup India" },
  { label: "UDYAM Registered", sub: "MSME India" },
  { label: "Govt of India", sub: "Verified Entity" },
];

/* ─── Ledger Stats ───────────────────────────────────── */
const stats = [
  { value: "03", label: "Active Verticals", sub: "Tech · Finance · Gifting" },
  { value: "03", label: "ISO Certifications", sub: "27001 · 9001 · 20000-1" },
  { value: "100%", label: "Compliance Rate", sub: "All Regulatory Standards" },
  { value: "2025", label: "Established", sub: "DPIIT Recognized Startup" },
];

/* ─── Advantages ─────────────────────────────────────── */
const advantages = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Trust",
    desc: "Triple ISO certified and DPIIT recognized. Your business is backed by internationally validated standards.",
  },
  {
    icon: Zap,
    title: "Technology-First DNA",
    desc: "We don't consult. We build. Every vertical is engineered to deliver measurable outcomes, fast.",
  },
  {
    icon: Building2,
    title: "Holding-Company Strength",
    desc: "One partnership unlocks three verticals — software, finance, and gifting under a single governance structure.",
  },
  {
    icon: Award,
    title: "Governance & Compliance",
    desc: "CIN registered, GSTIN active, UDYAM certified. We operate with full corporate transparency at every level.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════ */}
      {/*  HERO                                             */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute inset-0 bg-ledger-grid opacity-60 pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">

            {/* Registry reference line */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-border font-mono text-[11px] tracking-[0.15em] text-muted-foreground uppercase animate-reveal mb-8">
              <span>Reg. CIN U66190DL2025PTC454662</span>
              <span className="text-border">·</span>
              <span>Est. 2025</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold tracking-tight leading-[1.06] animate-reveal delay-100 text-balance mb-6 text-foreground">
              We Build. We Govern.
              <br className="hidden sm:block" /> We Endure.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-reveal delay-200 mb-10">
              Dockfinity is India&apos;s technology-first holding company — engineering the next generation of{" "}
              <span className="text-foreground font-medium">enterprise software</span>,{" "}
              <span className="text-foreground font-medium">financial intelligence</span>, and{" "}
              <span className="text-foreground font-medium">corporate experiences</span>.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-reveal delay-300 w-full sm:w-auto mb-16">
              <Button
                variant="brand"
                size="xl"
                className="text-base font-semibold w-full sm:w-auto"
                asChild
              >
                <Link href="/contact">
                  Partner With Us <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="text-base font-semibold w-full sm:w-auto"
                asChild
              >
                <Link href="/verticals">
                  Explore Our Verticals <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Ledger panel */}
            <div className="animate-reveal delay-400 w-full max-w-4xl border border-border">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center text-center p-6"
                  >
                    <span className="stat-number text-2xl md:text-3xl text-foreground mb-1.5">{s.value}</span>
                    <span className="text-sm font-semibold text-foreground/80 mb-0.5">{s.label}</span>
                    <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider leading-tight">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  TRUST REGISTER                                   */}
      {/* ══════════════════════════════════════════════════ */}
      <div className="border-y border-border bg-secondary/40 py-4">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {trustItems.map((item, i) => (
              <div key={i} className="inline-flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand shrink-0" />
                <span className="text-xs font-semibold text-foreground">{item.label}</span>
                <span className="text-[11px] text-muted-foreground font-mono">— {item.sub}</span>
              </div>
            ))}
          </div>
        </Container>
      </div>


      {/* ══════════════════════════════════════════════════ */}
      {/*  VERTICALS                                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <Container>

          {/* Section header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-3">Our Ecosystem</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                Three Verticals. One Vision.
              </h2>
              <p className="text-lg text-muted-foreground">
                Each vertical operates independently with its own team, product, and market — unified under one governance framework.
              </p>
            </div>
            <Button variant="ghost" className="hidden md:flex group text-muted-foreground hover:text-foreground shrink-0" asChild>
              <Link href="/verticals">
                View All Verticals <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Registry entries */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-border">

            {/* Dockware Labs */}
            <Link href="/verticals/dockware-labs" className="group border-r border-b border-border tab-blue">
              <div className="h-full p-8 flex flex-col transition-colors duration-200 hover:bg-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">ENTITY NO. 01</span>
                  <Cpu className="w-5 h-5 text-foreground/60" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 font-mono">SaaS · Automation · AI</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 tracking-tight">Dockware Labs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Engineering custom enterprise software, SaaS platforms, and AI automation systems. We build the digital backbone of modern business.
                </p>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Explore Labs</span>
                  <ArrowRight className="w-4 h-4 text-foreground transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Trading Dock */}
            <Link href="/verticals/trading-dock" className="group border-r border-b border-border tab-emerald">
              <div className="h-full p-8 flex flex-col transition-colors duration-200 hover:bg-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">ENTITY NO. 02</span>
                  <BarChart3 className="w-5 h-5 text-foreground/60" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600 font-mono">Finance · Analytics · Education</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 tracking-tight">Trading Dock</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Institutional-grade market research, analytics tools, and comprehensive financial education. Empowering investors with data-driven intelligence.
                </p>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Explore Trading</span>
                  <ArrowRight className="w-4 h-4 text-foreground transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Impressio Dock */}
            <Link href="/verticals/impressio-dock" className="group border-r border-b border-border tab-amber">
              <div className="h-full p-8 flex flex-col transition-colors duration-200 hover:bg-secondary/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-muted-foreground">ENTITY NO. 03</span>
                  <Gift className="w-5 h-5 text-foreground/60" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 font-mono">Gifting · Printing · Merch</span>
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3 tracking-tight">Impressio Dock</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Premium corporate gifting, custom merchandise, and offset printing solutions. We help brands leave a tangible, lasting mark on every stakeholder.
                </p>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground uppercase tracking-wider">Explore Impressio</span>
                  <ArrowRight className="w-4 h-4 text-foreground transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  THE DOCKFINITY ADVANTAGE                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <Container>
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-3">Why Dockfinity</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Built for Leaders. Trusted by Enterprises.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We hold ourselves to the highest international standards so you never have to worry about trust, quality, or governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border max-w-4xl mx-auto border border-border">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="flex gap-5 p-7 bg-background"
              >
                <div className="w-11 h-11 border border-border flex items-center justify-center shrink-0">
                  <adv.icon className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  THE SEAL — CERTIFICATIONS                       */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-panel-text font-mono mb-4">Compliance & Standards</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15]">
                  International Standards. Uncompromising Quality.
                </h2>
              </div>
              <p className="text-lg text-background/70 leading-relaxed">
                Trust is our most valuable currency. We adhere to the highest international standards of security, quality, and IT service management — so your business is always in safe hands.
              </p>

              <div className="space-y-3 border-t border-background/15 pt-6">
                {[
                  { cert: "ISO 27001:2022", desc: "Information Security Management" },
                  { cert: "ISO 9001:2015", desc: "Quality Management System" },
                  { cert: "ISO 20000-1:2018", desc: "IT Service Management" },
                  { cert: "DPIIT Recognized", desc: "Startup India, Govt of India" },
                ].map((c) => (
                  <div key={c.cert} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-brand-panel-text shrink-0" />
                    <span className="font-semibold text-background font-mono text-sm">{c.cert}</span>
                    <span className="text-background/50 text-sm">— {c.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Seal — signature element */}
            <div className="order-1 lg:order-2 flex items-center justify-center py-8">
              <div className="animate-stamp">
                <Seal label="Dockfinity" sub="2025" className="w-56 h-56 md:w-72 md:h-72 text-brand-panel-text" />
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  FINAL CTA                                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            Ready to Build Something
            <br />
            Extraordinary?
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Partner with Dockfinity and gain access to enterprise software, financial intelligence, and premium branding — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="brand"
              size="xl"
              className="text-base font-semibold"
              asChild
            >
              <Link href="/contact">
                Start a Conversation <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="text-base font-semibold"
              asChild
            >
              <Link href="/about">
                About Dockfinity
              </Link>
            </Button>
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  DISCLAIMER                                       */}
      {/* ══════════════════════════════════════════════════ */}
      <div className="py-6 border-t border-border bg-secondary/20">
        <Container>
          <p className="text-[10px] md:text-xs text-muted-foreground/80 text-center max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Dockfinity Private Limited is a registered corporate entity (CIN: U66190DL2025PTC454662).
            &quot;Trading Dock&quot; educational materials are for informational purposes only and do not constitute investment advice.
            We are not SEBI registered investment advisors. All financial trading involves substantial risk.
          </p>
        </Container>
      </div>
    </>
  );
}
