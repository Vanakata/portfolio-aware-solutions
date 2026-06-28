import type { Localized } from "./i18n";

export type Project = {
  /** Stable slug, also used for keys. */
  slug: string;
  /** Episode-style index shown on the card, e.g. "PROJECT #01". */
  index: string;
  name: string;
  tagline: Localized<string>;
  description: Localized<string>;
  /** Short feature bullets surfaced on the card. */
  highlights: Localized<string[]>;
  stack: string[];
  /** One of the accent keys defined in the design system. */
  accent: "amber" | "azure" | "rust";
  links: {
    repo?: string;
    live?: string;
  };
  /** Key into the dictionary's `status` map. */
  status: "In development" | "Personal tool";
};

export const projects: Project[] = [
  {
    slug: "domashko",
    index: "PROJECT #01",
    name: "Domashko",
    tagline: {
      en: "Self-hosted inventory & stash manager",
      bg: "Self-hosted мениджър на инвентар",
    },
    description: {
      en:
        "A PWA for tracking what you own and where it lives. Scan a barcode with the camera, " +
        "drop the item into a location, and get a searchable, offline-capable stash you actually maintain.",
      bg:
        "PWA за проследяване на това, което притежаваш и къде се намира. Сканираш баркод с камерата, " +
        "слагаш артикула в локация и получаваш търсим, offline-годен инвентар, който реално поддържаш.",
    },
    highlights: {
      en: [
        "Camera barcode scanning (ZXing)",
        "Installable PWA, works offline",
        "Vue 3 SPA on a .NET API",
      ],
      bg: [
        "Сканиране на баркод с камера (ZXing)",
        "Инсталируем PWA, работи offline",
        "Vue 3 SPA върху .NET API",
      ],
    },
    stack: ["Vue 3", "Vite", "Tailwind v4", "Pinia", ".NET", "Docker"],
    accent: "amber",
    links: {
      repo: "https://github.com/Vanakata/MyStash",
      live: "https://domashko.awaresolutions.eu",
    },
    status: "In development",
  },
  {
    slug: "bookme",
    index: "PROJECT #02",
    name: "BookMe",
    tagline: {
      en: "Appointment booking for a hair salon",
      bg: "Резервации за фризьорски салон",
    },
    description: {
      en:
        "Customers pick a stylist, a service and a free slot; the salon manages staff, services, " +
        "working hours and time off. A pure, unit-tested availability calculator sits at the core.",
      bg:
        "Клиентите избират стилист, услуга и свободен час; салонът управлява персонал, услуги, " +
        "работно време и отсъствия. В основата стои чист, unit-тестван калкулатор за наличност.",
    },
    highlights: {
      en: [
        "Minimal-API backend, clean layering",
        "Availability engine, fully unit-tested",
        "Blazor WASM PWA served from the API",
      ],
      bg: [
        "Minimal-API бекенд, чисто слоесто разделение",
        "Engine за наличност, изцяло unit-тестван",
        "Blazor WASM PWA, сервиран от API-то",
      ],
    },
    stack: ["ASP.NET Core 8", "Blazor WASM", "EF Core", "MariaDB", "Docker"],
    accent: "azure",
    links: {
      repo: "https://github.com/Vanakata/BookMe",
      live: "https://bookme.awaresolutions.eu",
    },
    status: "In development",
  },
  {
    slug: "claude-usage",
    index: "PROJECT #03",
    name: "Claude Usage Display",
    tagline: {
      en: "Live Claude usage on a desk hardware screen",
      bg: "Claude usage на хардуерен дисплей на бюрото",
    },
    description: {
      en:
        "Pulls Claude / ccusage data and renders it onto a Turing Smart Screen — a tiny physical " +
        "display on the desk showing today's token spend and limits at a glance, no browser needed.",
      bg:
        "Издърпва Claude / ccusage данни и ги рендерира на Turing Smart Screen — малък физически " +
        "дисплей на бюрото, който показва днешния разход на токени и лимитите с един поглед, без браузър.",
    },
    highlights: {
      en: [
        "Drives real Turing Smart Screen hardware",
        "Live ccusage token & cost data",
        "Compact + full-size render layouts",
      ],
      bg: [
        "Управлява реален Turing Smart Screen хардуер",
        "Live ccusage данни за токени и разход",
        "Компактен + пълноразмерен layout",
      ],
    },
    stack: ["Python", "ccusage", "Turing Smart Screen", "Pillow"],
    accent: "rust",
    links: {
      repo: "https://github.com/Vanakata/turing-claude-usage",
    },
    status: "Personal tool",
  },
];
