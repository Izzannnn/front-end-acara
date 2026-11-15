export type EventTheme = "tgif" | "senja" | "pasar" | "lari";

export interface LandingEvent {
  id: string;
  title: string;
  organizer: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  theme: EventTheme;
}

export const LANDING_NAV = [
  { label: "Beranda", href: "#beranda" },
  { label: "Event", href: "#event" },
  { label: "Komunitas", href: "#komunitas" },
  { label: "Panduan", href: "#panduan" },
  { label: "Organizer", href: "#organizer" },
];

export const PARTNERS = [
  { name: "Perunggu", className: "font-black tracking-[0.18em]" },
  { name: "TGIF", className: "font-black tracking-[0.28em]" },
  { name: "GWK", className: "font-semibold tracking-[0.34em]" },
  { name: "Ruang Rupa", className: "font-serif italic" },
  { name: "Kolektif Kota", className: "font-bold tracking-[0.08em]" },
  { name: "Bumi Run", className: "font-semibold tracking-[0.16em]" },
  { name: "Nusa Live", className: "font-black tracking-[0.12em]" },
];

export const LANDING_EVENTS: LandingEvent[] = [
  {
    id: "tgif-2026",
    title: "Thank God It's Festival (TGIF) 2026",
    organizer: "Perunggu",
    category: "Festival Musik",
    date: "25–26 Juli 2026",
    time: "14.00 WITA",
    location: "GWK Cultural Park, Bali",
    description:
      "Dua hari penuh musik, budaya, dan energi di bawah langit Bali. TGIF 2026 mempertemukan penampil lintas genre dalam perayaan yang tumbuh bersama komunitasnya.",
    theme: "tgif",
  },
  {
    id: "suara-senja",
    title: "Suara Senja: Konser Intim",
    organizer: "Ruang Rupa",
    category: "Seni & Budaya",
    date: "12 Desember 2026",
    time: "19.00 WIB",
    location: "Jakarta",
    description:
      "Malam intim penuh cerita, memadukan penampilan akustik dengan ruang pameran karya seniman lokal. Kapasitas terbatas untuk pengalaman yang lebih dekat.",
    theme: "senja",
  },
  {
    id: "pasar-kreatif-07",
    title: "Pasar Kreatif 07",
    organizer: "Kolektif Kota",
    category: "Komunitas",
    date: "5 Desember 2026",
    time: "10.00 WIB",
    location: "Bandung",
    description:
      "Temui produk lokal, lokakarya, dan pertunjukan komunitas dalam satu akhir pekan yang hangat. Sebuah ruang untuk bertemu, belajar, dan tumbuh bersama.",
    theme: "pasar",
  },
  {
    id: "lari-pagi-10k",
    title: "Lari Pagi 10K",
    organizer: "Bumi Run",
    category: "Olahraga",
    date: "20 Desember 2026",
    time: "05.30 WIB",
    location: "Jakarta",
    description:
      "Lari santai 10 kilometer menyusuri kota, terbuka untuk pelari pemula hingga komunitas berpengalaman. Bawa energi terbaikmu dan rayakan garis finis bersama.",
    theme: "lari",
  },
];
