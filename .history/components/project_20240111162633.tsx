"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project() {
  return <div>Project</div>;
}
