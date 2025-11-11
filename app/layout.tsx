// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StructuredData from "@/components/seo/StructuredData";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://beykerestrada.com").replace(/\/$/, "");
const DEFAULT_SEO = {
  title: "Beyker Estrada · AI Automation & Systems Architect",
  description:
    "AI Automation Consultant & Systems Architect helping founders and teams automate operations, scale workflows, and build intelligent business systems.",
  image: `${SITE_URL}/og-default.jpg`,
  siteName: "Beyker Estrada",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    url: SITE_URL,
    siteName: DEFAULT_SEO.siteName,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: DEFAULT_SEO.image,
        width: 1200,
        height: 630,
        alt: DEFAULT_SEO.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [DEFAULT_SEO.image],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
