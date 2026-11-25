import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://shanora.online";

export const metadata: Metadata = {
  title: "SHANORA Digital Technology | Software Development & AI Solutions",
  description:
    "SHANORA Digital Technology builds modern websites, custom software, AI agents, intelligent automation, and digital products for businesses and organizations.",
  keywords: [
    "Software Development Company",
    "Custom Software Development",
    "AI Agents Development",
    "AI Automation Services",
    "Web Application Development",
    "Business Software Solutions",
    "School Management Software",
    "SHANORA Digital Technology",
    "SDT",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "SHANORA Digital Technology | Software Development & AI Solutions",
    description:
      "Building Digital Solutions. Connecting Global Businesses. Modern websites, custom software, AI agents, intelligent automation, and digital products.",
    url: SITE_URL,
    siteName: "SHANORA Digital Technology",
    type: "website",
    images: [
      {
        url: "/sdt-logo.png",
        alt: "SHANORA Digital Technology (SDT) Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHANORA Digital Technology | Software Development & AI Solutions",
    description:
      "SHANORA Digital Technology builds modern websites, custom software, AI agents, intelligent automation, and digital products for businesses and organizations.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth motion-reduce:scroll-auto`}>
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
