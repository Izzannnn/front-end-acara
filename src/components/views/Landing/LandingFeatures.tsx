import type { ElementType, ReactNode } from "react";
import {
  FiArrowUpRight,
  FiBell,
  FiCheck,
  FiClock,
  FiCompass,
  FiSmartphone,
  FiTag,
} from "react-icons/fi";

import { cn } from "@/utils/cn";

import { Eyebrow } from "./LandingUI";

const FeatureLabel = (props: {
  icon: ElementType;
  children: ReactNode;
  tone?: "light" | "dark";
}) => {
  const { icon: Icon, children, tone = "dark" } = props;

  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={
          tone === "light"
            ? "grid h-11 w-11 place-items-center rounded-2xl bg-white/15 text-white"
            : "grid h-11 w-11 place-items-center rounded-2xl border border-[#E9DDCF] bg-white text-brand"
        }
      >
        <Icon aria-hidden="true" className="h-5 w-5" />
      </span>
      <span
        className={
          tone === "light"
            ? "text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55"
            : "text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9A8D80]"
        }
      >
        {children}
      </span>
    </div>
  );
};

const TRENDING_EVENTS = [
  {
    initial: "TG",
    title: "Thank God It's Festival",
    category: "Festival Musik",
    className: "bg-brand text-white",
  },
  {
    initial: "SS",
    title: "Suara Senja",
    category: "Seni & Budaya",
    className: "bg-[#B94B2E] text-cream",
  },
  {
    initial: "PK",
    title: "Pasar Kreatif 07",
    category: "Komunitas",
    className: "bg-[#4C5F46] text-cream",
  },
];

const TrendingVisual = () => {
  return (
    <div className="mt-auto pt-7">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[9px] uppercase tracking-[0.16em] text-cream/45">
          Trending minggu ini
        </p>
        <span className="rounded-full bg-[#1E3A2A] px-2.5 py-1 text-[9px] font-semibold text-[#79D99E]">
          Paling dicari
        </span>
      </div>
      <div className="space-y-2">
        {TRENDING_EVENTS.map((event) => (
          <div
            key={event.title}
            className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] px-3 py-2.5"
          >
            <span
              className={cn(
                "grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[9px] font-black tracking-[-0.02em]",
                event.className,
              )}
            >
              {event.initial}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-cream">
                {event.title}
              </p>
              <p className="mt-0.5 text-[9px] text-cream/45">
                {event.category}
              </p>
            </div>
            <FiArrowUpRight
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-cream/30"
            />
          </div>
        ))}
      </div>
      <p className="mt-3 text-[8px] uppercase tracking-[0.12em] text-cream/25">
        Diperbarui setiap hari
      </p>
    </div>
  );
};

const QR_PATTERN = [
  "1110111",
  "1000101",
  "1011101",
  "0010010",
  "1011101",
  "1000101",
  "1110111",
];

const QrCode = () => {
  return (
    <div
      aria-hidden="true"
      className="grid h-14 w-14 shrink-0 grid-cols-7 grid-rows-[repeat(7,minmax(0,1fr))] gap-[2px] rounded-md border border-[#E9DDCF] bg-white p-1.5"
    >
      {QR_PATTERN.flatMap((row, rowIndex) =>
        Array.from(row).map((cell, cellIndex) => (
          <span
            key={`${rowIndex}-${cellIndex}`}
            className={cell === "1" ? "rounded-[1px] bg-ink" : undefined}
          />
        )),
      )}
    </div>
  );
};

const LandingFeatures = () => {
  return (
    <section
      id="fitur"
      className="relative scroll-mt-24 overflow-hidden bg-[#FAF4EC] py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-8%] top-16 h-80 w-80 rounded-full bg-brand/10 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-40 w-40 bg-[radial-gradient(#DECFBE_1.1px,transparent_1.1px)] bg-[size:15px_15px] opacity-60"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-[780px]">
          <Eyebrow>Semua yang kamu butuhkan</Eyebrow>
          <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2.6rem] lg:text-[3rem]">
            Semua yang kamu butuhkan untuk menikmati event, dalam{" "}
            <span className="font-serif font-normal italic text-brand">
              satu tempat.
            </span>
          </h2>
          <p className="mt-5 max-w-[650px] text-[15px] leading-[1.8] text-[#6F6256] sm:text-base">
            Temukan event, pesan tiket, dan simpan e-ticket dalam satu akun.
            TixLy membuat setiap langkah terasa ringan.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <article className="relative flex flex-col overflow-hidden rounded-[28px] bg-brand p-6 text-white shadow-[0_25px_60px_-40px_rgba(251,114,33,0.8)] sm:p-8 lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[22px] border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-24 right-8 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative flex h-full flex-col">
              <FeatureLabel icon={FiTag} tone="light">
                Promo &amp; voucher
              </FeatureLabel>
              <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em] sm:text-[1.6rem]">
                Harga terbaik untuk pengalaman seru.
              </h3>
              <p className="mt-3 max-w-[430px] text-[13px] leading-[1.8] text-white/75">
                Klaim voucher, harga early bird, dan bundling tiket langsung
                dari halaman event favoritmu.
              </p>

              <div className="relative mt-auto pt-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-2.5">
                    <span className="text-[10px] font-semibold text-white/80">
                      Early bird otomatis di checkout
                    </span>
                    <span className="shrink-0 text-[9px] font-bold text-white/55">
                      −15%
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.07] px-4 py-2.5">
                    <span className="text-[10px] font-semibold text-white/80">
                      Bundling tiket untuk 2 orang
                    </span>
                    <span className="shrink-0 text-[9px] font-bold text-white/55">
                      −20%
                    </span>
                  </div>
                </div>

                <div className="mt-2 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">
                        Kode promo
                      </p>
                      <p className="mt-1.5 font-mono text-xl font-bold tracking-[0.14em]">
                        TGIF25
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-bold text-brand">
                      Hemat 25%
                    </span>
                  </div>
                  <div className="mt-4 border-t border-dashed border-white/25 pt-3">
                    <div className="flex items-center justify-between text-[9px] text-white/65">
                      <span>Berlaku untuk semua kategori</span>
                      <span>Sisa 2 hari</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="flex flex-col rounded-[28px] border border-white/5 bg-ink p-6 text-cream sm:p-8 lg:col-span-5">
            <FeatureLabel icon={FiCompass} tone="light">
              Lagi populer
            </FeatureLabel>
            <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em]">
              Event yang sedang jadi sorotan.
            </h3>
            <p className="mt-3 text-[13px] leading-[1.8] text-cream/60">
              Temukan acara yang paling banyak dicari dan pastikan kamu tidak
              ketinggalan.
            </p>
            <TrendingVisual />
          </article>

          <article className="flex flex-col rounded-[28px] border border-[#E9DDCF] bg-[#FFFCF8] p-6 sm:p-8 lg:col-span-5">
            <FeatureLabel icon={FiSmartphone}>Tiket digital</FeatureLabel>
            <h3 className="mt-7 text-2xl font-bold tracking-[-0.03em] text-ink">
              E-ticket langsung siap dipakai.
            </h3>
            <p className="mt-3 text-[13px] leading-[1.8] text-[#6F6256]">
              Setelah pembayaran, tiket dan QR code langsung tersedia di
              akunmu, tanpa perlu cetak.
            </p>

            <div className="mt-auto pt-7">
              <div className="rounded-2xl border border-[#E9DDCF] bg-white p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9A8D80]">
                    E-ticket
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F6ED] px-2 py-1 text-[8px] font-semibold text-[#2E8A4C]">
                    <span className="h-1 w-1 rounded-full bg-[#2E8A4C]" />
                    Aktif
                  </span>
                </div>

                <div className="mt-3 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                      <FiSmartphone aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold leading-snug text-ink">
                        Thank God It&apos;s Festival 2026
                      </p>
                      <p className="mt-1 text-[9px] text-[#8B7D70]">
                        Festival Pass &middot; 2 hari
                      </p>
                    </div>
                  </div>
                  <QrCode />
                </div>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-dashed border-[#EDE2D5] pt-3">
                  <div>
                    <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#9A8D80]">
                      Kode booking
                    </p>
                    <p className="mt-1 font-mono text-[10px] font-semibold text-ink">
                      TIX-2026-0042
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 pb-0.5 text-[8px] font-medium text-[#2E8A4C]">
                    <FiCheck aria-hidden="true" className="h-3 w-3" />
                    Siap dipakai
                  </span>
                </div>
              </div>
            </div>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-[28px] border border-[#E9DDCF] bg-[#F4EADF] p-6 sm:p-8 lg:col-span-7">
            <FiBell
              aria-hidden="true"
              strokeWidth={0.7}
              className="pointer-events-none absolute -bottom-12 -right-8 h-72 w-72 text-[#D9C4AE] opacity-70"
            />
            <div
              aria-hidden="true"
              className="absolute right-10 top-8 h-24 w-24 rounded-full bg-brand/10 blur-2xl"
            />

            <div className="relative flex h-full flex-col">
              <FeatureLabel icon={FiBell}>Pengingat</FeatureLabel>

              <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-[330px]">
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-ink">
                    Pengingat event, tepat waktu.
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-[#6F6256]">
                    Dapatkan notifikasi H-1, perubahan jadwal, dan info penting
                    dari event yang kamu ikuti.
                  </p>

                  <div className="mt-6">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#9A8D80]">
                      Event yang kamu ikuti
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-2.5 py-1 text-[9px] font-semibold text-white">
                        <span className="h-1 w-1 rounded-full bg-white" />
                        TGIF 2026
                      </span>
                      <span className="rounded-full border border-[#DCC9B7] bg-white/60 px-2.5 py-1 text-[9px] font-semibold text-[#6F6256]">
                        Suara Senja
                      </span>
                      <span className="rounded-full border border-[#DCC9B7] bg-white/60 px-2.5 py-1 text-[9px] font-semibold text-[#6F6256]">
                        Lari Pagi 10K
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-[9px] font-medium text-[#8B7D70]">
                    <span className="flex -space-x-1.5">
                      {["A", "R", "K"].map((initial, index) => (
                        <span
                          key={initial}
                          className={
                            index === 0
                              ? "grid h-5 w-5 place-items-center rounded-full border border-[#F4EADF] bg-[#F5C6A5] text-[7px] font-bold text-[#7A3B15]"
                              : index === 1
                                ? "grid h-5 w-5 place-items-center rounded-full border border-[#F4EADF] bg-[#C8D8C4] text-[7px] font-bold text-[#375139]"
                                : "grid h-5 w-5 place-items-center rounded-full border border-[#F4EADF] bg-[#D5C8E8] text-[7px] font-bold text-[#493666]"
                          }
                        >
                          {initial}
                        </span>
                      ))}
                    </span>
                    1.248 penonton menyimpan event ini
                  </div>
                </div>

                <div className="w-full max-w-[282px] space-y-2 sm:pt-1">
                  <div className="flex items-start gap-2.5 rounded-2xl border border-[#E5D7C8] bg-white/85 p-3 backdrop-blur-sm">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <FiBell aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[10px] font-semibold text-ink">
                          TGIF tinggal 2 hari lagi
                        </p>
                        <span className="shrink-0 text-[8px] font-medium text-[#A6978A]">
                          Hari ini
                        </span>
                      </div>
                      <p className="mt-0.5 text-[9px] leading-relaxed text-[#8B7D70]">
                        Gerbang buka 13.00 WITA. Siapkan tiketmu.
                      </p>
                    </div>
                  </div>

                  <div className="ml-4 flex items-start gap-2.5 rounded-2xl border border-[#E5D7C8] bg-white/85 p-3 backdrop-blur-sm">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-ink text-white">
                      <FiClock aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[10px] font-semibold text-ink">
                          Perubahan jadwal
                        </p>
                        <span className="shrink-0 text-[8px] font-medium text-[#A6978A]">
                          Baru saja
                        </span>
                      </div>
                      <p className="mt-0.5 text-[9px] leading-relaxed text-[#8B7D70]">
                        Suara Senja dimulai 30 menit lebih awal.
                      </p>
                    </div>
                  </div>

                  <div className="ml-8 flex items-start gap-2.5 rounded-2xl border border-[#E5D7C8] bg-white/85 p-3 backdrop-blur-sm">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#E9F6ED] text-[#2E8A4C]">
                      <FiCheck aria-hidden="true" className="h-3.5 w-3.5" />
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[10px] font-semibold text-ink">
                          Check-in lebih cepat
                        </p>
                        <span className="shrink-0 rounded-full bg-[#E9F6ED] px-1.5 py-0.5 text-[8px] font-semibold text-[#2E8A4C]">
                          Aktif
                        </span>
                      </div>
                      <p className="mt-0.5 text-[9px] leading-relaxed text-[#8B7D70]">
                        QR tiket TGIF siap dipindai di gerbang.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LandingFeatures;
