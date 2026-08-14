import { stats } from "@/data/highlights";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";

export function Stats() {
  return (
    <section className="py-16 border-y border-border bg-surface/40">
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <RevealOnScroll
              key={stat.label}
              delay={i * 80}
              className="flex flex-col items-center text-center gap-1"
            >
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight text-accent">
                {stat.value}
              </span>
              <span className="text-sm text-foreground-muted">{stat.label}</span>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
