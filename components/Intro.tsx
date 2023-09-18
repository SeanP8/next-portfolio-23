"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import dog_profile from "../assets/dog-profile.jpg";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      ref={ref}
      id="home"
      className="mt-28 mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative ">
          <div>
            <Image
              src={dog_profile}
              alt="sean as a dog"
              width="0"
              height="0"
              sizes="100vw"
              className="max-w-[100px] max-h-[100px] rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </div>
          <span className="absolute -bottom-1 right-0 text-4xl">👋</span>
        </div>
      </div>
      <h1 className="mb-10 mt-10 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <span className="font-bold">Hello, I'm Sean.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> <br />I enjoy
        building <span className="italic">modern app's </span>
        <br /> My focus is{" "}
        <span className="underline">React (Next.js) & Node</span>
      </h1>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
        </Link>
      </div>
    </section>
  );
}
