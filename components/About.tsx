"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 rounded-[2rem] bg-surface p-8 ring-1 ring-ink/5 shadow-[0_10px_30px_-12px_rgba(44,43,41,0.25)] sm:p-12 md:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-deep">
            {t.about.label}
          </p>
          <h2 className="text-balance mt-3 font-display font-bold text-4xl leading-[0.95] tracking-tight text-ink sm:text-5xl">
            {t.about.heading}
          </h2>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
            {t.about.body}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {t.about.points.map((point) => (
              <li
                key={point}
                className="rounded-full bg-paper-deep px-4 py-1.5 text-sm font-medium text-ink"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
