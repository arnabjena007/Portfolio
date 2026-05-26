import React from 'react';

export type stacksProps = {
    [key: string]: {
        Icon: React.ElementType;
        className: string;
    };
};

// High-fidelity Custom SVGs for Tech Stack Logos using standard React.createElement (TS-safe)
const NextjsIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 180 180", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("mask", { id: "next-mask" },
            React.createElement("circle", { cx: "90", cy: "90", r: "90", fill: "white" })
        ),
        React.createElement("g", { mask: "url(#next-mask)" },
            React.createElement("circle", { cx: "90", cy: "90", r: "90", fill: "black" }),
            React.createElement("path", { d: "M149.508 157.52L69.142 54H54v72h12.102V71.864l66.59 86.802c5.688-6.07 10.334-13.064 13.685-20.732z", fill: "white" }),
            React.createElement("path", { d: "M115 54h12v72h-12z", fill: "white" })
        )
    );

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "-11.5 -10.23174 23 20.46348", width: "1em", height: "1em", fill: "none", stroke: "currentColor", ...props },
        React.createElement("circle", { cx: "0", cy: "0", r: "2.05", fill: "currentColor", stroke: "none" }),
        React.createElement("g", { stroke: "currentColor", strokeWidth: "1", fill: "none" },
            React.createElement("ellipse", { rx: "11", ry: "4.2" }),
            React.createElement("ellipse", { rx: "11", ry: "4.2", transform: "rotate(60)" }),
            React.createElement("ellipse", { rx: "11", ry: "4.2", transform: "rotate(120)" })
        )
    );

const TypeScriptIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 100 100", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("rect", { width: "100", height: "100", fill: "#3178c6", rx: "6" }),
        React.createElement("path", { d: "M37.5 73.1h-7.3V34.4H20v-6.3h27.7v6.3H37.5v38.7zm38.7-27.5c-.8-4.7-3.2-8.5-8.5-8.5-5.2 0-8.2 3.6-8.2 7.7 0 7.4 10.3 8.3 15.3 12.5 5 4.2 6.8 9.5 6.8 15 0 9.1-7.2 14.8-17.5 14.8-11.2 0-16.7-5.8-17.8-13.5h7.5c.7 4.1 3.8 7.2 10.1 7.2 5.8 0 9.4-2.8 9.4-7.5 0-6.8-9.8-7.7-14.8-11.9-5.1-4.2-7-8.9-7-14.6 0-9.2 7.4-14.3 16.5-14.3 9.4 0 14.5 4.5 15.8 11.2h-7.6z", fill: "white" })
    );

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" })
    );

const FramerMotionIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M0 0h24v12l-12 12L0 12z" })
    );

const GoIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M17.472 13.064c.002-.15.008-.302.008-.456v-.218c-.027-.373-.081-.741-.161-1.103a6.837 6.837 0 00-.472-1.391c-.046-.095-.101-.186-.153-.277l-.271-.439-.24-.316a7.65 7.65 0 00-.735-.78 7.37 7.37 0 00-3.328-1.785 8.167 8.167 0 00-.91-.12c-.05-.003-.1-.005-.152-.008h-.651c-.08.006-.16.01-.24.02-.271.025-.54.067-.806.126a7.352 7.352 0 00-3.957 2.128 7.037 7.037 0 00-1.848 3.238 6.787 6.787 0 00-.23 1.83v.457a6.88 6.88 0 00.329 2.057 7.042 7.042 0 002.32 3.298 7.382 7.382 0 004.996 1.579c.983-.046 1.936-.367 2.757-.927a7.632 7.632 0 002.138-2.222 7.009 7.009 0 00.865-2.732 6.786 6.786 0 00.088-.863c0-.03.003-.06.003-.09v-.336zm-3.08-1.574h2.247c-.01.218-.033.435-.067.65a4.896 4.896 0 01-.274.966 5.093 5.093 0 01-.692 1.258l-.066.089a4.838 4.838 0 01-.989.897 4.935 4.935 0 01-1.391.616 5.568 5.568 0 01-.58.09 5.347 5.347 0 01-.908-.035 4.908 4.908 0 01-2.91-1.637 4.708 4.708 0 01-1.233-2.161 4.54 4.54 0 01-.153-1.226v-.305a4.57 4.57 0 01.219-1.371 4.703 4.703 0 011.234-2.16 4.912 4.912 0 012.91-1.638 5.257 5.257 0 01.908-.035c.196.008.39.027.58.058a4.936 4.936 0 011.895.807 4.848 4.848 0 011.196 1.139l.066.088c.11.168.21.346.3.53a4.9 4.9 0 01.376.994c.034.135.061.272.081.41H14.39v.033z" })
    );

const NodejsIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 256 284", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M152.122 0l-105.76 61.12c-9.28 5.36-15.04 15.28-15.04 26v122.24c0 10.72 5.76 20.64 15.04 26l105.76 61.12c9.28 5.36 19.84 5.36 29.12 0l105.76-61.12c9.28-5.36 15.04-15.28 15.04-26V87.12c0-10.72-5.76-20.64-15.04-26L181.242 0c-9.28-5.36-19.84-5.36-29.12 0zm-80.48 75.36l66.08-38.16v76.48l-66.08 38.16V75.36zm148.8 132.8l-66.08 38.16v-76.48l66.08-38.16v76.48z" })
    );

const PostgresIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 256 256", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M116.7 13.3c-24.1 4.7-44.5 17.5-57.8 36.3C47 66 41 89.2 41.5 113.6c.5 24 6.7 46.8 17.8 65.6 12.8 21.6 32 37.1 55.4 44.9 14.5 4.8 30.1 7.2 45.4 7.2h36v-30h-35.4c-22.3 0-42.3-7.2-57-20.6-13.8-12.6-21.7-29.6-22.4-48-.8-21 6.5-40.3 20.6-54.6C116.6 64 135 56.7 155 56.7c22 0 42 8.7 56 24.3 13 14.5 19.4 33.6 18.2 54.3-1.4 22.3-11 41.6-26.6 53.6-11.4 8.7-25 13.1-40.2 13.1H127v30h35.4c24 0 46-7.2 63-20.6 22-17.5 35.6-45.2 37.6-76 2-30-7-57.7-25-78C218 33 192.5 20.3 162.7 16c-15-.2-30.7 1.3-46 2.7z" })
    );

const DockerIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.774c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.118c0 .102.084.186.186.186zm-2.95.001h2.119c.102 0 .186-.084.186-.186V8.774c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.118c0 .102.084.186.186.186zm-2.95 0h2.119c.102 0 .186-.084.186-.186V8.774c0-.102-.084-.186-.186-.186H8.083c-.102 0-.186.084-.186.186v2.118c0 .102.084.186.186.186zm-2.95 0h2.119c.102 0 .186-.084.186-.186V8.774c0-.102-.084-.186-.186-.186H5.133c-.102 0-.186.084-.186.186v2.118c0 .102.084.186.186.186zm-2.95 0h2.119c.102 0 .186-.084.186-.186V8.774c0-.102-.084-.186-.186-.186H2.183c-.102 0-.186.084-.186.186v2.118c0 .102.084.186.186.186zM8.083 8.127h2.119c.102 0 .186-.084.186-.186V5.822c0-.102-.084-.186-.186-.186H8.083c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm2.95 0h2.119c.102 0 .186-.084.186-.186V5.822c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-5.9 0h2.119c.102 0 .186-.084.186-.186V5.822c0-.102-.084-.186-.186-.186H5.133c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm5.9-2.95h2.119c.102 0 .186-.084.186-.186V2.866c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zm-9.761 7.375c-.218 1.275-.28 3.559.832 4.671 1.096 1.097 3.513.918 4.793.832a8.675 8.675 0 005.15-2.222 23.46 23.46 0 007.493-1.637 1.83 1.83 0 001.077-.927c.832-1.954.124-3.559-.724-4.887l-.062-.093c-.347-.514-.731-.966-1.127-1.391a13.34 13.34 0 00-6.19-3.708l-.13-.031a.187.187 0 00-.23.186v1.392a.187.187 0 01-.186.186h-1.393a.187.187 0 00-.186.186V7.08c0 .102-.084.186-.186.186H9.477c-.102 0-.186.084-.186.186v1.392c0 .102-.084.186-.186.186H6.527c-.102 0-.186.084-.186.186v1.392c0 .102-.084.186-.186.186H1.272a.187.187 0 00-.187.186v1.272z" })
    );

const GitIcon = (props: React.SVGProps<SVGSVGElement>) =>
    React.createElement("svg", { viewBox: "0 0 24 24", width: "1em", height: "1em", fill: "currentColor", ...props },
        React.createElement("path", { d: "M23.384 11.61L12.39.616a1.536 1.536 0 00-2.17 0L8.602 2.234l3.16 3.16a2.684 2.684 0 011.832-.303c.535.127.994.47 1.258.947a2.69 2.69 0 01-.223 2.87l-3.084 3.084a2.69 2.69 0 01-2.87.223 2.67 2.67 0 01-1.252-1.258 2.69 2.69 0 01.303-1.832L4.57 6.162.616 10.116a1.536 1.536 0 000 2.17l10.994 10.994a1.536 1.536 0 002.17 0l10.994-10.994a1.536 1.536 0 002.17 0l10.994-10.994a1.535 1.535 0 000-2.17zM11.5 15a1.5 1.5 0 111.5-1.5A1.5 1.5 0 0111.5 15z" })
    );

// Decluttered, High-fidelity Frontend Stacks
export const FRONTEND_STACKS: stacksProps = {
    "Next.js": { Icon: NextjsIcon, className: "text-white" },
    "React": { Icon: ReactIcon, className: "text-blue-400" },
    "TypeScript": { Icon: TypeScriptIcon, className: "text-blue-500" },
    "Tailwind CSS": { Icon: TailwindIcon, className: "text-cyan-400" },
    "Framer Motion": { Icon: FramerMotionIcon, className: "text-pink-500" },
};

// Decluttered, High-fidelity Backend Stacks
export const BACKEND_STACKS: stacksProps = {
    "Go": { Icon: GoIcon, className: "text-cyan-500" },
    "Node.js": { Icon: NodejsIcon, className: "text-green-500" },
    "PostgreSQL": { Icon: PostgresIcon, className: "text-blue-400" },
    "Docker": { Icon: DockerIcon, className: "text-blue-500" },
    "Git": { Icon: GitIcon, className: "text-orange-600" },
};
