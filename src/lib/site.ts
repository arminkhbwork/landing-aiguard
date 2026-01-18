function env(name: string): string | undefined {
  const v = process.env[name];
  return typeof v === "string" && v.trim().length > 0 ? v : undefined;
}

function envBool(name: string, defaultValue: boolean): boolean {
  const v = env(name);
  if (!v) return defaultValue;
  return ["1", "true", "yes", "on"].includes(v.toLowerCase());
}

function normalizeUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  return url.replace(/\/+$/, "");
}

export const siteConfig = {
  name: "AIGuard",
  tagline: "EU AI Act readiness for teams shipping AI products.",
  description:
    "AIGuard helps you ship compliant AI: risk classification, policy-ready documentation, and audit trails—fast. Frontend-only landing page template.",
  url: normalizeUrl(env("NEXT_PUBLIC_SITE_URL")) ?? "http://localhost:3000",
  allowIndexing: envBool("NEXT_PUBLIC_ALLOW_INDEXING", true),
  githubRepoUrl:
    env("NEXT_PUBLIC_GITHUB_REPO_URL") ??
    "https://github.com/arminkhbwork/landing-aiguard",
} as const;
