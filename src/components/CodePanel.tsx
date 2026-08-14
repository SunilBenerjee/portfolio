const lines: { tokens: { text: string; cls: string }[] }[] = [
  { tokens: [{ text: "const", cls: "text-fuchsia-400" }, { text: " developer", cls: "text-sky-300" }, { text: " = {", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "  name", cls: "text-sky-300" }, { text: ":", cls: "text-foreground-subtle" }, { text: " \"Sunil Benerjee\"", cls: "text-amber-300" }, { text: ",", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "  role", cls: "text-sky-300" }, { text: ":", cls: "text-foreground-subtle" }, { text: " \"Full Stack Developer\"", cls: "text-amber-300" }, { text: ",", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "  experience", cls: "text-sky-300" }, { text: ":", cls: "text-foreground-subtle" }, { text: " \"3+ years\"", cls: "text-amber-300" }, { text: ",", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "  stack", cls: "text-sky-300" }, { text: ": [", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "    \"Laravel\"", cls: "text-amber-300" }, { text: ", ", cls: "text-foreground-subtle" }, { text: "\"Node.js\"", cls: "text-amber-300" }, { text: ",", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "    \"Next.js\"", cls: "text-amber-300" }, { text: ", ", cls: "text-foreground-subtle" }, { text: "\"Vue.js\"", cls: "text-amber-300" }, { text: ",", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "    \"WebRTC\"", cls: "text-amber-300" }, { text: ", ", cls: "text-foreground-subtle" }, { text: "\"AWS\"", cls: "text-amber-300" } ] },
  { tokens: [{ text: "  ],", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "  builds", cls: "text-sky-300" }, { text: ": ", cls: "text-foreground-subtle" }, { text: "() =>", cls: "text-fuchsia-400" }, { text: " ship(", cls: "text-foreground-subtle" }, { text: "\"production-ready systems\"", cls: "text-amber-300" }, { text: "),", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "};", cls: "text-foreground-subtle" }] },
];

export function CodePanel() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-2xl border border-border-strong bg-code-bg shadow-2xl shadow-black/20 animate-float">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 font-mono text-xs text-white/40">developer.ts</span>
      </div>

      <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-relaxed">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre">
              <span className="mr-4 inline-block w-4 text-right text-white/25 select-none">
                {i + 1}
              </span>
              {line.tokens.map((t, j) => (
                <span key={j} className={t.cls}>
                  {t.text}
                </span>
              ))}
            </div>
          ))}
          <div className="whitespace-pre">
            <span className="mr-4 inline-block w-4 text-right text-white/25 select-none">
              {lines.length + 1}
            </span>
            <span className="inline-block h-4 w-2 translate-y-0.5 bg-accent animate-blink" aria-hidden />
          </div>
        </code>
      </pre>
    </div>
  );
}
