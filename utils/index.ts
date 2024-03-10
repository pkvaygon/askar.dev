export const navLinks = [
  { id: 0, label: "Home", href: "/" },
  { id: 1, label: "Portfolio", href: "/portfolio" },
  { id: 2, label: "About Website", href: "#" },
  { id: 3, label: "Contact", href: "#" },
];

import html from "@/public/html.svg";
import css from "@/public/css-icon.svg";
import js from "@/public/js-icon.svg";
import ts from "@/public/ts-icon.svg";
import react from "@/public/react-icon.svg";
import next from "@/public/nextjs-icon.svg";
import mongodb from "@/public/mongodb-icon.svg";
import prisma from "@/public/prisma-icon.svg";
import nodejs from "@/public/nodejs-icon.svg";
import ui from "@/public/ui-icon.svg";
import firebase from "@/public/firebase-icon.svg";
import figma from "@/public/figma.svg";
export const stacks = [
  {
    id: 0,
    label: "HTML",
    image: html,
  },
  {
    id: 1,
    label: "CSS",
    image: css,
  },
  {
    id: 2,
    label: "JS",
    image: js,
  },
  {
    id: 3,
    label: "TS",
    image: ts,
  },
  {
    id: 4,
    label: "React",
    image: react,
  },
  {
    id: 5,
    label: "NextJs",
    image: next,
  },
  {
    id: 6,
    label: "MongoDB",
    image: mongodb,
  },
  {
    id: 7,
    label: "Prisma",
    image: prisma,
  },
  {
    id: 8,
    label: "NodeJs",
    image: nodejs,
  },
  {
    id: 9,
    label: "UI Libraries",
    image: ui,
  },
  {
    id: 10,
    label: "Firebase",
    image: firebase,
  },
  {
    id: 11,
    label: "Figma",
    image: figma,
  },
];

export const frontendSkills = [
  "React & NextJs",
  "TypeScript",
  "Styled-components",
  "State-management",
  "TailwindCSS",
  "RESTful API",
];
export const backendSkills = [
  "REST APIs",
  "MongoDB",
  "Prisma",
  "HTTP endpoints",
  "NodeJs",
  "Cloudflare",
];
export const otherSkills = [
  "Git & GitHub",
  "Webpack",
  "Unreal Engine 5",
  "CMS",
  "CRM",
  "SSR,SSG,CSR,ISR,SPA",
];
import postech from "@/public/postechscreen.png";
import dearme from "@/public/dearmescreen.png";
import alexlimo from "@/public/alexlimoscreen.png";
import nextstore from "@/public/nextstorescreen.png";
export const portfolio = [
  {
    id: 0,
    label: "Postech.kg",
    description: "Online store for electronic devices and equipment.",
    image: postech,
    href: "https://postech.kg/",
    status: "live",
  },
  {
    id: 1,
    label: "Dear Me",
    description: "Online store for women's lingerie.",
    image: dearme,
    href: "https://dearmelingerie.com/",
    status: "live",
  },
  {
    id: 2,
    label: "Elite Luxury Limousine",
    description: "Transportation services",
    image: alexlimo,
    href: "https://alexlimo.vercel.app/",
    status: "live",
  },
  {
    id: 3,
    label: "Ecommerce NextJs Store",
    description: "My testing e commerce online store",
    image: nextstore,
    href: "https://askar-store.vercel.app/shop",
    status: "under development",
  },
];
export const emplHistory = [
  {
    id: 0,
    label: "Frontend-Developer",
    date: "2021-2023",
    location: "Bishkek, Kyrgyzstan",
    description: `I joined ITCBootcamp as a programming enthusiast, eager to learn and grow. After
    completing the program, I was not just invited to stay, but to thrive as a Junior Developer`,
  },
  {
    id: 1,
    label: "Feelance Web Developer",
    date: "2023-2024",
    location: "Chicago, IL",
    description: `At the end of 2023 I moved to live in the USA. I am a legal migrant and have a work permit and am also a green card holder. Since moving, I have been looking for work and working as a freelancer`,
  },
];
