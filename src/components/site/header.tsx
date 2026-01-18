import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { MobileMenu } from "@/components/site/mobile-menu";

const nav = [
  { label: "How it works", href: "/#how" },
  { label: "For teams", href: "/#teams" },
  { label: "Controls", href: "/#controls" },
  { label: "FAQ", href: "/#faq" },
  // Must be last item (per your spec)
  { label: "Project Details", href: "/project" },
] as const;

export function SiteHeader({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-white/10 dark:bg-zinc-950/60",
        className
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton
            href={siteConfig.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            GitHub
          </LinkButton>
          <LinkButton href="/#cta" size="sm" className="hidden sm:inline-flex">
            Get compliance-ready
          </LinkButton>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
