import {
  SiFacebook,
  SiGithub,
  SiInstagram,
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
    text: "Skills",
    link: "/#skills",
  },
  {
    text: "Projects",
    link: "/#projects",
  },
  {
    text: "Contact",
    link: "/#contact",
  },
];

export const socialMediaItems = () => [
  { icon: SiLinkedin, link: "https://www.linkedin.com/in/johnathan-wong-362332192/" },
  { icon: SiFacebook, link: "https://www.facebook.com/johnathan.wong.583" },
  { icon: SiGithub, link: "https://github.com/wong-johnathan" },
];
