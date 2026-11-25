"use client";

import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-16 md:py-20">
      <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
        Reach Out
      </span>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Contact SDT
      </h1>
      <p className="mt-3 text-base text-slate-600">
        Send a message regarding SHANORA DIGITAL TECHNOLOGY projects or inquiries.
      </p>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-900">
          <p className="font-semibold">Message sent successfully.</p>
          <p className="mt-1 text-sm">
            Thank you for contacting SDT (SHANORA DIGITAL TECHNOLOGY).
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your name"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-600 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-600 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-600 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
