"use client";

import React, { useState, useMemo } from "react";
import { projects } from "@/data";
import { IconSearch, IconExternalLink } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTech, setSelectedTech] = useState("All");

    // Extract unique categories and tech stacks
    const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];
    const allTech = Array.from(new Set(projects.flatMap((p) => p.techStack || [])));
    const techOptions = ["All", ...allTech];

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch =
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.des.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
            const matchesTech = selectedTech === "All" || project.techStack?.includes(selectedTech);

            return matchesSearch && matchesCategory && matchesTech;
        });
    }, [searchQuery, selectedCategory, selectedTech]);

    return (
        <main className="min-h-screen relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 font-sans">
            <div className="max-w-7xl w-full pt-32 pb-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-4 font-instrument">
                    My <span className="text-purple">Projects</span>
                </h1>
                <p className="text-center text-white-100 mb-12 text-lg">
                    A curated list of my work, experiments, and open source contributions.
                </p>

                {/* Controls Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 w-full bg-black/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                    {/* Search */}
                    <div className="relative w-full lg:w-96 group">
                        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-white-200 group-focus-within:text-purple transition-colors" size={20} />
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-slate-950 border border-white/20 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-purple transition-all placeholder:font-sans"
                        />
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="bg-slate-950 text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-purple cursor-pointer hover:bg-slate-900 transition-colors"
                        >
                            <option value="All">All Categories</option>
                            {categories.slice(1).map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        <select
                            value={selectedTech}
                            onChange={(e) => setSelectedTech(e.target.value)}
                            className="bg-slate-950 text-white border border-white/20 rounded-lg px-4 py-2 focus:outline-none focus:border-purple cursor-pointer hover:bg-slate-900 transition-colors"
                        >
                            <option value="All">All Technologies</option>
                            {techOptions.slice(1).map((tech) => (
                                <option key={tech} value={tech}>{tech}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Content Area */}
                <div className="w-full relative min-h-[50vh]">
                    <AnimatePresence mode="wait">
                        {filteredProjects.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center text-white-200 py-20"
                            >
                                No projects found matching your criteria.
                            </motion.div>
                        ) : (
                            <motion.div
                                key="grid"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredProjects.map((project) => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </main>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }: { project: any }) => {
    return (
        <div className={`flex flex-col bg-[#0f0f11] border border-white/10 rounded-[1.75rem] overflow-hidden hover:border-purple/50 transition-colors duration-300 group h-full`}>
            {/* Image Area */}
            <div className="relative w-full aspect-[5/3] overflow-hidden bg-[#13162d]">
                <div className="absolute inset-0 bg-[#13162d]"></div>
                <img
                    src={project.img}
                    alt={project.title}
                    className="absolute bottom-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                {/* Category Badge */}
                {project.category && (
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        {project.category}
                    </span>
                )}
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-grid-white/[0.02]">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple transition-colors line-clamp-1 font-instrument">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-white-200 hover:text-purple transition-colors">
                        <IconExternalLink size={24} />
                    </a>
                </div>

                <p className="text-white-100/80 mb-6 line-clamp-3 text-sm md:text-base">
                    {project.details || project.des}
                </p>

                {/* Feature List (Gist) */}
                {project.features && (
                    <ul className="mb-6 space-y-2">
                        {project.features.slice(0, 3).map((feat: string, i: number) => (
                            <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple"></span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-3.5">
                        {project.iconLists?.map((icon: string, index: number) => (
                            <img key={index} src={icon} alt="tech icon" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                        ))}
                    </div>

                    <a href={project.link} className="flex items-center gap-2 text-purple text-sm font-medium hover:underline">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
