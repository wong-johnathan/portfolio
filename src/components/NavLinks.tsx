import {
  SiCodereview,
  SiGithub,
  SiLinkedin,
} from "react-icons/si";

export const navItems = () => [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/#about",
  },
  {
    text: "Experiences",
    link: "/#experiences",
  },
  {
    text: "Projects",
    link: "/#projects",
  },
];

export const socialMediaItems = () => [
  {
    icon: SiLinkedin,
    link: "https://www.linkedin.com/in/johnathan-wong-362332192/",
  },
  {
    icon: SiGithub,
    link: "https://github.com/wong-johnathan",
  },
  {
    icon: SiCodereview,
    link: "https://github.com/wong-johnathan/portfolio",
  },
];

export const skills = () => [
  "HTML",
  "CSS",
  "Tailwind",
  "Javascript",
  "React",
  "NodeJs",
  "Express",
  "Git",
  "Basic Github Actions",
  "Docker",
  "Basic Kubernetes",
  "Google Cloud Platform",
  "MYSQL",
  "Mongo",
  "Photoshop",
];
