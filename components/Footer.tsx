import Link from "next/link";

const SOCIAL_LINKS = {
  linkedin: "#contact",
  facebook: "#contact",
  github: "#contact",
};

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-x-hidden border-t border-white/10 bg-[#071A36] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link
              href="/#home"
              className="inline-flex items-center rounded-lg bg-white/95 px-3 py-1.5"
            >
              <img
                src="/sdt-logo.png"
                alt="SDT Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-bold text-white">
              SHANORA DIGITAL TECHNOLOGY
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Building Digital Solutions. Connecting Global Businesses.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#7BB8FF]">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-slate-300 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-slate-300 transition hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/#founder"
                  className="text-slate-300 transition hover:text-white"
                >
                  Founder
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-slate-300 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#7BB8FF]">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 transition hover:text-white"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 transition hover:text-white"
                >
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 transition hover:text-white"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 transition hover:text-white"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-300 transition hover:text-white"
                >
                  Business Software
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#7BB8FF]">
              Follow Us
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  className="text-slate-300 transition hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.facebook}
                  className="text-slate-300 transition hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.github}
                  className="text-slate-300 transition hover:text-white"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400 sm:flex sm:items-center sm:justify-between sm:text-left">
          <p>© 2026 SHANORA DIGITAL TECHNOLOGY. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Building Digital Solutions. Connecting Global Businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
