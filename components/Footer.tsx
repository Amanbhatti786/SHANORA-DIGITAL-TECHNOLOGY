import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-3">
          <img
            src="/sdt-logo.jpg"
            alt="SDT Logo"
            className="h-8 w-auto object-contain"
          />
          <p className="text-sm">
            © {new Date().getFullYear()} SDT — SHANORA DIGITAL TECHNOLOGY. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-medium">
          <Link href="/" className="transition hover:text-slate-900">
            Home
          </Link>
          <Link href="/about" className="transition hover:text-slate-900">
            About
          </Link>
          <Link href="/services" className="transition hover:text-slate-900">
            Services
          </Link>
          <Link href="/contact" className="transition hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
