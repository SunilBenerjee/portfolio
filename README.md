# Sunil Benarjee — Portfolio

Personal portfolio site built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

Live at: https://sunilbenarjee-portfolio.vercel.app

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
- `npm run typecheck` — run the TypeScript compiler with no emit

## Project Structure

- `src/app/` — routes, layout, metadata (SEO, OG image, manifest, robots, sitemap)
- `src/components/` — page sections and shared UI primitives (`src/components/ui/`)
- `src/data/` — all site content (profile, experience, projects, skills, nav)

## Content

All page copy lives in `src/data/`. To update profile info, experience, projects, or skills, edit the corresponding file there rather than the components.

The contact form currently links directly to a `mailto:` address (`src/data/profile.ts`) rather than submitting to a backend.
