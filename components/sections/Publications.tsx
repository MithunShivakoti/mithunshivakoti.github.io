"use client";

import { useState } from "react";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import PublicationCard from "@/components/ui/PublicationCard";
import { publications, socialLinks } from "@/data/portfolio";
import { BookOpen, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

type Filter = "all" | "featured";

export default function Publications() {
  const [filter, setFilter] = useState<Filter>("all");

  const featured = publications.filter((p) => p.featured);
  const others = publications.filter((p) => !p.featured);
  return (
    <SectionWrapper id="publications">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div>
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            Research
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight flex items-center gap-3">
            Publications
            <span className="text-lg font-normal text-zinc-500 bg-white/[0.06] px-2.5 py-0.5 rounded-full">
              {publications.length}
            </span>
          </h2>
          <div className="mt-4 w-12 h-0.5 bg-indigo-500/60 rounded-full" />
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.scholar && (
            <a
              href={socialLinks.scholar}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] text-zinc-400 text-sm hover:border-indigo-500/30 hover:text-indigo-400 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Scholar
            </a>
          )}
          <Link
            href="/research"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] text-zinc-400 text-sm hover:border-indigo-500/30 hover:text-indigo-400 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            Archive + BibTeX
          </Link>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(["all", "featured"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border",
              filter === f
                ? "bg-indigo-600 text-white border-indigo-600"
                : "text-zinc-400 hover:text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.06]"
            )}
          >
            {f === "all"
              ? `All (${publications.length})`
              : f === "featured"
              ? `Featured (${featured.length})`
              : `${f} (${publications.filter((p) => p.venue === f).length})`}
          </button>
        ))}
      </div>

      {/* Publication list */}
      {filter === "all" ? (
        <>
          {featured.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {featured.map((pub, i) => (
                <PublicationCard key={i} pub={pub} featured />
              ))}
            </div>
          )}
          <div className="grid gap-4">
            {others.map((pub, i) => (
              <PublicationCard key={i} pub={pub} />
            ))}
          </div>
        </>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {featured.map((pub, i) => (
            <PublicationCard key={i} pub={pub} featured />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
