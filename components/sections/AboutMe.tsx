"use client";
import React from "react";
import Image from "next/image";
import GitHubContributions from "./GitHubContributions";
import { Tooltip } from "@/components/ui/tooltip-card";

const AboutMe = () => {
    return (
        <section id="about" className="w-full py-20 text-white">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-instrument italic text-white/90">
                        Hello, I am
                        <Tooltip
                            containerClassName="ml-2 inline-block cursor-pointer text-white-100 font-bold"
                            content={<DevoCard />}
                        >
                            Arnab
                        </Tooltip>
                    </h2>

                    <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                        <div>
                            Engineer with a background in fine arts, interested in building work at the
                            intersection of technology, creativity, and human understanding.
                        </div>

                        <div>
                            Currently studying engineering at <span className="font-bold text-white">MIT</span>.
                            My work spans front end development, creative coding, data visualization,
                            and AI oriented tools. I enjoy building systems that not only function well,
                            but communicate ideas clearly and invite people to think differently.
                        </div>

                        <div>
                            I often use the web as a medium, especially frameworks like
                            <Tooltip
                                containerClassName="inline-block cursor-pointer underline decoration-dotted underline-offset-4 mx-1"
                                content="React framework for production-grade applications, enabling fast, scalable web apps."
                            >
                                <span className="font-bold text-white">Next.js</span>
                            </Tooltip>
                            , to explore how design, data, and interaction come together in expressive and usable ways.
                        </div>

                        <div>
                            My interests are deeply interdisciplinary. I am drawn to projects that
                            combine art and computation, and I see software as a cultural tool as much
                            as a technical one. This has led me to explore projects like
                            <Tooltip
                                containerClassName="inline-block cursor-pointer underline decoration-dotted underline-offset-4 mx-1"
                                content={<GitMapCard />}
                            >
                                <span className="font-bold text-white">GitMap</span>
                            </Tooltip>,
                            generative art, experimental visual systems, and narrative driven technical projects.
                        </div>

                        <div>
                            I operate between two modes of thinking. One shaped by art, history, and
                            the humanities, focused on meaning and context. The other grounded in
                            engineering, focused on structure, abstraction, and problem solving.
                            My goal is to bring these together to make complex or invisible ideas
                            more accessible.
                        </div>

                        <div>
                            I am especially interested in applying systematic technical thinking to
                            traditionally qualitative subjects, using computation to explore culture,
                            policy, and society with clarity and rigor.
                        </div>
                    </div>
                </div>


                {/* Right Content - Photo Booth Style */}
                <div className="relative transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out">
                    <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-4 rounded-xl shadow-2xl">
                        <div className="bg-black rounded-lg overflow-hidden border border-neutral-800">
                            {/* Window Header */}
                            <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2 border-b border-neutral-800">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                <span className="ml-2 text-xs text-neutral-500 font-mono">Photo Booth</span>
                            </div>
                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full grayscale hover:grayscale-0 transition-all duration-500">
                                <Image
                                    src=""
                                    alt="Arnab Jena"
                                    width={600}
                                    height={450}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            {/* Controls */}
                            <div className="p-4 flex justify-center gap-4 bg-neutral-900 border-t border-neutral-800">
                                <div className="w-10 h-10 rounded-full border-2 border-neutral-600 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-white/10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* GitHub Contributions */}
            <div className="max-w-7xl mx-auto px-4 mt-12">
                <GitHubContributions />
            </div>

        </section >
    );
};

export default AboutMe;

const DevoCard = () => {
    return (
        <div className="flex flex-col">
            <p className="text-lg font-bold text-white">Arnab Jena (Devo)</p>
            <p className="mt-1 text-xs text-neutral-400">
                Backend Engineer & Creative Coder.
            </p>
        </div>
    );
};

const GitMapCard = () => {
    return (
        <div className="flex flex-col">
            <p className="text-lg font-bold text-white">GitMap</p>
            <p className="mt-1 text-xs text-neutral-400">
                React component for visualizing GitHub contributions and heatmaps.
            </p>
        </div>
    );
};
