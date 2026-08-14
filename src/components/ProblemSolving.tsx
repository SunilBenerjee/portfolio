import { problemSolvingSteps } from "@/data/highlights";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { SectionHeading } from "./ui/SectionHeading";

export function ProblemSolving() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Approach"
          title="How I Approach Engineering Problems"
          description="A consistent process for turning requirements into reliable, maintainable software."
          align="center"
        />

        <div className="relative">
          <div
            className="hidden lg:block absolute left-0 right-0 top-6 h-px bg-border"
            aria-hidden
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {problemSolvingSteps.map((item, i) => (
              <RevealOnScroll
                key={item.step}
                delay={i * 80}
                className="relative flex flex-col items-center text-center gap-3 lg:items-start lg:text-left"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border-strong bg-background-elevated font-mono text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-semibold">{item.step}</h3>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {item.description}
                </p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
