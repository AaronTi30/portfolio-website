import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Humber College",
    location: "Toronto, CA",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "YURS | Rover Software Team",
    location: "Toronto, CA",
    description:
      "I worked with a team to create a functional rover that was capable of performing tasks which simulate typical mars exploration scenarios",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Lassonde Motorsports | Chassis Team",
    location: "Toronto, CA",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Socratic Sessions",
    description:
      "Full-stack blog web application. Includes features such as user login authentication, image uploading, article editor, comments, and live view counter.",
    tags: ["React", "Next.js", "MongoDB", "Firebase", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Breast Cancer Detection",
    description:
      "End-to-End Machine Learning Project utililzing CNN and pre-trained ML models to classify cancerous breast tissue. ",
    tags: ["Python", "Tensorflow", "Keras", "Flask", "Kubernetes"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Object Detection",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["Python", "Tensorflow", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "Prisma",
  "MongoDB",
  "Python",
  "Tensorflow",
  "Keras",
  "NumPy",
  "Pandas",
  "Kubernetes",
  "Docker",
  "Framer Motion",
] as const;
