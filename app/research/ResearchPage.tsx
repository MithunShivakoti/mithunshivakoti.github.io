"use client";

import { useState } from "react";
import Link from "next/link";
import { publications, socialLinks } from "@/data/portfolio";
import VenueBadge from "@/components/ui/VenueBadge";
import type { Publication, Venue } from "@/types";
import { ArrowLeft, Copy, Check, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

function generateBibtex(pub: Publication): string {
  const authorLast =
    pub.authors[0].split(" ").pop()?.toLowerCase().replace(/[^a-z]/g, "") ?? "author";
  const titleWord = pub.title
    .split(/[\s:,]/)[0]
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
  const key = `${authorLast}${pub.year}${titleWord}`;
  const authors = pub.authors.join(" and ");

  const isConference = !["Journal", "Book Chapter", "Patent", "Preprint"].includes(pub.venue);
  const entryType = isConference
    ? "inproceedings"
    : pub.venue === "Journal"
    ? "article"
    : pub.venue === "Book Chapter"
    ? "incollection"
    : "misc";

  const venueField = isConference
    ? `  booktitle = {Proceedings of ${pub.venue} ${pub.year}},`
    : pub.venue === "Journal"
    ? `  journal   = {EAI Endorsed Transactions on Pervasive Health and Technology},`
    : pub.venue === "Book Chapter"
    ? `  booktitle = {Research Advances in Intelligent Computing},`
    : `  note      = {${pub.venue}},`;

  return `@${entryType}{${key},
  title     = {${pub.title}},
  author    = {${authors}},
${venueField}
  year      = {${pub.year}},
}`;
}

function PaperCard({ pub }: { pub: Publication }) {
  const [abstractOpen, setAbstractOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    await navigator.clipboard.writeText(generateBibtex(pub));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/[0.06] bg-[#111111] p-5 hover:border-white/10 transition-all duration-200">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <VenueBadge venue={pub.venue} />
        <span className="text-xs text-zinc-600">{pub.year}</span>
        {pub.featured && (
          <span className="text-xs text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-sm font-semibold text-zinc-200 leading-snug mb-2">{pub.title}</h3>

      <p className="text-xs text-zinc-500 mb-3">
        {pub.authors.map((author, i) => (
          <span key={i}>
            {i > 0 && ", "}
            <span className={author.includes("Mithun") ? "text-zinc-300 font-medium" : ""}>
              {author}
            </span>
          </span>
        ))}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => setAbstractOpen((v) => !v)}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          {abstractOpen ? (
            <ChevronUp className="w-3 h-3" />
          ) : (
            <ChevronDown className="w-3 h-3" />
          )}
          Abstract
        </button>

        <button
          onClick={copyBibtex}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs border transition-all",
            copied
              ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/5"
              : "border-white/[0.08] text-zinc-500 hover:text-zinc-300 hover:border-white/20"
          )}
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? "Copied!" : "BibTeX"}
        </button>

        {pub.tags && (
          <div className="flex flex-wrap gap-1 ml-auto">
            {pub.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-zinc-600 bg-white/[0.03] border border-white/[0.04] px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {abstractOpen && (
        <p className="mt-3 text-xs text-zinc-500 leading-relaxed border-t border-white/[0.06] pt-3">
          {pub.abstract}
        </p>
      )}
    </div>
  );
}

export default function ResearchPage() {
  const [filter, setFilter] = useState<Venue | "all">("all");

  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);
  const venues = Array.from(new Set(publications.map((p) => p.venue))) as Venue[];

  const filtered = filter === "all" ? publications : publications.filter((p) => p.venue === filter);

  const byYear: Record<number, Publication[]> = {};
  for (const year of years) {
    const pubs = filtered.filter((p) => p.year === year);
    if (pubs.length > 0) byYear[year] = pubs;
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Portfolio
      </Link>

      {/* Header */}
      <div className="mb-12">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
          Publications
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-3">
          Research Archive
        </h1>
        <p className="text-zinc-500 text-base mb-8">
          All published research, conference papers, patents, and other contributions.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="text-2xl font-bold gradient-text">{publications.length}</p>
            <p className="text-xs text-zinc-600 mt-0.5">Publications</p>
          </div>
          <div className="w-px h-8 bg-white/[0.06]" />
          <div>
            <p className="text-2xl font-bold gradient-text">3</p>
            <p className="text-xs text-zinc-600 mt-0.5">Top-tier venues</p>
          </div>
          <div className="w-px h-8 bg-white/[0.06]" />
          <div>
            <p className="text-2xl font-bold gradient-text">
              {years[years.length - 1]}–{years[0]}
            </p>
            <p className="text-xs text-zinc-600 mt-0.5">Years active</p>
          </div>
          {socialLinks.scholar && (
            <>
              <div className="w-px h-8 bg-white/[0.06]" />
              <a
                href={socialLinks.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-indigo-400 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Google Scholar
              </a>
            </>
          )}
        </div>
      </div>

      {/* Venue filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <button
          onClick={() => setFilter("all")}
          className={cn(
            "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border",
            filter === "all"
              ? "bg-indigo-600 text-white border-indigo-600"
              : "text-zinc-400 hover:text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.06]"
          )}
        >
          All ({publications.length})
        </button>
        {venues.map((v) => (
          <button
            key={v}
            onClick={() => setFilter(v)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border",
              filter === v
                ? "bg-indigo-600 text-white border-indigo-600"
                : "text-zinc-400 hover:text-zinc-200 bg-white/[0.04] hover:bg-white/[0.08] border-white/[0.06]"
            )}
          >
            {v} ({publications.filter((p) => p.venue === v).length})
          </button>
        ))}
      </div>

      {/* Publications grouped by year */}
      <div className="space-y-12">
        {Object.entries(byYear)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, pubs]) => (
            <div key={year}>
              <div className="flex items-center gap-3 mb-5">
                <h2 className="text-xs font-semibold text-zinc-500 tracking-widest uppercase">
                  {year}
                </h2>
                <div className="flex-1 h-px bg-white/[0.06]" />
                <span className="text-xs text-zinc-700">
                  {pubs.length} paper{pubs.length !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="space-y-3">
                {pubs.map((pub, i) => (
                  <PaperCard key={i} pub={pub} />
                ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
