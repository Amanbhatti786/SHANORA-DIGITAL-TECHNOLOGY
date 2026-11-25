import Link from "next/link";

const pillars = [
  {
    title: "Modern Web Systems",
    description:
      "Clean, responsive, and structured web applications built for reliability and speed.",
  },
  {
    title: "Practical Digital Solutions",
    description:
      "Tools and platforms designed around real workflows, clear navigation, and smooth performance.",
  },
  {
    title: "Step-by-Step Growth",
    description:
      "Modular architecture that lets you launch cleanly and expand features over time.",
  },
];

export default function HomePage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <span className="inline-block rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-semibold text-indigo-700">
          SDT • SHANORA DIGITAL TECHNOLOGY
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Building practical digital solutions with clarity and structure.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          Welcome to SDT (SHANORA DIGITAL TECHNOLOGY). Explore our vision, core
          services, and get in touch for digital projects and collaborations.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
          >
            Contact SDT
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
