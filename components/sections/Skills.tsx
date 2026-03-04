import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { skills, certifications } from "@/data/portfolio";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Toolkit"
        title="Skills"
        subtitle="Technologies and tools I use to build AI/ML systems."
      />

      <div className="space-y-6 mb-16">
        {skills.map((category) => (
          <div
            key={category.category}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start"
          >
            <div className="w-full sm:w-44 flex-shrink-0">
              <p className="text-xs font-semibold text-zinc-500 tracking-widest uppercase pt-1">
                {category.category}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-1">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg border border-white/[0.06] bg-white/[0.03] text-zinc-300 hover:border-indigo-500/30 hover:text-indigo-300 hover:bg-indigo-500/[0.04] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-sm font-semibold text-zinc-500 tracking-widest uppercase mb-5">
          Certifications
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-lg border border-white/[0.06] bg-[#111111] px-5 py-4 hover:border-white/10 hover:bg-[#141414] transition-all duration-200"
            >
              <div className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
              <div>
                <p className="text-sm text-zinc-300 leading-snug">{cert.name}</p>
                <p className="text-xs text-zinc-500 mt-0.5">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
