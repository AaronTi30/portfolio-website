"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="black">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal text-black mt-0">{item.location}</p>
            <p className="mt-1 font-normal text-gray-700 dark:text-black/75">
              {item.description}
            </p>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}