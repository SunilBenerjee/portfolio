import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sunilbenerjee.dev";
const title = "Sunil Benerjee | Full Stack Software Developer";
const description =
  "Portfolio of Sunil Benerjee, a Full Stack Software Developer specializing in Laravel, Node.js, Next.js, real-time applications, APIs, databases and cloud technologies.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Sunil Benerjee",
  },
  description,
  keywords: [
    "Sunil Benerjee",
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
  authors: [{ name: "Sunil Benerjee", url: "https://github.com/SunilBenerjee" }],
  creator: "Sunil Benerjee",
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Sunil Benerjee",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
