import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  ShieldCheck,
  Terminal,
  TrendingUp,
  Gift,
  ChevronRight,
  Cpu,
  BarChart3,
  Sparkles,
  Award,
  Building2,
  Zap,
  CheckCircle,
} from "lucide-react";

/* ─── Trust Marquee Items ────────────────────────────── */
const trustItems = [
  { label: "ISO 27001:2022", sub: "Information Security" },
  { label: "ISO 9001:2015", sub: "Quality Management" },
  { label: "ISO 20000-1:2018", sub: "IT Service Mgmt" },
  { label: "DPIIT Recognized", sub: "Startup India" },
  { label: "UDYAM Registered", sub: "MSME India" },
  { label: "Govt of India", sub: "Verified Entity" },
];

/* ─── Stats ──────────────────────────────────────────── */
const stats = [
  { value: "3+", label: "Active Verticals", sub: "Across Tech, Finance & Gifting" },
  { value: "3×", label: "ISO Certified", sub: "27001 · 9001 · 20000-1" },
  { value: "100%", label: "Compliance", sub: "All Regulatory Standards Met" },
  { value: "2025", label: "Established", sub: "DPIIT Recognized Startup" },
];

/* ─── Advantages ─────────────────────────────────────── */
const advantages = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Trust",
    desc: "Triple ISO certified and DPIIT recognized. Your business is backed by internationally validated standards.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Zap,
    title: "Technology-First DNA",
    desc: "We don't consult. We build. Every vertical is engineered to deliver measurable outcomes, fast.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Building2,
    title: "Holding-Company Strength",
    desc: "One partnership unlocks three verticals — software, finance, and gifting under a single governance structure.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Award,
    title: "Governance & Compliance",
    desc: "CIN registered, GSTIN active, UDYAM certified. We operate with full corporate transparency at every level.",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════ */}
      {/*  HERO                                             */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32">

        {/* Background glow orbs */}
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] glow-orb-blue rounded-full blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] glow-orb-amber rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-100 pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-6xl mx-auto">

            {/* Status badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/80 border border-border/60 backdrop-blur-sm animate-reveal shadow-sm mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest text-foreground/70 uppercase font-mono">
                DPIIT Recognized Startup · All Systems Operational
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-[clamp(3rem,9vw,7rem)] font-bold tracking-tight leading-[1.05] animate-reveal delay-100 text-balance mb-6">
              We Build.{" "}
              <span className="text-gradient-brand">We Scale.</span>
              <br className="hidden sm:block" />
              {" "}We Deliver.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-reveal delay-200 font-light mb-10">
              Dockfinity is India&apos;s technology-first holding company — engineering the next generation of{" "}
              <span className="text-foreground font-medium">enterprise software</span>,{" "}
              <span className="text-foreground font-medium">financial intelligence</span>, and{" "}
              <span className="text-foreground font-medium">corporate experiences</span>.
            </p>

            {/* CTA group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-reveal delay-300 w-full sm:w-auto mb-16">
              <Button
                size="xl"
                className="h-14 px-10 rounded-full text-base font-semibold shadow-lg hover:shadow-2xl hover:shadow-brand/20 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <Link href="/contact">
                  Partner With Us <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="h-14 px-10 rounded-full text-base font-semibold border-border/60 hover:bg-secondary/60 w-full sm:w-auto backdrop-blur-sm transition-all duration-300"
                asChild
              >
                <Link href="/verticals">
                  Explore Our Verticals <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Stats row */}
            <div className="animate-reveal delay-400 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                {stats.map((s) => (
                  <div
                    key={s.value}
                    className="flex flex-col items-center text-center p-5 rounded-2xl bg-card/60 border border-border/50 backdrop-blur-sm hover:border-border transition-colors"
                  >
                    <span className="stat-number text-3xl md:text-4xl text-foreground mb-1">{s.value}</span>
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
      {/*  TRUST MARQUEE                                    */}
      {/* ══════════════════════════════════════════════════ */}
      <div className="border-y border-border/50 bg-secondary/30 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-0" style={{ width: "max-content" }}>
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-2 px-10">
              <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
              <span className="text-sm font-semibold text-foreground">{item.label}</span>
              <span className="text-xs text-muted-foreground">— {item.sub}</span>
              <span className="ml-8 text-border/80">·</span>
            </div>
          ))}
        </div>
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
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Three Verticals.<br />One Vision.
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                Each vertical operates independently with its own team, product, and market — unified under one governance framework.
              </p>
            </div>
            <Button variant="ghost" className="hidden md:flex group text-muted-foreground hover:text-foreground shrink-0" asChild>
              <Link href="/verticals">
                View All Verticals <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Dockware Labs */}
            <Link href="/verticals/dockware-labs" className="group">
              <div className="h-full bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 border border-border/50 flex flex-col relative overflow-hidden card-blue">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Cpu className="w-7 h-7" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 font-mono">SaaS · Automation · AI</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">Dockware Labs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Engineering custom enterprise software, SaaS platforms, and AI automation systems. We build the digital backbone of modern business.
                </p>

                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">Explore Labs</span>
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 group-hover:bg-blue-500 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-blue-500 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Trading Dock */}
            <Link href="/verticals/trading-dock" className="group">
              <div className="h-full bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/5 hover:-translate-y-2 border border-border/50 flex flex-col relative overflow-hidden card-emerald">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <BarChart3 className="w-7 h-7" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 font-mono">Finance · Analytics · Education</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">Trading Dock</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Institutional-grade market research, analytics tools, and comprehensive financial education. Empowering investors with data-driven intelligence.
                </p>

                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Explore Trading</span>
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Impression Dock */}
            <Link href="/verticals/impression-dock" className="group">
              <div className="h-full bg-card rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-2 border border-border/50 flex flex-col relative overflow-hidden card-amber">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Gift className="w-7 h-7" />
                </div>

                <div className="mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 font-mono">Gifting · Printing · Merch</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 tracking-tight">Impression Dock</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Premium corporate gifting, custom merchandise, and offset printing solutions. We help brands leave a tangible, lasting mark on every stakeholder.
                </p>

                <div className="mt-8 pt-6 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">Explore Impression</span>
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 group-hover:bg-amber-500 flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  THE DOCKFINITY ADVANTAGE                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-dense opacity-50 pointer-events-none" />

        <Container className="relative z-10">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-3">Why Dockfinity</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Built for Leaders.<br className="hidden md:block" /> Trusted by Enterprises.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              We hold ourselves to the highest international standards so you never have to worry about trust, quality, or governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="flex gap-5 p-7 bg-card rounded-2xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 ${adv.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <adv.icon className={`w-6 h-6 ${adv.color}`} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{adv.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  CERTIFICATIONS DARK BAND                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-foreground text-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand/10 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-4">Compliance & Standards</p>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                  International Standards.<br />Uncompromising Quality.
                </h2>
              </div>
              <p className="text-lg text-background/70 leading-relaxed font-light">
                Trust is our most valuable currency. We adhere to the highest international standards of security, quality, and IT service management — so your business is always in safe hands.
              </p>

              <div className="space-y-3">
                {[
                  { cert: "ISO 27001:2022", desc: "Information Security Management" },
                  { cert: "ISO 9001:2015", desc: "Quality Management System" },
                  { cert: "ISO 20000-1:2018", desc: "IT Service Management" },
                  { cert: "DPIIT Recognized", desc: "Startup India, Govt of India" },
                ].map((c) => (
                  <div key={c.cert} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-brand shrink-0" />
                    <span className="font-semibold text-background">{c.cert}</span>
                    <span className="text-background/50 text-sm">— {c.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat cluster */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "Compliance Rate" },
                { value: "3×", label: "ISO Certifications" },
                { value: "2025", label: "Incorporated" },
                { value: "∞", label: "Commitment" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center text-center p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-colors backdrop-blur-sm"
                >
                  <span className="stat-number text-5xl text-brand mb-2">{s.value}</span>
                  <span className="text-sm text-background/60 font-mono uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* ══════════════════════════════════════════════════ */}
      {/*  FINAL CTA                                        */}
      {/* ══════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] glow-orb-amber rounded-full blur-3xl opacity-30 pointer-events-none" />

        <Container className="relative z-10 text-center">
          <Sparkles className="w-10 h-10 text-brand mx-auto mb-6 animate-pulse-slow" />
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ready to Build
            <br />
            <span className="text-gradient-brand">Something Extraordinary?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light">
            Partner with Dockfinity and gain access to enterprise software, financial intelligence, and premium branding — all under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="h-14 px-10 rounded-full text-base font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              asChild
            >
              <Link href="/contact">
                Start a Conversation <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="h-14 px-10 rounded-full text-base font-semibold border-border/60 hover:bg-secondary/60 transition-all duration-300"
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
      <div className="py-6 border-t border-border/50 bg-secondary/20">
        <Container>
          <p className="text-[10px] md:text-xs text-muted-foreground/60 text-center max-w-3xl mx-auto leading-relaxed">
            <strong>Disclaimer:</strong> Dockfinity Private Limited is a registered corporate entity (CIN: U66190DL2025PTC454662).
            &quot;Trading Dock&quot; educational materials are for informational purposes only and do not constitute investment advice.
            We are not SEBI registered investment advisors. All financial trading involves substantial risk.
          </p>
        </Container>
      </div>
    </>
  );
}
