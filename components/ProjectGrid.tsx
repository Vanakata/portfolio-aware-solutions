"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { useLanguage } from "./LanguageProvider";

export function ProjectGrid() {
  const { t } = useLanguage();

  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-6 px-1">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-deep">
          {t.work.label}
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight text-ink sm:text-5xl">
          {t.work.heading}
        </h2>
      </div>

      <div className="grid-lines rounded-[2rem] bg-tray/60 p-5 ring-1 ring-ink/10 sm:p-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
