export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  stack: string[];
  features: string[];
  gradient: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "school-management-system",
    title: "School Management System",
    category: "Education Platform",
    description:
      "A large-scale education-management platform handling the full academic lifecycle across multiple user roles.",
    problem:
      "Schools need a single system to coordinate admins, staff, students, and parents — replacing fragmented spreadsheets and manual processes with one authenticated, role-based platform.",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    features: [
      "Multi-role access: Super Admin, Admin, Employee, Student, Parent, Guest",
      "Role-based authentication and authorization",
      "Student management and record-keeping",
      "Examination system with scheduling and results",
      "Administrative workflow management",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    slug: "lms-education-platform",
    title: "LMS / Education Platform",
    category: "Education Platform",
    description:
      "A learning management platform combining course delivery with a secure, verified examination system.",
    problem:
      "Online learning needs more than video delivery — it needs verifiable exams, scheduling, and identity checks to be trustworthy at scale.",
    stack: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Student management and course/learning workflows",
      "Examination modules with exam scheduling",
      "Automated exam results processing",
      "Student verification during examinations",
      "Proctoring-related functionality",
      "Admin workflows for content and user management",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    slug: "lead-management-communication-system",
    title: "Lead Management & Communication System",
    category: "Business Systems",
    description:
      "A business management system with communication capabilities built directly into the lead workflow.",
    problem:
      "Sales teams lose time switching between CRM tools and calling/messaging apps. Integrating telephony and WhatsApp directly into lead management removes that context-switching cost.",
    stack: ["Laravel", "Node.js", "MySQL", "WebSocket", "WhatsApp APIs", "Telephony APIs"],
    features: [
      "Lead management and team management",
      "Agent assignment and agent management",
      "Browser-based calling",
      "Call history and call recording",
      "WhatsApp integration for direct communication",
      "Telephony API integration",
    ],
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
  {
    slug: "realtime-video-communication",
    title: "Real-Time Video Communication System",
    category: "Real-Time Engineering",
    description:
      "A scalable real-time video platform built on an SFU architecture for live classes and collaboration.",
    problem:
      "Peer-to-peer WebRTC doesn't scale past a handful of participants. An SFU-based architecture with mediasoup was needed to support live classes, screen sharing, and recording at scale.",
    stack: ["WebRTC", "mediasoup", "Node.js", "WebSocket", "AWS S3"],
    features: [
      "SFU (Selective Forwarding Unit) architecture for scalable video",
      "Live classes with real-time video and audio",
      "Screen sharing",
      "Session recording stored on AWS S3",
      "Scalable communication architecture designed for concurrent sessions",
    ],
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    category: "Business Systems",
    description:
      "A full e-commerce system with an admin dashboard for managing products, orders, and customers.",
    problem:
      "Online stores need a reliable backend to manage catalog, orders, and payments with an admin experience that makes day-to-day operations simple.",
    stack: ["Laravel", "MySQL", "REST APIs", "Razorpay", "Paytm"],
    features: [
      "Product management",
      "Order management",
      "Customer management",
      "Payment gateway integration",
      "Admin dashboard",
      "API integration for storefront and admin",
    ],
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
  },
];
