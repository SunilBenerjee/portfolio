import { highlights, Highlight } from "@/data/highlights";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { SectionHeading } from "./ui/SectionHeading";

function HighlightIcon({ icon }: { icon: Highlight["icon"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "server":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <circle cx="7" cy="7" r="0.6" fill="currentColor" />
          <circle cx="7" cy="17" r="0.6" fill="currentColor" />
        </svg>
      );
    case "browser":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8h18" />
          <circle cx="6" cy="6" r="0.5" fill="currentColor" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "plug":
      return (
        <svg {...common}>
          <path d="M9 3v4M15 3v4M7 7h10v3a5 5 0 0 1-10 0V7ZM12 15v6" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7 18a4 4 0 1 1 .7-7.94A5.5 5.5 0 0 1 18 11.5a3.5 3.5 0 0 1-.5 6.5H7Z" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5v-15ZM20 18H6.5A2.5 2.5 0 0 0 4 20.5" />
        </svg>
      );
  }
}

export function EngineeringHighlights() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I Build"
          description="The categories of systems I design, build, and ship — end to end."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <RevealOnScroll
              key={item.title}
              delay={i * 70}
              className="group rounded-2xl border border-border bg-background-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                <HighlightIcon icon={item.icon} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-foreground-muted leading-relaxed">
                {item.description}
              </p>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
