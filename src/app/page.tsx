import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Terminal, TrendingUp, Gift, ChevronRight, Server, BarChart3, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-32 pb-20">

        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-background z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-noise-subtle z-0 mix-blend-overlay opacity-50" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">

            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-primary/5 backdrop-blur-md animate-reveal shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-widest text-primary/80 uppercase font-mono">
                System Operational
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] animate-reveal delay-100 text-balance text-foreground">
              Building the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
                Future of Enterprise.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-reveal delay-200 font-light">
              Dockfinity is a technology-first holding company engineering the next generation of SaaS, financial intelligence, and corporate experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-5 animate-reveal delay-300 w-full sm:w-auto pt-6">
              <Button size="xl" className="h-14 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto bg-primary text-primary-foreground" asChild>
                <Link href="/contact">
                  Partner With Us <ChevronRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="h-14 px-10 rounded-full text-lg border-primary/10 hover:bg-secondary/60 w-full sm:w-auto bg-background/40 backdrop-blur-sm" asChild>
                <Link href="/verticals">
                  Explore Ecosystem
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-20 opacity-80 animate-reveal delay-300 w-full">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-6">Trusted & Compliant</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xs md:text-sm font-medium text-foreground/70">
                <div className="flex items-center gap-2.5 hover:text-primary transition-colors cursor-default">
                  <ShieldCheck className="w-5 h-5 text-emerald-500/80" />
                  <span>ISO 27001:2022</span>
                </div>
                <div className="flex items-center gap-2.5 hover:text-primary transition-colors cursor-default">
                  <Globe className="w-5 h-5 text-blue-500/80" />
                  <span>DPIIT Recognized</span>
                </div>
                <div className="flex items-center gap-2.5 hover:text-primary transition-colors cursor-default">
                  <ShieldCheck className="w-5 h-5 text-emerald-500/80" />
                  <span>ISO 9001:2015</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* --- ECOSYSTEM SECTION --- */}
      <Section className="relative bg-secondary/30">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-2">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Ecosystem</h2>
              <p className="text-lg text-muted-foreground font-light">Three distinct verticals. One unified vision for excellence.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex group text-primary/80 hover:text-primary" asChild>
              <Link href="/verticals">View All Verticals <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/verticals/dockware-labs" className="group block h-full">
              <div className="h-full bg-card rounded-[1.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-border/40 hover:border-primary/10 flex flex-col relative overflow-hidden group-hover:bg-gradient-to-br from-card to-secondary/20">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Terminal className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">Dockware Labs</h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                  Engineering custom SaaS platforms and enterprise automation systems. We build the digital backbone of modern business.
                </p>
                <div className="mt-10 flex items-center text-xs font-bold text-primary/60 group-hover:text-primary uppercase tracking-widest transition-colors">
                  Explore Labs <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/verticals/trading-dock" className="group block h-full">
              <div className="h-full bg-card rounded-[1.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-border/40 hover:border-primary/10 flex flex-col relative overflow-hidden group-hover:bg-gradient-to-br from-card to-secondary/20">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">Trading Dock</h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                  Institutional-grade market research and analytics education. Empowering investors with data-driven intelligence.
                </p>
                <div className="mt-10 flex items-center text-xs font-bold text-primary/60 group-hover:text-primary uppercase tracking-widest transition-colors">
                  Explore Trading <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/verticals/impression-dock" className="group block h-full">
              <div className="h-full bg-card rounded-[1.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-border/40 hover:border-primary/10 flex flex-col relative overflow-hidden group-hover:bg-gradient-to-br from-card to-secondary/20">
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Gift className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-primary transition-colors">Impression Dock</h3>
                <p className="text-muted-foreground text-base leading-relaxed flex-grow">
                  Premium corporate gifting and offset printing. We help brands leave a tangible, lasting mark on their stakeholders.
                </p>
                <div className="mt-10 flex items-center text-xs font-bold text-primary/60 group-hover:text-primary uppercase tracking-widest transition-colors">
                  Explore Impression <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>


      {/* --- WHY PARTNER WITH US (Visual Anchor) --- */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/5 opacity-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Why global leaders choose Dockfinity.
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed font-light">
                Trust is our currency. We adhere to the highest international standards of security, quality, and management to ensure your business is in safe hands.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <ShieldCheck className="w-8 h-8 mb-4 text-emerald-400" />
                  <h4 className="text-lg font-bold mb-2 text-white">ISO Certified</h4>
                  <p className="text-sm text-white/60 leading-relaxed">ISO 27001, 9001, 20000-1 & 21001 Certified standards.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <Globe className="w-8 h-8 mb-4 text-blue-400" />
                  <h4 className="text-lg font-bold mb-2 text-white">Govt Recognized</h4>
                  <p className="text-sm text-white/60 leading-relaxed">Official DPIIT Recognized Startup by Govt of India.</p>
                </div>
              </div>
            </div>

            {/* Abstract visual/stat */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="aspect-square w-full max-w-sm rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex flex-col items-center justify-center p-10 backdrop-blur-md shadow-2xl animate-float">
                <span className="text-7xl md:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-4">
                  100%
                </span>
                <span className="text-base font-bold tracking-[0.3em] uppercase text-white/70">
                  Compliance
                </span>
                <div className="mt-8 flex gap-3 opacity-60">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* --- DISCLAIMERS (Footer Anchor) --- */}
      <section className="py-10 bg-muted/30 border-t border-border/40">
        <Container>
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <p className="text-[11px] md:text-xs text-muted-foreground/60 max-w-4xl leading-relaxed">
              <strong>Trading Dock Disclaimer:</strong> No investment advisory services are provided unless duly registered/authorized as per applicable regulations.
              "Trading Dock" educational materials are for informational purposes only. We are not SEBI registered investment advisors. All financial trading involves risk.
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground/40 max-w-3xl leading-relaxed">
              Dockfinity Private Limited is a registered corporate entity. All operations are conducted in strict adherence to Indian Corporate Law.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
