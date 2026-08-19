import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";
import { GitHubIcon } from "./ui/GitHubIcon";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <RevealOnScroll className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden />
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-foreground-muted text-base sm:text-lg leading-relaxed max-w-md text-balance">
            Have a project in mind, an opening on your team, or just want to talk
            engineering? I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-4 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-3 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                <GitHubIcon />
              </span>
              {profile.github.replace("https://", "")}
            </a>
            <div className="inline-flex items-center gap-3 text-sm text-foreground-muted">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              {profile.location}
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120}>
          <ContactForm />
        </RevealOnScroll>
      </Container>
    </section>
  );
}
