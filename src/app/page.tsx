import { getMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/button";
import { HeroGsap } from "@/components/motion/hero-gsap";

export const metadata = getMetadata({
  title: siteConfig.tagline,
  description: siteConfig.description,
  path: "/",
});

const steps = [
  {
    title: "Classify risk",
    description:
      "Map your AI use case to EU AI Act categories and understand what's required—without guesswork.",
  },
  {
    title: "Generate evidence",
    description:
      "Create policy-ready docs, model cards, and audit trails that match how real compliance teams review work.",
  },
  {
    title: "Operate controls",
    description:
      "Track human oversight, data governance, and incident workflows with clear ownership and timelines.",
  },
] as const;

const teams = [
  {
    title: "Legal & compliance",
    description: "Readable artifacts, consistent evidence.",
  },
  {
    title: "Product",
    description: "Ship faster with guardrails, not blockers.",
  },
  { title: "Engineering", description: "Controls that fit modern pipelines." },
] as const;

const controls = [
  { k: "Policy packs", v: "Prebuilt controls aligned to common frameworks." },
  {
    k: "Audit trails",
    v: "Every change has an owner, rationale, and timestamp.",
  },
  {
    k: "Vendor review",
    v: "Assess third-party models with repeatable checklists.",
  },
  {
    k: "Incident response",
    v: "From detection to postmortem—fully documented.",
  },
] as const;

const faqs = [
  {
    q: "Is AIGuard a real product?",
    a: "This is a frontend-only landing page project (template) designed to look and feel like a real AI governance startup site.",
  },
  {
    q: "Does this include backend features or login?",
    a: "No—landing pages are frontend-only. Later phases will include React-based portals where we'll use state management libraries appropriately.",
  },
  {
    q: "How do I prevent indexing before launch?",
    a: "Set NEXT_PUBLIC_ALLOW_INDEXING=0 to disallow crawlers via robots and output noindex metadata.",
  },
] as const;

export default function Home() {
  return (
    <div>
      {/* Asymmetric split-screen hero */}
      <section className="relative overflow-hidden border-b border-zinc-200/70 bg-gradient-to-br from-zinc-50 via-white to-cyan-50/30 dark:border-white/10 dark:from-zinc-950 dark:via-zinc-950 dark:to-cyan-950/20">
        <div className="absolute inset-0 bg-noise opacity-40" />
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-gradient-to-br from-cyan-400/15 to-emerald-400/10 blur-3xl" />

        <Container className="relative py-20 sm:py-28 lg:py-32">
          <HeroGsap>
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              {/* Left: Content */}
              <div data-hero="content" className="space-y-8">
                <p
                  data-hero="badge"
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-200/50 bg-cyan-50/50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 shadow-sm dark:border-cyan-800/30 dark:bg-cyan-950/30 dark:text-cyan-300"
                >
                  EU AI Act Compliance
                </p>
                <h1
                  data-hero="title"
                  className="text-balance text-5xl font-bold leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl"
                >
                  Ship AI with{" "}
                  <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent dark:from-cyan-400 dark:to-emerald-400">
                    compliance built-in
                  </span>
                  .
                </h1>
                <p
                  data-hero="copy"
                  className="max-w-xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-xl"
                >
                  AIGuard turns regulation into a workflow: classify risk,
                  generate evidence, and operate controls—without slowing
                  product delivery.
                </p>
                <div
                  data-hero="actions"
                  className="flex flex-wrap items-center gap-4"
                >
                  <LinkButton href="/#cta" size="md">
                    Get compliance-ready
                  </LinkButton>
                  <LinkButton href="/project" variant="ghost" size="md">
                    Project Details →
                  </LinkButton>
                </div>
              </div>

              {/* Right: Metrics grid */}
              <div
                data-hero="frame"
                className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-2"
              >
                {[
                  {
                    k: "Risk maps",
                    v: "Use-case to obligations",
                    accent: "cyan",
                  },
                  {
                    k: "Audit trails",
                    v: "Owners & rationale",
                    accent: "emerald",
                  },
                  { k: "Policy packs", v: "Prebuilt controls", accent: "teal" },
                  {
                    k: "Incident logs",
                    v: "Full documentation",
                    accent: "cyan",
                  },
                ].map((s, idx) => (
                  <div
                    key={s.k}
                    className="group relative overflow-hidden rounded-xl border border-zinc-200/50 bg-white/80 p-6 shadow-sm backdrop-blur transition-all hover:border-cyan-300/50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-cyan-700/30"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 to-emerald-50/0 transition-colors group-hover:from-cyan-50/30 group-hover:to-emerald-50/20 dark:group-hover:from-cyan-950/20 dark:group-hover:to-emerald-950/10" />
                    <div className="relative">
                      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        {s.k}
                      </p>
                      <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-white">
                        {s.v}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </HeroGsap>
        </Container>
      </section>

      {/* Numbered timeline steps */}
      <section id="how" className="bg-white py-20 dark:bg-zinc-950 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
              How it works
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              Three steps from policy to production.
            </h2>
            <p className="mt-6 text-lg leading-7 text-zinc-600 dark:text-zinc-300">
              Clear process mapping and high-trust content—built to match how
              compliance teams think.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-8 sm:space-y-12">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className="relative flex flex-col gap-6 rounded-2xl border-l-4 border-cyan-500 bg-zinc-50/50 p-8 shadow-sm transition-all hover:shadow-md dark:border-cyan-400 dark:bg-white/5 sm:flex-row sm:items-start sm:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-lg font-bold text-white shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Alternating left/right team sections */}
      <section
        id="teams"
        className="bg-zinc-50 py-20 dark:bg-zinc-950 sm:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
              For teams
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              Aligned across legal, product, and engineering.
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-5xl space-y-8">
            {teams.map((t, idx) => (
              <div
                key={t.title}
                className={`flex flex-col gap-8 rounded-2xl border border-zinc-200/70 bg-white p-8 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5 sm:flex-row sm:items-center sm:gap-12 ${
                  idx % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-lg leading-7 text-zinc-600 dark:text-zinc-300">
                    {t.description}
                  </p>
                </div>
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-4xl font-bold text-cyan-600 shadow-sm dark:from-cyan-950/50 dark:to-emerald-950/50 dark:text-cyan-400">
                  {t.title.charAt(0)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Structured table-like controls */}
      <section
        id="controls"
        className="bg-white py-20 dark:bg-zinc-950 sm:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
              Controls
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              Governance that fits modern shipping.
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-zinc-200 shadow-lg dark:border-white/10">
              <div className="grid grid-cols-1 divide-y divide-zinc-200 dark:divide-white/10 sm:grid-cols-[1fr_2fr] sm:divide-x sm:divide-y-0">
                {controls.map((c, idx) => (
                  <div
                    key={c.k}
                    className={`grid grid-cols-1 gap-4 p-6 transition-colors hover:bg-zinc-50 dark:hover:bg-white/5 sm:grid-cols-[1fr_2fr] ${
                      idx === 0
                        ? "rounded-t-2xl sm:rounded-tl-2xl sm:rounded-tr-none"
                        : ""
                    } ${
                      idx === controls.length - 1
                        ? "rounded-b-2xl sm:rounded-bl-2xl sm:rounded-br-none"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-xs font-bold text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300">
                        {idx + 1}
                      </div>
                      <p className="text-base font-bold text-zinc-950 dark:text-white">
                        {c.k}
                      </p>
                    </div>
                    <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:pl-4">
                      {c.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Two-column FAQ */}
      <section id="faq" className="bg-zinc-50 py-20 dark:bg-zinc-950 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">
              FAQ
            </p>
            <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
              Straight answers for high-trust buyers.
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2">
              {faqs.map((f) => (
                <div
                  key={f.q}
                  className="rounded-xl border border-zinc-200/70 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-white/5"
                >
                  <p className="text-base font-bold text-zinc-950 dark:text-white">
                    {f.q}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Full-width banner CTA */}
      <section
        id="cta"
        className="border-t border-zinc-200/70 bg-gradient-to-br from-cyan-50 via-white to-emerald-50/30 py-20 dark:border-white/10 dark:from-cyan-950/20 dark:via-zinc-950 dark:to-emerald-950/20 sm:py-24"
      >
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="relative overflow-hidden rounded-2xl border border-cyan-200/50 bg-white/80 p-12 shadow-xl backdrop-blur dark:border-cyan-800/30 dark:bg-white/5 sm:p-16">
              <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/15 blur-3xl" />
              <div className="relative">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
                  Make AI governance feel like a product workflow.
                </h2>
                <p className="mt-6 text-lg leading-7 text-zinc-600 dark:text-zinc-300">
                  Clone the repo, update copy, and ship an EU AI Act compliance
                  landing page in hours.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <LinkButton href="/project" size="md">
                    See Project Details
                  </LinkButton>
                  <LinkButton
                    href={siteConfig.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="md"
                  >
                    View source on GitHub
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
