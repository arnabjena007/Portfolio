"use client";
import React from 'react';
import { FileCabinet } from './ui/file-cabinet';

export const ExperienceStack = () => {
    const items = [
        {
            title: 'Building for Open-Data Commons',
            color: '#1a1a1a', // Black
            tabAlignment: 'left' as const,
            content: (
                <div className="space-y-4 pt-4 text-center md:text-left">
                    <p className="text-neutral-300 font-medium">
                        Through projects spanning film censorship (CBFC) and parliamentary data (Lok Sabha),
                        I've built robust pipelines to scrape, clean, and visualize public data.
                    </p>
                </div>
            )
        },
        {
            title: 'Talk: IndiaFOSS 2025',
            color: '#483d8b', // Purple
            tabAlignment: 'right' as const,
            content: (
                <div className="space-y-4 pt-4 text-center md:text-left">
                    <p className="text-neutral-300 font-medium">
                        Vivek and I gave a talk at the IndiaFOSS Open Source Conference about the challenges
                        and opportunities in building open data infrastructure in India.
                    </p>
                </div>
            )
        },
        {
            title: 'Teaching: DA-IICT',
            color: '#1a1a1a', // Black
            tabAlignment: 'left' as const,
            content: (
                <div className="space-y-4 pt-4 text-center md:text-left">
                    <p className="text-neutral-300 font-medium">
                        I was at DA-IICT (Gandhinagar, India) as a Visiting Faculty.
                        Mentored students on "Computing for Creative Practice".
                    </p>
                </div>
            )
        },
        {
            title: 'Teaching: Chitkara University',
            color: '#483d8b', // Purple
            tabAlignment: 'right' as const,
            content: (
                <div className="space-y-4 pt-4 text-center md:text-left">
                    <p className="text-neutral-300 font-medium">
                        In this two week course for design students at Chitkara University (Chandigarh, India),
                        we explored the basics of creative coding using p5.js.
                    </p>
                </div>
            )
        },
    ];

    return (
        <div className="w-full py-20">
            <h1 className="font-bold text-4xl md:text-5xl text-center mb-10 font-serif">
                My <span className="text-purple-500">Experience</span>
            </h1>
            <FileCabinet items={items} />
        </div>
    );
};
