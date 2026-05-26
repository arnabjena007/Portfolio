"use client";

import { GitHubCalendar } from 'react-github-calendar';

const GitHubContributions = () => {
    return (
        <div className="w-full flex justify-center items-center">
            <GitHubCalendar 
                username="arnabjena007" 
                colorScheme="dark" 
                blockSize={12} 
                blockMargin={2}
                fontSize={12}
            />
        </div>
    );
};

export default GitHubContributions;
