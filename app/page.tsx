"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const BLOGGER_BASE_URL = "#blog";
const FOUNDER_LINKEDIN_URL = "#contact";
const BUSINESS_EMAIL = "[ADD BUSINESS EMAIL]";
const WHATSAPP_NUMBER = "[ADD WHATSAPP NUMBER]";
const LINKEDIN_URL = "[ADD LINKEDIN URL]";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon:
    | "web"
    | "app"
    | "seo"
    | "marketing"
    | "ai"
    | "automation"
    | "school"
    | "consulting";
}

const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Modern, responsive, and professional websites for businesses and organizations.",
    icon: "web",
  },
  {
    id: "web-application-development",
    title: "Web Application Development",
    description:
      "Custom web applications and digital platforms designed around business requirements.",
    icon: "app",
  },
  {
    id: "seo-services",
    title: "SEO Services",
    description:
      "Search engine optimization strategies to improve website visibility and organic discovery.",
    icon: "seo",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Digital marketing solutions that help businesses strengthen their online presence.",
    icon: "marketing",
  },
  {
    id: "ai-powered-solutions",
    title: "AI-Powered Solutions",
    description:
      "Practical AI integrations and intelligent digital tools for business productivity.",
    icon: "ai",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Digital workflows and automation solutions that help simplify business operations.",
    icon: "automation",
  },
  {
    id: "school-management-systems",
    title: "School Management Systems",
    description:
      "Technology solutions designed to support educational institutions and school operations.",
    icon: "school",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    description:
      "Technology guidance and digital planning for businesses and organizations.",
    icon: "consulting",
  },
];

const VALUE_POINTS = [
  {
    title: "Professional Digital Solutions",
    description:
      "Structured architecture, clean interfaces, and dependable implementation tailored to business goals.",
  },
  {
    title: "Client-Focused Approach",
    description:
      "Every engagement starts with your requirements, timelines, and practical operational outcomes.",
  },
  {
    title: "Modern Technology",
    description:
      "Current web standards, responsive layouts, and adaptable digital systems built for longevity.",
  },
];

const WHY_CHOOSE_SDT = [
  {
    title: "Client-Focused Solutions",
    description:
      "We focus on understanding business requirements and creating solutions that address real needs.",
    icon: "target",
  },
  {
    title: "Modern Technology",
    description:
      "We use modern development practices to build efficient and scalable digital experiences.",
    icon: "layers",
  },
  {
    title: "Practical Innovation",
    description:
      "We focus on useful technology that creates real value for businesses.",
    icon: "spark",
  },
  {
    title: "Clear Communication",
    description:
      "We believe in transparent communication and a professional project development process.",
    icon: "chat",
  },
];

const PROCESS_STEPS = [
  {
    step: "STEP 01",
    label: "DISCOVER",
    description:
      "Understand the client's business, goals, and project requirements.",
  },
  {
    step: "STEP 02",
    label: "PLAN",
    description:
      "Define the project scope, strategy, timeline, and solution.",
  },
  {
    step: "STEP 03",
    label: "DEVELOP",
    description:
      "Build and refine the digital solution using appropriate technology.",
  },
  {
    step: "STEP 04",
    label: "DELIVER",
    description:
      "Launch the project and provide agreed support.",
  },
];

const BLOG_ARTICLES = [
  {
    category: "Web Strategy",
    title: "How to Build a Professional Business Website",
    summary:
      "Key structure, clarity, mobile usability, and conversion principles for a business website that earns client trust.",
    href: BLOGGER_BASE_URL,
  },
  {
    category: "Digital Operations",
    title: "Digital Transformation for Small Businesses",
    summary:
      "Practical steps for adopting digital tools and streamlined workflows without unnecessary complexity.",
    href: BLOGGER_BASE_URL,
  },
  {
    category: "Productivity",
    title: "Practical AI Tools for Business Growth",
    summary:
      "How organizations can apply AI-assisted tools responsibly to save time and support everyday teams.",
    href: BLOGGER_BASE_URL,
  },
];

function ServiceIcon({ type }: { type: ServiceItem["icon"] }) {
  const classes = "h-5 w-5 text-[#1456D9]";
  switch (type) {
    case "web":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zm0 3.75h16.5"
          />
        </svg>
      );
    case "app":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      );
    case "seo":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
          />
        </svg>
      );
    case "marketing":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      );
    case "ai":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
          />
        </svg>
      );
    case "automation":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "school":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
          />
        </svg>
      );
    case "consulting":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      );
  }
}

function ValueCardIcon({ type }: { type: string }) {
  const classes = "h-5 w-5 text-[#2684FF]";
  switch (type) {
    case "target":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
          />
        </svg>
      );
    case "layers":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      );
    case "spark":
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={classes}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
          />
        </svg>
      );
  }
}

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Website Development",
    budget: "",
    details: "",
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSelectService = (serviceTitle: string) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setFormSubmitted(false);

    if (!formData.name.trim()) {
      setFormError("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!formData.service.trim()) {
      setFormError("Please select a required service.");
      return;
    }

    if (!formData.details.trim() || formData.details.trim().length < 10) {
      setFormError(
        "Please provide a brief description of your project (at least 10 characters)."
      );
      return;
    }

    setFormSubmitted(true);
  };

  return (
    <div id="home" className="w-full max-w-full overflow-x-hidden bg-[#FFFFFF] text-[#111827]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#071A36] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#1456D9]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#2684FF]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(#2684FF 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#2684FF]/40 bg-[#1456D9]/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#7BB8FF]">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#2684FF]" />
                <span>YOUR DIGITAL TECHNOLOGY PARTNER</span>
              </p>

              <h1 className="mt-6 break-words text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
                Building Digital Solutions.{" "}
                <span className="text-[#2684FF]">
                  Connecting Global Businesses.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                We help businesses transform their ideas into powerful digital
                experiences through professional web development, innovative
                technology, and intelligent digital solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#contact"
                  className="rounded-lg bg-[#1456D9] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2684FF]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="#services"
                  className="rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7">
                <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1456D9]/30 text-sm font-bold text-[#7BB8FF]">
                      SDT
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-white">
                        SHANORA DIGITAL TECHNOLOGY
                      </p>
                      <p className="truncate text-xs text-slate-300">
                        International Digital Services Agency
                      </p>
                    </div>
                  </div>
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#2684FF]" />
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-xl border border-white/10 bg-[#071A36]/80 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#7BB8FF]">
                      <span>GLOBAL ARCHITECTURE</span>
                      <span>WEB • AI • CLOUD</span>
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-2 text-center text-xs sm:grid-cols-3 sm:gap-2.5">
                      <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-slate-200">
                        Web &amp; Apps
                      </div>
                      <div className="rounded-lg border border-[#2684FF]/40 bg-[#1456D9]/20 px-2.5 py-2 font-medium text-white">
                        AI &amp; Automation
                      </div>
                      <div className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-slate-200">
                        SEO &amp; Growth
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Designed For Global Markets
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                      Supporting startups, SMEs, educational institutions, and
                      organizations across international regions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST AND INTRODUCTION SECTION */}
      <section className="border-b border-slate-200 bg-[#F4F7FB]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-16 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl">
              Technology That Helps Businesses Move Forward
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              At SHANORA DIGITAL TECHNOLOGY, we focus on building practical
              digital solutions that help businesses establish their online
              presence, improve operations, and explore new growth
              opportunities.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {VALUE_POINTS.map((point, idx) => (
              <div
                key={point.title}
                className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#1456D9]/10 text-xs font-bold text-[#1456D9]">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#111827]">
                    {point.title}
                  </h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
              OUR SERVICES
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Digital Services Designed for Your Growth
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              From professional websites to intelligent business solutions, we
              help turn ideas into practical digital experiences.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#1456D9]/40 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FB] ring-1 ring-slate-200/80 transition group-hover:bg-[#1456D9]/10 group-hover:ring-[#1456D9]/30">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#111827]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3">
                  <Link
                    href="#contact"
                    onClick={() => handleSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1456D9] transition group-hover:text-[#2684FF]"
                  >
                    <span>Learn More</span>
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT SECTION — SHANORA */}
      <section
        id="portfolio"
        className="border-y border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
                FEATURED PROJECT
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
                  SHANORA
                </h2>
                <span className="rounded-full bg-[#1456D9]/10 px-3 py-1 text-xs font-semibold text-[#1456D9]">
                  Professional Networking &amp; Career Platform
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                SHANORA is an international professional networking and career
                platform designed to connect professionals, job seekers,
                companies, and businesses through digital technology. Developed
                as a digital platform by the founder.
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Professional Networking",
                  "Career Opportunities",
                  "Company Pages",
                  "Digital Community",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-[#111827]"
                  >
                    <span className="h-2 w-2 shrink-0 rounded-full bg-[#1456D9]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://shanora.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#071A36] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#1456D9]"
                >
                  <span>Explore SHANORA</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-6">
              <div className="mx-auto w-full max-w-xl">
                <div className="rounded-t-2xl border-4 border-[#071A36] bg-[#071A36] shadow-xl sm:border-8">
                  <div className="flex items-center justify-between rounded-t-lg bg-[#102A54] px-3 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                      <span className="h-2 w-2 rounded-full bg-white/30" />
                    </div>
                    <span className="rounded bg-[#071A36]/80 px-2.5 py-0.5 text-[11px] font-medium text-slate-200">
                      shanora.online
                    </span>
                    <span className="w-6" />
                  </div>

                  <div className="bg-white p-4 text-[#111827] sm:p-5">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src="/sdt-logo.png"
                          alt="SHANORA Platform Preview"
                          className="h-6 w-auto object-contain"
                        />
                        <span className="text-sm font-extrabold tracking-wide text-[#071A36]">
                          SHANORA
                        </span>
                      </div>
                      <span className="rounded-md bg-[#F4F7FB] px-2.5 py-1 text-[11px] font-semibold text-[#1456D9]">
                        Networking &amp; Careers
                      </span>
                    </div>

                    <div className="mt-4 rounded-xl bg-[#F4F7FB] p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#1456D9]">
                        Global Talent &amp; Business Hub
                      </p>
                      <p className="mt-1 text-sm font-bold text-[#111827]">
                        Connecting Professionals, Career Seekers &amp; Company
                        Profiles
                      </p>
                      <p className="mt-1.5 text-xs text-slate-600">
                        Structured profiles, company showcases, and community
                        connections on a unified platform.
                      </p>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg border border-slate-200/80 p-2">
                        <p className="text-xs font-bold text-[#071A36]">
                          Profiles
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Career &amp; Skills
                        </p>
                      </div>
                      <div className="rounded-lg border border-slate-200/80 p-2">
                        <p className="text-xs font-bold text-[#071A36]">
                          Companies
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Brand Pages
                        </p>
                      </div>
                      <div className="rounded-lg border border-slate-200/80 p-2">
                        <p className="text-xs font-bold text-[#071A36]">
                          Network
                        </p>
                        <p className="mt-0.5 text-[10px] text-slate-500">
                          Global Reach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-3 w-full rounded-b-xl bg-slate-300 shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SDT SECTION */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
              WHY CHOOSE SDT
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Your Partner in Digital Innovation
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_SDT.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[#F4F7FB]/60 p-6 transition hover:border-[#1456D9]/30 hover:bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071A36]">
                  <ValueCardIcon type={item.icon} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK SECTION */}
      <section className="border-y border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
              HOW WE WORK
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              From Idea to Digital Experience
            </h2>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute top-6 right-0 left-0 hidden h-0.5 bg-slate-300 lg:block"
            />

            <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
              {PROCESS_STEPS.map((item, index) => (
                <div
                  key={item.step}
                  className="relative flex gap-4 lg:flex-col lg:gap-0"
                >
                  {index < PROCESS_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-12 left-6 h-full w-0.5 bg-slate-300 lg:hidden"
                    />
                  )}

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1456D9] bg-white text-xs font-extrabold text-[#1456D9] shadow-xs">
                    0{index + 1}
                  </div>

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 lg:mt-5">
                    <p className="text-xs font-bold tracking-wider text-[#1456D9]">
                      {item.step} — {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section id="founder" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
              LEADERSHIP
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Meet the Founder Behind SDT
            </h2>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 text-center">
                <div className="mx-auto flex h-44 w-44 max-w-full items-center justify-center rounded-2xl border border-slate-300/80 bg-white text-[#071A36] shadow-xs">
                  <div className="flex flex-col items-center px-2">
                    <svg
                      className="h-16 w-16 text-[#1456D9]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <span className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Founder Portrait Placeholder
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-extrabold text-[#111827]">
                  Amanullah Bhatti
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#1456D9]">
                  Founder &amp; CEO
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  SHANORA DIGITAL TECHNOLOGY (SDT)
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Amanullah Bhatti is a technology professional, digital
                  entrepreneur, and the Founder &amp; CEO of SHANORA DIGITAL
                  TECHNOLOGY.
                </p>
                <p>
                  With a background in Information Technology and a Diploma from
                  IBA Sukkur, Amanullah combines technical knowledge, practical
                  experience, and entrepreneurial vision to develop digital
                  solutions for businesses and organizations.
                </p>
                <p>
                  He has experience in developing digital platforms and technology
                  solutions, particularly in the education sector.
                </p>
                <p>
                  His work includes developing SHANORA, an international
                  professional networking and career platform, and building
                  digital solutions for educational institutions.
                </p>
                <p>
                  As the Founder &amp; CEO of SHANORA DIGITAL TECHNOLOGY, he
                  leads the company&apos;s vision, technology direction, product
                  development, and business growth.
                </p>
                <p>
                  His mission is to help businesses and organizations benefit from
                  modern technology through practical, innovative, and reliable
                  digital solutions.
                </p>
              </div>

              <blockquote className="mt-6 rounded-xl border-l-4 border-[#1456D9] bg-[#F4F7FB] px-5 py-4 text-sm font-medium italic text-[#071A36] sm:text-base">
                &ldquo;My vision is to build a globally recognized digital
                technology brand that connects ideas, technology, and business
                opportunities.&rdquo;
              </blockquote>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={FOUNDER_LINKEDIN_URL}
                  className="rounded-lg bg-[#1456D9] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2684FF]"
                >
                  Connect with Founder
                </a>
                <Link
                  href="#about"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-slate-50"
                >
                  About the Founder
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SDT SECTION */}
      <section
        id="about"
        className="border-y border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
              ABOUT SDT
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Technology With Purpose
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SHANORA DIGITAL TECHNOLOGY is a digital services brand focused on
              helping businesses, entrepreneurs, and organizations build a
              stronger digital presence through modern technology and practical
              solutions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1456D9]">
                OUR MISSION
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                To deliver practical and innovative digital solutions that help
                businesses and organizations grow.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1456D9]">
                OUR VISION
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                To build a globally recognized technology brand that connects
                businesses with digital opportunities.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#1456D9]">
                OUR VALUES
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Innovation, integrity, quality, reliability, and continuous
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
                BLOG &amp; RESOURCES
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
                Insights for the Digital World
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Explore articles, practical guides, and technology insights to
                help businesses understand and use digital technology.
              </p>
            </div>

            <a
              href={BLOGGER_BASE_URL}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:border-[#1456D9] hover:text-[#1456D9]"
            >
              <span>Explore All Articles</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {BLOG_ARTICLES.map((post) => (
              <article
                key={post.title}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-[#F4F7FB]/50 p-6 transition hover:border-[#1456D9]/40 hover:bg-white hover:shadow-sm"
              >
                <div>
                  <span className="inline-block rounded-md bg-[#1456D9]/10 px-2.5 py-1 text-xs font-semibold text-[#1456D9]">
                    {post.category}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[#111827]">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {post.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200/70 pt-3">
                  <a
                    href={post.href}
                    className="text-sm font-semibold text-[#1456D9] hover:text-[#2684FF]"
                  >
                    Read Article →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="relative overflow-hidden bg-[#071A36] py-16 text-white sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 -right-20 h-72 w-72 rounded-full bg-[#2684FF]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#1456D9]/25 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#7BB8FF]">
                SHANORA DIGITAL TECHNOLOGY
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Have a Project in Mind?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Let&apos;s turn your ideas into powerful digital solutions and
                create something meaningful for your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="rounded-lg bg-[#1456D9] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2684FF]"
              >
                Start Your Project
              </Link>
              <Link
                href="#contact"
                className="rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-[#1456D9]">
              GET IN TOUCH
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Tell us about your project and discover how SHANORA DIGITAL
              TECHNOLOGY can help.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs sm:p-8"
              >
                {formError && (
                  <div
                    role="alert"
                    className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {formError}
                  </div>
                )}

                {formSubmitted && (
                  <div
                    role="status"
                    className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
                  >
                    Your inquiry details passed frontend validation. Connect this
                    form to Formspree, Web3Forms, or an email service to
                    receive submissions directly.
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Company
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Company or organization"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Service Required *
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-budget"
                    className="block text-sm font-semibold text-[#111827]"
                  >
                    Project Budget
                  </label>
                  <input
                    id="contact-budget"
                    name="budget"
                    type="text"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    placeholder="e.g., Flexible / To be discussed"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-semibold text-[#111827]"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="contact-details"
                    name="details"
                    rows={4}
                    required
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    placeholder="Share your goals, timeline, and key requirements..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-[#1456D9] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2684FF] sm:w-auto"
                >
                  Send Project Inquiry
                </button>
              </form>
            </div>

            <div className="min-w-0 space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[#111827]">
                  Direct Contact Details
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-500">
                      Business Email
                    </dt>
                    <dd className="mt-1 break-all font-medium text-[#111827]">
                      {BUSINESS_EMAIL}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">WhatsApp</dt>
                    <dd className="mt-1 font-medium text-[#111827]">
                      {WHATSAPP_NUMBER}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">LinkedIn</dt>
                    <dd className="mt-1 break-all font-medium text-[#111827]">
                      {LINKEDIN_URL}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#1456D9]">
                  Form Submission Setup
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  This form includes client-side validation only and does not
                  send emails on its own. To receive live inquiries on static
                  hosting, connect the form to a free form endpoint such as
                  Formspree or Web3Forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
