import { Container } from "@/components/ui/container";

const STAGES = [
  {
    step: "01",
    title: "Discovery & Scope Audit",
    desc: "We analyze your existing workflows, system bottlenecks, and technical goals to specify a clear, non-overengineered solution roadmap.",
  },
  {
    step: "02",
    title: "Architecture & Schema Design",
    desc: "We blueprint data schemas, microservices, and security access models before writing code — ensuring structural stability from day one.",
  },
  {
    step: "03",
    title: "Iterative Engineering",
    desc: "Structured development sprints with complete code transparency, automated test suites, and regular staging deployment previews.",
  },
  {
    step: "04",
    title: "Deployment & Managed Ops",
    desc: "Seamless production launch with CI/CD pipelines, system audits, monitoring telemetry, and ongoing SLA-backed support.",
  },
];

export function DockwareProcess() {
  return (
    <section id="process" className="py-20 relative">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Execution Methodology
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            How We Work
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            Pragmatic software engineering focused on reliability, security, and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((s) => (
            <div
              key={s.step}
              className="p-7 rounded-2xl bg-card/75 backdrop-blur-md border border-border/80 relative group hover:border-blue-500/40 transition-all duration-300 shadow-sm"
            >
              <div className="font-mono text-5xl font-bold text-blue-500/25 group-hover:text-blue-500/40 transition-colors mb-4">
                {s.step}
              </div>
              <h3 className="font-display text-lg font-bold tracking-tight text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
