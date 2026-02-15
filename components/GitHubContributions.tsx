"use client";

import { GitHubCalendar } from 'react-github-calendar';
import { Github, ExternalLink } from 'lucide-react';

const GitHubContributions = () => {
    return (
        <div className="flex justify-center w-full py-10">
            <div className="text-white p-6 rounded-xl border border-white/10 bg-[#0f0f11] max-w-5xl w-full mx-auto">
                <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            <Github className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold font-serif">Contributions</h3>
                            <p className="text-neutral-400 text-sm">@arnabjena007</p>
                        </div>
                    </div>

                    <a href="https://github.com/arnabjena007" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                    </a>
                </div>

                <div className='flex justify-center items-center'>
                    <GitHubCalendar username="arnabjena007" colorScheme='dark' />
                </div>


            </div>
        </div>
    );
};

export default GitHubContributions;
