import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CANONICAL_URL = "https://shanora.online"; // Update if using a dedicated agency domain

export const metadata: Metadata = {
  title: "SHANORA DIGITAL TECHNOLOGY | Web Development & Digital Solutions",
  description:
    "SHANORA DIGITAL TECHNOLOGY provides professional web development, digital marketing, SEO, AI solutions, and business technology services.",
  keywords: [
    "SHANORA DIGITAL TECHNOLOGY",
    "SDT",
    "Web Development",
    "Web Application Development",
    "SEO Services",
    "Digital Marketing",
    "AI-Powered Solutions",
    "Business Automation",
    "School Management Systems",
    "IT Consulting",
    "Amanullah Bhatti",
  ],
  alternates: {
    canonical: CANONICAL_URL,
  },
  openGraph: {
    title: "SHANORA DIGITAL TECHNOLOGY | Web Development & Digital Solutions",
    description:
      "Building Digital Solutions. Connecting Global Businesses. Professional web development, SEO, digital marketing, AI solutions, and business technology.",
    url: CANONICAL_URL,
    siteName: "SHANORA DIGITAL TECHNOLOGY",
    type: "website",
    images: [
      {
        url: "/assets/logo/sdt-logo.png",
        alt: "SHANORA DIGITAL TECHNOLOGY (SDT) Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHANORA DIGITAL TECHNOLOGY | Web Development & Digital Solutions",
    description:
      "SHANORA DIGITAL TECHNOLOGY provides professional web development, digital marketing, SEO, AI solutions, and business technology services.",
    images: ["/assets/logo/sdt-logo.png"],
  },
  icons: {
    icon: "/assets/logo/sdt-logo.png",
    shortcut: "/assets/logo/sdt-logo.png",
    apple: "/assets/logo/sdt-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth motion-reduce:scroll-auto">
      <body className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#111827] antialiased selection:bg-[#1456D9] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
