"use client";

import React from 'react'
import { projects } from '@/data'
import { IconArrowUpRight } from '@tabler/icons-react'

const RecentProjects = () => {
    return (
        <div className='py-20' id="projects">
            <h1 className='font-bold text-4xl md:text-5xl text-center'>
                A small selection of {' '}
                <span className='text-yellow-500'>recent projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
                {projects.map(({ id, title, des, img, iconLists, link }) => (
                    <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex flex-col items-center justify-center sm:w-[570px] w-[80vw] border border-white/20 rounded-[1.75rem] bg-[#0f0f11] p-4'>
                        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full transform hover:scale-[1.02] transition-transform duration-300">
                            <div className='relative flex items-center justify-center w-full overflow-hidden aspect-[5/4] mb-10'>
                                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                    {/* Using a placeholder bg color instead of missing bg.png */}
                                </div>
                                <img src={img} alt={title} className='z-10 absolute bottom-0 w-full h-full object-cover' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 font-serif'>
                                {title}
                            </h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='flex items-center justify-between mt-7 mb-3'>
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
