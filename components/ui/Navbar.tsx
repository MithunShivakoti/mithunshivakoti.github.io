"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type NavLink =
  | { label: string; href: string; type: "section" }
  | { label: string; href: string; type: "page" };

const navLinks: NavLink[] = [
  { label: "About", href: "#about", type: "section" },
  { label: "Experience", href: "#experience", type: "section" },
  { label: "Education", href: "#education", type: "section" },
  { label: "Achievements", href: "#achievements", type: "section" },
  { label: "Publications", href: "#publications", type: "section" },
  { label: "Research", href: "/research", type: "page" },
  { label: "Projects", href: "#projects", type: "section" },
  { label: "Skills", href: "#skills", type: "section" },
  { label: "Contact", href: "#contact", type: "section" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .filter((l) => l.type === "section")
      .map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleSectionClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/20"
            : "bg-transparent"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-semibold text-zinc-100 hover:text-indigo-400 transition-colors text-sm tracking-wide"
            >
              {siteConfig.name.split(" ")[0]}{" "}
              <span className="text-indigo-400">{siteConfig.name.split(" ")[1]}</span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                if (link.type === "page") {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "px-2.5 py-1.5 rounded-md text-sm transition-all duration-200",
                        isActive
                          ? "text-indigo-400 bg-indigo-500/10"
                          : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                }

                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleSectionClick(link.href)}
                    className={cn(
                      "px-2.5 py-1.5 rounded-md text-sm transition-all duration-200",
                      isActive
                        ? "text-indigo-400 bg-indigo-500/10"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Resume button + mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-indigo-500/40 text-indigo-400 text-sm font-medium hover:bg-indigo-500/10 transition-all duration-200"
              >
                <FileDown className="w-3.5 h-3.5" />
                Resume
              </a>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden p-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-[#0a0a0a]/95 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => {
                if (link.type === "page") {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-lg transition-colors text-base",
                        pathname === link.href
                          ? "text-indigo-400 bg-indigo-500/10"
                          : "text-zinc-300 hover:text-zinc-100 hover:bg-white/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <button
                    key={link.href}
                    onClick={() => handleSectionClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-lg text-zinc-300 hover:text-zinc-100 hover:bg-white/5 transition-colors text-base"
                  >
                    {link.label}
                  </button>
                );
              })}
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mt-2 px-4 py-3 rounded-lg border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
