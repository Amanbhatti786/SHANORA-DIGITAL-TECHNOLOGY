import Link from "next/link";

const pillars = [
  {
    step: "01",
    title: "Modern Web Systems",
    description:
      "Clean, responsive, and structured web applications built for reliability, clarity, and speed.",
  },
  {
    step: "02",
    title: "Practical Digital Solutions",
    description:
      "Tools and platforms designed around real workflows, intuitive navigation, and steady performance.",
  },
  {
    step: "03",
    title: "Step-by-Step Growth",
    description:
      "Modular architecture that lets you launch cleanly today and scale features smoothly over time.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1.5 text-xs font-semibold text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-indigo-600" />
            SDT • SHANORA DIGITAL TECHNOLOGY
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Building practical digital solutions with{" "}
            <span className="text-indigo-600">clarity and structure.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Welcome to SDT (SHANORA DIGITAL TECHNOLOGY). We craft reliable web
            experiences, structured digital tools, and scalable solutions tailored
            to real-world goals.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/services"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
            >
              View Services
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
            >
              About SDT
            </Link>
            <Link
              href="/contact"
              className="px-3 py-3 text-sm font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        {/* Core Pillars Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <span className="inline-block rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                {item.step}
              </span>
              <h2 className="mt-4 text-lg font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-900 px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="text-sm font-semibold text-indigo-300">
              SHANORA DIGITAL TECHNOLOGY
            </p>
            <p className="mt-1 text-base font-medium text-slate-100">
              Ready to launch or upgrade your next web platform?
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
