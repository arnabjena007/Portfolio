export type stacksProps = {
    [key: string]: {
        Icon: React.ElementType; // Better type for icons
        className: string;
    };
};

// Import necessary icons from lucide-react or other libraries
import {
    Code,
    Database,
    Globe,
    Cpu,
    Layers,
    Palette,
    Server,
    Terminal,
    Box,
    Layout,
    Cloud,
    GitBranch,
    Shield,
    Container,
    Activity,
    Brain,
    Smartphone
} from "lucide-react";

// Frontend Stacks
export const FRONTEND_STACKS: stacksProps = {
    "Next.js": { Icon: Globe, className: "text-neutral-500" },
    "React.js": { Icon: Code, className: "text-blue-500" },
    "Tailwind CSS": { Icon: Palette, className: "text-cyan-400" },
    "TypeScript": { Icon: Terminal, className: "text-blue-600" },
    "HTML5": { Icon: Layout, className: "text-orange-500" },
    "CSS3": { Icon: Palette, className: "text-blue-400" },
    "D3.js": { Icon: Layers, className: "text-orange-400" },
    "p5.js": { Icon: Box, className: "text-pink-500" },
    "Framer Motion": { Icon: Layers, className: "text-neutral-500" },
    "React": { Icon: Code, className: "text-blue-500" }, // Alias for React.js
    "Docker": { Icon: Container, className: "text-blue-500" },
    "Deep Learning": { Icon: Brain, className: "text-purple-500" },
    "Medical Imaging": { Icon: Activity, className: "text-red-500" },
    "React Native": { Icon: Smartphone, className: "text-blue-400" },
};

// Backend & Tools Stacks
export const BACKEND_STACKS: stacksProps = {
    "Go": { Icon: Box, className: "text-cyan-500" },
    "Python": { Icon: Terminal, className: "text-yellow-500" },
    "Node.js": { Icon: Server, className: "text-green-500" },
    "Express.js": { Icon: Server, className: "text-neutral-400" },
    "PostgreSQL": { Icon: Database, className: "text-blue-400" },
    "MongoDB": { Icon: Database, className: "text-green-600" },
    "Firebase": { Icon: Cloud, className: "text-yellow-400" },
    "Prisma": { Icon: Database, className: "text-teal-500" },
    "Unity3D": { Icon: Box, className: "text-white" },
    "TensorFlow": { Icon: Cpu, className: "text-orange-500" },
    "PyTorch": { Icon: Cpu, className: "text-red-500" },
    "Git": { Icon: GitBranch, className: "text-orange-600" },
};
