import Link from "next/link";
import {
  FiArrowUpRight,
  FiBarChart2,
  FiCalendar,
  FiCheck,
  FiMail,
  FiTag,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import { cn } from "@/utils/cn";

import {
  Eyebrow,
  focusRing,
  primaryButton,
  secondaryButton,
  Sparkle,
} from "./LandingUI";

const ORGANIZER_BENEFITS = [
  {
    title: "Halaman event gratis",
    description: "Mulai jual tiket tanpa biaya awal.",
    icon: FiCalendar,
  },
  {
    title: "Dasbor real-time",
    description: "Pantau penjualan dan pendapatan.",
    icon: FiBarChart2,
  },
  {
    title: "Alat promosi",
    description: "Kode promo, early bird, dan bundling.",
    icon: FiTag,
  },
  {
    title: "Dukungan hari-H",
    description: "Tim kami siap membantu sampai acara.",
    icon: FiUsers,
  },
];

const SALES_BARS = [
  { day: "Sen", height: "38%" },
  { day: "Sel", height: "54%" },
  { day: "Rab", height: "46%" },
  { day: "Kam", height: "68%" },
  { day: "Jum", height: "58%" },
  { day: "Sab", height: "82%" },
  { day: "Min", height: "100%" },
];

const OrganizerVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[500px] pb-12">
      <div
        aria-hidden="true"
        className="absolute -right-5 top-8 h-56 w-56 rounded-full bg-brand/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-4 bottom-16 h-32 w-32 bg-[radial-gradient(#D9C7B4_1.2px,transparent_1.2px)] bg-[size:13px_13px] opacity-70"
      />
      <Sparkle className="absolute -right-2 -top-3 h-6 w-6 text-brand" />

      <div className="relative -rotate-[1.5deg] rounded-[30px] border border-[#E7D9C9] bg-[#FFFCF8] p-4 shadow-[0_35px_80px_-35px_rgba(80,50,20,0.4)] transition duration-500 hover:rotate-0 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-brand text-[10px] font-black tracking-[-0.02em] text-white">
              TG
            </span>
            <div className="min-w-0">
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#9A8D80]">
                Dasbor organizer
              </p>
              <p className="mt-0.5 truncate text-[13px] font-bold text-ink">
                TGIF 2026
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#E9F6ED] px-2.5 py-1 text-[9px] font-semibold text-[#2E8A4C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E8A4C]" />
            Live
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-ink p-4 text-cream">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-cream/45">
              Pendapatan
            </p>
            <p className="mt-2 text-xl font-extrabold leading-none tracking-[-0.04em]">
              Rp 128,4 jt
            </p>
            <p className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-[#79D99E]">
              <FiTrendingUp aria-hidden="true" className="h-3 w-3" />
              +18,2%
            </p>
          </div>
          <div className="rounded-2xl border border-[#E9DDCF] bg-white p-4">
            <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9A8D80]">
              Tiket terjual
            </p>
            <p className="mt-2 text-xl font-extrabold leading-none tracking-[-0.04em] text-ink">
              2.480
            </p>
            <p className="mt-2 text-[9px] text-[#8B7D70]">dari 3.000 kuota</p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-[#E9DDCF] bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9A8D80]">
              Penjualan 7 hari
            </p>
            <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[8px] font-semibold text-brand">
              Minggu ini
            </span>
          </div>

          <div className="mt-4 flex h-24 items-end gap-2">
            {SALES_BARS.map((bar) => (
              <div
                key={bar.day}
                className="flex h-full flex-1 flex-col justify-end gap-1.5"
              >
                <span
                  className={cn(
                    "block w-full rounded-t-[4px]",
                    bar.height === "100%" ? "bg-brand" : "bg-[#EADCCD]",
                  )}
                  style={{ height: bar.height }}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            {SALES_BARS.map((bar) => (
              <span
                key={bar.day}
                className="flex-1 text-center text-[7px] font-medium text-[#A6978A]"
              >
                {bar.day}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 rounded-2xl border border-[#E9DDCF] bg-[#F7EEE3] px-4 py-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white">
              <FiUsers aria-hidden="true" className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[10px] font-semibold text-ink">
                Early bird terjual habis
              </p>
              <p className="mt-0.5 text-[8px] text-[#8B7D70]">
                120 tiket dalam 24 jam
              </p>
            </div>
          </div>
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#E9F6ED] text-[#2E8A4C]">
            <FiCheck aria-hidden="true" className="h-3 w-3" />
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-dashed border-[#DED2C5] pt-3">
          <p className="flex min-w-0 items-center gap-1.5 text-[9px] text-[#8B7D70]">
            <FiMail aria-hidden="true" className="h-3 w-3 shrink-0" />
            <span className="truncate">organizer@tixly.id</span>
          </p>
          <span className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.14em] text-brand">
            Partner resmi
          </span>
        </div>
      </div>

      <div className="absolute -bottom-2 -right-2 z-10 hidden items-center gap-2.5 rounded-2xl border border-white/70 bg-white px-3.5 py-3 shadow-[0_20px_45px_-20px_rgba(23,19,16,0.35)] sm:flex lg:-right-5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#E9F6ED] text-[#2E8A4C]">
          <FiCheck aria-hidden="true" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[9px] text-[#9A8D80]">Pencairan berhasil</p>
          <p className="text-[11px] font-semibold text-ink">Rp 42.500.000</p>
        </div>
      </div>
    </div>
  );
};

const LandingOrganizer = () => {
  return (
    <section
      id="organizer"
      aria-labelledby="organizer-title"
      className="relative scroll-mt-24 overflow-hidden border-t border-[#E9DDCF] bg-sand py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-12 h-52 w-52 bg-[radial-gradient(#DECFBE_1.1px,transparent_1.1px)] bg-[size:16px_16px] opacity-50"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-brand/10 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20">
          <div>
            <Eyebrow>Untuk organizer</Eyebrow>
            <h2
              id="organizer-title"
              className="mt-5 max-w-[560px] text-[2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2.6rem] lg:text-[2.9rem]"
            >
              Punya event? Saatnya{" "}
              <span className="font-serif font-normal italic text-brand">
                tumbuh bersama.
              </span>
            </h2>
            <p className="mt-5 max-w-[540px] text-[15px] leading-[1.8] text-[#6F6256] sm:text-base">
              TixLy terbuka untuk penyelenggara, promotor, dan komunitas yang
              ingin menjual tiket dengan lebih rapi. Dari halaman event sampai
              laporan penjualan, tim kami siap membantu.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {ORGANIZER_BENEFITS.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3 rounded-2xl border border-[#E9DDCF] bg-[#FFFCF8]/80 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#D9C7B4] hover:shadow-[0_18px_40px_-30px_rgba(70,45,20,0.45)]"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-ink">
                        {benefit.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#8B7D70]">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:hak@hubaduan.id?subject=Kerja%20sama%20penyelenggara%20event%20TixLy"
                className={cn(primaryButton, focusRing, "group")}
              >
                Ajukan Kerja Sama
                <FiArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <Link
                href="/auth/register"
                className={cn(secondaryButton, focusRing)}
              >
                Daftar sebagai Organizer
              </Link>
            </div>

            <p className="mt-4 flex items-center gap-2 text-[11px] font-medium text-[#7E6F60]">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-[#E9F6ED] text-[#2E8A4C]">
                <FiCheck aria-hidden="true" className="h-2.5 w-2.5" />
              </span>
              Tim partnership kami membalas dalam 1×24 jam kerja.
            </p>
          </div>

          <OrganizerVisual />
        </div>
      </div>
    </section>
  );
};

export default LandingOrganizer;
