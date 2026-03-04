"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { about } from "@/data/portfolio";

function StatCard({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return; // non-numeric: show as-is immediately

    const target = parseInt(match[1]);
    const suffix = match[2];
    const steps = Math.min(target, 40);
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setDisplay(`${Math.round((target * step) / steps)}${suffix}`);
      if (step >= steps) clearInterval(interval);
    }, 900 / steps);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/[0.06] bg-[#111111] p-6 text-center hover:border-indigo-500/20 hover:bg-[#141414] transition-all duration-300"
    >
      <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{display}</p>
      <p className="text-xs text-zinc-500 font-medium tracking-wide">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader label="About me" title="Who I Am" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* Bio */}
        <div className="space-y-4">
          {about.paragraphs.map((para, i) => (
            <p key={i} className="text-zinc-400 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 gap-4">
          {about.highlights.map((h) => (
            <StatCard key={h.label} value={h.value} label={h.label} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
