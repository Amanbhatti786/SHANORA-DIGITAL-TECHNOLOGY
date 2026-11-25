export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 md:py-20">
      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        About SDT
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        SHANORA DIGITAL TECHNOLOGY
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        SDT (SHANORA DIGITAL TECHNOLOGY) focuses on clean engineering, structured
        web development, and dependable digital services built step by step.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-base font-semibold text-slate-900">Mission</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Create fast, accessible, and maintainable web experiences that solve real
            day-to-day needs.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-base font-semibold text-slate-900">Process</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Build incrementally, verify each route and feature cleanly, and deploy
            continuously.
          </p>
        </div>
      </div>
    </section>
  );
}
