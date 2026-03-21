# Personal Portfolio — Johnathan Wong

A responsive personal portfolio website built to showcase my skills, work experience, and projects as a software engineer and technical consultant.

## Purpose

This portfolio serves as a centralized, professional presentation of who I am and what I've built. Rather than relying solely on a resume, it gives recruiters, collaborators, and clients a richer view of my background — including hands-on project work across full-stack development, blockchain, cloud/DevOps, and adtech.

The site was built from scratch (not a template) to demonstrate practical frontend engineering skills: component architecture, responsive design, dark mode, dynamic routing, and clean TypeScript patterns.

## Features

- **About & Skills** — Overview of my background and technical stack
- **Work Experience** — Interactive timeline of roles across Meta, Semgrep, and more
- **Projects** — Filterable project cards with dedicated detail pages via dynamic routing (`/project/[id]`)
- **Education** — Academic history
- **Dark/Light Mode** — Class-based theme switching via `next-themes`
- **Fully Responsive** — Mobile-first layout using Tailwind CSS breakpoints

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13+ (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Theming | next-themes |
| Icons | react-icons |
| Deployment | Vercel |

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

```bash
npm run build   # Production build
npm run lint    # ESLint (next/core-web-vitals)
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with ThemeProvider
│   ├── page.tsx                # Home page (server component)
│   └── project/[id]/page.tsx  # Dynamic project detail pages
├── components/
│   ├── projectsJson.tsx        # Project data (typed)
│   ├── NavLinks.tsx            # Nav items, social links, skills list
│   ├── Hero.tsx                # Landing section
│   ├── About.tsx
│   ├── Experiences.tsx
│   ├── Education.tsx
│   ├── Projects.tsx
│   └── ...
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/johnathan-wong-362332192/)
- [GitHub](https://github.com/wong-johnathan)
