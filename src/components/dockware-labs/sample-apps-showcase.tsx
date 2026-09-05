"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Smartphone, Server, BarChart3, CheckCircle2, ArrowRight, Shield, Zap, Terminal, Activity, Code, Layers } from "lucide-react";

const SAMPLE_APPS = [
  {
    id: "logistics-app",
    title: "Enterprise Fleet & Logistics Mobile App",
    category: "Custom App Development",
    icon: Smartphone,
    tagline: "Real-Time Dispatch, Route Optimization & Offline POD",
    description:
      "A cross-platform mobile application blueprint engineered for fleet operators. Designed for real-time GPS tracking, automated driver dispatching, proof-of-delivery signatures, and offline data sync in remote low-network regions.",
    features: [
      "Offline-first SQLite sync engine for low connectivity",
      "Real-time Geofencing & Automated Route Optimization",
      "Digital Proof-of-Delivery (E-signatures & photo logs)",
      "Role-based access for Dispatchers, Drivers & Clients",
    ],
    techStack: ["React Native", "Node.js Microservices", "PostgreSQL / PostGIS", "Redis Streams", "Docker"],
    metrics: { syncEngine: "Offline-First SQLite", routing: "Geospatial PostGIS", queue: "Redis Streams" },
    mockupUi: {
      url: "concept://fleet-dispatch-system",
      status: "SYSTEM SCHEMATIC VIEW",
      tableRows: [
        { id: "MODULE-01", route: "Geospatial Dispatch Engine", driver: "Offline Sync Active", status: "ENROUTE", eta: "High Priority" },
        { id: "MODULE-02", route: "Proof-of-Delivery Logging", driver: "E-Signature Captured", status: "COMPLETED", eta: "Verified" },
        { id: "MODULE-03", route: "Automated Route Optimizer", driver: "Re-routing Pipeline", status: "ACTIVE", eta: "Optimizing" },
      ],
      codeSnippet: `// Offline SQLite Sync Engine Concept
await db.syncQueue.push({
  event: 'DELIVERY_POD_SIGNED',
  payload: { dispatchId: 'DISPATCH-9042', lat: 19.076, lon: 72.877 },
  timestamp: Date.now()
});`,
    },
  },
  {
    id: "field-service-portal",
    title: "Field Service & Asset Operations Portal",
    category: "Enterprise Solutions & IoT",
    icon: Server,
    tagline: "Automated Work Orders, Equipment Telemetry & Spare Inventory",
    description:
      "An integrated web platform concept connecting field maintenance engineers with central operations. Designed to ingest IoT sensor alerts to trigger predictive work orders and deduct spare parts inventory in real-time.",
    features: [
      "Automated IoT telemetry alerts & ticket generation",
      "Dynamic technician scheduling with calendar drag-and-drop",
      "Automated ERP inventory deduction on job closure",
      "Audit trail compliance & equipment health history",
    ],
    techStack: ["Next.js App Router", "Python / FastAPI", "TimescaleDB", "MQTT Gateways", "AWS Elastic Container"],
    metrics: { telemetry: "MQTT Hardware Gateway", processing: "FastAPI Async", database: "TimescaleDB" },
    mockupUi: {
      url: "concept://field-service-telemetry",
      status: "SYSTEM SCHEMATIC VIEW",
      tableRows: [
        { id: "SENSOR-01", route: "Vibration Monitoring Node", driver: "Telemetry Stream", status: "NORMAL", eta: "Health Audit" },
        { id: "SENSOR-02", route: "Thermal Threshold Trigger", driver: "Work Order Pipeline", status: "DISPATCHED", eta: "Automated" },
        { id: "SENSOR-03", route: "Pressure Differential Valve", driver: "Routine Cycle Audit", status: "SCHEDULED", eta: "Maintenance" },
      ],
      codeSnippet: `@router.post("/telemetry/stream")
async function ingest_sensor_data(payload: SensorPayload):
    if payload.temp > THRESHOLD:
        await trigger_work_order(payload.asset_id)`,
    },
  },
  {
    id: "saas-analytics",
    title: "SaaS Executive Analytics & Reporting Platform",
    category: "In-House SaaS Architecture",
    icon: BarChart3,
    tagline: "Multi-Tenant KPI Aggregation, Custom Dashboards & Automated Export",
    description:
      "A high-throughput analytics engine concept designed for B2B SaaS platforms. Enables multi-tenant isolation, real-time KPI streaming, customizable drag-and-drop dashboard widgets, and scheduled PDF/Excel report exports.",
    features: [
      "Isolated multi-tenant tenant-key data partitioning",
      "Real-time event streaming & instant widget re-rendering",
      "Custom scheduled report generator with email automation",
      "Granular role-based permissions (SuperAdmin, OrgAdmin, Analyst)",
    ],
    techStack: ["React / TypeScript", "Go (Golang) Microservices", "ClickHouse / PostgreSQL", "Apache Kafka"],
    metrics: { partitioning: "Tenant Row-Level", engine: "ClickHouse Columnar", streaming: "Apache Kafka" },
    mockupUi: {
      url: "concept://saas-analytics-pipeline",
      status: "SYSTEM SCHEMATIC VIEW",
      tableRows: [
        { id: "CLUSTER-01", route: "Multi-Tenant Partitioning", driver: "Row-Level Isolation", status: "ISOLATED", eta: "Columnar DB" },
        { id: "CLUSTER-02", route: "Real-Time Event Stream", driver: "Kafka Message Broker", status: "STREAMING", eta: "High Volume" },
        { id: "CLUSTER-03", route: "Scheduled Report Engine", driver: "PDF & Email Automation", status: "QUEUED", eta: "Cron Job" },
      ],
      codeSnippet: `// Row-Level Multi-Tenant Isolation Concept
func FetchTenantMetrics(tenantID string) ([]Metric, error) {
    return db.Query("SELECT * FROM kpis WHERE tenant_id = $1", tenantID)
}`,
    },
  },
];

export function SampleAppsShowcase() {
  const [selectedApp, setSelectedApp] = useState(SAMPLE_APPS[0]);
  const [activeView, setActiveView] = useState<"ui" | "code">("ui");

  return (
    <section className="py-20 bg-secondary/20 relative border-y border-border/60">
      <Container>
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-blue-500 mb-3">
            <span>Illustrative Architecture Blueprints</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            How We Architect Systems
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            These blueprints are <strong className="text-foreground font-semibold">illustrative architectural concepts</strong> demonstrating how Dockware Labs patterns, isolates, and structures custom enterprise applications.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-border/80 pb-4">
          {SAMPLE_APPS.map((app) => {
            const IconComp = app.icon;
            const isSelected = selectedApp.id === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedApp(app)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-display text-sm font-semibold transition-all duration-300 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{app.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive App Window Frame (Browser / IDE Mockup) */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
          {/* Top Window Bar */}
          <div className="bg-secondary/80 px-6 py-4 border-b border-border/80 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="font-mono text-xs text-muted-foreground ml-3 hidden sm:inline">
                {selectedApp.mockupUi.url}
              </span>
              <span className="px-2.5 py-0.5 rounded-md bg-secondary text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground border border-border">
                Illustrative Concept
              </span>
            </div>

            {/* View Switcher: Live App UI vs Code Snippet */}
            <div className="flex items-center gap-2 bg-background p-1 rounded-xl border border-border">
              <button
                onClick={() => setActiveView("ui")}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeView === "ui"
                    ? "bg-blue-600 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span>Interactive UI Blueprint</span>
              </button>
              <button
                onClick={() => setActiveView("code")}
                className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  activeView === "code"
                    ? "bg-blue-600 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span>Sample Engine Code</span>
              </button>
            </div>
          </div>

          {/* Window Body Display */}
          <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive UI or Code View */}
            <div className="lg:col-span-7 space-y-6">
              {activeView === "ui" ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-foreground flex items-center gap-2">
                      {selectedApp.mockupUi.status}
                    </span>
                    <span className="text-muted-foreground font-semibold">ARCHITECTURE MODEL</span>
                  </div>

                  {/* Simulated App Data Table */}
                  <div className="rounded-2xl border border-border bg-secondary/40 overflow-hidden text-xs">
                    <div className="grid grid-cols-4 p-3 bg-secondary/80 font-mono font-bold text-muted-foreground border-b border-border/80">
                      <span>MODULE ID</span>
                      <span>SYSTEM LAYER</span>
                      <span>DESIGN STATE</span>
                      <span className="text-right">SPECIFICATION</span>
                    </div>
                    {selectedApp.mockupUi.tableRows.map((row) => (
                      <div key={row.id} className="grid grid-cols-4 p-3.5 border-b border-border/40 font-mono items-center">
                        <span className="font-bold text-foreground">{row.id}</span>
                        <span className="text-muted-foreground">{row.route}</span>
                        <span className="text-blue-500 font-semibold">{row.status}</span>
                        <span className="text-right font-bold text-foreground">{row.eta}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-5 rounded-2xl bg-[#030711] text-blue-400 font-mono text-xs leading-relaxed border border-border space-y-2">
                  <div className="text-muted-foreground text-[10px] pb-2 border-b border-border font-bold uppercase">
                    {"// Dockware Architecture Concept Snippet"}
                  </div>
                  <pre className="overflow-x-auto text-slate-200">
                    <code>{selectedApp.mockupUi.codeSnippet}</code>
                  </pre>
                </div>
              )}

              <div className="space-y-3 pt-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-bold">Key Architectural Features</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedApp.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Engine Stack & Consultation CTA */}
            <div className="lg:col-span-5 bg-secondary/60 border border-border/80 rounded-2xl p-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-500 block mb-1">
                  {selectedApp.category}
                </span>
                <h4 className="font-display text-xl font-bold text-foreground tracking-tight">
                  {selectedApp.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed mt-2 font-normal">
                  {selectedApp.description}
                </p>
              </div>

              <div className="pt-2 border-t border-border/80 space-y-3">
                <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block">
                  Engineered With Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedApp.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono font-medium text-foreground bg-card px-3 py-1 rounded-lg border border-border/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                asChild
                className="w-full h-11 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md"
              >
                <a href="#contact">
                  Discuss Custom Solution <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
