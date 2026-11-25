import Link from "next/link";

const services = [
  {
    code: "01",
    title: "Web & App Engineering",
    description:
      "Fast, responsive web applications and digital platforms built with clean architecture and modern frontend tools.",
    tag: "Web Systems",
  },
  {
    code: "02",
    title: "UI/UX & Brand Interface",
    description:
      "Structured, user-focused interfaces with clear visual hierarchy, mobile responsiveness, and strong brand identity.",
    tag: "Interface Design",
  },
  {
    code: "03",
    title: "Digital & Technical Operations",
    description:
      "Reliable maintenance, deployment workflows, and practical technical support that keep systems running smoothly.",
    tag: "Operations & Support",
  },
];

const workflow = [
  {
    step: "Step 01",
    title: "Discovery & Scope",
    detail: "Understand goals, target users, and essential features before writing code.",
  },
  {
    step: "Step 02",
    title: "Structured Build",
    detail: "Develop modular, maintainable components with clean styling and clear navigation.",
  },
  {
    step: "Step 03",
    title: "Launch & Iterate",
    detail: "Deploy smoothly, verify live performance, and improve step by step.",
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-indigo-600" />
                SDT • SHANORA DIGITAL TECHNOLOGY
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.12]">
                Digital products &amp; web systems built like a{" "}
                <span className="text-indigo-600">modern agency.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Shanora Digital Technology helps businesses, institutions, and
                creators launch clean web experiences, practical digital tools, and
                reliable technical solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
                >
                  Start a Project
                </Link>
                <Link
                  href="/services"
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
                >
                  Explore Services
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-3 text-sm font-semibold text-slate-600 transition hover:text-slate-900"
                >
                  About Agency →
                </Link>
              </div>
            </div>

            {/* Right Agency Snapshot Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
                      Agency Studio
                    </p>
                    <h2 className="mt-1 text-lg font-bold text-slate-900">
                      Shanora Digital Technology
                    </h2>
                  </div>
                  <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Active
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-semibold text-slate-500">
                      CORE FOCUS
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      Responsive Web Platforms, Clean UI &amp; Digital Workflows
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-slate-200/80 p-3.5">
                      <p className="text-xs text-slate-500">Approach</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        Step-by-Step
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200/80 p-3.5">
                      <p className="text-xs text-slate-500">Delivery</p>
                      <p className="mt-1 text-sm font-bold text-slate-900">
                        Clean &amp; Scalable
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <span>Modern Web &amp; IT Solutions</span>
                  <Link
                    href="/contact"
                    className="font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Book Inquiry →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              Capabilities
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What we build for clients
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            All Services →
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                    {item.code}
                  </span>
                  <span className="text-xs font-medium text-slate-500">
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-700"
                >
                  Discuss this service →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-y border-slate-200/80 bg-slate-50/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
              How We Work
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Clear process from idea to live deployment
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-slate-900 px-6 py-8 text-white shadow-md sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
              Shanora Digital Technology
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
              Have a project or digital idea in mind?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Reach out to plan your website, interface, or digital setup with a
              structured approach.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
