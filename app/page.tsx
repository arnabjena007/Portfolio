"use client";

import { HeroSectionOne } from "@/components/HeroSectionOne";
import RecentProjects from "@/components/RecentProjects";

import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="relative text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroSectionOne />
        <AboutMe />
        <div id="skills">
          <Skills />
        </div>
        <RecentProjects />

      </div>
    </main>
  );
}
