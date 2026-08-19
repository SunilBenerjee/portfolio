import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { GitHubIcon } from "./ui/GitHubIcon";
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
              <GitHubIcon className="h-[18px] w-[18px]" />
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
