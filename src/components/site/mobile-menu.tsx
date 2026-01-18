"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import gsap from "gsap";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/button";

const nav = [
  { label: "How it works", href: "/#how" },
  { label: "For teams", href: "/#teams" },
  { label: "Controls", href: "/#controls" },
  { label: "FAQ", href: "/#faq" },
  { label: "Project Details", href: "/project" },
] as const;

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;
    if (!menu || !overlay) return;

    // Kill any existing animations
    gsap.killTweensOf([menu, overlay]);

    if (isOpen) {
      // Show elements immediately
      menu.style.display = "flex";
      overlay.style.display = "block";

      // Set initial states
      gsap.set(overlay, { opacity: 0 });
      gsap.set(menu, { opacity: 0, scale: 0.95, y: 20 });
      gsap.set(menu.querySelectorAll("a, button"), { opacity: 0, y: 15 });

      // Animate in
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(overlay, { opacity: 1, duration: 0.3 })
        .to(menu, { opacity: 1, scale: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to(
          menu.querySelectorAll("a, button"),
          { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
          "-=0.2"
        );
    } else {
      // Animate out
      const tl = gsap.timeline({ defaults: { ease: "power3.in" } });
      tl.to(menu.querySelectorAll("a, button"), {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.03,
      })
        .to(menu, { opacity: 0, scale: 0.95, y: 20, duration: 0.3 }, "-=0.1")
        .to(overlay, { opacity: 0, duration: 0.25 }, "-=0.2")
        .set([menu, overlay], { display: "none" });
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const menuContent = (
    <>
      {/* Full-screen overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9998] hidden bg-gradient-to-br from-zinc-950/95 via-zinc-950/98 to-zinc-950/95 backdrop-blur-md md:hidden"
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Full-width menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-[9999] hidden flex-col gap-8 overflow-y-auto bg-gradient-to-br from-zinc-950 via-zinc-950 to-cyan-950/20 p-6 pt-6 md:hidden"
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-sm font-semibold text-white shadow-sm">
              AG
            </span>
            <span className="text-sm font-semibold tracking-tight text-white">
              AIGuard
            </span>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            className="relative z-[10000] flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-white/20 hover:bg-white/10"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className="flex flex-1 flex-col gap-2"
          aria-label="Mobile navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="group relative rounded-xl border border-white/5 bg-white/5 px-6 py-4 text-lg font-semibold text-white transition-all hover:border-cyan-500/30 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute top-1/2 right-6 -translate-y-1/2 text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-8">
          <LinkButton
            href={siteConfig.githubRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
            className="w-full justify-center border-white/20 bg-white/10 text-white backdrop-blur hover:border-white/30 hover:bg-white/20"
            onClick={closeMenu}
          >
            GitHub
          </LinkButton>
          <LinkButton
            href="/#cta"
            size="md"
            className="w-full justify-center bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-600 hover:to-emerald-600"
            onClick={closeMenu}
          >
            Get compliance-ready
          </LinkButton>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg transition-colors hover:bg-zinc-100 md:hidden dark:hover:bg-white/10"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "h-0.5 w-6 origin-center rounded-full bg-zinc-900 transition-all duration-300 dark:bg-white",
            isOpen && "translate-y-2 rotate-45"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-6 rounded-full bg-zinc-900 transition-all duration-300 dark:bg-white",
            isOpen && "opacity-0"
          )}
        />
        <span
          className={cn(
            "h-0.5 w-6 origin-center rounded-full bg-zinc-900 transition-all duration-300 dark:bg-white",
            isOpen && "-translate-y-2 -rotate-45"
          )}
        />
      </button>

      {/* Render menu via portal to document.body */}
      {typeof document !== "undefined" &&
        createPortal(
          <div data-open={isOpen ? "true" : "false"}>{menuContent}</div>,
          document.body
        )}
    </>
  );
}
