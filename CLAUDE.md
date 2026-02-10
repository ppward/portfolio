# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm start` — Start production server
- `npx next lint` — Run ESLint

No test framework is configured.

## Architecture

This is a **single-page portfolio website** built with Next.js 15 (App Router), React 19, and TypeScript.

### How the Page Works

The home page (`src/app/page.tsx`) composes all sections into one scrollable view. Although each section lives under its own route directory (`/skill`, `/projects`, `/resumeMain`, `/contact`), they are rendered together on the home page with **smooth scroll navigation** via refs — not client-side routing. The `navlist.tsx` component handles scroll-to-section behavior.

### Key Sections (rendered in order on home page)

1. **Header/Hero** (`src/components/layer/header.tsx`) — Animated name with Framer Motion parallax
2. **Resume/About** (`src/app/resumeMain/`) — Sticky sidebar layout with timeline
3. **Skills** (`src/app/skill/`) — Grid of skill icons organized by category (language, framework, server, tool)
4. **Projects** (`src/app/projects/`) — Timeline-style project cards with images
5. **Contact** (`src/app/contact/`) — Links and contact info

### Data & Types

Skill data (icon paths, names, categories) is defined in `src/type/skills.ts` as exported arrays. Project data is defined inline in the projects component.

### Styling

- **Tailwind CSS** with custom CSS variables (HSL-based) defined in `src/app/globals.css`
- **Shadcn/ui** components (new-york style) in `src/components/ui/` — configured via `components.json`
- Custom font **Paperlogy** (9 weights) loaded from `public/fonts/`
- Custom Tailwind extensions: `w-intro`/`h-intro` for `calc(95vw)`/`calc(95vh)` sizing

### Animation

- **Framer Motion** (`motion` package) for component enter/hover animations and stagger effects
- **react-scroll-parallax** for parallax scrolling on the hero section

### Path Alias

`@/*` maps to `./src/*` (configured in tsconfig.json).

### Test Directory

`src/app/test/` contains experimental skill display variants (floating, grid, radar). These are not part of the production site.
