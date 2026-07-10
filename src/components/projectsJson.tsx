type projectType = {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  technologies: string[];
  image: string;
  summary: string;
  video?: string;
  url?: string;
};
const projects = (): projectType[] => [
  {
    id: "3d-certs",
    title: "3DCerts",
    subtitle:
      "How I built a blockchain certificate verification platform from scratch at 3DCerts.",
    paragraphs: [
      "I led the team building a blockchain-based certificate verification and issuance platform. The idea was simple: make it easy for employers to verify a candidate's credentials without jumping through hoops. We used the OpenCerts attestation library and IPFS for decentralized storage, and built both a verification portal and an issuance portal from scratch.",
      "Key things I worked on:",
      "1. Built the full verification and issuance platform with React and Express so certificates could be issued and verified in one place.",
      "2. Designed a decentralized wallet system that lets users securely receive and validate their own documents.",
      "3. Spent a lot of time on the UX/UI to make it work across different sectors like healthcare and education, where the compliance requirements are very different.",
      "It was a solid project that proved blockchain could actually solve a real-world problem instead of just being buzzword noise.",
    ],
    technologies: [
      "Reactjs",
      "Expressjs",
      "Bootstrap",
      "Google Cloud Platform",
      "Docker",
      "Kubernetes",
      "Bitbucket",
      "Opencerts",
      "Figma",
    ],
    image: "/3dcerts.png",
    summary:
      "Blockchain certificate verification platform with issuance and verification portals, a decentralized wallet, and UX designed for healthcare and education sectors.",
  },
  {
    id: "my-beneficiary",
    title: "My Beneficiary",
    subtitle:
      "A PWA I built during my internship at New Creation Church for visit logging and attendance tracking.",
    paragraphs: [
      "I built a Progressive Web Application (PWA) using React.js while interning at New Creation Church. It handled visit logging, attendance tracking, and the usual CRUD operations. I focused a lot on making the UX feel right for a church setting where not everyone is tech-savvy. Solid learning experience that taught me a lot about shipping real products.",
    ],
    technologies: [
      "Reactjs",
      "Expressjs",
      "Bootstrap",
      "Figma",
    ],
    image: "/newcreation.png",
    summary:
      "React PWA for church visit logging and attendance tracking, with an emphasis on accessible UX.",
  },
  {
    id: "resume-ai",
    title: "Resume AI",
    subtitle:
      "An AI-powered resume builder and job application tracker with template-based PDF generation and streaming cover letter generation.",
    paragraphs: [
      "Resume AI is a full-stack monorepo application that combines structured profile management, AI-assisted resume tailoring, and a Kanban-style job application tracker into a single platform.",
      "Key features include:",
      "1. Resume Builder: Users build resumes from a structured profile with 20 professionally designed templates. A two-panel editor provides live preview with debounced updates, and multi-page PDFs are exported via Puppeteer.",
      "2. PDF Import & Parsing: Users can upload an existing resume PDF which is parsed and auto-populates their profile fields, reducing manual data entry.",
      "3. AI Integration: Resume tailoring generates a separate tailored clone for a specific job posting without modifying the original. Cover letter generation streams responses via Server-Sent Events with tone selection. A maximum of 3 AI amendments per job is enforced both server-side (HTTP 403) and client-side, with full amendment history tracking.",
      "4. Job Application Tracker: A Kanban board with drag-and-drop (dnd-kit) and user-defined status categories (Saved, Applied, Interview, Offer, etc.) links applications to their associated resumes and cover letters.",
      "The backend is an Express + TypeScript server with Passport.js Google OAuth authentication, Prisma 5 ORM on PostgreSQL, Zod request validation, and rate limiting on AI endpoints. The frontend is built with React 18, Vite, React Router v7, Zustand for state, and TipTap for rich text editing. Deployed across Vercel (frontend), Railway (backend + Puppeteer), and Supabase (PostgreSQL).",
    ],
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Puppeteer",
      "Claude AI",
      "Passport.js",
      "Zustand",
      "dnd-kit",
      "Vercel",
      "Railway",
      "Supabase",
    ],
    image: "/resume-ai.png",
    url: "https://resume.johnathanwwh.com",
    summary:
      "Full-stack AI-powered resume builder with 20 templates, PDF export, AI tailoring and cover letter generation, and a Kanban job application tracker.",
  },
  {
    id: "spliteasy",
    title: "SplitEasy",
    subtitle:
      "A full-stack Splitwise clone — split expenses with friends, built with Docker Compose, Express, React, and PostgreSQL.",
    paragraphs: [
      "SplitEasy is a full-stack expense-splitting app I built as a clone of Splitwise with some extra features. The goal was to build a production-quality Docker Compose stack from scratch, covering everything from database migrations to multi-currency support.",
      "Key features include:",
      "1. Group expense splitting with equal and custom splits, plus a greedy debt simplification algorithm that minimises the number of settlement transactions needed to clear a group.",
      "2. Multi-currency support with live FX rates from the Frankfurter API, cached in PostgreSQL with 24-hour TTL. Expenses store both their native currency and the converted base amount.",
      "3. Google OAuth authentication with JWT tokens, real-time WebSocket updates, and a clean shadcn/ui interface with spending breakdown charts.",
      "4. Full Docker Compose orchestration with PostgreSQL 16, Redis 7 for caching, health checks, and idempotent migration runs on every startup.",
      "The app is deployed on my Synology NAS via Docker and serves as my daily driver for tracking shared expenses.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker Compose",
      "JWT",
      "Google OAuth",
      "WebSocket",
    ],
    image: "/splitwise.png",
    summary:
      "Full-stack Splitwise clone with debt simplification, multi-currency FX rates, Google OAuth, WebSocket real-time updates, and Docker Compose deployment on Synology NAS.",
    url: "https://splitwise.johnathanwwh.com",
  },
  {
    id: "lorcana-management",
    title: "Lorcana Inventory Manager",
    subtitle:
      "A personal card inventory system for Disney Lorcana TCG collectors — AI-powered card scanning, collection tracking, and a searchable card database.",
    paragraphs: [
      "Built a full-stack inventory manager for Disney Lorcana TCG after I got tired of manually tracking my collection. The core workflow is dead simple: snap a photo of your cards, Gemini 2.5 Flash identifies them, and they're added to your inventory. Batch scan up to 50 cards at once.",
      "Key features:",
      "1. AI Card Recognition — Gemini Flash matches photos against the card database and auto-adds them to inventory. Falls back gracefully to manual search when the API key isn't configured.",
      "2. Collection Dashboard — Tracks normal and foil/enchanted quantities separately, with stats showing unique cards, total count, and per-set completion breakdowns.",
      "3. Full Card Database — Browse every Lorcana card with filtering by set, color, rarity, type, character, and ownership status. Card data sourced from LorcanaJSON, seeded on startup and refreshable when new sets drop.",
      "4. Multi-User with JWT Auth — Each collector gets an isolated inventory with bcrypt password hashing, so multiple people can track their own collections on the same instance.",
      "The stack is Express 5 + Prisma on PostgreSQL 16, React 19 + Vite + Tailwind on the frontend, all orchestrated with Docker Compose behind an Nginx reverse proxy. CI/CD via GitHub Actions builds and pushes Docker images to DockerHub on every push to main. Deployed on my Synology NAS.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express 5",
      "PostgreSQL",
      "Prisma",
      "JWT",
      "Gemini 2.5 Flash",
      "Docker Compose",
      "Nginx",
      "GitHub Actions",
    ],
    image: "/lorcana.png",
    summary:
      "Full-stack Lorcana TCG inventory manager with AI card recognition via Gemini Flash, collection statistics, multi-user JWT auth, and Docker Compose deployment.",
  },
  {
    id: "3d-virtual-musuem-in-vr",
    title:
      "3D Virtual Museum Design in VR",
    subtitle:
      "An interactive 3D VR world of the Chinese Heritage Centre at NTU, built in Unity.",
    paragraphs: [
      "Built a 3D VR museum in Unity where users can walk around and interact with exhibits without being there physically. Most artworks and pieces are interactive, you can pick them up for a closer look.",
      "The museum is modeled after the Chinese Heritage Centre (CHC) at Nanyang Technological University. Users can explore freely and take a self-guided tour. The 3D model was already available, so I focused on adding interactive features and building the VR experience in Unity using C#. Some objects needed remodelling and re-texturing because of version compatibility issues.",
      "The goal was to make the VR experience genuinely better than walking through a physical museum, not just a gimmick.",
    ],
    technologies: [
      "Unity3d",
      "HTC Vive",
      "C#",
      "Blender",
      "Photoshop",
    ],
    image: "/fypposter.jpg",
    video:
      "https://www.youtube.com/embed/Eixmm1bpaik?si=iS8EXWNCToErMuY5",
    summary:
      "Interactive 3D VR museum of the Chinese Heritage Centre built in Unity with HTC Vive support.",
  },
];

export default projects;
