"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { profile } from "@/data/profile";
import { Container } from "./ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <Container>
        <nav
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "border-border bg-background-elevated/85 backdrop-blur-md shadow-sm px-4 py-2.5"
              : "border-transparent bg-transparent px-4 py-3"
          }`}
        >
          <a
            href="#home"
            className="font-mono text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="text-accent">&lt;</span>
            {profile.name.split(" ")[0]}
            <span className="text-accent">/&gt;</span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-foreground-muted transition-colors duration-200 hover:text-foreground hover:bg-surface-hover"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-all duration-200 hover:bg-accent-hover hover:shadow-md hover:shadow-accent/20"
            >
              Let&apos;s Talk
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </nav>

        {open ? (
          <div className="md:hidden mt-2 rounded-2xl border border-border bg-background-elevated/95 backdrop-blur-md p-2 shadow-sm animate-fade-in">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm text-foreground-muted transition-colors hover:text-foreground hover:bg-surface-hover"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-lg bg-accent px-4 py-3 text-center text-sm font-medium text-accent-foreground"
                >
                  Let&apos;s Talk
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
