import { profile, focusAreas } from "@/data/profile";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { SectionHeading } from "./ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="About Me"
            title="A developer who builds complete systems, not just features."
          />

          <div className="flex flex-col gap-5">
            {profile.about.map((paragraph, i) => (
              <RevealOnScroll key={i} delay={i * 80}>
                <p className="text-foreground-muted text-base sm:text-lg leading-relaxed text-balance">
                  {paragraph}
                </p>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={240} className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-foreground-subtle">Location</p>
              <p className="font-medium">{profile.location}</p>
            </div>
            <div>
              <p className="text-sm text-foreground-subtle">Experience</p>
              <p className="font-medium">{profile.experience}</p>
            </div>
            <div>
              <p className="text-sm text-foreground-subtle">Education</p>
              <p className="font-medium">
                {profile.education.degree}, {profile.education.institute}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={160} className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h3 className="font-mono text-sm uppercase tracking-wide text-foreground-subtle mb-5">
            Areas of Focus
          </h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2.5 text-sm text-foreground-muted"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="shrink-0 text-accent"
                >
                  <path
                    d="M2.5 7.5 5.5 10.5 11.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {area}
              </li>
            ))}
          </ul>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
