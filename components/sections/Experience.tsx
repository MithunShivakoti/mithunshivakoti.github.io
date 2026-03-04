import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20 md:py-28">
      <SectionHeader
        label="Work"
        title="Experience"
        subtitle="Industry internships and research positions."
      />

      <div className="relative">
        {experience.map((entry, index) => (
          <ExperienceCard key={index} entry={entry} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
