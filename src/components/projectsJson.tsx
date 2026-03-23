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
      "This page contains the case study of my time in 3DCerts which includes the Project Overview and Tools Used during my employment.",
    paragraphs: [
      "During my tenure at the company, I spearheaded the implementation of cutting-edge blockchain technology to streamline the certificate authentication process. With 3DCerts, we empowered employers to effortlessly verify the credentials of new hires, especially in today's climate of individuals accumulating numerous certificates of achievement. Leveraging the open attestation library and the IPFS decentralized file storage system, I played a pivotal role in developing both a verification portal and an issuance portal.",
      "My key contributions included:",
      "1. Development of a Verification and Issuance Platform: I led the creation of a robust platform using React and Express, enabling seamless certificate verification and issuance.",
      "2. Decentralized Wallet Creation: I engineered a decentralized wallet system to empower users to securely receive and validate their documents, enhancing the overall transparency and trustworthiness of the certification process.",
      "3.User-Centric UX/UI Design: I took great care in designing and fine-tuning the user experience and interface to cater to diverse business needs, ensuring compatibility with sectors such as healthcare and education.",
      "My work at the company was dedicated to revolutionizing the authentication of certificates through blockchain innovation, ultimately simplifying the hiring process and fostering trust in educational credentials.",
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
      "Blockchain implementation for certificate authentication, built portals, decentralized wallet, and user-centric design, enhancing credential verification and trust.",
  },
  {
    id: "my-beneficiary",
    title: "My Beneficiary",
    subtitle:
      "This page contains the case study of my internship in New Creation Church which includes the Project Overview and Tools Used.",
    paragraphs: [
      "I'm humbled to have been a part of the team that worked on a Progressive Web Application (PWA) using React.js. My role involved focusing on user-centered design and UX/UI feasibility. The project was complex, including features like visit logging, attendance tracking, and CRUD functionality. This experience helped me grow in development and design, contributing to an innovative and user-friendly application that I'm grateful to have been involved with.",
    ],
    technologies: [
      "Reactjs",
      "Expressjs",
      "Bootstrap",
      "Figma",
    ],
    image: "/newcreation.png",
    summary:
      "React.js-based PWA project, emphasizing user-centric design, resulting in an innovative and user-friendly application.",
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
    url: "https://resume-ai-landing.johnathanwwh.com",
    summary:
      "Full-stack AI-powered resume builder with 20 templates, PDF export, AI tailoring and cover letter generation, and a Kanban job application tracker.",
  },
  {
    id: "3d-virtual-musuem-in-vr",
    title:
      "3D Virtual Museum Design in VR",
    subtitle:
      "This project was tasked to create an interactive 3D VR world of the Chinese Heritage Centre in Nanyang Technological University.",
    paragraphs: [
      "The objective of the project is creating a 3D VR museum that users can navigate freely around. The user will be able to visit the experience the museum fully without being physically present. Most art works and pieces are interactive, users can pick them up to have a closer look on the details if available.",
      "The 3D VR museum will be based off the Chinese Heritage Centre (CHC) located at Nanyang Technological University. Users will be given the freedom to navigate around themselves and take a self-guided tour of the museum. Since the 3D model of the museum is already available, the interactive functions and 3d VR experience will be implemented through Unity3D engine using C# language. Due to Unity3D’s version compatibility of the Chinese Heritage Centre 3D model some objects will have to be remodeled and re- textured.",
      "The scope of the project is to enhance the user’s experience and interaction with the 3D VR museum. The 3D VR museum arts work and pieces must be intractable or have some form of interactive application so to enhance the user’s experience compared to traditional museums.",
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
      "The use of AR and VR technology allows users to immerse themselves into the virtual world locking out the physical world.",
  },
];

export default projects;
