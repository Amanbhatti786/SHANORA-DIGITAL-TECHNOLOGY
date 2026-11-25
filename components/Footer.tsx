import Link from "next/link";

// Replace "#" with your official social URLs once available
const SOCIAL_URLS = {
  linkedin: "#contact",
  facebook: "#contact",
  youtube: "#contact",
};

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-x-hidden border-t border-white/10 bg-[#071A36] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: SDT Logo & Short Description */}
          <div className="space-y-4">
            <Link
              href="/#home"
              className="inline-flex items-center rounded-lg bg-white px-3 py-1.5"
            >
              <img
                src="/sdt-logo.png"
                alt="SDT Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="text-sm font-bold text-white">
              SHANORA Digital Technology
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              Building modern software, AI-powered solutions, and digital
              products for businesses and organizations.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#7BB8FF] uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#home" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#work" className="transition hover:text-white">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#7BB8FF] uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  AI Agents Development
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  School Management Systems
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  UI/UX Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className="text-xs font-bold tracking-widest text-[#7BB8FF] uppercase">
              Social Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={SOCIAL_URLS.linkedin} className="transition hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={SOCIAL_URLS.facebook} className="transition hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href={SOCIAL_URLS.youtube} className="transition hover:text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
          <p>© 2026 SHANORA Digital Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
