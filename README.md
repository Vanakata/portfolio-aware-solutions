# Portfolio — Aware Solutions

Personal portfolio of **Vanaka** — Senior .NET Backend Architect. A design-led
showcase of shipped work, in the "refine" paper aesthetic.

## Stack

- **Framework:** Next.js 15 (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation:** Framer Motion
- **Fonts:** Anton (display), Caveat (script), Inter (body) via `next/font`
- **Deploy:** Docker (standalone output) → Synology NAS

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Docker

```bash
docker compose up -d --build
# or
docker build -t portfolio-aware-solutions .
docker run -p 3000:3000 portfolio-aware-solutions
```

## Project structure

```
app/
  layout.tsx         fonts + metadata + paper grain
  page.tsx           composes the single-page portfolio
  globals.css        Tailwind v4 theme + design tokens
components/
  SiteHeader.tsx     "Built to Inspire" top bar
  Hero.tsx           animated display title
  ProjectGrid.tsx    the gridded "tray" of cards
  ProjectCard.tsx    per-project card
  SiteFooter.tsx
lib/
  projects.ts        single source of truth for featured work
```

## Featured work

| Project | What it is | Stack |
| --- | --- | --- |
| **MyStash** | Self-hosted inventory PWA with barcode scanning | Vue 3, Vite, Tailwind, .NET, Docker |
| **BookMe** | Salon appointment booking | ASP.NET Core 8, Blazor WASM, EF Core, MariaDB |
| **Claude Usage Display** | Live Claude usage on a Turing Smart Screen | Python, ccusage |

Edit [`lib/projects.ts`](lib/projects.ts) to add or update projects.
