"use client"

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/app/actions";
import { useState, useRef } from "react";
import { Mail, MapPin, Phone, Clock, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true);
        try {
            await submitContactForm(formData);
            setIsSuccess(true);
            formRef.current?.reset();
        } catch (error) {
            console.error("Error submitting form", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <Section className="bg-muted/10 pt-32 pb-20 border-b border-border/40">
                <Container className="text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Contact Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Get in touch with our team to discuss your requirements, partnerships, or general inquiries.
                    </p>
                </Container>
            </Section>

            <Section>
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <div className="mb-12">
                                <h2 className="text-2xl font-bold mb-8">Company Information</h2>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">Registered Office</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Dockfinity Private Limited<br />
                                                G-30/394-395, 2nd Floor, Sector-3,<br />
                                                Rohini, North West Delhi,<br />
                                                Delhi - 110085, India
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">Phone</h3>
                                            <p className="text-muted-foreground">+91 99117 21100</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">Email</h3>
                                            <p className="text-muted-foreground">dockfinity@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 bg-primary/5 border border-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                            <Clock className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-foreground mb-1">Office Hours</h3>
                                            <p className="text-muted-foreground">Monday - Friday: 10:00 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-secondary/20 rounded-2xl border border-border/50">
                                <h3 className="font-bold mb-3">Verified Digital Presence</h3>
                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    This website is the official digital property of Dockfinity Private Limited. All business communications are conducted through our official channels.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                                        Officially Verified
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
                                        Secure Connection
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card p-8 md:p-10 rounded-3xl border border-border shadow-lg shadow-primary/5">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in fade-in zoom-in">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                                    <p className="text-muted-foreground mb-8 text-center max-w-xs">Thank you for contacting Dockfinity. We will get back to you shortly.</p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline">Send Another Message</Button>
                                </div>
                            ) : (
                                <form ref={formRef} action={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium ml-1">Full Name</label>
                                            <Input id="name" name="name" placeholder="John Doe" required className="h-11" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium ml-1">Phone Number</label>
                                            <Input id="phone" name="phone" placeholder="+91 9xxxx xxxxx" required className="h-11" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium ml-1">Email Address</label>
                                        <Input id="email" name="email" type="email" placeholder="john@company.com" required className="h-11" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium ml-1">Subject / Vertical</label>
                                        <div className="relative">
                                            <select
                                                id="subject"
                                                name="subject"
                                                className="flex h-11 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
                                                required
                                                defaultValue=""
                                            >
                                                <option value="" disabled>Select a topic...</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                                <option value="Dockware Labs">Dockware Labs (Software)</option>
                                                <option value="Trading Dock">Trading Dock (Education)</option>
                                                <option value="Impression Dock">Impression Dock (Gifting)</option>
                                                <option value="Partnership">Partnership</option>
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-muted-foreground">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                                        <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required className="resize-none" />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full h-12 text-base" disabled={isSubmitting}>
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
}
