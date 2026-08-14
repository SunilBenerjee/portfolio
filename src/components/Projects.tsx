import { projects } from "@/data/projects";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { SectionHeading } from "./ui/SectionHeading";
import { Badge } from "./ui/Badge";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-surface/40">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="Production-oriented systems I've designed and built — spanning education platforms, business tools, and real-time engineering."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <RevealOnScroll
              key={project.slug}
              delay={i * 60}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background-elevated transition-all duration-300 hover:border-accent/40 hover:shadow-2xl hover:shadow-black/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 pointer-events-none`}
                aria-hidden
              />

              <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.3fr_1fr] lg:items-start">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.15em] text-accent">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight mt-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="rounded-xl border border-border bg-surface/70 p-4">
                    <p className="text-xs font-mono uppercase tracking-wide text-foreground-subtle mb-1.5">
                      Problem Solved
                    </p>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {(project.github || project.demo) && (
                    <div className="flex flex-wrap gap-3 pt-1">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent-soft"
                        >
                          Code
                        </a>
                      ) : null}
                      {project.demo ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
                        >
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  )}
                </div>

                <div className="rounded-2xl border border-border bg-surface/70 p-6">
                  <p className="text-xs font-mono uppercase tracking-wide text-foreground-subtle mb-4">
                    Key Features
                  </p>
                  <ul className="flex flex-col gap-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-foreground-muted leading-relaxed"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="mt-0.5 shrink-0 text-accent"
                        >
                          <path
                            d="M2.5 7.5 5.5 10.5 11.5 3.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
