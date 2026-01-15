"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroGsap({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const q = gsap.utils.selector(root);
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      q("[data-hero='badge']"),
      { opacity: 0, y: 12, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6 },
    )
      .fromTo(
        q("[data-hero='title']"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3",
      )
      .fromTo(
        q("[data-hero='copy']"),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4",
      )
      .fromTo(
        q("[data-hero='actions']"),
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3",
      )
      .fromTo(
        q("[data-hero='frame']"),
        { opacity: 0, y: 24, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85 },
        "-=0.4",
      );

    return () => {
      tl.kill();
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
