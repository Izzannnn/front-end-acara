import Link from "next/link";
import { FiArrowRight, FiBell, FiCheck, FiPlay } from "react-icons/fi";

import { cn } from "@/utils/cn";

import {
  focusRing,
  primaryButton,
  secondaryButton,
  Sparkle,
} from "./LandingUI";

const BARCODE_WIDTHS = [
  2, 1, 3, 1, 2, 2, 1, 3, 2, 1, 2, 3, 1, 1, 2, 3, 1, 2, 2, 1, 3,
];

const Barcode = () => {
  return (
    <div aria-hidden="true" className="flex h-7 items-stretch gap-[2px]">
      {BARCODE_WIDTHS.map((width, index) => (
        <span
          key={`${width}-${index}`}
          className="block rounded-[1px] bg-ink"
          style={{ width: `${width}px` }}
        />
      ))}
    </div>
  );
};

const HeroPoster = () => {
  return (
    <div className="relative aspect-[3/4] overflow-hidden rounded-[26px] bg-ink p-5 text-cream shadow-[0_35px_80px_-28px_rgba(23,19,16,0.65)] ring-1 ring-white/10 sm:p-6">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(251,114,33,0.4),transparent_48%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[30%] h-[72%] w-[125%] -translate-x-1/2 rounded-t-full bg-brand"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-ink via-ink/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -left-16 -top-14 h-44 w-44 rounded-full border-[16px] border-cream/10"
      />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-center justify-between text-[8px] uppercase tracking-[0.26em] text-cream/60 sm:text-[9px]">
          <span>TixLy Presents</span>
          <span>&copy; 2026</span>
        </div>

        <div className="relative pb-1">
          <p className="font-serif text-sm italic text-cream/80">
            Thank God It&apos;s
          </p>
          <p className="mt-1 text-[60px] font-black leading-[0.78] tracking-[-0.09em] text-cream sm:text-[68px]">
            TGIF
          </p>
          <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.34em] text-cream sm:text-[10px]">
            Festival 2026
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-cream/20 pt-3 text-[8px] uppercase tracking-[0.16em] text-cream/70">
          <span>25—26 Juli 2026</span>
          <span className="text-right">
            GWK Cultural Park
            <br />
            Bali
          </span>
        </div>
      </div>
    </div>
  );
};

const HeroVisual = () => {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[500px] sm:h-[520px] lg:h-[570px]">
      <div
        aria-hidden="true"
        className="absolute right-2 top-7 h-56 w-56 rounded-full bg-brand/20 blur-3xl sm:top-10 sm:h-72 sm:w-72"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 h-32 w-32 bg-[radial-gradient(#D9C7B4_1.2px,transparent_1.2px)] bg-[size:14px_14px] opacity-70 sm:h-40 sm:w-40"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-9 h-24 w-24 rounded-full border border-brand/30"
      />

      <Sparkle className="absolute left-[7%] top-[1%] h-7 w-7 text-brand sm:h-8 sm:w-8" />
      <Sparkle className="absolute bottom-[34%] right-[1%] h-4 w-4 text-ink/20 sm:h-5 sm:w-5" />

      <div className="absolute left-[1%] top-[5%] z-10 w-[63%] max-w-[320px] -rotate-[4deg] transition duration-500 hover:rotate-0">
        <HeroPoster />
      </div>

      <div className="absolute bottom-0 right-0 z-20 w-[68%] max-w-[320px] rotate-[3deg] rounded-[22px] border border-[#E8DACC] bg-[#FFFCF8] p-4 shadow-[0_28px_60px_-22px_rgba(23,19,16,0.45)] transition duration-500 hover:rotate-0 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-sm font-extrabold tracking-[-0.03em] text-ink">
            <span className="h-3.5 w-3.5 rotate-[-8deg] rounded-[4px] bg-brand" />
            TixLy
          </span>
          <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9A8D80]">
            E-Ticket
          </span>
        </div>

        <div className="my-3 border-t border-dashed border-[#DED2C5]" />

        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-ink text-center text-[10px] font-black leading-[0.95] text-cream">
            TG
            <br />
            IF
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold leading-tight text-ink">
              Thank God It&apos;s Festival 2026
            </p>
            <p className="mt-1 text-[10px] text-[#8B7D70]">Oleh Perunggu</p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-[8px] font-medium uppercase tracking-[0.12em] text-[#9A8D80]">
          <span>25—26 Jul 2026</span>
          <span className="h-1 w-1 rounded-full bg-[#D8C9BA]" />
          <span>GWK, Bali</span>
        </div>

        <div className="mt-3 flex items-end justify-between gap-4 border-t border-dashed border-[#DED2C5] pt-3">
          <div>
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9A8D80]">
              Admit one
            </p>
            <p className="mt-1 font-mono text-[10px] font-semibold text-ink">
              TIX-2026-0042
            </p>
          </div>
          <Barcode />
        </div>
      </div>

      <div className="absolute right-0 top-[5%] z-30 flex items-center gap-2.5 rounded-2xl border border-white/70 bg-white/90 px-3 py-2.5 shadow-[0_16px_35px_-15px_rgba(23,19,16,0.35)] backdrop-blur md:right-[-2%]">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E9F6ED] text-[#2E8A4C]">
          <FiCheck aria-hidden="true" className="h-4 w-4" />
        </span>
        <div className="whitespace-nowrap">
          <p className="text-[9px] text-[#8B7D70]">Check-in berhasil</p>
          <p className="text-[11px] font-semibold text-ink">
            Gerbang A &middot; 19:42
          </p>
        </div>
      </div>

      <div className="absolute bottom-[15%] left-[-2%] z-30 hidden items-center gap-2.5 rounded-2xl bg-ink px-3.5 py-3 text-cream shadow-[0_18px_40px_-18px_rgba(23,19,16,0.7)] sm:flex">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white">
          <FiBell aria-hidden="true" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[9px] text-cream/60">Pengingat H-1</p>
          <p className="text-[11px] font-semibold">TGIF dimulai besok</p>
        </div>
      </div>
    </div>
  );
};

const TRUST_AVATARS = [
  { initial: "A", className: "bg-[#F5C6A5] text-[#7A3B15]" },
  { initial: "R", className: "bg-[#C8D8C4] text-[#375139]" },
  { initial: "K", className: "bg-[#D5C8E8] text-[#493666]" },
  { initial: "S", className: "bg-[#F2D895] text-[#6B5213]" },
];

const LandingHero = () => {
  return (
    <section
      id="beranda"
      className="relative scroll-mt-24 overflow-hidden bg-cream pb-14 pt-[122px] sm:pb-20 sm:pt-[142px] lg:pb-24 lg:pt-[158px]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-44 -top-44 h-[610px] w-[610px] rounded-full bg-[#FFE7D3] opacity-80 blur-[110px]" />
        <div className="absolute left-[-6%] top-[58%] h-64 w-64 bg-[radial-gradient(#E2D2C0_1.1px,transparent_1.1px)] bg-[size:16px_16px] opacity-60" />
        <div className="absolute left-1/2 top-24 hidden h-[420px] w-px bg-gradient-to-b from-transparent via-[#E8D9C9] to-transparent lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#E7D9C9] bg-white/60 px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#6F6256] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Tiket resmi untuk acara favoritmu
            </span>

            <h1 className="mt-6 max-w-[680px] text-[2.65rem] font-extrabold leading-[1.02] tracking-[-0.055em] text-ink sm:text-[3.5rem] lg:text-[4.15rem] xl:text-[4.5rem]">
              Cari acara seru, pesan tiketnya tanpa{" "}
              <span className="relative inline-block text-brand">
                <span className="font-serif font-normal italic">ribet.</span>
                <Sparkle className="absolute -right-4 -top-2 h-3.5 w-3.5 text-brand sm:-right-5 sm:-top-3 sm:h-4 sm:w-4" />
              </span>
            </h1>

            <p className="mt-6 max-w-[540px] text-[16px] leading-[1.75] text-[#6F6256] sm:text-[17px]">
              Dari festival musik hingga pertemuan komunitas, temukan acara yang
              paling kamu tunggu. Pilih tiket, bayar dengan aman, dan langsung
              dapat e-ticket di TixLy.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#event"
                className={cn(primaryButton, focusRing, "group")}
              >
                Jelajahi Event
                <FiArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="#panduan"
                className={cn(
                  secondaryButton,
                  focusRing,
                  "group justify-start bg-transparent pl-2.5 pr-5 sm:bg-white/70",
                )}
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-cream transition-transform duration-300 group-hover:scale-105">
                  <FiPlay
                    aria-hidden="true"
                    className="ml-0.5 h-3.5 w-3.5"
                  />
                </span>
                Cara Pesan Tiket
              </Link>
            </div>

            <div className="mt-10 flex flex-col gap-4 border-t border-[#E9DDCF] pt-6 sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {TRUST_AVATARS.map((avatar) => (
                    <span
                      key={avatar.initial}
                      className={cn(
                        "grid h-8 w-8 place-items-center rounded-full border-2 border-cream text-[10px] font-bold",
                        avatar.className,
                      )}
                    >
                      {avatar.initial}
                    </span>
                  ))}
                  <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-cream bg-ink text-[9px] font-bold text-cream">
                    +9
                  </span>
                </div>
                <p className="max-w-[190px] text-[11px] leading-relaxed text-[#7E6F60]">
                  Dipercaya penonton dari berbagai jenis event.
                </p>
              </div>

              <span
                aria-hidden="true"
                className="hidden h-8 w-px bg-[#E9DDCF] sm:block"
              />

              <p className="flex items-center gap-2 text-[11px] font-medium text-[#7E6F60]">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-[#E9F6ED] text-[#2E8A4C]">
                  <FiCheck aria-hidden="true" className="h-2.5 w-2.5" />
                </span>
                Pembayaran aman &amp; tiket resmi
              </p>
            </div>
          </div>

          <div
            className="relative animate-fade-up lg:pl-4"
            style={{ animationDelay: "120ms" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
