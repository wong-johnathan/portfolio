# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

**Stack:** Next.js 13+ (App Router), TypeScript, Tailwind CSS, next-themes

**Path alias:** `@/*` maps to `./src/*`

### Key structural patterns

**Data files as TypeScript modules** — Content (projects, nav items, skills) lives in component-adjacent `.tsx` files that export typed data:
- `src/components/projectsJson.tsx` — project data with `projectType` interface
- `src/components/NavLinks.tsx` — nav items, social links, skills list

**Client vs Server components** — Interactive components use `"use client"` (Navbar, ThemeSwitcher, theme-provider). Page-level components are server components by default.

**Layout composition** — `Section` → `InnerSection` wrappers provide consistent page-level spacing. Typography components (`TitleLarge`, `TitleSmall`, `BodyText`) centralize text styles.

**Dark mode** — Class-based via next-themes. `ThemeProvider` wraps the app in `layout.tsx`. Toggle with `dark:` Tailwind variants.

**Dynamic routing** — `/project/[id]` fetches project data client-side from `projectsJson.tsx` by matching the `id` param.

### Styling conventions

- Tailwind-first; minimal custom CSS in `globals.css`
- Primary accent: `#763bf6` (purple), secondary: `#3bf6ae` (cyan)
- Dark mode backgrounds: `black` / `neutral-950`
- Responsive breakpoints: `md:` and `2xl:`
- Background images use inline `style={{ backgroundImage: "url(...)" }}`
