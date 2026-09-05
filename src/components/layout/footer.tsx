import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Mail, Phone } from "lucide-react";

const verticalLinks = [
    { name: "Dockware Labs", href: "/verticals/dockware-labs", color: "hover:text-blue-400" },
    { name: "Trading Dock", href: "/verticals/trading-dock", color: "hover:text-emerald-400" },
    { name: "Impressio Dock", href: "/verticals/impressio-dock", color: "hover:text-amber-400" },
];

const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "All Verticals", href: "/verticals" },
    { name: "Delivered Work", href: "/work" },
    { name: "Contact", href: "/contact" },
];

const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Shipping Policy", href: "/shipping-policy" },
];

const certs = [
    { label: "DPIIT", sub: "Startup India" },
    { label: "ISO 9001:2015", sub: "Quality" },
    { label: "ISO 27001:2022", sub: "Security" },
    { label: "ISO 20000-1:2018", sub: "IT Mgmt" },
];

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-foreground mt-auto relative">
            <div className="absolute top-0 inset-x-0 h-20 fade-seam-top pointer-events-none" />

            {/* Main footer body */}
            <Container className="pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

                    {/* Brand column */}
                    <div className="md:col-span-4 space-y-6">
                        <div>
                            <Link href="/" className="inline-flex items-center gap-2.5 group mb-4">
                                <Image src="/logo-mark-navy.png" alt="" width={55} height={32} className="h-8 w-auto dark:hidden" />
                                <Image src="/logo-mark-white.png" alt="" width={55} height={32} className="h-8 w-auto hidden dark:block" />
                                <span className="font-display font-bold text-xl tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                                    DOCKFINITY
                                </span>
                            </Link>
                            <p className="text-foreground/60 text-sm leading-relaxed mt-3">
                                A technology-first holding company building and scaling ventures across enterprise software, financial education, and premium corporate experiences.
                            </p>
                        </div>

                        {/* Registration details */}
                        <div className="space-y-1.5 text-xs text-foreground/40 font-mono">
                            <p><span className="text-foreground/60">CIN</span> · U66190DL2025PTC454662</p>
                            <p><span className="text-foreground/60">GSTIN</span> · 07AAMCD0054C1Z3</p>
                            <p><span className="text-foreground/60">UDYAM</span> · UDYAM-DL-06-0174779</p>
                        </div>

                        {/* Contact quick links */}
                        <div className="space-y-2 text-sm">
                            <a href="tel:+919911721100" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group">
                                <Phone className="w-3.5 h-3.5 shrink-0 group-hover:text-brand transition-colors" />
                                +91 99117 21100
                            </a>
                            <a href="mailto:info@dockfinity.com" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group">
                                <Mail className="w-3.5 h-3.5 shrink-0 group-hover:text-brand transition-colors" />
                                info@dockfinity.com
                            </a>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div className="md:col-span-2">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 font-mono mb-5">Verticals</h3>
                        <ul className="space-y-3">
                            {verticalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`text-sm text-foreground/60 transition-colors ${link.color}`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 font-mono mb-5">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-4">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 font-mono mb-5">Certifications</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {certs.map((c) => (
                                <div key={c.label} className="px-4 py-3 rounded-xl border border-border/50 bg-card hover:bg-card/70 transition-colors">
                                    <div className="text-sm font-bold text-foreground">{c.label}</div>
                                    <div className="text-xs text-foreground/40">{c.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40">
                    <p>© {currentYear} Dockfinity Private Limited. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {legalLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-foreground/70 transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
