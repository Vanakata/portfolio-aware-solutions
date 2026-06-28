"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10 text-center">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sm font-medium uppercase tracking-[0.4em] text-ink-soft"
      >
        {t.hero.eyebrow}
      </motion.p>

      <div className="relative mt-4 flex justify-center">
        {/* Script accent overlapping the display word, like the mockup. */}
        <motion.span
          initial={{ opacity: 0, x: -20, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="pointer-events-none absolute -top-6 left-1/2 z-20 -translate-x-[7.5rem] font-script text-5xl text-amber-deep sm:-translate-x-[12rem] sm:text-7xl"
        >
          {t.hero.script}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display text-[18vw] leading-[0.85] tracking-tight text-ink sm:text-[10rem]"
        >
          {t.hero.title}
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-balance mx-auto mt-6 max-w-xl text-base text-ink-soft sm:text-lg"
      >
        {t.hero.subtitle}
      </motion.p>
    </section>
  );
}
