import { profile } from "@/data/profile";
import { Container } from "./ui/Container";
import { GitHubIcon } from "./ui/GitHubIcon";

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold">{profile.name}</p>
          <p className="text-sm text-foreground-subtle">{profile.role}</p>
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
        >
          <GitHubIcon />
          GitHub
        </a>

        <p className="text-sm text-foreground-subtle">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
