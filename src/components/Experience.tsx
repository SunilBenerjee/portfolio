import { experience } from "@/data/experience";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { SectionHeading } from "./ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          description="A timeline of the roles where I've built and shipped production software."
        />

        <div className="relative flex flex-col gap-10 sm:pl-2">
          <div
            className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[9px]"
            aria-hidden
          />

          {experience.map((item, i) => (
            <RevealOnScroll
              key={item.company}
              delay={i * 90}
              className="relative flex gap-6 pl-8 sm:pl-10"
            >
              <span
                className={`absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 sm:h-4.5 sm:w-4.5 ${
                  item.current
                    ? "border-accent bg-accent shadow-[0_0_0_4px_var(--accent-soft)]"
                    : "border-border-strong bg-background-elevated"
                }`}
                aria-hidden
              />

              <div className="flex-1 rounded-2xl border border-border bg-background-elevated p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-lg">{item.role}</h3>
                  {item.current ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                      Current
                    </span>
                  ) : null}
                </div>
                <p className="text-accent font-mono text-sm mb-1">{item.company}</p>
                <p className="text-foreground-subtle text-sm mb-4">{item.period}</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground-muted leading-relaxed"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground-subtle" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
