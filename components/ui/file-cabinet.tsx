"use client";
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const FileCabinet = ({ items }: { items: { title: string; content: React.ReactNode; color?: string; tabAlignment?: 'left' | 'right' | 'center'; link?: string }[] }) => {
    return (
        <div className="relative w-full max-w-4xl mx-auto pt-10 pb-32 perspective-2000">
            {/* The Stack */}
            <ul className="list-none flex flex-col items-center w-full relative z-10 transform-style-3d rotate-x-6">
                {items.map((item, index) => {
                    const FolderContent = (
                        <div

                            className={cn(
                                "relative transition-transform duration-300 ease-out group-hover:-translate-y-2",
                                "flex flex-col w-full group/card"
                            )}
                        >
                            {/* Tab Row */}
                            <div
                                className={cn(
                                    "flex w-full px-4 relative z-0",
                                    item.tabAlignment === 'right' ? "justify-end pr-8 md:pr-12" :
                                        item.tabAlignment === 'center' ? "justify-center" :
                                            "justify-start pl-8 md:pl-12"
                                )}
                            >
                                <div
                                    className="relative min-w-[180px] md:min-w-[250px] px-6 h-10 md:h-12 rounded-t-xl font-bold font-serif text-sm md:text-lg text-white shadow-lg flex items-center justify-center border-t border-x border-white/20 select-none -mb-1"
                                    style={{
                                        backgroundColor: item.color || '#2B2B2B',
                                        transform: 'perspective(500px) rotateX(5deg)', // Tweaked rotation
                                        transformOrigin: 'bottom'
                                    }}
                                >
                                    {item.title}
                                </div>
                            </div>

                            {/* Folder Body */}
                            <div
                                className="relative w-full h-24 md:h-32 border border-white/20 bg-[#121212] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] p-4 md:p-6 flex flex-col justify-center overflow-hidden z-10"
                                style={{
                                    clipPath: 'polygon(2% 0, 98% 0, 92% 100%, 8% 100%)', // Subtle Trapezoid for files
                                    borderRadius: '1rem' // Applied via CSS since clip-path cuts off rounded corners
                                }}
                            >
                                {/* Noise */}
                                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                                {/* Content */}
                                <div
                                    className="relative z-10 text-neutral-200 text-xs md:text-sm line-clamp-3 text-center font-medium"
                                    style={{
                                        transform: 'perspective(500px) rotateX(5deg)', // Tweaked rotation
                                        transformOrigin: 'center'
                                    }}
                                >
                                    {item.content}
                                </div>


                            </div>
                        </div>
                    );

                    return (
                        <li
                            key={index}
                            className={cn(
                                "group w-[90%] md:w-[80%] relative transition-all duration-300 ease-in-out",
                                index !== 0 ? "-mt-20 md:-mt-28" : ""
                            )}
                            style={{
                                zIndex: index,
                                transform: `scale(${1 - (items.length - 1 - index) * 0.03}) translateY(${index * -5}px)`
                            }}
                        >
                            {/* Wrap with anchor if link exists */}
                            {item.link ? (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                                    {FolderContent}
                                </a>
                            ) : (
                                FolderContent
                            )}
                        </li>
                    );
                })}
            </ul>

            {/* Trapezoidal Drawer Front */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] h-32 md:h-40 z-[100] pointer-events-none flex items-end justify-center">
                <div
                    className="w-full h-full bg-[#0a0a0a] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] border-t border-white/10 relative flex items-center justify-center"
                    style={{
                        clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)', // Trapezoid
                        background: 'linear-gradient(180deg, #1f1f1f 0%, #000000 100%)'
                    }}
                >
                    {/* Handle */}
                    <div className="w-1/3 md:w-1/4 h-10 md:h-12 bg-gradient-to-b from-[#e0e0e0] to-[#8a8a8a] rounded-full shadow-2xl flex items-center justify-center transform translate-y-4">
                        <div className="w-[92%] h-[60%] bg-gradient-to-b from-[#444] to-[#111] rounded-full opacity-90 shadow-inner"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
