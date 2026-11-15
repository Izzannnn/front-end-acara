import Link from "next/link";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import Logo from "@/components/commons/Logo";
import { cn } from "@/utils/cn";

import { LANDING_NAV } from "./Landing.constants";
import { focusRing } from "./LandingUI";

const LandingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const handleNavigate = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition duration-300",
          isScrolled || isOpen
            ? "border-[#E9DDCF] bg-cream/90 backdrop-blur-xl"
            : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Logo />

          <nav
            aria-label="Navigasi utama"
            className="hidden items-center gap-6 lg:flex xl:gap-8"
          >
            {LANDING_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6F6256] transition-colors hover:text-ink",
                  focusRing,
                  "rounded-md",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex xl:gap-5">
            <Link
              href="/auth/login"
              className={cn(
                "rounded-full px-2 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:text-brand",
                focusRing,
              )}
            >
              Login
            </Link>
            <Link
              href="#event"
              className={cn(
                "group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-xs font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-brand",
                focusRing,
                "focus-visible:ring-offset-cream",
              )}
            >
              Jelajahi Event
              <FiArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            onClick={() => setIsOpen((value) => !value)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-full border border-[#DCCDBD] bg-white/70 text-ink transition hover:border-ink lg:hidden",
              focusRing,
            )}
          >
            {isOpen ? (
              <FiX aria-hidden="true" className="h-5 w-5" />
            ) : (
              <FiMenu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="menu-mobile"
          className="fixed inset-x-0 bottom-0 top-[76px] z-40 overflow-y-auto bg-cream px-5 pb-10 pt-6 lg:hidden"
        >
          <nav aria-label="Navigasi seluler" className="flex flex-col">
            {LANDING_NAV.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavigate}
                className={cn(
                  "flex items-center justify-between border-b border-[#E9DDCF] py-5 text-2xl font-bold tracking-[-0.03em] text-ink transition-colors hover:text-brand",
                  focusRing,
                  index === 0 && "border-t",
                )}
              >
                {item.label}
                <FiArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 text-[#A39484]"
                />
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="#event"
              onClick={handleNavigate}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-white",
                focusRing,
              )}
            >
              Jelajahi Event
              <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/auth/login"
              onClick={handleNavigate}
              className={cn(
                "inline-flex items-center justify-center gap-2 rounded-full border border-[#DCCDBD] bg-white/70 px-6 py-4 text-sm font-semibold text-ink",
                focusRing,
              )}
            >
              Login
            </Link>
            <Link
              href="mailto:hak@hubaduan.id?subject=Bantuan%20TixLy"
              onClick={handleNavigate}
              className={cn(
                "mt-2 text-center text-xs font-semibold uppercase tracking-[0.16em] text-[#7E6F60]",
                focusRing,
              )}
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;
