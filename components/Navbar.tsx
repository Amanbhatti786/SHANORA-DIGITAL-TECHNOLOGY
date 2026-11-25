"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:px-6">
        {/* Left: Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/sdt-logo.png"
            alt="SDT Logo"
            className="h-9 w-auto object-contain sm:h-11"
          />
        </Link>

        {/* Center: Shanora Digital Technology Card (between Logo and Menu/Nav) */}
        <Link
          href="/"
          className="mx-1 inline-flex min-w-0 items-center justify-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50/90 px-2.5 py-1.5 text-slate-900 shadow-sm transition hover:bg-indigo-100/70 sm:px-4 sm:py-2"
        >
          <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
          <span className="truncate text-[11px] font-bold tracking-tight sm:text-sm">
            Shanora Digital Technology
          </span>
        </Link>

        {/* Right: Desktop Nav */}
        <nav className="hidden shrink-0 items-center gap-5 text-sm font-medium md:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  active
                    ? "rounded-md bg-indigo-50 px-3 py-1.5 font-semibold text-indigo-600"
                    : "px-2 py-1.5 text-slate-600 transition hover:text-slate-900"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </nav>

        {/* Right: Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 sm:text-sm md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-indigo-600 px-3 py-2 text-center font-semibold text-white hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
