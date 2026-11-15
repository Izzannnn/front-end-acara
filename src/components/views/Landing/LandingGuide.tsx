import Link from "next/link";
import {
  FiArrowUpRight,
  FiCheck,
  FiCreditCard,
  FiSearch,
  FiSmartphone,
} from "react-icons/fi";

import { cn } from "@/utils/cn";

import { Eyebrow, focusRing } from "./LandingUI";

const GUIDE_STEPS = [
  {
    number: "01",
    title: "Cari event favoritmu",
    description:
      "Jelajahi festival, konser, atau acara komunitas yang sesuai dengan minatmu.",
    note: "Ratusan pilihan event",
    icon: FiSearch,
  },
  {
    number: "02",
    title: "Pilih & bayar tiket",
    description:
      "Tentukan kategori tiket, pakai kode promo, dan bayar dengan metode favoritmu.",
    note: "Pembayaran aman",
    icon: FiCreditCard,
  },
  {
    number: "03",
    title: "Tunjukkan e-ticket",
    description:
      "QR code langsung tersedia di ponsel. Datang, pindai, dan nikmati acaranya.",
    note: "Check-in lebih cepat",
    icon: FiSmartphone,
  },
];

const LandingGuide = () => {
  return (
    <section
      id="panduan"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/4 h-64 w-40 bg-[radial-gradient(#E2D2C0_1.1px,transparent_1.1px)] bg-[size:16px_16px] opacity-50"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-[700px]">
            <Eyebrow>Cara pesan tiket</Eyebrow>
            <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
              Dari cari event sampai masuk gerbang, dalam{" "}
              <span className="font-serif font-normal italic text-brand">
                tiga langkah.
              </span>
            </h2>
          </div>

          <div className="max-w-[300px]">
            <p className="text-[13px] leading-[1.8] text-[#6F6256]">
              Tidak perlu ribet. Pesan tiket dalam hitungan menit dan akses
              e-ticket kapan saja dari ponselmu.
            </p>
            <Link
              href="#event"
              className={cn(
                "group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand",
                focusRing,
                "rounded-md",
              )}
            >
              Jelajahi Event
              <FiArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-10 hidden border-t border-dashed border-[#DCCDBD] md:block"
          />

          <div className="relative grid gap-4 md:grid-cols-3">
            {GUIDE_STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-[26px] border border-[#E9DDCF] bg-[#FFFCF8] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#D9C7B4] hover:shadow-[0_24px_50px_-35px_rgba(70,45,20,0.4)] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-[#F0DFCE] bg-brand-soft text-sm font-black text-brand">
                      {step.number}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-[#EDE2D5] text-[#9A8D80] transition duration-300 group-hover:border-brand/30 group-hover:text-brand">
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-8 text-lg font-bold tracking-[-0.02em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.8] text-[#6F6256]">
                    {step.description}
                  </p>

                  <p className="mt-6 flex items-center gap-2 border-t border-[#EDE2D5] pt-4 text-[10px] font-medium text-[#8B7D70]">
                    <FiCheck
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-brand"
                    />
                    {step.note}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingGuide;
