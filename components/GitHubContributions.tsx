"use client";

import { GitHubCalendar } from 'react-github-calendar';

const GitHubContributions = () => {
    return (
        <div className="flex justify-center w-full py-10">
            <GitHubCalendar username="arnabjena007" />
        </div>
    );
};

export default GitHubContributions;
