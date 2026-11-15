import type { ReactNode } from "react";

import { cn } from "@/utils/cn";

interface SparklePropTypes {
  className?: string;
}

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-cream";

export const primaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_-12px_rgba(251,114,33,0.9)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark";

export const secondaryButton =
  "inline-flex items-center justify-center gap-2 rounded-full border border-[#DCCDBD] bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-white";

export const Sparkle = (props: SparklePropTypes) => {
  const { className } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 0c.62 6.72 5.28 11.38 12 12-6.72.62-11.38 5.28-12 12-.62-6.72-5.28-11.38-12-12C6.72 11.38 11.38 6.72 12 0Z" />
    </svg>
  );
};

interface EyebrowPropTypes {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light";
}

export const Eyebrow = (props: EyebrowPropTypes) => {
  const { children, className, tone = "dark" } = props;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em]",
        tone === "light" ? "text-cream/60" : "text-[#7E6F60]",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
      {children}
    </span>
  );
};
