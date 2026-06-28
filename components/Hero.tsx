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

      <div className="relative mt-8 flex flex-col items-center">
        {/* Script accent sitting just above the display word, slightly skewed. */}
        <motion.span
          initial={{ opacity: 0, x: -20, rotate: -6 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="z-20 -mb-3 -translate-x-2 font-script text-4xl text-amber-deep sm:-mb-6 sm:-translate-x-10 sm:text-6xl"
        >
          {t.hero.script}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="font-display font-bold text-[20vw] leading-[0.85] tracking-tighter text-ink sm:text-[11rem]"
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
