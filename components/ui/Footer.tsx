import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  const icons = [
    { href: socialLinks.github, icon: Github, label: "GitHub" },
    { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: socialLinks.scholar, icon: BookOpen, label: "Google Scholar" },
    { href: `mailto:${siteConfig.email}`, icon: Mail, label: "Email" },
  ].filter((i) => i.href);

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          © {year} {siteConfig.name}. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-3">
          {icons.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-zinc-500 hover:text-indigo-400 transition-colors rounded-md hover:bg-white/5"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
