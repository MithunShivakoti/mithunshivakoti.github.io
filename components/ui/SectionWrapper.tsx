"use client";

import { useReducedMotion, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-zinc-400 text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 w-12 h-0.5 bg-indigo-500/60 rounded-full" />
    </div>
  );
}
