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
      script: "beyond the visible",
      title: "AWARE",
      subtitle:
        "Products built end to end — backend architecture, interfaces, and the hardware on the desk. A few things we've shipped, below.",
    },
    about: {
      label: "Who we are",
      heading: "A small studio, built by ourselves.",
      body: "Aware Solutions is a small, independent software studio — basically a few people who enjoy building things a bit too much. We do the whole thing end to end: the backend and data models, the screens people actually click, and yes, even the little gadget blinking on the desk. No big org chart, no telephone game — whoever designs a feature usually ships it too (and gets the call when it breaks). We stay small on purpose. It keeps us close to the problem and free to reach for the right tool instead of whatever's trending this week. We're into practical innovation — stuff built to last and used every day, not just to look shiny in a demo and quietly die the week after.",
      points: [
        "Self-made & independent",
        "End-to-end product builds",
        "Future-facing, innovation-first",
      ],
    },
    work: { label: "Selected work", heading: "Things we've built" },
    footer: { motto: "Building with purpose", github: "GitHub", email: "Email" },
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
      script: "отвъд видимото",
      title: "AWARE",
      subtitle:
        "Продукти, изградени от край до край — архитектура на бекенда, интерфейси и хардуерът на бюрото. Няколко неща, които сме пуснали, по-долу.",
    },
    about: {
      label: "Кои сме ние",
      heading: "Малко студио, изградено от самите нас.",
      body: "Aware Solutions е малко, независимо софтуерно студио — на практика няколко души, които твърде много обичат да правят разни неща. Вършим цялата работа от край до край: бекенда и моделите на данните, екраните, по които хората реално цъкат, и да — дори джаджата, която примигва на бюрото. Без голяма йерархия и без развален телефон — който измисли една фийчъра, обикновено е същият, който я пуска (и същият, на когото му звънят, като гръмне). Оставаме малки нарочно. Така сме близо до проблема и свободни да хванем правилния инструмент, а не това, което е на мода тази седмица. Падаме си по практичните иновации — неща, направени да издържат и да се ползват всеки ден, а не само да блеснат на демо и седмица по-късно тихо да умрат.",
      points: [
        "Самостоятелни и независими",
        "Продукти от край до край",
        "С поглед към бъдещето и иновациите",
      ],
    },
    work: { label: "Избрани проекти", heading: "Неща, които изградихме" },
    footer: { motto: "Градим със смисъл", github: "GitHub", email: "Имейл" },
    status: {
      "In development": "В разработка",
      "Personal tool": "Личен инструмент",
    },
  },
};
