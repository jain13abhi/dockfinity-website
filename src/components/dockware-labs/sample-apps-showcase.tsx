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
      "A cross-platform mobile application engineered for fleet operators. Handles real-time GPS tracking, automated driver dispatching, proof-of-delivery signatures, and offline data sync in remote low-network regions.",
    features: [
      "Offline-first SQLite sync engine for low connectivity",
      "Real-time Geofencing & Automated Route Optimization",
      "Digital Proof-of-Delivery (E-signatures & photo logs)",
      "Role-based access for Dispatchers, Drivers & Clients",
    ],
    techStack: ["React Native", "Node.js Microservices", "PostgreSQL / PostGIS", "Redis Streams", "Docker"],
    metrics: { latency: "<150ms sync", offlineSupport: "100%", throughput: "50k events/sec" },
    mockupUi: {
      url: "https://fleet.dockwarelabs.io/active-dispatch",
      status: "GPS STREAMING LIVE",
      tableRows: [
        { id: "TRK-9042", route: "Mumbai ➔ Pune Express", driver: "Rajesh S.", status: "IN TRANSIT", eta: "14 mins" },
        { id: "TRK-8812", route: "Delhi ➔ Gurgaon Bypass", driver: "Amit K.", status: "DELIVERED", eta: "Completed" },
        { id: "TRK-7431", route: "Bengaluru Ring Road", driver: "Suresh P.", status: "LOADING", eta: "45 mins" },
      ],
      codeSnippet: `// Offline SQLite Sync Engine
await db.syncQueue.push({
  event: 'DELIVERY_POD_SIGNED',
  payload: { trkId: 'TRK-9042', lat: 19.076, lon: 72.877 },
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
      "An integrated web platform connecting field maintenance engineers with central operations. Automatically ingests IoT sensor alerts to trigger predictive work orders and deduct spare parts inventory in real-time.",
    features: [
      "Automated IoT telemetry alerts & ticket generation",
      "Dynamic technician scheduling with calendar drag-and-drop",
      "Automated ERP inventory deduction on job closure",
      "Audit trail compliance & equipment health history",
    ],
    techStack: ["Next.js App Router", "Python / FastAPI", "TimescaleDB", "MQTT Gateways", "AWS Elastic Container"],
    metrics: { uptime: "99.95%", ticketLatency: "<2 sec", IoTHandling: "10k messages/sec" },
    mockupUi: {
      url: "https://ops.dockwarelabs.io/equipment-telemetry",
      status: "MQTT TELEMETRY ACTIVE",
      tableRows: [
        { id: "TURBINE-04", route: "Vibration Sensor #12", driver: "Telemetry Normal", status: "HEALTHY", eta: "98.4% Efficiency" },
        { id: "COMPRESSOR-02", route: "Temp Spike Alert (+14°C)", driver: "Auto-Ticket Assigned", status: "WARNING", eta: "Dispatching Tech" },
        { id: "PUMP-VALVE-09", route: "Pressure Sensor #08", driver: "Routine Maintenance", status: "SCHEDULED", eta: "Tomorrow 09:00" },
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
      "A high-throughput analytics engine designed for B2B SaaS platforms. Enables multi-tenant isolation, real-time KPI streaming, customizable drag-and-drop dashboard widgets, and scheduled PDF/Excel report exports.",
    features: [
      "Isolated multi-tenant tenant-key data partitioning",
      "Real-time event streaming & instant widget re-rendering",
      "Custom scheduled report generator with email automation",
      "Granular role-based permissions (SuperAdmin, OrgAdmin, Analyst)",
    ],
    techStack: ["React / TypeScript", "Go (Golang) Microservices", "ClickHouse / PostgreSQL", "Apache Kafka"],
    metrics: { queryTime: "<80ms", multiTenancy: "Strict Row Isolation", exportSpeed: "<3 sec" },
    mockupUi: {
      url: "https://analytics.dockwarelabs.io/kpi-stream",
      status: "CLICKHOUSE QUERY ENGINE OK",
      tableRows: [
        { id: "TENANT-ACME", route: "Monthly Active Users", driver: "142,500 MAU", status: "PARALLEL QUERY", eta: "Query <12ms" },
        { id: "TENANT-GLOBAL", route: "API Throughput", driver: "18.4M req/day", status: "HEALTHY", eta: "Row Partition OK" },
        { id: "TENANT-TITAN", route: "Revenue ARR Pipeline", driver: "$1.4M ARR", status: "REALTIME", eta: "Kafka Streamed" },
      ],
      codeSnippet: `// Row-Level Multi-Tenant Isolation
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
          <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 mb-3">
            Interactive Solution Blueprints
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Software We Architect
          </h2>
          <p className="text-muted-foreground font-normal leading-relaxed text-base">
            Inspect real application UI mockups, telemetry metrics, and microservice code snippets engineered by Dockware Labs.
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
                <span>Live App Interface</span>
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
                <span>Engine Code</span>
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
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                      {selectedApp.mockupUi.status}
                    </span>
                    <span className="text-muted-foreground">LATENCY: {selectedApp.metrics.latency || selectedApp.metrics.queryTime}</span>
                  </div>

                  {/* Simulated App Data Table */}
                  <div className="rounded-2xl border border-border bg-secondary/40 overflow-hidden text-xs">
                    <div className="grid grid-cols-4 p-3 bg-secondary/80 font-mono font-bold text-muted-foreground border-b border-border/80">
                      <span>ENTITY ID</span>
                      <span>STREAM / ROUTE</span>
                      <span>OPERATIONAL STATE</span>
                      <span className="text-right">METRIC</span>
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
                <div className="p-5 rounded-2xl bg-[#090d14] text-blue-400 font-mono text-xs leading-relaxed border border-slate-800 space-y-2">
                  <div className="text-slate-500 text-[10px] pb-2 border-b border-slate-800 font-bold uppercase">
                    // Dockware Microservice Code Snippet
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
                  Discuss Solution Blueprint <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
