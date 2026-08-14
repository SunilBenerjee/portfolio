import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { RevealOnScroll } from "./ui/RevealOnScroll";

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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.27 7.77 10.77.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55A11.53 11.53 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
              </span>
              github.com/SunilBenerjee
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
          <form className="flex flex-col gap-5 rounded-2xl border border-border bg-background-elevated p-6 sm:p-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your name"
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground-subtle focus:border-accent focus:ring-2 focus:ring-[var(--ring)]"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-foreground transition-all duration-200 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              Send Message
            </button>
          </form>
        </RevealOnScroll>
      </Container>
    </section>
  );
}
