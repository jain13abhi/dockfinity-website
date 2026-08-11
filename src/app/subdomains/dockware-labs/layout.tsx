import "@/app/globals.css";
import { DockwareNav } from "@/components/dockware-labs/nav";
import { DockwareFooter } from "@/components/dockware-labs/footer";

export const metadata = {
  metadataBase: new URL("https://dockwarelabs.dockfinity.com"),
  title: "Dockware Labs | Technology & Software Division of Dockfinity",
  description:
    "Enterprise ERP/CRM, app development, automation, AI agents, IoT systems, IT consulting, and digital presence by Dockware Labs.",
  alternates: {
    canonical: "https://dockwarelabs.dockfinity.com",
  },
  openGraph: {
    title: "Dockware Labs | Technology & Software Division",
    description:
      "Enterprise software systems, custom applications, and technology advisory.",
    url: "https://dockwarelabs.dockfinity.com",
    siteName: "Dockware Labs",
  },
};

export default function DockwareLabsSubdomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="font-sans bg-background text-foreground min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      <DockwareNav />
      <main className="flex-1 pt-20">{children}</main>
      <DockwareFooter />
    </div>
  );
}
