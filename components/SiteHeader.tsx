"use client";

import { useLanguage } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const { t } = useLanguage();

  return (
    <header className="relative z-10 mx-auto max-w-6xl px-6 pt-8">
      <div className="flex items-center justify-between">
        {/* Brand / logo */}
        <a href="/" className="font-display text-2xl tracking-tight text-ink">
          {t.brand.name}
          <span className="text-ink-faint">{t.brand.nameRest}</span>
          <span className="text-amber-deep">{t.brand.tld}</span>
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
