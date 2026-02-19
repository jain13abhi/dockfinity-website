import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowRight, Globe, ShieldCheck, Terminal, TrendingUp, Gift, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Animated Background Glow - Slower & Subtler */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl opacity-40 animate-pulse-slow pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] z-0 pointer-events-none" />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-8">

            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-primary/5 backdrop-blur-sm animate-reveal shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wider text-primary/70 uppercase font-mono">
                System Operational
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] animate-reveal delay-100 text-balance text-foreground">
              Building the <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/60">
                Future of Enterprise.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-reveal delay-200 font-light">
              Dockfinity is a technology-first holding company engineering the next generation of SaaS, financial intelligence, and corporate experiences.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-reveal delay-300 w-full sm:w-auto pt-4">
              <Button size="xl" className="h-12 px-8 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Partner With Us <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="h-12 px-8 rounded-full text-base border-primary/10 hover:bg-secondary/50 w-full sm:w-auto bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/verticals">
                  Explore Ecosystem
                </Link>
              </Button>
            </div>

            {/* Trust Strip - Clean & Aligned */}
            <div className="pt-16 md:pt-24 opacity-70 animate-reveal delay-300 w-full">
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-xs md:text-sm font-medium text-muted-foreground pt-8">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-primary/60" />
                  <span>ISO 27001:2022 Certified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-primary/60" />
                  <span>DPIIT Recognized Startup</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-primary/60" />
                  <span>ISO 9001:2015 Quality Standard</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* --- VERTICALS SECTION (Refined Cards) --- */}
      <Section className="relative bg-secondary/20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Our Ecosystem</h2>
              <p className="text-lg text-muted-foreground font-light">Three distinct verticals. One unified vision for excellence.</p>
            </div>
            <Button variant="ghost" className="hidden md:flex group text-primary/80 hover:text-primary" asChild>
              <Link href="/verticals">View All Verticals <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Dockware Labs */}
            <Link href="/verticals/dockware-labs" className="group">
              <div className="h-full bg-gradient-to-b from-card to-secondary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-card border border-primary/5 flex flex-col relative overflow-hidden group-hover:border-primary/10">

                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Terminal className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight">Dockware Labs</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Engineering custom SaaS platforms and enterprise automation systems. We build the digital backbone of modern business.
                </p>

                <div className="mt-8 flex items-center text-xs font-semibold text-primary/70 group-hover:text-primary uppercase tracking-wider">
                  Explore Labs <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 2: Trading Dock */}
            <Link href="/verticals/trading-dock" className="group">
              <div className="h-full bg-gradient-to-b from-card to-secondary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-card border border-primary/5 flex flex-col relative overflow-hidden group-hover:border-primary/10">

                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight">Trading Dock</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Institutional-grade market research and analytics education. Empowering investors with data-driven intelligence.
                </p>

                <div className="mt-8 flex items-center text-xs font-semibold text-primary/70 group-hover:text-primary uppercase tracking-wider">
                  Explore Trading <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Card 3: Impression Dock */}
            <Link href="/verticals/impression-dock" className="group">
              <div className="h-full bg-gradient-to-b from-card to-secondary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-card border border-primary/5 flex flex-col relative overflow-hidden group-hover:border-primary/10">

                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <Gift className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold mb-3 tracking-tight">Impression Dock</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                  Premium corporate gifting and offset printing. We help brands leave a tangible, lasting mark on their stakeholders.
                </p>

                <div className="mt-8 flex items-center text-xs font-semibold text-primary/70 group-hover:text-primary uppercase tracking-wider">
                  Explore Impression <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        </Container>
      </Section>


      {/* --- DARK BAND SECTION (Visual Anchor) --- */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/5 opacity-20" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Why global leaders choose Dockfinity.
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
                Trust is our currency. We adhere to the highest international standards of security, quality, and management to ensure your business is in safe hands.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <ShieldCheck className="w-6 h-6 mb-3 text-emerald-400" />
                  <h4 className="text-base font-bold mb-1">ISO Certified</h4>
                  <p className="text-xs text-white/70">ISO 27001 (Security) & 9001 (Quality) Standards.</p>
                </div>
                <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <Globe className="w-6 h-6 mb-3 text-blue-400" />
                  <h4 className="text-base font-bold mb-1">Govt Recognized</h4>
                  <p className="text-xs text-white/70">DPIIT Recognized Startup by Govt of India.</p>
                </div>
              </div>
            </div>

            {/* Abstract visual/stat - Simplified */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="aspect-square w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 flex items-center justify-center p-8 backdrop-blur-md shadow-2xl">
                <div className="text-center">
                  <span className="block text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 mb-2">
                    100%
                  </span>
                  <span className="text-sm font-medium tracking-[0.2em] uppercase opacity-70">
                    Compliance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>


      {/* --- DISCLOSURE SECTION (Subtle Footer Anchor) --- */}
      <section className="py-8 bg-secondary/30">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-center text-center">
            <p className="text-[10px] md:text-xs text-muted-foreground/60 max-w-3xl leading-relaxed">
              <strong>Disclaimer:</strong> Dockfinity Private Limited is a registered corporate entity.
              "Trading Dock" educational materials are for informational purposes only.
              We are not SEBI registered investment advisors. All financial trading involves risk.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
