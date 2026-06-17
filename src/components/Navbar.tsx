"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Start" },
  { href: "/work", label: "Projekte" },
  { href: "/about", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <Link
          href="/"
          className="text-sm uppercase tracking-[0.3em] text-white font-light"
        >
          Zennkoa
        </Link>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm uppercase tracking-[0.15em] transition-opacity text-white ${pathname === link.href
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
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
      </div>
    </nav>
  );
}
