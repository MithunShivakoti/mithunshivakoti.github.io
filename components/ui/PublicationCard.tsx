"use client";

import { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import VenueBadge from "./VenueBadge";
import { cn } from "@/lib/utils";
import type { Publication } from "@/types";

const AUTHOR_NAME = "Mithun Shivakoti";

interface PublicationCardProps {
  pub: Publication;
  featured?: boolean;
}

export default function PublicationCard({
  pub,
  featured = false,
}: PublicationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cn(
        "rounded-xl border p-5 md:p-6 transition-all duration-300 group",
        featured
          ? "border-indigo-500/20 bg-indigo-500/[0.04] hover:border-indigo-500/30 hover:bg-indigo-500/[0.06]"
          : "border-white/[0.06] bg-[#111111] hover:border-white/10 hover:bg-[#141414]"
      )}
    >
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <VenueBadge venue={pub.venue} />
        <span className="text-zinc-500 text-xs">{pub.year}</span>
        {featured && (
          <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-zinc-100 font-semibold text-sm md:text-base leading-snug mb-2 group-hover:text-indigo-200 transition-colors">
        {pub.paperUrl ? (
          <a
            href={pub.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>

      <p className="text-xs text-zinc-500 mb-3">
        {pub.authors.map((author, i) => (
          <span key={i}>
            {i > 0 && ", "}
            <span
              className={cn(
                author === AUTHOR_NAME && "text-zinc-300 font-medium"
              )}
            >
              {author}
            </span>
          </span>
        ))}
      </p>

      {/* Abstract toggle */}
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors mb-3"
      >
        {expanded ? (
          <>
            <ChevronUp className="w-3 h-3" /> Hide abstract
          </>
        ) : (
          <>
            <ChevronDown className="w-3 h-3" /> Show abstract
          </>
        )}
      </button>

      {expanded && (
        <p className="text-sm text-zinc-400 leading-relaxed mb-4 border-l-2 border-indigo-500/30 pl-3">
          {pub.abstract}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 mt-2">
        {pub.paperUrl && (
          <a
            href={pub.paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            Paper
          </a>
        )}
        {pub.codeUrl && (
          <a
            href={pub.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Github className="w-3 h-3" />
            Code
          </a>
        )}
        <div className="flex flex-wrap gap-1 ml-auto">
          {pub.tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 py-0.5 text-[10px] rounded bg-white/[0.04] text-zinc-500 border border-white/[0.05]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
