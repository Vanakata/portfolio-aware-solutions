"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { useLanguage } from "./LanguageProvider";

const accentMap: Record<
  Project["accent"],
  { text: string; bg: string; ring: string }
> = {
  amber: { text: "text-amber-deep", bg: "bg-amber", ring: "ring-amber/30" },
  azure: { text: "text-azure", bg: "bg-azure", ring: "ring-azure/30" },
  rust: { text: "text-amber-deep", bg: "bg-amber-deep", ring: "ring-amber-deep/30" },
};

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function ProjectCard({ project, i }: { project: Project; i: number }) {
  const { locale, t } = useLanguage();
  const accent = accentMap[project.accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-[var(--radius-card)] bg-surface p-6 shadow-[0_10px_30px_-12px_rgba(44,43,41,0.35)] ring-1 ring-ink/5"
    >
      <div className="flex items-center justify-between">
        <span
          className={`text-[0.7rem] font-bold uppercase tracking-[0.25em] ${accent.text}`}
        >
          {project.index}
        </span>
        <span className="rounded-full bg-paper-deep px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-ink-soft">
          {t.status[project.status]}
        </span>
      </div>

      <h3 className="mt-4 font-display font-bold text-3xl tracking-tight text-ink">
        {project.name}
      </h3>
      <p className={`mt-1 text-sm font-semibold ${accent.text}`}>
        {project.tagline[locale]}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-ink-soft">
        {project.description[locale]}
      </p>

      <ul className="mt-5 space-y-2">
        {project.highlights[locale].map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm text-ink">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bg}`} />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-paper-deep px-2 py-1 text-[0.7rem] font-medium text-ink-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3 border-t border-ink/10 pt-4">
        {project.links.repo && (
          <a
            href={project.links.repo}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accent.text} transition-opacity hover:opacity-70`}
          >
            Code <ArrowIcon />
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-opacity hover:opacity-70"
          >
            Live <ArrowIcon />
          </a>
        )}
      </div>
    </motion.article>
  );
}
