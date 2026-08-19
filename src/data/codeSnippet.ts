export type CodeToken = { text: string; cls: string };
export type CodeLine = { tokens: CodeToken[] };

export const codeSnippetLines: CodeLine[] = [
  { tokens: [{ text: "const", cls: "text-fuchsia-400" }, { text: " developer", cls: "text-sky-300" }, { text: " = {", cls: "text-foreground-subtle" }] },
  { tokens: [{ text: "  name", cls: "text-sky-300" }, { text: ":", cls: "text-foreground-subtle" }, { text: " \"Sunil Benarjee\"", cls: "text-amber-300" }, { text: ",", cls: "text-foreground-subtle" }] },
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
