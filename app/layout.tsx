import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const CANONICAL_URL = "https://shanora.online";

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
        url: "/sdt-logo.png",
        alt: "SHANORA DIGITAL TECHNOLOGY (SDT) Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHANORA DIGITAL TECHNOLOGY | Web Development & Digital Solutions",
    description:
      "SHANORA DIGITAL TECHNOLOGY provides professional web development, digital marketing, SEO, AI solutions, and business technology services.",
    images: ["/sdt-logo.png"],
  },
  icons: {
    icon: "/sdt-logo.png",
    shortcut: "/sdt-logo.png",
    apple: "/sdt-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="flex min-h-screen w-full max-w-full flex-col overflow-x-hidden bg-[#FFFFFF] font-sans text-[#111827] antialiased selection:bg-[#1456D9] selection:text-white">
        <Navbar />
        <main className="w-full max-w-full flex-1 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
