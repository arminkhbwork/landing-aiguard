import pkg from "../../../package.json";

import { getMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";

export const metadata = getMetadata({
  title: "Project Details",
  description:
    "Tech stack, versions, architecture notes, and links for the AIGuard landing page project.",
  path: "/project",
});

type PackageJson = {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};

function pickDeps(
  p: PackageJson,
  names: string[]
): Array<{
  name: string;
  version: string;
  type: "dependency" | "devDependency";
}> {
  const out: Array<{
    name: string;
    version: string;
    type: "dependency" | "devDependency";
  }> = [];
  for (const name of names) {
    const dep = p.dependencies?.[name];
    const dev = p.devDependencies?.[name];
    if (dep) {
      out.push({ name, version: dep, type: "dependency" });
    } else if (dev) {
      out.push({ name, version: dev, type: "devDependency" });
    }
  }
  return out;
}

export default function ProjectDetailsPage() {
  const core = pickDeps(pkg, [
    "next",
    "react",
    "react-dom",
    "typescript",
    "tailwindcss",
    "gsap",
    "eslint",
    "husky",
  ]);

  const indexing = siteConfig.allowIndexing
    ? "Enabled"
    : "Disabled (noindex + disallow)";

  return (
    <div className="bg-white dark:bg-zinc-950">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight text-balance text-zinc-950 sm:text-4xl dark:text-white">
            Project Details
          </h1>
          <p className="mt-4 text-base leading-7 text-pretty text-zinc-600 dark:text-zinc-300">
            This page is intentionally part of the navigation (last menu item)
            so anyone can understand the tech choices, versions, and how to
            reuse this landing page as a template.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <p className="text-xs font-semibold tracking-wide text-zinc-950 dark:text-white">
                Stack
              </p>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                {core.map((d) => (
                  <li
                    key={d.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {d.name}
                    </span>
                    <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                      {d.version}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <p className="text-xs font-semibold tracking-wide text-zinc-950 dark:text-white">
                Ops / SEO
              </p>
              <dl className="mt-3 space-y-3 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600 dark:text-zinc-300">Docker</dt>
                  <dd className="font-medium text-zinc-900 dark:text-white">
                    Enabled
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600 dark:text-zinc-300">Indexing</dt>
                  <dd className="font-medium text-zinc-900 dark:text-white">
                    {indexing}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600 dark:text-zinc-300">
                    Sitemap / Robots
                  </dt>
                  <dd className="font-medium text-zinc-900 dark:text-white">
                    Enabled
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-zinc-600 dark:text-zinc-300">Source</dt>
                  <dd className="font-medium text-zinc-900 dark:text-white">
                    <a
                      className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-500 dark:decoration-white/20 dark:hover:decoration-white/40"
                      href={siteConfig.githubRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub repo
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-xs font-semibold tracking-wide text-zinc-950 dark:text-white">
              Reuse notes
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                Branding is centralized in{" "}
                <span className="font-mono">src/lib/site.ts</span>.
              </li>
              <li>
                SEO is centralized in{" "}
                <span className="font-mono">src/lib/seo.ts</span> plus{" "}
                <span className="font-mono">src/app/robots.ts</span> and{" "}
                <span className="font-mono">src/app/sitemap.ts</span>.
              </li>
              <li>
                Indexing can be toggled via{" "}
                <span className="font-mono">NEXT_PUBLIC_ALLOW_INDEXING</span>.
              </li>
              <li>
                The hero animation is built with{" "}
                <span className="font-mono">GSAP</span>.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
