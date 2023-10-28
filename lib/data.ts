import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaAngular, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import websnap from "@/public/websnap.png";
import one from "@/public/one.png";
import likereact from "@/public/likereact.png";
import invent from "@/public/invent.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  
  {
    title: "Front-End Developer",
    location: "DHC Vision GmbH, Germany",
    description:
      "Designed and developed frontend for a Automated software testing tool which got significantly faster as I used SSR (Server Side Rendering) and optimized the code.",
    icon: React.createElement(FaReact),
    date: "September 2023 - Present",
  },
  {
    title: "Front-End Developer",
    location: "DHC Vision GmbH, Germany",
    description:
      "I developed a word cloud visualization for data analytics. I also designed and developed a Ai based quiz interface",
    icon: React.createElement(FaAngular),
    date: "March 2023 - September 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "DHC Vision GmbH, Germany",
    description:
      "I designed and developed the front-end of a government funded project called SmartVigilance. I also worked on the back-end where I developed REST APIs for the dashboard.",
    icon: React.createElement(FaAngular),
    date: "March 2022 - March 2023",
  },
] as const;


export const educationData = [
  {
    title: "Bachelor's in Computer Science",
    location: "Saarland University, Germany",
    description:
      "I am currently studying computer science at Saarland University with Human-Computer Interaction as a core subject.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-present",
  },
  {
    title: "German Language DSH-2",
    location: "Saarland University, Germany",
    description:
      "I have completed my German language course with DSH-2 certificate. I can speak German fluently.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
 
  {
    title: "High School",
    location: "St. Francis School, India",
    description:
      "I completed my high school with Computer Science as a subject. I scored 92% in computer science and 89% overall. Also participated in many coding competitions.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
] as const;

export const projectsData = [
  {
    title: "WebSnap",
    description:
      "A web app which leverages the power of OpenAI to generate a summary of any article.",
    tags: ["React", "Vite.js", "Redux", "Tailwind", "OpenAi"],
    link: "https://websnap-umber.vercel.app/",
    imageUrl: websnap,
  },
  {
    title: "likeReact",
    description:
      "A React inspired library which I developed from scratch using TypeScript. It has a virtual DOM and a state management system. Just under 1kb",
    tags: ["Packer", "TypeScript", "Node.js", "HTML"],
    link: "https://github.com/aftab404/likereact",
    imageUrl: likereact,
  },
  {
    title: "One",
    description:
      "A full stack social media app where anyone can ask anything and create communities.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "ClerkAuth"],
    link: "https://one-rho-lovat.vercel.app/",
    imageUrl: one,
  },
  {
    title: "Invent",
    description:
      "A full stack inventory management app which I developed for a client.",
    tags: ["Jinja", "Django", "Python", "PostgreSQL"],
    link: "https://websnap-umber.vercel.app/",
    imageUrl: invent,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "REST",
  "MongoDB",
  "Redux",
  "Angular",
  "Java",
  "C",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Unix",
  "MySQL",
  "Docker",
  "OCaml",
  "Figma",
  "Adobe XD",
] as const;
