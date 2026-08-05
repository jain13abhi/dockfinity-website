"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Cpu, ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export function DockwareNav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent border-b border-border/40"
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-500/60 transition-colors">
            <Cpu className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-foreground flex items-center gap-1.5">
              Dockware <span className="text-blue-500">Labs</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-muted-foreground">
              Technology Arm of Dockfinity
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            Services & Pillars
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            How We Work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors font-sans"
          >
            Contact
          </a>

          <div className="h-4 w-px bg-border" />

          {/* Official Dockfinity Brand Link with Official Logo Mark */}
          <a
            href="https://dockfinity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-blue-500 flex items-center gap-2 transition-colors py-1"
          >
            <Image
              src="/logo-mark-navy.png"
              alt="Dockfinity"
              width={24}
              height={14}
              className="h-4 w-auto dark:hidden"
            />
            <Image
              src="/logo-mark-white.png"
              alt="Dockfinity"
              width={24}
              height={14}
              className="h-4 w-auto hidden dark:block"
            />
            <span className="font-display text-xs font-bold text-foreground tracking-tight">DOCKFINITY.COM</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
          </a>

          <ThemeToggle />

          <Button
            asChild
            className="rounded-full px-6 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-500/20"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-foreground"
          >
            Services & Pillars
          </a>
          <a
            href="#process"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-foreground"
          >
            How We Work
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-foreground"
          >
            Contact
          </a>
          <a
            href="https://dockfinity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-mono text-blue-500 flex items-center gap-2 pt-2 border-t border-border"
          >
            <Image
              src="/logo-mark-navy.png"
              alt="Dockfinity"
              width={20}
              height={12}
              className="h-3.5 w-auto dark:hidden"
            />
            <Image
              src="/logo-mark-white.png"
              alt="Dockfinity"
              width={20}
              height={12}
              className="h-3.5 w-auto hidden dark:block"
            />
            <span>Visit main site (dockfinity.com)</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
