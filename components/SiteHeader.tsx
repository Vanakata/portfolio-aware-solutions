"use client";

import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

function BrandBadge() {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#16150f] ring-2 ring-[#16150f]">
      <span className="flex h-[2.1rem] w-[2.1rem] items-center justify-center rounded-full ring-1 ring-paper/70">
        <span className="font-script text-2xl leading-none text-paper">A</span>
      </span>
    </span>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="relative z-10 mx-auto max-w-6xl px-6 pt-8">
      <div className="flex items-center justify-between gap-4">
        {/* Brand / logo */}
        <a href="/" className="flex items-center gap-3">
          <BrandBadge />
          <span className="leading-tight">
            <span className="block font-display text-xl tracking-tight text-ink sm:text-2xl">
              {t.brand.word1}{" "}
              <span className="text-ink-faint">{t.brand.word2}</span>
            </span>
            <span className="hidden text-[0.6rem] font-medium uppercase tracking-[0.2em] text-ink-soft sm:block">
              {t.brand.tagline}
            </span>
          </span>
        </a>
        <LanguageToggle />
      </div>

      <div className="mt-6 flex items-baseline justify-between border-b border-ink/20 pb-3">
        <p className="text-lg tracking-tight text-ink-soft">
          <span className="font-bold text-ink">{t.header.tagline}</span>
          {t.header.taglineRest}
        </p>
        <p className="text-lg tracking-tight text-ink-soft">
          {t.header.updated} <span className="font-bold text-ink">2026</span>
        </p>
      </div>
    </header>
  );
}
