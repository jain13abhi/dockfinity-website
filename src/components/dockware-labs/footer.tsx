import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Cpu, ArrowUpRight } from "lucide-react";

export function DockwareFooter() {
  return (
    <footer className="bg-secondary border-t border-border pt-16 pb-12 text-muted-foreground">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-500" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                Dockware <span className="text-blue-500">Labs</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Dockware Labs is Dockfinity Private Limited&apos;s technology and digital-solutions division. We engineer custom enterprise software, mobile apps, automation systems, and managed IT services.
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              ISO 27001:2022 Certified Standard Security Operations
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">Capabilities</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-foreground transition-colors">Enterprise Solutions</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">App Development</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Automation & IoT</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">IT Consulting & Support</a></li>
              <li><a href="#services" className="hover:text-foreground transition-colors">Digital Presence</a></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-foreground font-semibold">Parent Entity</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://dockfinity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 inline-flex items-center gap-1 text-muted-foreground transition-colors"
                >
                  Dockfinity.com Main Site <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://dockfinity.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://dockfinity.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
          <p>© {new Date().getFullYear()} Dockfinity Private Limited. All rights reserved.</p>
          <p className="font-mono text-[11px]">dockwarelabs.dockfinity.com</p>
        </div>
      </Container>
    </footer>
  );
}
