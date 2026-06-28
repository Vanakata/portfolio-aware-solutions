export type Locale = "en" | "bg";

export const locales: Locale[] = ["en", "bg"];
export const defaultLocale: Locale = "bg";

/** Wraps a value that exists in every supported locale. */
export type Localized<T> = Record<Locale, T>;

export type Dict = {
  brand: { word1: string; word2: string; tagline: string };
  header: {
    eyebrow: string;
    tagline: string;
    taglineRest: string;
    updated: string;
  };
  hero: { eyebrow: string; script: string; title: string; subtitle: string };
  about: { label: string; heading: string; body: string; points: string[] };
  work: { label: string; heading: string };
  footer: { motto: string; github: string; email: string };
  status: { "In development": string; "Personal tool": string };
};

export const dictionaries: Record<Locale, Dict> = {
  en: {
    brand: {
      word1: "Aware",
      word2: "Solutions",
      tagline: "Beyond the visible, towards the aware.",
    },
    header: {
      eyebrow: "Software studio · awaresolutions.eu",
      tagline: "Built",
      taglineRest: " to Inspire",
      updated: "Updated",
    },
    hero: {
      eyebrow: "awaresolutions.eu",
      script: "refine",
      title: "PORTFOLIO",
      subtitle:
        "Products built end to end — backend architecture, interfaces, and the hardware on the desk. A few things we've shipped, below.",
    },
    about: {
      label: "Who we are",
      heading: "A small studio, built by ourselves.",
      body: "Aware Solutions is a small, self-made software studio. We design and build products end to end — from backend architecture to the interface and the hardware on the desk. Independent, lean, and looking forward: practical innovation over hype.",
      points: [
        "Self-made & independent",
        "End-to-end product builds",
        "Future-facing, innovation-first",
      ],
    },
    work: { label: "Selected work", heading: "Things we've built" },
    footer: { motto: "Built with heart", github: "GitHub", email: "Email" },
    status: {
      "In development": "In development",
      "Personal tool": "Personal tool",
    },
  },
  bg: {
    brand: {
      word1: "Aware",
      word2: "Solutions",
      tagline: "Отвъд видимото, към осъзнатото.",
    },
    header: {
      eyebrow: "Софтуерно студио · awaresolutions.eu",
      tagline: "Създадено",
      taglineRest: " да вдъхновява",
      updated: "Обновено",
    },
    hero: {
      eyebrow: "awaresolutions.eu",
      script: "refine",
      title: "PORTFOLIO",
      subtitle:
        "Продукти, изградени от край до край — архитектура на бекенда, интерфейси и хардуерът на бюрото. Няколко неща, които сме пуснали, по-долу.",
    },
    about: {
      label: "Кои сме ние",
      heading: "Малко студио, изградено от самите нас.",
      body: "Aware Solutions е малко, самостоятелно изградено софтуерно студио. Проектираме и създаваме продукти от край до край — от архитектурата на бекенда до интерфейса и хардуера на бюрото. Независими, гъвкави и с поглед напред: практични иновации вместо шум.",
      points: [
        "Самостоятелни и независими",
        "Продукти от край до край",
        "С поглед към бъдещето и иновациите",
      ],
    },
    work: { label: "Избрани проекти", heading: "Неща, които изградихме" },
    footer: { motto: "Създадено със сърце", github: "GitHub", email: "Имейл" },
    status: {
      "In development": "В разработка",
      "Personal tool": "Личен инструмент",
    },
  },
};
