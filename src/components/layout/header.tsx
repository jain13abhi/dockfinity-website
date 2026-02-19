"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "About", href: "/about" },
    { name: "Verticals", href: "/verticals" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm" : "bg-transparent"
            )}
        >
            <Container className="h-16 md:h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <span className="font-outfit font-bold text-xl md:text-2xl tracking-tighter text-foreground group-hover:text-primary transition-colors">
                        DOCKFINITY
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                                pathname === item.href ? "text-foreground after:w-full" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button asChild size="sm" className="hidden lg:inline-flex rounded-full px-6 font-semibold">
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-2 text-muted-foreground hover:text-foreground"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border p-4 shadow-lg animate-in slide-in-from-top-5">
                    <div className="flex flex-col space-y-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-base font-medium transition-colors hover:text-primary p-2 rounded-md hover:bg-muted",
                                    pathname === item.href ? "text-foreground bg-muted/50" : "text-muted-foreground"
                                )}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Button asChild className="w-full rounded-full">
                                <Link href="/contact" onClick={() => setIsOpen(false)}>Get in Touch</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
