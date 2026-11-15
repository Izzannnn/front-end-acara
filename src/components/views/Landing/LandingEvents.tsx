import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiX,
} from "react-icons/fi";

import { cn } from "@/utils/cn";

import {
  LANDING_EVENTS,
  type EventTheme,
  type LandingEvent,
} from "./Landing.constants";
import {
  Eyebrow,
  focusRing,
  primaryButton,
  secondaryButton,
  Sparkle,
} from "./LandingUI";

const EventArtwork = (props: { theme: EventTheme }) => {
  const { theme } = props;

  if (theme === "tgif") {
    return (
      <div className="relative h-full overflow-hidden bg-ink">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[22px] border-brand/25"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-brand"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(251,114,33,0.45),transparent_50%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"
        />
        <Sparkle className="absolute left-5 top-16 h-5 w-5 text-cream/20" />
        <div className="absolute inset-x-0 bottom-5 flex flex-col items-center text-center">
          <p className="font-serif text-xs italic text-cream/70">
            Thank God It&apos;s
          </p>
          <p className="mt-1 text-[50px] font-black leading-[0.8] tracking-[-0.08em] text-cream">
            TGIF
          </p>
          <p className="mt-2 text-[8px] font-semibold uppercase tracking-[0.34em] text-cream/70">
            Festival 2026
          </p>
        </div>
      </div>
    );
  }

  if (theme === "senja") {
    return (
      <div className="relative h-full overflow-hidden bg-[#EFD9BE]">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-60 w-60 rounded-full bg-[#B94B2E]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-28 -left-14 h-64 w-64 rounded-full border-[26px] border-[#3A2017]/10"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent_48%,rgba(185,75,46,0.14))]"
        />
        <div className="absolute inset-x-5 bottom-5">
          <p className="font-serif text-[42px] italic leading-[0.88] tracking-[-0.03em] text-[#3A2017]">
            Suara
            <br />
            Senja
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-[#3A2017]/20 pt-2.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#3A2017]/60">
            <span>Konser Intim</span>
            <span>12.12.26</span>
          </div>
        </div>
      </div>
    );
  }

  if (theme === "pasar") {
    return (
      <div className="relative h-full overflow-hidden bg-[#E2E9DA]">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(#4C5F46_1px,transparent_1px),linear-gradient(90deg,#4C5F46_1px,transparent_1px)] bg-[size:34px_34px] opacity-[0.09]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-14 -top-16 h-56 w-56 rounded-full bg-[#4C5F46]"
        />
        <Sparkle className="absolute right-10 top-8 h-6 w-6 text-[#F8EFE2]" />
        <div className="absolute inset-x-5 bottom-5">
          <span className="inline-flex rounded-full bg-brand px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.14em] text-white">
            Edisi 07
          </span>
          <p className="mt-3 text-[38px] font-black leading-[0.88] tracking-[-0.06em] text-[#22301F]">
            Pasar
            <br />
            Kreatif
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-[#22301F]/20 pt-2.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#22301F]/60">
            <span>Kolektif Kota</span>
            <span>Bandung</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden bg-[#2048D8]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[repeating-linear-gradient(115deg,transparent_0_26px,rgba(255,255,255,0.16)_26px_27px)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[22px] border-[#FF8A3D]/80"
      />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
        <p className="text-[44px] font-black leading-[0.85] tracking-[-0.07em] text-cream">
          Lari
          <br />
          Pagi
        </p>
        <div className="mb-1 rounded-full bg-cream px-3 py-1.5 text-[10px] font-black tracking-[-0.02em] text-[#2048D8]">
          10K
        </div>
      </div>
    </div>
  );
};

interface EventModalPropTypes {
  event: LandingEvent;
  onClose: () => void;
}

const EventModal = (props: EventModalPropTypes) => {
  const { event, onClose } = props;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 bg-ink/70 backdrop-blur-sm"
      />

      <div className="relative flex min-h-full items-center justify-center p-4 sm:p-6">
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-modal-title"
          className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-[#E9DDCF] bg-cream shadow-[0_40px_100px_-30px_rgba(0,0,0,0.55)]"
        >
          <button
            type="button"
            aria-label="Tutup detail event"
            onClick={onClose}
            className={cn(
              "absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/60 bg-white/90 text-ink shadow-md backdrop-blur transition hover:bg-white",
              focusRing,
            )}
          >
            <FiX aria-hidden="true" className="h-5 w-5" />
          </button>

          <div className="h-52 overflow-hidden sm:h-60">
            <EventArtwork theme={event.theme} />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-soft px-3 py-1 text-[10px] font-semibold text-brand-dark">
                {event.category}
              </span>
              <span className="text-[11px] text-[#8B7D70]">
                Oleh {event.organizer}
              </span>
            </div>

            <h3
              id="event-modal-title"
              className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-3xl"
            >
              {event.title}
            </h3>
            <p className="mt-3 text-sm leading-[1.8] text-[#6F6256]">
              {event.description}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#E9DDCF] bg-white/60 p-3.5">
                <FiCalendar
                  aria-hidden="true"
                  className="h-4 w-4 text-brand"
                />
                <p className="mt-2.5 text-[9px] uppercase tracking-[0.16em] text-[#9A8D80]">
                  Tanggal
                </p>
                <p className="mt-1 text-xs font-semibold text-ink">
                  {event.date}
                </p>
              </div>
              <div className="rounded-2xl border border-[#E9DDCF] bg-white/60 p-3.5">
                <FiClock aria-hidden="true" className="h-4 w-4 text-brand" />
                <p className="mt-2.5 text-[9px] uppercase tracking-[0.16em] text-[#9A8D80]">
                  Waktu
                </p>
                <p className="mt-1 text-xs font-semibold text-ink">
                  {event.time}
                </p>
              </div>
              <div className="rounded-2xl border border-[#E9DDCF] bg-white/60 p-3.5">
                <FiMapPin aria-hidden="true" className="h-4 w-4 text-brand" />
                <p className="mt-2.5 text-[9px] uppercase tracking-[0.16em] text-[#9A8D80]">
                  Lokasi
                </p>
                <p className="mt-1 text-xs font-semibold text-ink">
                  {event.location}
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/auth/login"
                className={cn(primaryButton, focusRing)}
              >
                Beli Tiket
                <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className={cn(secondaryButton, focusRing)}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState<LandingEvent | null>(null);
  const closeModal = useCallback(() => setSelectedEvent(null), []);

  return (
    <section
      id="event"
      className="relative scroll-mt-24 overflow-hidden bg-cream py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-14%] top-24 h-[420px] w-[420px] rounded-full bg-[#FFE8D6] opacity-60 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[720px]">
            <Eyebrow>Event di TixLy</Eyebrow>
            <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink sm:text-[2.6rem] lg:text-[2.9rem]">
              Dari konser sampai lari pagi, pilih{" "}
              <span className="font-serif font-normal italic text-brand">
                keseruanmu.
              </span>
            </h2>
            <p className="mt-4 max-w-[560px] text-[15px] leading-[1.8] text-[#6F6256]">
              Jelajahi festival, pertunjukan, dan acara komunitas pilihan. Cek
              jadwalnya, lalu amankan tiketmu sebelum kehabisan.
            </p>
          </div>

          <span className="hidden items-center gap-2 rounded-full border border-[#E7D9C9] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7E6F60] md:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Pilihan minggu ini
          </span>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {LANDING_EVENTS.map((event) => (
            <article
              key={event.id}
              className="group flex flex-col overflow-hidden rounded-[26px] border border-[#E9DDCF] bg-[#FFFCF8] shadow-[0_6px_24px_-18px_rgba(70,45,20,0.35)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_55px_-30px_rgba(70,45,20,0.45)]"
            >
              <div className="relative h-[230px] overflow-hidden">
                <div className="h-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                  <EventArtwork theme={event.theme} />
                </div>
                <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur">
                  {event.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9A8D80]">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  Oleh {event.organizer}
                </p>
                <h3 className="mt-2 min-h-[48px] text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
                  {event.title}
                </h3>

                <div className="mt-3 space-y-2 text-[11px] text-[#7E6F60]">
                  <p className="flex items-center gap-2">
                    <FiCalendar
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-brand"
                    />
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiMapPin
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-brand"
                    />
                    {event.location}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedEvent(event)}
                  className={cn(
                    "group/button mt-5 flex w-full items-center justify-between border-t border-[#EDE2D5] pt-4 text-left text-xs font-semibold text-ink transition-colors hover:text-brand",
                    focusRing,
                  )}
                >
                  Lihat Detail
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-[#E7D9C9] text-ink transition duration-300 group-hover/button:border-brand group-hover/button:bg-brand group-hover/button:text-white">
                    <FiArrowUpRight
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                    />
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={closeModal} />
      )}
    </section>
  );
};

export default LandingEvents;
