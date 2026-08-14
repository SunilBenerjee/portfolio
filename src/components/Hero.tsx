import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { CodePanel } from "./CodePanel";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-40 h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--accent-soft),transparent)]"
        aria-hidden
      />

      <Container className="relative grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="flex min-w-0 flex-col gap-7">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-foreground-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </span>
          </RevealOnScroll>

          <RevealOnScroll delay={80}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance">
              {profile.name}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={140}>
            <p className="font-mono text-accent text-lg sm:text-xl">
              {profile.role}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="text-xl sm:text-2xl font-medium text-foreground text-balance leading-snug">
              {profile.headline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={260}>
            <p className="text-foreground-muted text-base sm:text-lg leading-relaxed max-w-xl text-balance">
              {profile.subheadline}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={320} className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h8M8 3l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-border-strong hover:bg-surface-hover hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium text-foreground-muted transition-all duration-200 hover:text-foreground"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55A11.53 11.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
              </svg>
              GitHub
            </a>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={200} className="relative min-w-0">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-[radial-gradient(closest-side,var(--accent-soft),transparent)]" aria-hidden />
          <CodePanel />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
