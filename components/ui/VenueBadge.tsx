import { cn } from "@/lib/utils";
import type { Venue } from "@/types";

const venueStyles: Record<string, string> = {
  NeurIPS: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  IJCAI: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  ICLR: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  AAAI: "bg-orange-500/15 text-orange-300 border-orange-500/30",
  ICML: "bg-pink-500/15 text-pink-300 border-pink-500/30",
  ACL: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
  EMNLP: "bg-teal-500/15 text-teal-300 border-teal-500/30",
  CVPR: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  ICCV: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  IEEE: "bg-blue-600/15 text-blue-300 border-blue-600/30",
  EAI: "bg-violet-500/15 text-violet-300 border-violet-500/30",
  Patent: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  "Book Chapter": "bg-stone-500/15 text-stone-300 border-stone-500/30",
  Journal: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  Conference: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
  Workshop: "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
  Preprint: "bg-zinc-600/15 text-zinc-400 border-zinc-600/30",
};

const defaultStyle = "bg-indigo-500/15 text-indigo-300 border-indigo-500/30";

interface VenueBadgeProps {
  venue: Venue;
  className?: string;
}

export default function VenueBadge({ venue, className }: VenueBadgeProps) {
  const style = venueStyles[venue] ?? defaultStyle;
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border tracking-wide",
        style,
        className
      )}
    >
      {venue}
    </span>
  );
}
