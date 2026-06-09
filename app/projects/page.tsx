"use client";

import React, { useState, useMemo } from "react";
import { projects } from "@/data";
import { Search, ExternalLink, Tag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Diagonal Stripe Separator (Partition) spanning full viewport width
const DiagonalSeparator = () => (
    <div className="relative w-full h-5 my-4 select-none pointer-events-none flex items-center justify-center">
        <div className="absolute w-[100vw] h-full left-1/2 -translate-x-1/2 border-t border-b border-neutral-200 dark:border-white/[0.03]">
            <div
                className="absolute inset-0 block dark:hidden"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(0, 0, 0, 0.03) 6px, rgba(0, 0, 0, 0.03) 7px)',
                }}
            />
            <div
                className="absolute inset-0 hidden dark:block"
                style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 6px, rgba(255, 255, 255, 0.03) 6px, rgba(255, 255, 255, 0.03) 7px)',
                }}
            />
        </div>
    </div>
);

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
        <main className="w-full max-w-5xl mx-auto px-6 sm:px-12 relative pb-24 pt-16 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed border-l border-r border-solid border-neutral-200 dark:border-white/[0.03] min-h-screen">
            <header className="relative pb-8 w-full text-center sm:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 dark:text-white tracking-wide mb-4 italic">
                        Projects
                    </h1>
                    <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed max-w-xl mx-auto sm:mx-0">
                        A curated list of my work, experiments, and open source contributions.
                    </p>
                </motion.div>
            </header>

            <DiagonalSeparator />

            {/* Controls Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 my-8 w-full p-4 sm:p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                {/* Search */}
                <div className="relative w-full lg:w-96 group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-yellow-600 dark:group-focus-within:text-yellow-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white dark:bg-[#08080a] border border-neutral-200 dark:border-neutral-800 rounded-xl py-2.5 pl-10 pr-4 text-neutral-900 dark:text-white focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-500 transition-all placeholder:text-neutral-400 placeholder:font-sans text-sm"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="flex-1 lg:flex-none bg-white dark:bg-[#08080a] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-500 cursor-pointer text-sm transition-colors"
                    >
                        <option value="All">All Categories</option>
                        {categories.slice(1).map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <select
                        value={selectedTech}
                        onChange={(e) => setSelectedTech(e.target.value)}
                        className="flex-1 lg:flex-none bg-white dark:bg-[#08080a] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 rounded-xl px-3 py-2.5 focus:outline-none focus:border-yellow-600 dark:focus:border-yellow-500 cursor-pointer text-sm transition-colors"
                    >
                        <option value="All">All Tech</option>
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
                            className="text-center font-mono text-neutral-500 py-20"
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
                            className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProjectCard = ({ project }: { project: any }) => {
    return (
        <div className="flex flex-col bg-white dark:bg-[#08080a] border border-neutral-200 dark:border-neutral-900 rounded-2xl overflow-hidden hover:border-yellow-500/20 dark:hover:border-yellow-500/20 transition-all duration-300 group h-full shadow-sm hover:shadow-md dark:shadow-none">
            {/* Image Area */}
            <div className="relative w-full aspect-[5/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Category Badge */}
                {project.category && (
                    <span className="absolute top-4 left-4 bg-white/90 dark:bg-black/60 backdrop-blur-md border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white text-[10px] font-mono px-2.5 py-1 rounded uppercase tracking-wider">
                        {project.category}
                    </span>
                )}
            </div>

            <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-500 transition-colors line-clamp-1 font-serif italic pr-2">
                        {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors shrink-0 mt-1">
                        <ExternalLink size={18} />
                    </a>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                    {project.details || project.des}
                </p>

                {/* Tech Stack Tags */}
                {project.techStack && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 4).map((tech: string, index: number) => (
                            <span
                                key={index}
                                className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400"
                            >
                                <Tag size={9} />
                                {tech}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-auto pt-5 border-t border-neutral-200 dark:border-neutral-800/50 flex items-center justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                        {project.iconLists?.map((icon: string, index: number) => (
                            <div key={index} className="w-6 h-6 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center p-1">
                                <img src={icon} alt="tech icon" className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                            </div>
                        ))}
                    </div>

                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-yellow-600 dark:text-yellow-500 text-xs font-mono hover:underline">
                        View Project
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
