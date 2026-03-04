import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";
import { Github } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <SectionHeader
          label="Build"
          title="Projects"
          subtitle="Things I've built — research, tools, and experiments."
        />
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] text-zinc-400 text-sm hover:border-white/20 hover:text-zinc-200 transition-all mb-12 md:mb-16 -mt-8 md:-mt-10 self-start"
        >
          <Github className="w-4 h-4" />
          View GitHub
        </a>
      </div>

      {/* Featured grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {featured.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      {/* Other projects */}
      {others.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
