import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group flex flex-col rounded-xl border border-white/[0.06] bg-[#111111] p-6 hover:border-indigo-500/20 hover:bg-[#141414] transition-all duration-300 hover:-translate-y-1">
      {/* Gradient tag bar */}
      <div className="flex gap-1 mb-5">
        <div className="w-3 h-3 rounded-full bg-indigo-500/60" />
        <div className="w-3 h-3 rounded-full bg-purple-500/40" />
        <div className="w-3 h-3 rounded-full bg-pink-500/40" />
      </div>

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-zinc-100 font-semibold text-base leading-snug group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-zinc-500 hover:text-indigo-400 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 text-xs rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
