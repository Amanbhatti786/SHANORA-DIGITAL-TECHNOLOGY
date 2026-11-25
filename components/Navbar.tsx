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
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        {/* Logo + Card beside Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/sdt-logo.png"
              alt="SDT Logo"
              className="h-11 w-auto object-contain sm:h-12"
            />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50/90 via-white to-slate-50 px-3.5 py-2 shadow-sm transition hover:border-indigo-200 hover:shadow"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-600" />
            <span className="text-xs font-bold tracking-wide text-slate-900 sm:text-sm">
              Shanora Digital Technology
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
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
