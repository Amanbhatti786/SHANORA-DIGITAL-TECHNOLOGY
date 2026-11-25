"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#about", label: "About Us" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOverlayHero = pathname === "/" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 motion-reduce:transition-none ${
        isOverlayHero
          ? "bg-[#071A36]/80 text-white backdrop-blur-md border-b border-white/10"
          : "bg-[#071A36] text-white shadow-md border-b border-white/10"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Left: Official SDT Logo */}
        <Link
          href="/#home"
          className="flex shrink-0 items-center gap-3 rounded-lg bg-white/95 px-2.5 py-1.5 shadow-sm transition hover:bg-white"
        >
          <img
            src="/assets/logo/sdt-logo.png"
            alt="SDT — SHANORA DIGITAL TECHNOLOGY Logo"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Center/Main Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 text-sm font-medium lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="relative py-1 text-slate-200 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#2684FF] after:transition-all after:duration-200 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Get a Quote CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            className="hidden rounded-lg bg-[#1456D9] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2684FF] sm:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <div
        id="mobile-nav-drawer"
        className={`grid overflow-hidden border-t border-white/10 bg-[#071A36] transition-all duration-300 motion-reduce:transition-none lg:hidden ${
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full rounded-lg bg-[#1456D9] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#2684FF]"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
