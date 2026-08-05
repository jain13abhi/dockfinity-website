"use client";

import Link from "next/link";
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
          ? "bg-[#090d14]/85 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/20"
          : "bg-transparent border-b border-white/5"
      }`}
    >
      <Container className="flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-500/60 transition-colors">
            <Cpu className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Dockware <span className="text-blue-500">Labs</span>
            </span>
            <span className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
              Technology Division
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Services & Pillars
          </a>
          <a
            href="#process"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            How We Work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact
          </a>

          <div className="h-4 w-px bg-slate-800" />

          {/* Direct Link Back to Main Dockfinity Site */}
          <a
            href="https://dockfinity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider uppercase text-slate-400 hover:text-blue-400 flex items-center gap-1 transition-colors"
          >
            dockfinity.com <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <ThemeToggle />

          <Button
            asChild
            className="rounded-full px-5 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-900/30"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0d131f] border-b border-blue-900/30 px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-200"
          >
            Services & Pillars
          </a>
          <a
            href="#process"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-200"
          >
            How We Work
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-base font-medium text-slate-200"
          >
            Contact
          </a>
          <a
            href="https://dockfinity.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-mono text-blue-400 flex items-center gap-1 pt-2 border-t border-slate-800"
          >
            Visit main site (dockfinity.com) <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
