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
