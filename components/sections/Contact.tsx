"use client";

import { useState } from "react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { contact, socialLinks, siteConfig } from "@/data/portfolio";
import { Mail, MapPin, Github, Linkedin, BookOpen, Send, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`);
    setTimeout(() => setStatus("sent"), 400);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { href: socialLinks.github, icon: Github, label: "GitHub" },
    { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socialLinks.scholar, icon: BookOpen, label: "Google Scholar" },
  ].filter((s) => s.href);

  return (
    <SectionWrapper id="contact">
      <SectionHeader label="Say hello" title={contact.heading} subtitle={contact.subheading} />

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Left: contact info */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-[#111111] flex items-center justify-center group-hover:border-indigo-500/30 group-hover:bg-indigo-500/5 transition-all">
              <Mail className="w-4 h-4 text-zinc-400 group-hover:text-indigo-400 transition-colors" />
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-zinc-300 hover:text-indigo-400 transition-colors flex-1"
            >
              {contact.email}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className={cn(
                "p-2 rounded-md border text-xs transition-all duration-200",
                copied
                  ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
                  : "border-white/[0.06] text-zinc-600 hover:text-zinc-300 hover:border-white/20"
              )}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-[#111111] flex items-center justify-center">
              <MapPin className="w-4 h-4 text-zinc-400" />
            </div>
            <span className="text-zinc-400">{contact.location}</span>
          </div>

          <div className="flex items-center gap-3 pt-2">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-white/[0.06] bg-[#111111] flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="pt-4 p-5 rounded-xl border border-emerald-500/15 bg-emerald-500/[0.04]">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium">
                {siteConfig.availabilityNote}
              </span>
            </div>
            <p className="text-zinc-500 text-sm">
              Available for full-time roles. Authorized to work in the US on OPT (STEM OPT eligible).
            </p>
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs text-zinc-500 font-medium mb-1.5">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2.5 rounded-lg border border-white/[0.06] bg-[#111111] text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-[#141414] transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-xs text-zinc-500 font-medium mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-2.5 rounded-lg border border-white/[0.06] bg-[#111111] text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-[#141414] transition-all"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs text-zinc-500 font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the role or opportunity..."
              className="w-full px-4 py-2.5 rounded-lg border border-white/[0.06] bg-[#111111] text-zinc-200 placeholder:text-zinc-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-[#141414] transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className={cn(
              "w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm transition-all duration-200",
              status === "sent"
                ? "bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 cursor-default"
                : "bg-indigo-600 hover:bg-indigo-500 text-white hover:-translate-y-0.5 shadow-lg shadow-indigo-900/30"
            )}
          >
            {status === "sent" ? (
              "Message sent!"
            ) : status === "sending" ? (
              "Opening mail client..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </SectionWrapper>
  );
}
