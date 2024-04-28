import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cancerdetection from "@/public/cancerdetection.png";
import objectdetect from "@/public/objectdetect.png";
import socsessions from "@/public/socsessions.png";

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
    title: "Studying at York University",
    location: "Toronto, CA",
    description: "Enrolled into Bachelors of Computer Science Program",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "YURS | Rover Software Team",
    location: "Toronto, CA",
    description:
      "I am working with a team to create a functional rover that is capable of performing tasks which simulate typical mars exploration scenarios",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - Present",
  },
  {
    title: "Lassonde Motorsports | Chassis Team",
    location: "Toronto, CA",
    description:
      "Working with a team across multiple disciplines to build a Formula Student Car in line with ruling specifications. In order to compete with other Post Secondary Institutions across the globe",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Socratic Sessions",
    description:
      "Full-stack blog web application. Includes features such as user login authentication, image uploading, article editor, comments, and live view counter.",
    tags: ["React", "Next.js", "MongoDB", "Firebase", "Prisma"],
    imageUrl: socsessions,
    githubUrl: "https://github.com/AaronTi30/blog-app",
  },
  {
    title: "AI Diagnostics",
    description:
      "End-to-End Machine Learning Project utililzing CNN and pre-trained ML models to classify cancerous breast tissue as either benign or malignant. ",
    tags: ["Python", "Tensorflow", "Keras", "Flask", "Kubernetes"],
    imageUrl: cancerdetection,
    githubUrl: "https://github.com/AaronTi30/ai-pathology",
  },
  {
    title: "Object Oracle",
    description:
      "Leveraged pre-trained ML model in order to accurately predict and label objects in frame. Potential use cases include: Autonomous driving, animal detection, and people detection.",
    tags: ["Python", "Tensorflow", "OpenCV"],
    imageUrl: objectdetect,
    githubUrl: "https://github.com/AaronTi30/Object-detection",
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
