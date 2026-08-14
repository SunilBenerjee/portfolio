export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Volmint Technologies",
    role: "Full Stack Developer",
    period: "[Mon YYYY] – Present",
    current: true,
    points: [
      "Developing full-stack web applications end-to-end",
      "Building Laravel and Node.js APIs",
      "Developing modern frontend applications",
      "Working with databases and backend architecture",
      "Integrating third-party APIs",
      "Developing LMS and education-related systems",
      "Working on lead-management functionality",
      "Implementing WhatsApp integration",
      "Working with browser-based telephony",
      "Working with real-time communication technologies",
      "Bug fixing and production issue resolution",
    ],
  },
  {
    company: "Get Delivered",
    role: "Laravel Developer",
    period: "[Mon YYYY] – [Mon YYYY]",
    points: [
      "Built and maintained features using the Laravel framework",
      "Worked on backend logic and database-driven functionality",
    ],
  },
  {
    company: "Travelsees",
    role: "PHP Developer",
    period: "[Mon YYYY] – [Mon YYYY]",
    points: [
      "Developed and maintained PHP-based web applications",
      "Worked across backend features and bug fixes",
    ],
  },
  {
    company: "Panel Software Solutions",
    role: "PHP Developer Intern",
    period: "[Mon YYYY] – [Mon YYYY]",
    points: [
      "Assisted in building PHP-based application features",
      "Gained hands-on experience with real-world codebases",
    ],
  },
];
