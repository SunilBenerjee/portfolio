import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Sunil Benarjee | Full Stack Software Developer";
const description =
  "Portfolio of Sunil Benarjee, a Full Stack Software Developer specializing in Laravel, Node.js, Next.js, real-time applications, APIs, databases and cloud technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Sunil Benarjee",
  },
  description,
  keywords: [
    "Sunil Benarjee",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Laravel Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Backend Developer",
    "Software Engineer",
    "React Developer",
    "Vue.js Developer",
  ],
  authors: [{ name: "Sunil Benarjee", url: "https://github.com/SunilBenerjee" }],
  creator: "Sunil Benarjee",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Sunil Benarjee",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.github],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
