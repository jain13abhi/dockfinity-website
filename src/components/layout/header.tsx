"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "About", href: "/about" },
    {
        name: "Verticals",
        href: "/verticals",
        children: [
            { name: "Dockware Labs", href: "/verticals/dockware-labs", desc: "Enterprise SaaS & Automation", color: "text-blue-600" },
            { name: "Trading Dock", href: "/verticals/trading-dock", desc: "Market Analytics & Education", color: "text-emerald-600" },
            { name: "Impressio Dock", href: "/verticals/impressio-dock", desc: "Corporate Gifting & Printing", color: "text-amber-600" },
        ],
    },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [verticalsOpen, setVerticalsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setVerticalsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 border-b transition-colors duration-300",
                scrolled
                    ? "bg-background border-border shadow-sm"
                    : "bg-background/95 border-border/40"
            )}
        >
            <Container className="h-16 md:h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-8 h-8 border border-foreground flex items-center justify-center group-hover:bg-brand group-hover:border-brand transition-colors duration-300">
                        <span className="text-foreground text-xs font-bold font-mono group-hover:text-brand-foreground">D</span>
                    </div>
                    <span className="font-mono font-semibold text-lg tracking-[0.15em] text-foreground group-hover:text-foreground/80 transition-colors">
                        DOCKFINITY
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {navigation.map((item) => (
                        item.children ? (
                            <div
                                key={item.name}
                                className="relative"
                                onMouseEnter={() => setVerticalsOpen(true)}
                                onMouseLeave={() => setVerticalsOpen(false)}
                            >
                                <button
                                    className={cn(
                                        "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                        pathname.startsWith("/verticals")
                                            ? "text-foreground bg-secondary"
                                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                                    )}
                                >
                                    {item.name}
                                    <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", verticalsOpen && "rotate-180")} />
                                </button>

                                {/* Dropdown */}
                                {verticalsOpen && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-popover border border-border shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="flex items-start gap-3 px-4 py-3 rounded-sm hover:bg-secondary/70 transition-colors group"
                                            >
                                                <div className="mt-0.5">
                                                    <div className="text-sm font-semibold text-foreground group-hover:text-foreground mb-0.5">
                                                        {child.name}
                                                    </div>
                                                    <div className={cn("text-xs", child.color)}>{child.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                        <div className="mt-1 pt-1 border-t border-border/50">
                                            <Link
                                                href="/verticals"
                                                className="flex items-center gap-2 px-4 py-2.5 rounded-sm hover:bg-secondary/70 transition-colors text-xs text-muted-foreground hover:text-foreground font-medium"
                                            >
                                                View all verticals →
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                                    pathname === item.href
                                        ? "text-foreground bg-secondary"
                                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                                )}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <Button asChild size="sm" className="rounded-sm px-6 font-semibold bg-foreground text-background hover:bg-foreground/90 shadow-sm">
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background border-b border-border shadow-lg">
                    <Container className="py-4">
                        <div className="flex flex-col gap-1">
                            {navigation.map((item) => (
                                item.children ? (
                                    <div key={item.name}>
                                        <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono mt-2 mb-1">
                                            Verticals
                                        </div>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center gap-3 px-4 py-3 rounded-sm hover:bg-secondary/70 transition-colors"
                                            >
                                                <div>
                                                    <div className="text-sm font-semibold text-foreground">{child.name}</div>
                                                    <div className={cn("text-xs", child.color)}>{child.desc}</div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "px-4 py-3 rounded-sm text-base font-medium transition-colors",
                                            pathname === item.href
                                                ? "text-foreground bg-secondary"
                                                : "text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                )
                            ))}
                            <div className="pt-3 mt-2 border-t border-border/50">
                                <Button asChild className="w-full rounded-sm font-semibold bg-foreground text-background hover:bg-foreground/90">
                                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
