import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaCode } from "react-icons/fa";

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
    text: "Education",
    link: "/#education",
  },
  {
    text: "Projects",
    link: "/#projects",
  },
];

export const socialMediaItems = () => [
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/johnathan-wong-362332192/",
  },
  {
    icon: SiGithub,
    link: "https://github.com/wong-johnathan",
  },
  {
    icon: FaCode,
    link: "https://github.com/wong-johnathan/portfolio",
  },
];

export const skills = () => [
  "JavaScript",
  "Python",
  "Java",
  "SQL",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "AWS",
  "Google Cloud",
  "CI/CD",
  "Git",
  "Kibana",
  "Jira",
  "IPFS",
  "Web3",
];
