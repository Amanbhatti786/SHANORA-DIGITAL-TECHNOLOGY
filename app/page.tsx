"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

// Configured Contact & Optional Form Endpoint (set NEXT_PUBLIC_FORM_ENDPOINT in Vercel/env)
const CONTACT_EMAIL = "shanoradigitaltechnology@gmail.com";
const WHATSAPP_DISPLAY = "03033639664";
const WHATSAPP_WA_URL = "https://wa.me/923033639664";
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "JavaScript",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Python",
  "OpenAI API",
  "n8n",
];

interface CoreService {
  id: string;
  title: string;
  description: string;
  highlights?: string[];
  featuredAI?: boolean;
  icon: "web" | "custom" | "agents" | "automation" | "school" | "ux";
}

const CORE_SERVICES: CoreService[] = [
  {
    id: "website-web-app-development",
    title: "Website & Web Application Development",
    description:
      "We develop modern, responsive, and high-performance websites and web applications designed to help businesses establish a strong digital presence and deliver better user experiences.",
    icon: "web",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    description:
      "We build customized software solutions tailored to business requirements, helping organizations improve productivity, streamline operations, and solve real-world problems.",
    icon: "custom",
  },
  {
    id: "ai-agents-development",
    title: "AI Agents Development",
    description:
      "We design and develop intelligent AI agents that can interact with users, use connected tools, retrieve information, perform assigned tasks, and automate business workflows.",
    highlights: [
      "AI Customer Support Agents",
      "AI Sales and Lead Generation Agents",
      "AI Research Agents",
      "AI Business Assistant Agents",
      "AI Education Agents",
      "AI Workflow Agents",
    ],
    featuredAI: true,
    icon: "agents",
  },
  {
    id: "ai-business-automation",
    title: "AI & Business Automation",
    description:
      "We help businesses automate repetitive tasks and improve operational efficiency through AI-powered workflows, intelligent integrations, and business process automation.",
    icon: "automation",
  },
  {
    id: "school-management-systems",
    title: "School Management Systems",
    description:
      "We develop digital solutions for educational institutions, including student management, attendance systems, academic records, school administration, and educational technology platforms.",
    icon: "school",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "We create intuitive, modern, and user-friendly digital experiences for websites, software applications, and digital products.",
    icon: "ux",
  },
];

const SHANORA_FEATURES = [
  "Professional Profiles",
  "Networking",
  "Professional Feed",
  "Career Opportunities",
  "Company Pages",
  "Job Listings",
  "Digital Communities",
];

interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  status?: "Live" | "In Development";
  description: string;
  technologies: string[];
  liveUrl?: string;
  previewLabel: string;
}

const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "shanora-platform",
    name: "SHANORA",
    category: "Professional Networking Platform",
    status: "Live",
    description:
      "International professional networking and career platform connecting professionals, students, job seekers, companies, recruiters, and businesses.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    liveUrl: "https://shanora.online",
    previewLabel: "shanora.online — Networking & Career Hub",
  },
  {
    id: "sdt-school-management",
    name: "SDT School Management System",
    category: "School Management Solutions",
    status: "In Development",
    description:
      "Digital school operations solution supporting student management, attendance tracking, academic records, and school administration workflows.",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL"],
    previewLabel: "Academic & Campus Administration Portal",
  },
  {
    id: "sdt-agency-platform",
    name: "SHANORA Digital Technology Platform",
    category: "Business Websites",
    status: "Live",
    description:
      "International software development and AI solutions company website presenting core engineering services, flagship products, and project inquiry workflows.",
    technologies: ["Next.js", "React", "TypeScript"],
    liveUrl: "https://sdt-official.vercel.app",
    previewLabel: "sdt-official.vercel.app — Corporate Web Platform",
  },
];

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the client's goals, requirements, and business challenges.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the project scope, technology approach, and development roadmap.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the solution using suitable technologies and modern development practices.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Test, deploy, and deliver the completed digital solution.",
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    title: "Founder-Led Technology Development",
    description:
      "Direct product leadership and hands-on technical execution focused on quality and clarity.",
  },
  {
    title: "Practical Digital Solutions",
    description:
      "Purpose-built software and workflows designed around real business and operational needs.",
  },
  {
    title: "Modern Software Development",
    description:
      "Clean, maintainable codebases built with modern web, database, and cloud-ready practices.",
  },
  {
    title: "AI and Automation Focus",
    description:
      "Applied AI agents and workflow automation that reduce manual effort and support team productivity.",
  },
  {
    title: "Client-Focused Approach",
    description:
      "Transparent communication, structured milestones, and alignment with your business objectives.",
  },
  {
    title: "Scalable Digital Products",
    description:
      "Modular architecture structured to grow smoothly as users, features, and organizations expand.",
  },
];

const SERVICE_OPTIONS = [
  "Website Development",
  "Custom Software Development",
  "AI Agents Development",
  "AI & Business Automation",
  "School Management Systems",
  "UI/UX Design",
  "Other",
];

function ServiceIcon({ type }: { type: CoreService["icon"] }) {
  const cls = "h-5 w-5 text-[#1456D9]";
  switch (type) {
    case "web":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zm0 4.5h16.5" />
        </svg>
      );
    case "custom":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      );
    case "agents":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      );
    case "automation":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    case "school":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
        </svg>
      );
    case "ux":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
      );
  }
}

export default function HomePage() {
  const [formState, setFormState] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    serviceRequired: "Website Development",
    projectBudget: "",
    projectDetails: "",
    honeypot: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleServiceSelect = (serviceName: string) => {
    setFormState((prev) => ({ ...prev, serviceRequired: serviceName }));
  };

  const handleInquirySubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSubmittedSuccess(false);

    // Basic honeypot anti-spam check
    if (formState.honeypot.trim().length > 0) {
      setErrorMessage("Unable to submit form. Please try again.");
      return;
    }

    if (!formState.fullName.trim()) {
      setErrorMessage("Please enter your full name.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.businessEmail.trim() || !emailPattern.test(formState.businessEmail.trim())) {
      setErrorMessage("Please enter a valid business email address.");
      return;
    }

    if (!formState.serviceRequired.trim()) {
      setErrorMessage("Please select a required service.");
      return;
    }

    if (!formState.projectDetails.trim() || formState.projectDetails.trim().length < 10) {
      setErrorMessage("Please share at least 10 characters of project details.");
      return;
    }

    if (!FORM_ENDPOINT) {
      setErrorMessage(
        `Form endpoint is not configured yet. Please send your inquiry directly to ${CONTACT_EMAIL} or WhatsApp ${WHATSAPP_DISPLAY}.`
      );
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          fullName: formState.fullName.trim(),
          businessEmail: formState.businessEmail.trim(),
          companyName: formState.companyName.trim(),
          serviceRequired: formState.serviceRequired,
          projectBudget: formState.projectBudget.trim(),
          projectDetails: formState.projectDetails.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send inquiry");
      }

      setSubmittedSuccess(true);
      setFormState({
        fullName: "",
        businessEmail: "",
        companyName: "",
        serviceRequired: "Website Development",
        projectBudget: "",
        projectDetails: "",
        honeypot: "",
      });
    } catch {
      setErrorMessage(
        `We could not send your inquiry right now. Please email ${CONTACT_EMAIL} or message ${WHATSAPP_DISPLAY} on WhatsApp.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      id="home"
      className="w-full max-w-full overflow-x-hidden bg-[#FFFFFF] text-[#111827]"
    >
      {/* 4. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#071A36] via-[#0A244C] to-[#071A36] text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#1456D9]/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-[#2684FF]/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column */}
            <div className="min-w-0 lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#2684FF]/40 bg-[#1456D9]/20 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-[#7BB8FF] uppercase">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#2684FF]" />
                <span>SHANORA Digital Technology (SDT)</span>
              </p>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white break-words sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12]">
                Building Digital Solutions.{" "}
                <span className="text-[#2684FF]">
                  Connecting Global Businesses.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                SHANORA Digital Technology helps businesses, startups, and
                organizations transform their ideas into powerful digital products
                through modern software development, AI agents, intelligent
                automation, and innovative technology solutions.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  href="#contact"
                  className="rounded-lg bg-[#1456D9] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2684FF]"
                >
                  Start a Project
                </Link>
                <Link
                  href="#work"
                  className="rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>

            {/* Right Column: Software & AI Product Interface Visual */}
            <div className="min-w-0 lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-[#0C264F]/90 p-5 shadow-2xl backdrop-blur-xs sm:p-6">
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#2684FF]" />
                    <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                      SDT Product &amp; AI Workspace
                    </span>
                  </div>
                  <span className="rounded-md bg-[#1456D9]/25 px-2 py-0.5 text-[11px] font-semibold text-[#7BB8FF]">
                    Software &amp; AI
                  </span>
                </div>

                <div className="mt-4 space-y-3.5">
                  <div className="rounded-xl border border-white/10 bg-[#071A36] p-4">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span className="font-semibold text-white">
                        AI Agent Workflow Engine
                      </span>
                      <span className="text-[#7BB8FF]">Active Modules</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs">
                      <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5">
                        <p className="font-semibold text-white">
                          Custom Applications
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-400">
                          Web &amp; tailored systems
                        </p>
                      </div>
                      <div className="rounded-lg border border-[#2684FF]/40 bg-[#1456D9]/20 p-2.5">
                        <p className="font-semibold text-white">AI Agents</p>
                        <p className="mt-0.5 text-[11px] text-[#A8CEFF]">
                          Support, sales &amp; ops
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-[#7BB8FF]">
                          FLAGSHIP PLATFORM
                        </p>
                        <p className="mt-0.5 text-sm font-bold text-white">
                          SHANORA — Networking &amp; Careers
                        </p>
                      </div>
                      <a
                        href="https://shanora.online"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#1456D9] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2684FF]"
                      >
                        Visit ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY AND EXPERTISE SECTION */}
      <section className="border-b border-slate-200 bg-[#F4F7FB] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
                TECHNOLOGY STACK
              </p>
              <h2 className="mt-1 text-lg font-bold text-[#111827] sm:text-xl">
                Tools &amp; Technologies We Work With
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {TECHNOLOGIES.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#111827] shadow-2xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION (6 CORE SERVICES) */}
      <section id="services" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              CORE SERVICES
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Software, AI Agents &amp; Digital Solutions
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Focused engineering and design services built for businesses,
              startups, and educational institutions.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service) => (
              <article
                key={service.id}
                className={`group flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                  service.featuredAI
                    ? "border-[#1456D9]/40 bg-[#F4F7FB]/80 ring-1 ring-[#1456D9]/15"
                    : "border-slate-200 bg-white hover:border-[#1456D9]/35"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F7FB] ring-1 ring-slate-200/80 transition group-hover:bg-[#1456D9]/10">
                      <ServiceIcon type={service.icon} />
                    </div>
                    {service.featuredAI && (
                      <span className="rounded-full bg-[#1456D9] px-2.5 py-1 text-[11px] font-semibold text-white">
                        Key AI Capability
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#111827]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {service.highlights && (
                    <div className="mt-4 border-t border-slate-200/80 pt-3.5">
                      <p className="text-[11px] font-bold tracking-wider text-[#071A36] uppercase">
                        AI Agent Solutions We Build
                      </p>
                      <ul className="mt-2 space-y-1.5 text-xs text-slate-700">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1456D9]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-6 border-t border-slate-100 pt-3.5">
                  <Link
                    href="#contact"
                    onClick={() => handleServiceSelect(service.title)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1456D9] transition hover:text-[#2684FF]"
                  >
                    <span>Learn More</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FEATURED DIGITAL PRODUCT — SHANORA */}
      <section className="border-y border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Product Details */}
            <div className="min-w-0 lg:col-span-6">
              <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
                FLAGSHIP DIGITAL PRODUCT
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
                Introducing SHANORA
              </h2>

              <p className="mt-1.5 text-sm font-semibold text-[#1456D9]">
                International Professional Networking &amp; Career Platform
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                SHANORA is an international professional networking and career
                platform designed to connect professionals, students, job seekers,
                companies, recruiters, and businesses through digital technology.
              </p>

              <div className="mt-6">
                <p className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  Platform Features
                </p>
                <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {SHANORA_FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-[#111827]"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#1456D9]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

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

            {/* Desktop + Mobile Interface Mockup */}
            <div className="min-w-0 lg:col-span-6">
              <div className="relative mx-auto max-w-xl pb-6 sm:pr-12">
                {/* Desktop Mockup */}
                <div className="rounded-xl border border-slate-300 bg-white shadow-lg">
                  <div className="flex items-center justify-between rounded-t-xl bg-[#071A36] px-3.5 py-2 text-xs text-slate-200">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                      <span className="h-2 w-2 rounded-full bg-white/40" />
                    </div>
                    <span className="font-medium">shanora.online</span>
                    <span className="w-6" />
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src="/sdt-logo.png"
                          alt="SHANORA Desktop Preview"
                          className="h-6 w-auto object-contain"
                        />
                        <span className="text-sm font-extrabold text-[#071A36]">
                          SHANORA
                        </span>
                      </div>
                      <span className="rounded-md bg-[#F4F7FB] px-2.5 py-1 text-[11px] font-semibold text-[#1456D9]">
                        Career &amp; Networking Hub
                      </span>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      <div className="rounded-lg bg-[#F4F7FB] p-3.5">
                        <p className="text-xs font-bold text-[#071A36]">
                          Professional Profiles &amp; Feed
                        </p>
                        <p className="mt-1 text-xs text-slate-600">
                          Connect with peers, follow company pages, and explore
                          career opportunities.
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 text-xs">
                        <div className="rounded-lg border border-slate-200 p-2.5">
                          <p className="font-semibold text-[#071A36]">
                            Job Listings
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Roles &amp; talent discovery
                          </p>
                        </div>
                        <div className="rounded-lg border border-slate-200 p-2.5">
                          <p className="font-semibold text-[#071A36]">
                            Communities
                          </p>
                          <p className="text-[11px] text-slate-500">
                            Industry groups &amp; updates
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Interface Mockup */}
                <div className="mt-4 w-44 rounded-2xl border-4 border-[#071A36] bg-white p-3 shadow-xl sm:absolute sm:right-0 sm:bottom-0 sm:mt-0">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                    <span className="text-[10px] font-extrabold text-[#071A36]">
                      SHANORA
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1456D9]" />
                  </div>
                  <p className="mt-2 text-[10px] font-semibold text-[#111827]">
                    Mobile Network
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-slate-500">
                    Profiles, jobs, and company updates on mobile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PORTFOLIO / OUR WORK */}
      <section id="work" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              OUR WORK
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Selected Digital Projects
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Explore digital products and technology solutions developed by
              SHANORA Digital Technology.
            </p>

            {/* Portfolio Categories */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
              {[
                "Professional Networking Platform",
                "Education Technology",
                "School Management Solutions",
                "Business Websites",
                "Web Applications",
              ].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-slate-200 bg-[#F4F7FB] px-3 py-1"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition hover:border-[#1456D9]/40 hover:shadow-md"
              >
                <div>
                  {/* Project Preview Frame */}
                  <div className="rounded-xl border border-slate-200 bg-[#071A36] p-4 text-white">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-[#7BB8FF]">
                        {project.category}
                      </span>
                      {project.status === "In Development" ? (
                        <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[10px] font-bold text-amber-200">
                          In Development
                        </span>
                      ) : (
                        <span className="rounded-full bg-emerald-400/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-200">
                          Live
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm font-bold text-white">
                      {project.previewLabel}
                    </p>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#111827]">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-[#F4F7FB] px-2.5 py-1 text-[11px] font-semibold text-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1456D9] hover:text-[#2684FF]"
                    >
                      <span>Live Preview</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-slate-500">
                      In Development
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ABOUT SHANORA DIGITAL TECHNOLOGY */}
      <section
        id="about"
        className="border-y border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              ABOUT SDT
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              About SHANORA Digital Technology
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              SHANORA Digital Technology is a digital technology company focused
              on developing practical software solutions, modern web applications,
              AI-powered systems, and innovative digital products.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              We work toward helping businesses, startups, educational
              institutions, and organizations transform their ideas into
              effective digital solutions.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xs font-extrabold tracking-wider text-[#1456D9] uppercase">
                Our Mission
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700 sm:text-base">
                To create useful, reliable, and innovative digital solutions that
                help businesses and communities grow through technology.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xs font-extrabold tracking-wider text-[#1456D9] uppercase">
                Our Vision
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-700 sm:text-base">
                To become a trusted technology partner for businesses and
                organizations worldwide by delivering meaningful digital
                innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOUNDER & CEO SECTION */}
      <section id="founder" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              LEADERSHIP
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Meet Our Founder
            </h2>
          </div>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-12">
            {/* Founder Portrait */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-slate-200 bg-[#F4F7FB] p-6 text-center">
                <div className="mx-auto h-56 w-56 max-w-full overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-xs">
                  <img
                    src="/founder.jpeg"
                    alt="Amanullah Bhatti — Founder & CEO, SHANORA Digital Technology"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#111827]">
                  Amanullah Bhatti
                </h3>
                <p className="mt-1 text-sm font-semibold text-[#1456D9]">
                  Founder &amp; CEO
                </p>
                <p className="mt-1 text-xs font-medium text-slate-600">
                  SHANORA Digital Technology
                </p>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-8">
              <div className="space-y-4 text-base leading-relaxed text-slate-700">
                <p>
                  Amanullah Bhatti is a technology entrepreneur and software
                  product founder with a background in Information Technology and
                  a Diploma from IBA Sukkur.
                </p>
                <p>
                  As the Founder &amp; CEO of SHANORA Digital Technology, he
                  leads the company&apos;s vision, product development,
                  technology direction, and business strategy.
                </p>
                <p>
                  His work includes developing SHANORA, an international
                  professional networking and career platform, along with digital
                  technology solutions for educational institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. HOW WE WORK (Horizontal on Desktop, Vertical on Mobile) */}
      <section className="border-y border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              HOW WE WORK
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Our Four-Step Delivery Process
            </h2>
          </div>

          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute top-6 right-0 left-0 hidden h-0.5 bg-slate-300 lg:block"
            />

            <div className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
              {WORKFLOW_STEPS.map((item, idx) => (
                <div
                  key={item.title}
                  className="relative flex gap-4 lg:flex-col lg:gap-0"
                >
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-12 left-6 h-full w-0.5 bg-slate-300 lg:hidden"
                    />
                  )}

                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1456D9] bg-white text-xs font-extrabold text-[#1456D9]">
                    {item.number}
                  </div>

                  <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 lg:mt-5">
                    <h3 className="text-lg font-bold text-[#111827]">
                      {item.title}
                    </h3>
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

      {/* 12. WHY CHOOSE SDT */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              WHY CHOOSE SDT
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Why Partner With SHANORA Digital Technology
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[#F4F7FB]/60 p-6 transition hover:border-[#1456D9]/35 hover:bg-white"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#071A36] text-xs font-bold text-white">
                  0{idx + 1}
                </span>
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

      {/* 13. CONTACT / START A PROJECT */}
      <section
        id="contact"
        className="border-t border-slate-200 bg-[#F4F7FB] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest text-[#1456D9] uppercase">
              CONTACT
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Let&apos;s discuss your business goals and build a digital solution
              that creates real value.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            {/* Inquiry Form */}
            <div className="min-w-0 lg:col-span-7">
              <form
                onSubmit={handleInquirySubmit}
                noValidate
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs sm:p-8"
              >
                {/* Honeypot field for basic spam prevention */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-url">Website</label>
                  <input
                    id="website-url"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formState.honeypot}
                    onChange={(e) =>
                      setFormState({ ...formState, honeypot: e.target.value })
                    }
                  />
                </div>

                {errorMessage && (
                  <div
                    role="alert"
                    className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    {errorMessage}
                  </div>
                )}

                {submittedSuccess && (
                  <div
                    role="status"
                    className="mb-5 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800"
                  >
                    Thank you. Your project inquiry has been submitted. We will
                    review your requirements and follow up shortly.
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Full Name *
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      required
                      value={formState.fullName}
                      onChange={(e) =>
                        setFormState({ ...formState, fullName: e.target.value })
                      }
                      placeholder="Your full name"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="business-email"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Business Email *
                    </label>
                    <input
                      id="business-email"
                      name="businessEmail"
                      type="email"
                      required
                      value={formState.businessEmail}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          businessEmail: e.target.value,
                        })
                      }
                      placeholder="name@company.com"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company-name"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Company Name
                    </label>
                    <input
                      id="company-name"
                      name="companyName"
                      type="text"
                      value={formState.companyName}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          companyName: e.target.value,
                        })
                      }
                      placeholder="Company or organization"
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service-required"
                      className="block text-sm font-semibold text-[#111827]"
                    >
                      Service Required *
                    </label>
                    <select
                      id="service-required"
                      name="serviceRequired"
                      value={formState.serviceRequired}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          serviceRequired: e.target.value,
                        })
                      }
                      className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                    >
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="project-budget"
                    className="block text-sm font-semibold text-[#111827]"
                  >
                    Project Budget
                  </label>
                  <input
                    id="project-budget"
                    name="projectBudget"
                    type="text"
                    value={formState.projectBudget}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        projectBudget: e.target.value,
                      })
                    }
                    placeholder="Estimated budget or flexible"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="project-details"
                    className="block text-sm font-semibold text-[#111827]"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="project-details"
                    name="projectDetails"
                    rows={4}
                    required
                    value={formState.projectDetails}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        projectDetails: e.target.value,
                      })
                    }
                    placeholder="Describe your goals, key features, and expected timeline..."
                    className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-[#111827] placeholder:text-slate-400 focus:border-[#1456D9] focus:ring-2 focus:ring-[#1456D9]/20 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full rounded-lg bg-[#1456D9] px-6 py-3.5 text-sm font-semibold text-white shadow-xs transition hover:bg-[#2684FF] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {submitting ? "Sending Inquiry..." : "Send Project Inquiry"}
                </button>
              </form>
            </div>

            {/* Direct Contact Channels */}
            <div className="min-w-0 space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-bold text-[#111827]">
                  Direct Contact
                </h3>
                <dl className="mt-4 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-slate-500">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="font-medium break-all text-[#1456D9] hover:underline"
                      >
                        {CONTACT_EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">WhatsApp</dt>
                    <dd className="mt-1">
                      <a
                        href={WHATSAPP_WA_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1456D9] hover:underline"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
