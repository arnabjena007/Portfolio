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

            <h1 className='font-bold text-4xl md:text-5xl text-center font-instrument'>
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
                            <h1 className='font-bold lg:text-xl md:text-lg text-base line-clamp-1 font-instrument'>
                                {title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-3.5 mt-3">
                                {iconLists.map((icon, index) => (
                                    <img key={index} src={icon} alt="tech icon" className="w-5 h-5 object-contain opacity-80 hover:opacity-100 transition-opacity" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                ))}
                            </div>

                            <div className='flex items-center justify-between mt-4 mb-2'>
                                <div className='flex justify-center items-center ml-auto'>
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
