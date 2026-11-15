import Link from "next/link";
import {
  FiArrowRight,
  FiBell,
  FiCalendar,
  FiCheck,
  FiCompass,
  FiUsers,
} from "react-icons/fi";

import { cn } from "@/utils/cn";

import { Eyebrow, focusRing, Sparkle } from "./LandingUI";

const COMMUNITY_AVATARS = [
  { initial: "AR", className: "bg-[#F5C6A5] text-[#7A3B15]" },
  { initial: "DP", className: "bg-[#C8D8C4] text-[#375139]" },
  { initial: "NS", className: "bg-[#D5C8E8] text-[#493666]" },
  { initial: "RK", className: "bg-[#F2D895] text-[#6B5213]" },
];

const COMMUNITY_FEATURES = [
  {
    title: "Rekomendasi sesuai minat",
    description: "Temukan event yang relevan tanpa harus mencari jauh.",
    icon: FiCompass,
  },
  {
    title: "Pengingat acara otomatis",
    description:
      "Dapatkan notifikasi H-1 dan info terbaru dari event yang kamu ikuti.",
    icon: FiBell,
  },
  {
    title: "Komunitas & teman",
    description:
      "Bagikan rencana nonton dan temukan teman dengan minat yang sama.",
    icon: FiUsers,
  },
];

const BARCODE_WIDTHS = [2, 1, 3, 1, 2, 2, 1, 3, 2, 1, 2, 1];

const Barcode = () => {
  return (
    <div aria-hidden="true" className="flex h-6 items-stretch gap-[2px]">
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

const CommunityVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div
        aria-hidden="true"
        className="absolute -left-9 top-10 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-4 -top-3 h-20 w-20 bg-[radial-gradient(#D9C7B4_1.2px,transparent_1.2px)] bg-[size:12px_12px] opacity-70"
      />
      <Sparkle className="absolute -left-2 -top-2 h-6 w-6 text-brand" />

      <div className="relative -rotate-[1.5deg] rounded-[32px] border border-[#E7D9C9] bg-[#FFFCF8] p-4 shadow-[0_35px_80px_-35px_rgba(80,50,20,0.4)] transition duration-500 hover:rotate-0 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#9A8D80]">
              Tiket saya
            </p>
            <p className="mt-1 text-[17px] font-bold tracking-[-0.02em] text-ink">
              Thank God It&apos;s Festival 2026
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-[#E9F6ED] px-2.5 py-1 text-[9px] font-semibold text-[#2E8A4C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2E8A4C]" />
            Terkonfirmasi
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-2xl bg-[#F7EEE3] p-3.5 sm:px-4">
          <div className="flex -space-x-2">
            {COMMUNITY_AVATARS.map((avatar) => (
              <span
                key={avatar.initial}
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-full border-2 border-[#F7EEE3] text-[9px] font-bold",
                  avatar.className,
                )}
              >
                {avatar.initial}
              </span>
            ))}
            <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#F7EEE3] bg-ink text-[8px] font-bold text-cream">
              +9
            </span>
          </div>
          <div className="text-right">
            <p className="text-lg font-extrabold leading-none tracking-[-0.04em] text-ink">
              8.420
            </p>
            <p className="mt-1 text-[9px] text-[#8B7D70]">penonton akan hadir</p>
          </div>
        </div>

        <div className="mt-3 rounded-2xl border border-[#E9DDCF] bg-white p-4">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#9A8D80]">
              E-ticket
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E9F6ED] px-2 py-0.5 text-[8px] font-semibold text-[#2E8A4C]">
              <span className="h-1 w-1 rounded-full bg-[#2E8A4C]" />
              Aktif
            </span>
          </div>

          <div className="mt-3 flex items-center gap-3">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-ink text-center text-[10px] font-black leading-[0.95] text-cream">
              TG
              <br />
              IF
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-snug text-ink">
                Thank God It&apos;s Festival 2026
              </p>
              <p className="mt-1 text-[9px] text-[#8B7D70]">
                Festival Pass &middot; 2 hari
              </p>
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
                Kode booking
              </p>
              <p className="mt-1 font-mono text-[10px] font-semibold text-ink">
                TIX-2026-0042
              </p>
            </div>
            <Barcode />
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-ink p-4 text-cream">
            <FiCalendar aria-hidden="true" className="h-4 w-4 text-brand" />
            <p className="mt-3 text-xl font-extrabold tracking-[-0.04em]">2</p>
            <p className="mt-1 text-[9px] text-cream/55">
              hari lagi menuju TGIF
            </p>
          </div>
          <div className="rounded-2xl border border-[#E9DDCF] bg-white p-4">
            <FiBell aria-hidden="true" className="h-4 w-4 text-brand" />
            <p className="mt-3 text-xl font-extrabold tracking-[-0.04em] text-ink">
              Aktif
            </p>
            <p className="mt-1 text-[9px] text-[#9A8D80]">pengingat H-1</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 top-[30%] z-10 hidden items-center gap-2.5 rounded-2xl border border-white/70 bg-white px-3.5 py-3 shadow-[0_20px_45px_-20px_rgba(23,19,16,0.35)] sm:flex lg:-right-8">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-soft text-brand">
          <FiCheck aria-hidden="true" className="h-4 w-4" />
        </span>
        <div>
          <p className="text-[9px] text-[#9A8D80]">Tiket tersimpan</p>
          <p className="text-[11px] font-semibold text-ink">
            Siap diakses offline
          </p>
        </div>
      </div>
    </div>
  );
};

const LandingCommunity = () => {
  return (
    <section
      id="komunitas"
      className="relative scroll-mt-24 overflow-hidden bg-sand py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#FFF9F2]/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <CommunityVisual />
          </div>

          <div className="order-1 lg:order-2">
            <Eyebrow>Lebih dari sekadar tiket</Eyebrow>
            <h2 className="mt-5 max-w-[560px] text-[2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
              Datang untuk acaranya, pulang membawa{" "}
              <span className="font-serif font-normal italic text-brand">
                <span className="whitespace-nowrap">komunitas baru.</span>
              </span>
            </h2>
            <p className="mt-5 max-w-[540px] text-[15px] leading-[1.8] text-[#6F6256] sm:text-base">
              Temukan acara yang sesuai minatmu, simpan favorit, dan dapatkan
              kabar tentang event berikutnya. TixLy menghubungkanmu dengan
              pengalaman dan orang-orang yang tepat.
            </p>

            <div className="mt-8 space-y-3">
              {COMMUNITY_FEATURES.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex items-start gap-3.5 rounded-2xl border border-transparent p-1 transition duration-300 hover:border-[#E7D9C9] hover:bg-[#FFFCF8]"
                  >
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-[#E7D9C9] bg-white/70 text-brand transition duration-300 group-hover:border-brand/30 group-hover:bg-brand-soft">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {feature.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#8B7D70]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="#panduan"
              className={cn(
                "group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand",
                focusRing,
                "rounded-md",
              )}
            >
              Lihat cara pesan tiket
              <FiArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCommunity;
