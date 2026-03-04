import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { achievements } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        label="Recognition"
        title="Achievements"
        subtitle="Competitive accolades from national and international hackathons."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((a, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl border p-5 transition-all duration-300 hover:-translate-y-1",
              a.highlight
                ? "border-indigo-500/20 bg-indigo-500/[0.05] hover:border-indigo-500/30"
                : "border-white/[0.06] bg-[#111111] hover:border-white/10 hover:bg-[#141414]"
            )}
          >
            <div className="text-2xl mb-3">{a.icon}</div>
            <h3
              className={cn(
                "font-semibold text-sm leading-snug mb-2",
                a.highlight ? "text-zinc-100" : "text-zinc-200"
              )}
            >
              {a.title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">{a.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
