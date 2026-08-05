import { redirect } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Cpu, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dockware Labs | Dockfinity Technology Division",
  description: "Enterprise software, apps, automation, IoT, IT consulting, and digital presence by Dockware Labs.",
};

export default function DockwareLabsLegacyRedirectPage() {
  // Server-side redirect to the dedicated subdomain
  const subdomainUrl =
    process.env.NODE_ENV === "production"
      ? "https://dockwarelabs.dockfinity.com"
      : "http://dockwarelabs.localhost:3000";

  redirect(subdomainUrl);

  return (
    <div className="py-32 bg-[#090d14] text-white min-h-[70vh] flex items-center justify-center">
      <Container className="text-center max-w-xl">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Cpu className="w-7 h-7 text-blue-500" />
        </div>
        <h1 className="font-display text-3xl font-bold mb-4">
          Redirecting to Dockware Labs Subdomain...
        </h1>
        <p className="text-slate-400 mb-8">
          Dockware Labs has moved to its dedicated subdomain at{" "}
          <span className="font-mono text-blue-400">dockwarelabs.dockfinity.com</span>.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8">
          <a href={subdomainUrl}>
            Go to Dockware Labs Subdomain <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </Button>
      </Container>
    </div>
  );
}
