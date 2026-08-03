"use client"

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions";
import { useState, useRef } from "react";
import { Mail, Phone, Clock, Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

const contactDetails = [
    {
        icon: Phone,
        label: "Phone",
        value: "+91 99117 21100",
        href: "tel:+919911721100",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
    {
        icon: Mail,
        label: "Email",
        value: "dockfinity@gmail.com",
        href: "mailto:dockfinity@gmail.com",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: "Monday – Friday\n10:00 AM – 6:00 PM IST",
        href: null,
        color: "text-violet-500",
        bg: "bg-violet-500/10",
    },
];

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        setErrorMessage(null);
        try {
            await submitContactForm(formData);
            setIsSuccess(true);
            formRef.current?.reset();
        } catch (error) {
            console.error("Error submitting form", error);
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please email us directly at dockfinity@gmail.com or call +91 99117 21100."
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            {/* ── PAGE HERO ── */}
            <section className="relative pt-28 pb-14 overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />
                <div className="absolute top-0 left-1/3 w-[500px] h-[400px] glow-orb-amber rounded-full blur-3xl opacity-20 pointer-events-none" />

                <Container className="relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border/60 text-xs font-bold uppercase tracking-widest text-muted-foreground font-mono mb-6">
                            Let&apos;s Talk
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-5">
                            Start a{" "}
                            <span className="text-gradient-brand">Conversation.</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                            Whether you&apos;re exploring a partnership, need enterprise software, or have a gifting requirement — our team is ready to help.
                        </p>
                    </div>
                </Container>
            </section>


            {/* ── MAIN CONTENT ── */}
            <section className="pb-16 md:pb-24">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

                        {/* Left: Contact info */}
                        <div className="lg:col-span-2 space-y-6">
                            {contactDetails.map((c) => (
                                <div
                                    key={c.label}
                                    className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-border hover:shadow-md transition-all duration-300"
                                >
                                    <div className={`w-11 h-11 ${c.bg} rounded-xl flex items-center justify-center shrink-0`}>
                                        <c.icon className={`w-5 h-5 ${c.color}`} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono mb-1">{c.label}</div>
                                        {c.href ? (
                                            <a href={c.href} className="text-sm text-foreground hover:text-brand transition-colors font-medium">
                                                {c.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm text-foreground font-medium whitespace-pre-line">{c.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Trust badge */}
                            <div className="p-6 bg-secondary/50 rounded-2xl border border-border/50">
                                <h3 className="font-display font-bold text-base mb-2">Official Channel</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    This is the only official website of Dockfinity Private Limited. All communications go through our listed channels only.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                        ✓ CIN Registered
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                                        ✓ GST Active
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                                        ✓ DPIIT Recognized
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Contact form */}
                        <div className="lg:col-span-3">
                            <div className="bg-card p-8 md:p-10 rounded-2xl border border-border/50 shadow-xl shadow-foreground/5" aria-live="polite" aria-atomic="false">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-300">
                                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                                        </div>
                                        <h3 className="font-display text-2xl font-bold mb-3">Message Sent!</h3>
                                        <p className="text-muted-foreground mb-8 max-w-xs leading-relaxed">
                                            Thank you for reaching out. Our team will respond within 1–2 business days.
                                        </p>
                                        <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-full px-8">
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="mb-8">
                                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand font-mono mb-2">Contact Form</p>
                                            <h2 className="font-display text-2xl font-bold">Send Us a Message</h2>
                                        </div>

                                        {errorMessage && (
                                            <div role="alert" className="mb-6 flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                                                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                                                <p className="text-sm text-destructive leading-relaxed">{errorMessage}</p>
                                            </div>
                                        )}

                                        <form ref={formRef} action={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name *</label>
                                                    <Input id="name" name="name" autoComplete="name" placeholder="Rahul Sharma" required className="h-12 rounded-xl border-border/60" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</label>
                                                    <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 9XXXXXXXXX" required className="h-12 rounded-xl border-border/60" />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-semibold text-foreground">Business Email *</label>
                                                <Input id="email" name="email" type="email" autoComplete="email" placeholder="rahul@company.com" required className="h-12 rounded-xl border-border/60" />
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="subject" className="text-sm font-semibold text-foreground">I&apos;m interested in *</label>
                                                <div className="relative">
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        className="flex h-12 w-full items-center justify-between rounded-xl border border-border/60 bg-background px-4 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none text-foreground"
                                                        required
                                                        defaultValue=""
                                                    >
                                                        <option value="" disabled>Select a topic...</option>
                                                        <option value="General Inquiry">General Inquiry</option>
                                                        <option value="Dockware Labs">Dockware Labs — Software & Automation</option>
                                                        <option value="Digital Services">Digital Services — Websites & Marketing</option>
                                                        <option value="Trading Dock">Trading Dock — Analytics & Education</option>
                                                        <option value="Impressio Dock">Impressio Dock — Gifting & Printing</option>
                                                        <option value="Partnership">Strategic Partnership</option>
                                                        <option value="Investment">Investment Inquiry</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted-foreground">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell us about your project, requirement, or question..."
                                                    rows={5}
                                                    required
                                                    className="resize-none rounded-xl border-border/60"
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full h-14 text-base font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90 shadow-lg hover:shadow-xl transition-all duration-300"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Your Message...</>
                                                ) : (
                                                    <>Send Message <ArrowRight className="ml-2 h-4 w-4" /></>
                                                )}
                                            </Button>

                                            <p className="text-xs text-center text-muted-foreground">
                                                We typically respond within 1–2 business days. All information is kept strictly confidential.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </>
    );
}
