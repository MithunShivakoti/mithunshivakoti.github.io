import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader label="Background" title="Education" />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/[0.06] bg-[#111111] p-6 md:p-8 hover:border-indigo-500/20 hover:bg-[#141414] transition-all duration-300"
          >
            {/* Institution */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-zinc-100 font-semibold text-lg leading-tight">
                  {edu.institution}
                </h3>
                <p className="text-indigo-400 text-sm mt-1">
                  {edu.degree} in {edu.field}
                </p>
              </div>
              <span className="text-xs text-zinc-500 text-right flex-shrink-0">
                {edu.period}
              </span>
            </div>

            <p className="text-zinc-500 text-sm mb-4">{edu.location}</p>

            {edu.gpa && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs text-zinc-500">GPA</span>
                <span className="text-sm font-semibold text-zinc-300">{edu.gpa}</span>
              </div>
            )}

            {edu.thesis && (
              <div className="mb-4 p-3 rounded-lg bg-indigo-500/[0.05] border border-indigo-500/10">
                <p className="text-xs text-zinc-500 mb-1 font-medium">Thesis</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{edu.thesis}</p>
              </div>
            )}

            {edu.relevantCourses && (
              <div>
                <p className="text-xs text-zinc-500 font-medium mb-2">Relevant Courses</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.relevantCourses.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
