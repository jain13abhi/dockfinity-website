"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { submitContactForm } from "@/app/actions";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export function DockwareEnquiry() {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);

    try {
      await submitContactForm(formData);
      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#090d14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto bg-[#0d131f] border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-400">
              Direct Technical Enquiry
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-3">
              Discuss Your Software Architecture
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Send us details about your project, software requirements, or technical consultation needs. Our engineering lead will respond directly.
            </p>
          </div>

          {success ? (
            <div className="p-8 rounded-2xl bg-blue-950/40 border border-blue-800/60 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto" />
              <h3 className="font-display text-2xl font-bold text-white">Enquiry Received</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you for reaching out. We have logged your enquiry and our team will get back to you shortly.
              </p>
              <Button
                onClick={() => setSuccess(false)}
                variant="outline"
                className="mt-4 border-slate-700 text-slate-200 hover:bg-slate-800"
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-4 rounded-xl bg-red-950/50 border border-red-800/60 text-red-300 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="bg-[#070a10] border-slate-800 text-white focus:border-blue-500 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Work Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="bg-[#070a10] border-slate-800 text-white focus:border-blue-500 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    required
                    placeholder="10-digit phone number"
                    className="bg-[#070a10] border-slate-800 text-white focus:border-blue-500 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full h-10 px-3 py-2 bg-[#070a10] border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Enterprise Solutions (ERP/CRM/SaaS)">Enterprise Solutions (ERP/CRM/SaaS)</option>
                    <option value="Custom Software & App Development">Custom Software & App Development</option>
                    <option value="Automation & IoT Systems">Automation & IoT Systems</option>
                    <option value="IT Consulting & Support">IT Consulting & Support</option>
                    <option value="Digital Presence & Websites">Digital Presence & Websites</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 mb-2">
                  Project Description / Requirements *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Outline your project scope, current setup, or key requirements..."
                  className="w-full p-3 bg-[#070a10] border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={pending}
                className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-base shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2"
              >
                {pending ? (
                  <span>Submitting Enquiry...</span>
                ) : (
                  <>
                    <span>Submit Technical Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
