import { skillCategories } from "@/data/skills";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/40">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Technology"
          title="Tools I use to build production software."
          description="A focused stack across backend, frontend, data, real-time, cloud, and integrations — the technologies I actively work with."
          align="center"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <RevealOnScroll
              key={category.title}
              delay={i * 70}
              className="group rounded-2xl border border-border bg-background-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
            >
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <p className="text-sm text-foreground-subtle mt-1 mb-5">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
