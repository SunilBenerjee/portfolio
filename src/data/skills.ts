export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description: "Server-side architecture, APIs and business logic",
    skills: ["PHP", "Laravel", "Node.js", "Express.js"],
  },
  {
    title: "Frontend",
    description: "Interfaces and client-side applications",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "AngularJS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    description: "Data modeling and storage systems",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "DynamoDB", "Redis"],
  },
  {
    title: "Real-Time & Communication",
    description: "Live, low-latency systems",
    skills: ["WebSocket", "WebRTC", "mediasoup"],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Deployment and delivery infrastructure",
    skills: ["AWS", "S3", "CloudFront", "VPS", "Shared Hosting"],
  },
  {
    title: "APIs & Integrations",
    description: "Third-party and business-critical integrations",
    skills: [
      "REST APIs",
      "WhatsApp APIs",
      "Telephony APIs",
      "Razorpay",
      "Paytm",
    ],
  },
];
