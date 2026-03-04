"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Github, Linkedin, BookOpen, Mail, ArrowDown, FileDown } from "lucide-react";
import Image from "next/image";
import { siteConfig, socialLinks, hero } from "@/data/portfolio";
import NeuralNetCanvas from "@/components/ui/NeuralNetCanvas";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const PHRASES = [
  "Building intelligent systems that matter.",
  "Fine-tuning LLMs for production.",
  "RAG · Computer Vision · NLP · MLOps",
  "Research → Deployment, end-to-end.",
  "11+ papers. 4 internships. Real impact.",
];

function Typewriter({ phrases }: { phrases: string[] }) {
  const reduced = useReducedMotion();
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const current = phrases[phraseIdx];

    if (!deleting && charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 55);
      return () => clearTimeout(t);
    }
    if (!deleting && charCount === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }
    if (deleting && charCount > 0) {
      const t = setTimeout(() => setCharCount((c) => c - 1), 28);
      return () => clearTimeout(t);
    }
    if (deleting && charCount === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }
  }, [charCount, deleting, phraseIdx, phrases, reduced]);

  const display = reduced ? phrases[0] : phrases[phraseIdx].slice(0, charCount);

  return (
    <span>
      {display}
      {!reduced && (
        <span className="inline-block w-0.5 h-5 md:h-6 bg-indigo-400 ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  const socials = [
    { href: socialLinks.github, icon: Github, label: "GitHub" },
    { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socialLinks.scholar, icon: BookOpen, label: "Google Scholar" },
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  ].filter((s) => s.href);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg dot-grid-mask opacity-40" />

      {/* Neural network animation */}
      <NeuralNetCanvas />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 py-24 md:py-0">
          {/* Text content */}
          <motion.div
            variants={container}
            initial={reduced ? "show" : "hidden"}
            animate="show"
            className="flex-1 text-center md:text-left"
          >
            {/* Availability badge */}
            {siteConfig.openToWork && (
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-xs font-medium mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400">{siteConfig.availabilityNote}</span>
                <span className="text-emerald-700">·</span>
                <span className="text-emerald-400/80">Full-time · Research · OPT/STEM Ready</span>
              </motion.div>
            )}

            <motion.p
              variants={item}
              className="text-zinc-400 text-lg md:text-xl mb-2"
            >
              {hero.greeting}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100 mb-4"
            >
              {hero.name.split(" ")[0]}{" "}
              <span className="gradient-text">{hero.name.split(" ").slice(1).join(" ")}</span>
            </motion.h1>

            {/* Typewriter tagline */}
            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-zinc-400 font-light mb-3 min-h-[2rem] md:min-h-[2.5rem]"
            >
              <Typewriter phrases={PHRASES} />
            </motion.p>

            <motion.p
              variants={item}
              className="text-sm text-zinc-500 tracking-wide mb-8"
            >
              {hero.subTagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-10"
            >
              <a
                href={hero.cta.primary.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(hero.cta.primary.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-indigo-900/30"
              >
                {hero.cta.primary.label}
              </a>
              <a
                href={hero.cta.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-lg border border-white/10 text-zinc-300 text-sm font-medium hover:border-white/20 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4" />
                {hero.cta.secondary.label}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={item}
              className="flex items-center justify-center md:justify-start gap-3"
            >
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-lg border border-white/[0.06] text-zinc-400 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-52 h-52 md:w-72 md:h-72">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-indigo-500/20 blur-xl scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 animate-pulse-slow" />

              {/* Photo */}
              <motion.div
                animate={reduced ? {} : { y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-[#141414]"
              >
                {/* Fallback initials */}
                <div className="absolute inset-0 flex items-center justify-center text-5xl md:text-6xl font-bold text-indigo-400/40 select-none bg-[#141414]">
                  MS
                </div>
                <Image
                  src="/profile.jpg"
                  alt={siteConfig.name}
                  fill
                  className="object-cover relative z-10"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={reduced ? {} : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
