"use client";

import { useLanguage } from "./LanguageProvider";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-12">
      <div className="flex flex-col items-center gap-3 border-t border-ink/20 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-script text-3xl text-ink-soft">{t.footer.motto}</p>
        <div className="flex items-center gap-5 text-sm font-medium text-ink-soft">
          <a
            href="https://github.com/Vanakata"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            {t.footer.github}
          </a>
          <a
            href="mailto:talmazov@gmail.com"
            className="transition-opacity hover:opacity-60"
          >
            {t.footer.email}
          </a>
          <span className="text-ink-faint">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
