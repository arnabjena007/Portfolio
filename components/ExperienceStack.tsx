"use client";
import React from 'react';
import { FileCabinet } from './ui/file-cabinet';

export const ExperienceStack = () => {
    const items = [
        {
            title: 'The Indian Dream',
            color: '#1a1a1a', // Black
            tabAlignment: 'left' as const,
            link: 'https://medium.com/@arnabjena2003/the-indian-dream-93f4317306c7',
            content: (
                <div className="flex flex-col h-full justify-between items-start text-left p-2">
                    <p className="text-neutral-400 font-serif text-lg leading-snug" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        "Exploring the aspirations, struggles, and the unyielding spirit that defines the modern Indian dream."
                    </p>
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mt-2 hover:underline self-end">
                        Read Article
                    </span>
                </div>
            )
        },
        {
            title: 'When Empathy Meets Ecstasy',
            color: '#EAB308', // Yellow
            tabAlignment: 'right' as const,
            link: 'https://medium.com/@arnabjena2003/when-empathy-meets-ecstasy-a-new-blueprint-for-impact-c28a6bfbb4d3',
            content: (
                <div className="flex flex-col h-full justify-between items-start text-left p-2">
                    <p className="text-neutral-900 font-serif text-lg leading-snug" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.2)' }}>
                        "A new blueprint for impact that bridges the gap between deep emotional connection and scalable change."
                    </p>
                    <span className="text-black text-xs font-bold uppercase tracking-widest mt-2 hover:underline self-end">
                        Read Article
                    </span>
                </div>
            )
        },
        {
            title: 'शॉर्टकट का खेल',
            color: '#1a1a1a', // Black
            tabAlignment: 'left' as const,
            link: 'https://medium.com/@arnabjena2003/%E0%A4%B6%E0%A5%89%E0%A4%B0%E0%A5%8D%E0%A4%9F%E0%A4%95%E0%A4%9F-%E0%A4%95%E0%A4%BE-%E0%A4%96%E0%A5%87%E0%A4%B2-36a39604470b',
            content: (
                <div className="flex flex-col h-full justify-between items-start text-left p-2">
                    <p className="text-neutral-400 font-serif text-lg leading-snug" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                        "An honest reflection on why taking shortcuts in life often leads to the longest and hardest roads."
                    </p>
                    <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mt-2 hover:underline self-end">
                        Read Article
                    </span>
                </div>
            )
        },
        {
            title: 'India’s Greatest Achievement',
            color: '#EAB308', // Yellow
            tabAlignment: 'right' as const,
            link: 'https://medium.com/@arnabjena2003/indias-greatest-achievement-60accc923230',
            content: (
                <div className="flex flex-col h-full justify-between items-start text-left p-2">
                    <p className="text-neutral-900 font-serif text-lg leading-snug" style={{ textShadow: '0 1px 1px rgba(255,255,255,0.2)' }}>
                        "Examining the silent revolutions and monumental shifts that mark India's journey on the global stage."
                    </p>
                    <span className="text-black text-xs font-bold uppercase tracking-widest mt-2 hover:underline self-end">
                        Read Article
                    </span>
                </div>
            )
        },
    ];

    return (
        <div className="w-full py-20">
            <h1 className="font-bold text-4xl md:text-5xl text-center mb-10 font-serif">
                My <span className="text-yellow-500">Writings</span>
            </h1>
            <FileCabinet items={items} />
        </div>
    );
};
