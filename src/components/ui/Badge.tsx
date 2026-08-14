export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground-muted transition-colors duration-200 hover:border-accent/50 hover:text-foreground hover:bg-accent-soft">
      {children}
    </span>
  );
}
