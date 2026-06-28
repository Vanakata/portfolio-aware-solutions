"use client";

import { useLanguage } from "./LanguageProvider";
import { locales, type Locale } from "@/lib/i18n";

export function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full bg-paper-deep p-0.5 ring-1 ring-ink/10">
      {locales.map((l: Locale) => (
        <button
          key={l}
          type="button"
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
            locale === l
              ? "bg-ink text-paper"
              : "text-ink-soft hover:text-ink"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
