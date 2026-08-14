import { RevealOnScroll } from "./RevealOnScroll";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <RevealOnScroll className={`flex flex-col gap-4 max-w-2xl ${alignment}`}>
      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent">
        <span className="h-px w-6 bg-accent" aria-hidden />
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description ? (
        <p className="text-foreground-muted text-base sm:text-lg leading-relaxed text-balance">
          {description}
        </p>
      ) : null}
    </RevealOnScroll>
  );
}
