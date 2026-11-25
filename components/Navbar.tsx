"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/#home", label: "Home", hash: "#home" },
  { href: "/#services", label: "Services", hash: "#services" },
  { href: "/#work", label: "Our Work", hash: "#work" },
  { href: "/#about", label: "About", hash: "#about" },
  { href: "/#contact", label: "Contact", hash: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ["contact", "about", "work", "services", "home"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveHash(`#${id}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  const isTransparentHero = pathname === "/" && !scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full max-w-full overflow-x-hidden transition-colors duration-200 motion-reduce:transition-none ${
        isTransparentHero
          ? "border-b border-white/10 bg-[#071A36]/75 text-white backdrop-blur-md"
          : "border-b border-slate-200/80 bg-[#071A36] text-white shadow-sm"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Official SDT Logo */}
        <Link
          href="/#home"
          onClick={() => setActiveHash("#home")}
          className="flex shrink-0 items-center gap-2.5 rounded-lg bg-white px-2.5 py-1.5 shadow-xs transition hover:bg-slate-100"
        >
          <img
            src="/sdt-logo.png"
            alt="SDT — SHANORA Digital Technology Logo"
            className="h-9 w-auto max-w-[96px] object-contain sm:h-10 sm:max-w-none"
          />
        </Link>

        {/* Center/Main Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-6 text-sm font-medium lg:flex"
        >
          {NAV_LINKS.map((item) => {
            const isActive = pathname === "/" && activeHash === item.hash;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveHash(item.hash)}
                className={`whitespace-nowrap rounded-md px-2.5 py-1.5 transition ${
                  isActive
                    ? "bg-white/12 font-semibold text-[#7BB8FF]"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Primary CTA + Mobile Button */}
        <div className="flex shrink-0 items-center gap-2.5">
          <Link
            href="/#contact"
            onClick={() => setActiveHash("#contact")}
            className="hidden whitespace-nowrap rounded-lg bg-[#1456D9] px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-[#2684FF] sm:inline-flex"
          >
            Start a Project
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/15 lg:hidden"
          >
            {mobileOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Menu */}
      <div
        id="mobile-navigation-panel"
        className={`grid overflow-hidden border-t border-white/10 bg-[#071A36] transition-all duration-200 motion-reduce:transition-none lg:hidden ${
          mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === "/" && activeHash === item.hash;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveHash(item.hash);
                    setMobileOpen(false);
                  }}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                    isActive
                      ? "bg-white/12 font-semibold text-[#7BB8FF]"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => {
                  setActiveHash("#contact");
                  setMobileOpen(false);
                }}
                className="block w-full rounded-lg bg-[#1456D9] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#2684FF]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
