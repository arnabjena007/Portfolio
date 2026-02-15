"use client";

import React from 'react'
import { projects } from '@/data'
import { IconArrowUpRight } from '@tabler/icons-react'

const RecentProjects = () => {
    return (
        <div className='py-20 relative' id="projects">
            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-yellow-500 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
            </div>

            <h1 className='font-bold text-4xl md:text-5xl text-center'>
                A small selection of {' '}
                <span className='text-yellow-500'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-16 mt-10'>
                {projects.slice(0, 2).map(({ id, title, techStack, img, iconLists, link }) => (
                    <div key={id} className='lg:min-h-[28rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw] border border-white/20 rounded-2xl bg-[#0f0f11] p-4 gap-4 relative overflow-hidden'>
                        {/* Fresh Tag for the latest project (first item) */}
                        {/* Alternative: A textual tag */}
                        {projects.indexOf(projects.find(p => p.id === id)!) === 0 && (
                            <div className="absolute top-0 right-0 z-20">
                                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                                    FRESH
                                </div>
                            </div>
                        )}

                        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full transform hover:scale-[1.02] transition-transform duration-300">
                            <div className='relative flex items-center justify-center w-full overflow-hidden h-[15rem] mb-4'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    {/* Using a placeholder bg color instead of missing bg.png */}
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0 w-full h-full object-cover rounded-xl' />
                            </div>
                            <h1 className='font-bold lg:text-xl md:text-lg text-base line-clamp-1 font-serif'>
                                {title}
                            </h1>

                            <div className="flex flex-wrap gap-2 my-2">
                                {techStack?.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 bg-white/10 text-xs rounded-md text-gray-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className='flex items-center justify-between mt-4 mb-2'>
                                <div className='flex items-center'>
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
                                            <img src={icon} alt={icon} className='p-2' />
                                        </div>
                                    ))}
                                </div>
                                <div className='flex justify-center items-center'>
                                    <p className='flex lg:text-xl md:text-xs text-sm text-yellow-500'>Check Live Site</p>
                                    <IconArrowUpRight className='ms-3' color='#EAB308' />
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default RecentProjects
