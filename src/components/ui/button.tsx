import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 disabled:pointer-events-none disabled:opacity-50",
        size === "sm" ? "h-10 px-4 text-sm" : "h-11 px-5 text-sm",
        variant === "primary" &&
          "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
        variant === "secondary" &&
          "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:hover:bg-white/5",
        variant === "ghost" &&
          "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-white/10",
        className,
      )}
      {...props}
    />
  );
}

type LinkButtonProps = Omit<
  React.ComponentPropsWithoutRef<typeof Link>,
  "href"
> & {
  href: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
};

export function LinkButton({
  href,
  className,
  variant = "primary",
  size = "md",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60",
        size === "sm" ? "h-10 px-4 text-sm" : "h-11 px-5 text-sm",
        variant === "primary" &&
          "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200",
        variant === "secondary" &&
          "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50 dark:border-white/15 dark:bg-zinc-950 dark:text-white dark:hover:bg-white/5",
        variant === "ghost" &&
          "text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-white/10",
        className,
      )}
      {...props}
      {...(props as Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">)}
    />
  );
}
