import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} SDT — SHANORA DIGITAL TECHNOLOGY. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
          <Link href="/services" className="hover:text-slate-900">
            Services
          </Link>
          <Link href="/contact" className="hover:text-slate-900">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
