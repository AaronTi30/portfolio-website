"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/aaron.png"
              alt="Aaron portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-30 w-30 rounded-full object-cover border-[0.rem]"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4x1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          ></motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold"> Hello! My name is Aaron.</span> I am a{" "}
        <span className="font-bold">
          {" "}
          current student at York University in Toronto, Canada
        </span>{" "}
        with <span className="font-bold"> 4 years</span> of programming
        experience. I have a passion and relentless curiosity for building
        applications that leverage
        <span className="italic"> artificial intelligence</span> to solve real
        world problems. My current focus is{" "}
        <span className="underline"> Full-stack development</span>.
      </motion.p>

      <div className="flex flex-col sm:flex-row">
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact me here <BsArrowRight />
        </Link>
        <a className="bg-gray-100 px-7 py-3 flex items-center gap-2 rounded-full">
          Download CV <HiDownload />
        </a>
        <a className="bg-gray-100 p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a className="bg-gray-100 p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full">
          <FaGithubSquare />
        </a>
      </div>
    </section>
  );
}
