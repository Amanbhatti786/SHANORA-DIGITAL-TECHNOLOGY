import Link from "next/link";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive websites and web applications built with modern frontend and backend tools.",
  },
  {
    title: "UI & Layout Design",
    description:
      "Clear, mobile-friendly interfaces with consistent navigation and readable typography.",
  },
  {
    title: "Technical Support & Updates",
    description:
      "Troubleshooting, bug fixes, and steady feature improvements for existing projects.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          What We Offer
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          SDT Services
        </h1>
        <p className="mt-3 text-base text-slate-600">
          Focused digital capabilities tailored for growing projects and organizations.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col justify-between rounded-xl border border-slate-200 p-6"
          >
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Get in touch →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
