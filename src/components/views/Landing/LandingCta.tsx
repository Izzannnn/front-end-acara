import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import { cn } from "@/utils/cn";

import { Eyebrow, focusRing, primaryButton, Sparkle } from "./LandingUI";

const CTA_BENEFITS = [
  "Tiket resmi & aman",
  "E-ticket instan",
  "Pengingat otomatis",
];

const DigitalTicket = () => {
  return (
    <div className="relative mx-auto w-full max-w-[320px] rotate-[3deg] rounded-[26px] bg-[#FFF7EE] p-6 text-ink shadow-[0_35px_80px_-25px_rgba(0,0,0,0.6)] transition duration-500 hover:rotate-0">
      <div
        aria-hidden="true"
        className="absolute -right-6 -top-6 h-20 w-20 rounded-full border-[12px] border-brand/10"
      />
      <div className="relative flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-extrabold tracking-[-0.03em]">
          <Sparkle className="h-4 w-4 text-brand" />
          TixLy Pass
        </span>
        <span className="rounded-full bg-brand px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white">
          E-Ticket
        </span>
      </div>

      <p className="mt-9 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9A8D80]">
        Untuk event berikutnya
      </p>
      <p className="mt-1.5 text-[46px] font-black uppercase leading-[0.86] tracking-[-0.06em] text-brand">
        Admit
        <br />
        One
      </p>
      <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-[#6F6256]">
        E-ticket untuk event favoritmu, siap diakses dari ponsel.
      </p>

      <div className="relative my-6 border-t border-dashed border-[#D9C7B4]">
        <span
          aria-hidden="true"
          className="absolute -left-8 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink"
        />
        <span
          aria-hidden="true"
          className="absolute -right-8 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-ink"
        />
      </div>

      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#9A8D80]">
            Kode booking
          </p>
          <p className="mt-1 font-mono text-[10px] font-bold tracking-[0.06em]">
            TIX-2026-0042
          </p>
        </div>
        <div aria-hidden="true" className="flex h-7 items-stretch gap-[2px]">
          {[2, 1, 3, 1, 2, 2, 1, 3, 2, 1, 2, 1].map((width, index) => (
            <span
              key={`${width}-${index}`}
              className="block rounded-[1px] bg-ink"
              style={{ width: `${width}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const LandingCta = () => {
  return (
    <section
      id="mulai"
      className="relative scroll-mt-24 bg-cream pb-20 pt-4 sm:pb-24 lg:pb-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-ink px-6 py-12 sm:px-10 sm:py-14 lg:rounded-[38px] lg:px-16 lg:py-16">
          <div
            aria-hidden="true"
            className="absolute -right-28 -top-40 h-[500px] w-[500px] rounded-full bg-brand/25 blur-[100px]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 bottom-[-130px] h-72 w-72 rounded-full border-[30px] border-white/[0.04]"
          />
          <div
            aria-hidden="true"
            className="absolute right-10 top-10 hidden h-28 w-40 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:14px_14px] sm:block"
          />
          <Sparkle className="absolute bottom-10 left-1/2 hidden h-6 w-6 text-brand/60 lg:block" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <Eyebrow tone="light">Tiket digital</Eyebrow>
              <h2 className="mt-5 max-w-[620px] text-[2.1rem] font-extrabold leading-[1.05] tracking-[-0.05em] text-cream sm:text-[2.7rem] lg:text-[3.1rem]">
                Petualangan berikutnya, tinggal{" "}
                <span className="font-serif font-normal italic text-brand">
                  satu tiket.
                </span>
              </h2>
              <p className="mt-5 max-w-[540px] text-[14px] leading-[1.8] text-cream/60 sm:text-[15px]">
                Temukan event yang bikin kamu excited, amankan tiketnya, dan
                simpan e-ticket di ponsel. Semua dalam satu akun TixLy.
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                {CTA_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-center gap-2 text-[11px] font-medium text-cream/75"
                  >
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-brand/15 text-brand">
                      <FiCheck aria-hidden="true" className="h-2.5 w-2.5" />
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#event"
                  className={cn(
                    primaryButton,
                    focusRing,
                    "focus-visible:ring-offset-ink",
                    "group",
                  )}
                >
                  Jelajahi Event
                  <FiArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/auth/register"
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-white/10",
                    focusRing,
                    "focus-visible:ring-offset-ink",
                  )}
                >
                  Buat Akun Gratis
                </Link>
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl"
              />
              <DigitalTicket />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;
