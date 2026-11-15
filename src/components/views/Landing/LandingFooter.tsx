import type { ReactNode } from "react";
import Link from "next/link";
import {
  FiArrowUp,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

import Logo from "@/components/commons/Logo";
import { cn } from "@/utils/cn";

import { focusRing } from "./LandingUI";

const NAVIGATION_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Event", href: "#event" },
  { label: "Komunitas", href: "#komunitas" },
  { label: "Panduan", href: "#panduan" },
  { label: "Kerja Sama Organizer", href: "#organizer" },
  { label: "Tentang", href: "#tentang" },
];

const ACCOUNT_LINKS = [
  { label: "Tiket Saya", href: "/member/dashboard" },
  { label: "Masuk", href: "/auth/login" },
  { label: "Daftar", href: "/auth/register" },
];

const SOCIAL_LINKS = [
  {
    label: "Instagram TixLy",
    href: "https://instagram.com",
    icon: FiInstagram,
  },
  { label: "X TixLy", href: "https://x.com", icon: FiTwitter },
  { label: "YouTube TixLy", href: "https://youtube.com", icon: FiYoutube },
];

const FooterLink = (props: { href: string; children: ReactNode }) => {
  const { href, children } = props;

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-[13px] text-cream/55 transition-colors hover:text-brand",
        focusRing,
        "focus-visible:ring-offset-ink",
        "rounded",
      )}
    >
      {children}
    </Link>
  );
};

const LandingFooter = () => {
  return (
    <footer
      id="kontak"
      className="relative scroll-mt-24 overflow-hidden bg-ink text-cream"
    >
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-44px] right-0 select-none text-[clamp(110px,16vw,220px)] font-black leading-none tracking-[-0.08em] text-white/[0.025]"
      >
        TixLy
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.05fr_1.4fr] lg:gap-20 lg:py-20">
          <div id="tentang" className="scroll-mt-28">
            <Logo variant="light" />
            <p className="mt-5 max-w-[380px] text-[13px] leading-[1.9] text-cream/50">
              Temukan festival, konser, pertunjukan, dan acara komunitas
              favoritmu. Pesan tiket resmi, dapatkan e-ticket, dan nikmati
              pengalamannya—semuanya dalam satu tempat.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={cn(
                      "grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-cream/60 transition hover:border-brand/40 hover:bg-brand/10 hover:text-brand",
                      focusRing,
                      "focus-visible:ring-offset-ink",
                    )}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/35">
                Jelajahi
              </h3>
              <ul className="mt-4 space-y-3">
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/35">
                Akun
              </h3>
              <ul className="mt-4 space-y-3">
                {ACCOUNT_LINKS.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href}>{link.label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cream/35">
                Bantuan
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <FooterLink href="mailto:hak@hubaduan.id?subject=Bantuan%20TixLy">
                    Pusat Bantuan
                  </FooterLink>
                </li>
                <li>
                  <a
                    href="mailto:hak@hubaduan.id"
                    className={cn(
                      "inline-flex items-center gap-2 text-[13px] text-cream/55 transition-colors hover:text-brand",
                      focusRing,
                      "focus-visible:ring-offset-ink",
                      "rounded",
                    )}
                  >
                    <FiMail aria-hidden="true" className="h-3.5 w-3.5" />
                    hak@hubaduan.id
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+622112345678"
                    className={cn(
                      "inline-flex items-center gap-2 text-[13px] text-cream/55 transition-colors hover:text-brand",
                      focusRing,
                      "focus-visible:ring-offset-ink",
                      "rounded",
                    )}
                  >
                    <FiPhone aria-hidden="true" className="h-3.5 w-3.5" />
                    (021) 1234-5678
                  </a>
                </li>
                <li className="flex items-center gap-2 text-[13px] text-cream/55">
                  <FiMapPin aria-hidden="true" className="h-3.5 w-3.5" />
                  Jakarta, Indonesia
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-cream/40">
            &copy; 2026 TixLy. All Rights Reserved.
          </p>
          <Link
            href="#beranda"
            className={cn(
              "inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/40 transition-colors hover:text-brand",
              focusRing,
              "focus-visible:ring-offset-ink",
              "rounded",
            )}
          >
            Kembali ke atas
            <FiArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
