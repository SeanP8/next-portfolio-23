"use client";

import { motion } from "framer-motion";
import SectionHeading from "./Section-Heading";

import React from "react";
import { useSectionInView } from "@/lib/hooks";

function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        My first experience with coding was through a{" "}
        <span className="font-medium">coding bootcamp</span> at UC Berkely where
        I learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving and delivering solutions. I{" "}
        <span className="underline">enjoy</span> the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js</span>. I am also
        familiar with TypeScript and Prisma. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">software developer position</span>
      </p>
    </motion.section>
  );
}

export default About;
