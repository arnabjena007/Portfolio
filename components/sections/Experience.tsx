import React from "react";

import { workExperience } from "@/data";
import { LinkPreview } from "@/components/ui/link-preview";

const Experience = () => {
    return (
        <div className="py-20" id="experience">


            <div className="w-full mt-12 mb-12 p-8 rounded-[1.75rem] border border-white/20 bg-[#0f0f11]">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 font-sans">
                    <div className="flex flex-col gap-4 w-full">
                        <h2 className="text-4xl md:text-5xl font-bold text-white text-center font-instrument">
                            Devo in a <span className="text-yellow-500">gist</span>
                        </h2>
                        <p className="text-white-100 text-base md:text-lg leading-relaxed text-left">
                            I am a Frontend Engineer with a passion for building scalable, high-performance systems.
                            I build cool things like{" "}
                            <LinkPreview url="https://github.com/arnabjena" isStatic imageSrc="/pixlate-final.png" className="text-yellow-500 font-bold" description="High-performance pixel art generator using Golang.">
                                Pix
                            </LinkPreview>,{" "}
                            <LinkPreview url="https://github.com/arnabjena007" isStatic imageSrc="/indecoded-screenshot.png" className="text-yellow-500 font-bold" description="Interactive data visualization of Indian culture.">
                                Indicoded
                            </LinkPreview>
                            , and{" "}
                            <LinkPreview url="https://gitmap-devo.vercel.app/" isStatic imageSrc="/gitmap-screenshot.png" className="text-yellow-500 font-bold" description="React component for visualizing GitHub contributions and heatmaps.">
                                GitMap
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

            <div className="relative border-l border-white/20 ml-4 md:ml-6 pl-6 md:pl-8 space-y-10 my-8">
                {workExperience.map((exp) => (
                    <div key={exp.id} className="relative">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white/20 bg-slate-950 flex items-center justify-center">
                            {exp.date.includes("Present") ? (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] shadow-[0_0_8px_#00E676]" />
                            ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600" />
                            )}
                        </div>

                        {/* Timeline Content */}
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 w-full font-sans">
                                <h3 className="text-base md:text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-1.5 flex-wrap font-instrument">
                                    <span className="text-neutral-900 dark:text-white">{exp.title}</span>
                                    <span className="text-neutral-400 dark:text-neutral-500 font-normal">·</span>
                                    <span className="text-neutral-400 dark:text-neutral-500 font-normal">{exp.company}</span>
                                </h3>
                                <span className="text-xs md:text-sm font-mono text-neutral-500 shrink-0">
                                    {exp.date}
                                </span>
                            </div>

                            <span className="text-xs md:text-sm text-neutral-500 font-medium">
                                {exp.subtitle}
                            </span>

                            {exp.description && (
                                <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base leading-relaxed mt-1">
                                    {exp.description}
                                </p>
                            )}

                            {exp.points && exp.points.length > 0 && (
                                <ul className="mt-1 space-y-1 text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed list-none">
                                    {exp.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-neutral-400 dark:text-neutral-600 mt-1.5 select-none">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {exp.tech && exp.tech.length > 0 && (
                                <div className="flex flex-wrap items-center gap-3.5 mt-3">
                                    {exp.tech.map((iconPath, index) => (
                                        <img key={index} src={iconPath} alt="tech icon" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
