import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/site/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white dark:border-white/10 dark:bg-zinc-950">
      <Container className="grid gap-8 py-12 sm:grid-cols-2">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            {siteConfig.tagline}
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:justify-self-end">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wide text-zinc-950 dark:text-white">
              Explore
            </p>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                <Link className="hover:underline" href="/#how">
                  How it works
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/#teams">
                  For teams
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="/#faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wide text-zinc-950 dark:text-white">
              Project
            </p>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                <Link className="hover:underline" href="/project">
                  Project Details
                </Link>
              </li>
              <li>
                <a
                  className="hover:underline"
                  href={siteConfig.githubRepoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
