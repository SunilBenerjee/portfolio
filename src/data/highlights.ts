export type Highlight = {
  title: string;
  description: string;
  icon: "server" | "browser" | "bolt" | "plug" | "cloud" | "book";
};

export const highlights: Highlight[] = [
  {
    title: "Scalable Backend Systems",
    description:
      "REST APIs, authentication, database architecture, business logic and backend services built to hold up under real usage.",
    icon: "server",
  },
  {
    title: "Modern Web Applications",
    description:
      "Responsive applications using Next.js, React, Vue.js and modern frontend technologies.",
    icon: "browser",
  },
  {
    title: "Real-Time Applications",
    description:
      "WebRTC, WebSocket, mediasoup and real-time communication for live, low-latency experiences.",
    icon: "bolt",
  },
  {
    title: "Third-Party Integrations",
    description:
      "Payment gateways, WhatsApp, telephony and external APIs wired cleanly into product workflows.",
    icon: "plug",
  },
  {
    title: "Cloud-Based Applications",
    description: "AWS, S3, CloudFront and production deployments built for reliability.",
    icon: "cloud",
  },
  {
    title: "Education Technology",
    description:
      "LMS, examination systems, student management and online learning platforms.",
    icon: "book",
  },
];

export const problemSolvingSteps = [
  {
    step: "Understand",
    description: "Dig into requirements and constraints before writing a single line of code.",
  },
  {
    step: "Design",
    description: "Plan a maintainable architecture — data models, API contracts, and system boundaries.",
  },
  {
    step: "Build",
    description: "Implement features with clean, readable, production-grade code.",
  },
  {
    step: "Test",
    description: "Verify edge cases and expected behavior before anything ships.",
  },
  {
    step: "Optimize",
    description: "Debug production issues and tune performance where it matters.",
  },
  {
    step: "Deploy",
    description: "Ship to production infrastructure with confidence.",
  },
] as const;

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "Full Stack", label: "Development" },
  { value: "Multiple", label: "Production Systems" },
  { value: "Multiple", label: "API Integrations" },
] as const;
