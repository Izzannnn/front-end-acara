import Link from "next/link";

import { cn } from "@/utils/cn";

interface PropTypes {
  className?: string;
  href?: string;
  variant?: "dark" | "light";
}

const Logo = (props: PropTypes) => {
  const { className, href = "/", variant = "dark" } = props;

  return (
    <Link
      href={href}
      aria-label="TixLy — Beranda"
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative flex h-9 w-9 items-center justify-center">
        <span className="absolute inset-0 rotate-[-8deg] rounded-[11px] bg-brand transition-transform duration-300 group-hover:rotate-0" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="relative h-[18px] w-[18px] text-white"
        >
          <path d="M12 1.8c.55 5.84 4.36 9.65 10.2 10.2-5.84.55-9.65 4.36-10.2 10.2C11.45 16.36 7.64 12.55 1.8 12 7.64 11.45 11.45 7.64 12 1.8Z" />
        </svg>
      </span>
      <span
        className={cn(
          "text-[22px] font-extrabold tracking-[-0.04em]",
          variant === "light" ? "text-cream" : "text-ink",
        )}
      >
        Tix<span className="text-brand">Ly</span>
      </span>
    </Link>
  );
};

export default Logo;
