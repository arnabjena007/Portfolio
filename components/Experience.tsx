import React from "react";

import { workExperience } from "@/data";
import { FRONTEND_STACKS, BACKEND_STACKS } from "@/constants/stack";
import { LinkPreview } from "@/components/ui/link-preview";

const Experience = () => {
    return (
        <div className="py-20" id="experience">


            <div className="w-full mt-12 mb-12 p-8 rounded-[1.75rem] border border-white/20 bg-[#0f0f11]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                            Devo in a <span className="text-yellow-500">gist</span>
                        </h2>
                        <p className="text-white-100 text-base md:text-lg leading-relaxed text-left">
                            I am a Frontend Engineer with a passion for building scalable, high-performance systems.
                            I build cool things like{" "}
                            <LinkPreview url="https://github.com/arnabjena" isStatic imageSrc="/p1.png" className="text-yellow-500 font-bold" description="High-performance pixel art generator using Golang.">
                                Pix
                            </LinkPreview>,{" "}
                            <LinkPreview url="https://github.com/arnabjena007" isStatic imageSrc="/p2.png" className="text-yellow-500 font-bold" description="Interactive data visualization of Indian culture.">
                                Indicoded
                            </LinkPreview>
                            , and{" "}
                            <LinkPreview url="https://internloom.vercel.app" isStatic imageSrc="/p3.png" className="text-yellow-500 font-bold" description="Internship discovery platform with 5000+ listings.">
                                Internloom
                            </LinkPreview>.
                            My expertise lies in architecting distributed systems, optimizing database performance,
                            and ensuring reliability in production environments.
                        </p>
                    </div>

                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 hover:bg-slate-900 transition-colors">
                            Download my resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download w-4 h-4 text-yellow-500"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-full mt-12 flex flex-col gap-8">
                {workExperience.map((card) => (
                    <div
                        key={card.id}
                        className="flex-1 text-white border border-white/20"
                        style={{
                            background: "#0f0f11",
                            borderRadius: "1.75rem",
                        }}
                    >
                        <div className="flex flex-col p-6 md:p-8 gap-4">
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between items-start w-full">
                                    <h1 className="text-2xl md:text-3xl font-bold">
                                        {card.title}
                                    </h1>
                                    <span className="text-base font-medium text-white-100 whitespace-nowrap">
                                        {card.date}
                                    </span>
                                </div>
                                <h2 className="text-xl font-semibold text-yellow-500 font-instrument">
                                    {card.company}
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-3 my-2">
                                {card.tech && card.tech.map((item, i) => {
                                    const stackItem = FRONTEND_STACKS[item] || BACKEND_STACKS[item] || FRONTEND_STACKS["React"] || { Icon: null, className: "" };
                                    const Icon = stackItem.Icon;

                                    return (
                                        <div key={i} className="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-slate-800 text-white border border-slate-700" title={item}>
                                            {Icon && <Icon className={`w-4 h-4 ${stackItem.className}`} />}
                                            <span>{item}</span>
                                        </div>
                                    );
                                })}
                            </div>

                            <ul className="list-disc list-outside ml-5 space-y-2">
                                {card.points && card.points.map((point, i) => (
                                    <li key={i} className="text-white-100 text-base leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
