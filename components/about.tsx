"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing a degree in{" "}
        <span className="font-medium">computer science</span>, I decided to
        pursue a bachelors degree after studying{" "}
        <span className="font-medium">computer programming</span> at Humber
        College. My passion for{" "}
        <span className="italic">software development</span> is quite simple. I
        have always wanted to pursue a career that actively makes a difference
        and improves peoples day to day lives. I felt that with software
        development the possiblities to help do that were truly{" "}
        <span className="underline"> endless</span>. My current core web
        application development stack is{" "}
        <span className="font-medium">
          {" "}
          React, Next.js, Node.js, and MongoDB
        </span>
        . I also have a great interest in projects that leverage{" "}
        <span className="font-medium"> machine learning </span> to solve real
        world issues and I am eager to continuously learn more about the{" "}
        <span className="font-medium">field of articial intelligence</span>. My
        current machine learning stack is{" "}
        <span className="font-medium">
          {" "}
          Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn,
          Tensorflow/Keras
        </span>
        . and for <span className="italic">model deployment</span> I use{" "}
        <span className="font-medium"> Flask, Docker, and Kubernetes</span>.
      </p>
      <p>
        <span className="italic"></span>
      </p>
    </motion.section>
  );
}
