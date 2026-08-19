import { codeSnippetLines as lines } from "@/data/codeSnippet";

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
