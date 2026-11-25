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
      className={`sticky top-0 z-50 w-full max-w-full overflow-x-hidden transition-all duration-300 motion-reduce:transition-none ${
        isOverlayHero
          ? "border-b border-white/10 bg-[#071A36]/90 text-white backdrop-blur-md"
          : "border-b border-white/10 bg-[#071A36] text-white shadow-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2.5 px-3 py-3 sm:px-6 lg:px-8">
        {/* Left: Official SDT Logo + Shanora Digital Technology */}
        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:flex-initial sm:gap-3.5">
          <Link
            href="/#home"
            className="flex shrink-0 items-center rounded-lg bg-white px-2.5 py-1.5 shadow-xs transition hover:bg-slate-100"
          >
            <img
              src="/sdt-logo.png"
              alt="SDT — SHANORA DIGITAL TECHNOLOGY Logo"
              className="h-10 w-auto max-w-[92px] object-contain sm:h-12 sm:max-w-none"
            />
          </Link>

          <Link
            href="/#home"
            className="min-w-0 flex-1 truncate rounded-lg border border-white/20 bg-white/[0.08] px-3 py-2 text-left text-xs font-bold tracking-tight text-white transition hover:border-[#2684FF]/60 hover:bg-white/[0.14] sm:flex-initial sm:px-4 sm:py-2.5 sm:text-base"
          >
            <span className="truncate">Shanora Digital Technology</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-5 text-sm font-medium lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap py-1 text-slate-200 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Get a Quote + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#contact"
            className="hidden whitespace-nowrap rounded-lg bg-[#1456D9] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2684FF] sm:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/25 bg-white/10 px-2.5 py-2 text-xs font-semibold text-white transition hover:bg-white/15 lg:hidden"
          >
            {mobileOpen ? "Close" : "Menu"}
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
          <div className="space-y-1 px-4 py-4">
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
