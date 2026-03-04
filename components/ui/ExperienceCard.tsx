import { cn } from "@/lib/utils";
import type { ExperienceEntry } from "@/types";

const typeLabels: Record<ExperienceEntry["type"], string> = {
  internship: "Internship",
  research: "Research",
  "full-time": "Full-time",
  "part-time": "Part-time",
};

const typeStyles: Record<ExperienceEntry["type"], string> = {
  internship: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  research: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "full-time": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "part-time": "bg-blue-500/10 text-blue-400 border-blue-500/20",
};

interface ExperienceCardProps {
  entry: ExperienceEntry;
  index: number;
}

export default function ExperienceCard({ entry, index }: ExperienceCardProps) {
  return (
    <div className="relative flex gap-6 md:gap-8">
      {/* Timeline line + dot */}
      <div className="hidden md:flex flex-col items-center">
        <div
          className={cn(
            "w-3 h-3 rounded-full mt-1.5 flex-shrink-0 border-2 border-indigo-400",
            index === 0 ? "bg-indigo-400" : "bg-[#0a0a0a]"
          )}
        />
        <div className="flex-1 w-px bg-white/5 mt-2" />
      </div>

      {/* Card */}
      <div className="flex-1 pb-12 md:pb-16">
        <div className="group rounded-xl border border-white/[0.06] bg-[#111111] p-6 hover:border-white/10 hover:bg-[#141414] transition-all duration-300">
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-zinc-100 font-semibold text-lg leading-tight">
                {entry.role}
              </h3>
              <p className="text-indigo-400 font-medium mt-0.5">{entry.company}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={cn(
                  "text-xs font-medium px-2 py-0.5 rounded-full border",
                  typeStyles[entry.type]
                )}
              >
                {typeLabels[entry.type]}
              </span>
              <span className="text-xs text-zinc-500">{entry.period}</span>
            </div>
          </div>

          <p className="text-xs text-zinc-500 mb-4">{entry.location}</p>

          <ul className="space-y-2 mb-5">
            {entry.description.map((point, i) => (
              <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                <span className="text-indigo-500 mt-1 flex-shrink-0">▸</span>
                {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {entry.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
