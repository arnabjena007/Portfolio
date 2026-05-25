"use client";

import { GitHubCalendar } from 'react-github-calendar';

const GitHubContributions = () => {
    return (
        <div className="w-full flex justify-center items-center overflow-hidden">
            {/* Scale wrapper for smaller screen sizes, fits 100% on desktop */}
            <div className="transform scale-[0.78] xs:scale-[0.85] sm:scale-[0.95] md:scale-100 origin-center">
                <GitHubCalendar 
                    username="arnabjena007" 
                    colorScheme="dark" 
                    blockSize={10} 
                    blockMargin={2}
                    fontSize={12}
                />
            </div>
        </div>
    );
};

export default GitHubContributions;
