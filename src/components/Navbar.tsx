"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/work", label: "Projekte" },
  { href: "/about", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          <Link
            href="/"
            className="text-sm uppercase tracking-[0.3em] text-white font-light"
          >
            Zennkoa
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm uppercase tracking-[0.15em] transition-opacity text-white ${
                    pathname === link.href ? "opacity-100" : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {/* Mobile: theme toggle + hamburger */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={open}
              className="text-white w-8 h-8 flex flex-col justify-center gap-[5px]"
            >
              <span
                className={`block h-[2px] bg-white transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col justify-center px-8 transition-all duration-500 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="space-y-6">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`transition-all duration-400 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <Link
                href={link.href}
                className={`text-5xl font-black uppercase tracking-tight transition-colors ${
                  pathname === link.href
                    ? "text-foreground"
                    : "text-neutral-400 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <a
            href="mailto:hello@zennkoa.de"
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400 hover:text-foreground transition-colors"
          >
            hello@zennkoa.de
          </a>
        </div>
      </div>
    </>
  );
}
