"use client";

import { HeroSectionOne } from "@/components/HeroSectionOne";
import RecentProjects from "@/components/RecentProjects";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <HeroSectionOne />
        <AboutMe />
        <div id="skills">
          <Skills />
        </div>
        <RecentProjects />




        <div className="flex flex-col items-center justify-center py-20">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl font-serif text-white/50"
            words={"Give me a place to stand, and I will move the Earth."}
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-serif text-white/40 mt-2">
            - Archimedes
          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
}
