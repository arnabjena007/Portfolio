export const navItems = [
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" }, // Changed to page
    { name: "Contact", link: "/contact" },
];


export const projects = [
    {
        id: 1,
        title: "Pix",
        des: "Generating 8000×8000 pixel art in under 60 seconds using Golang and parallel processing.",
        img: "/p1.png",
        iconLists: ["/go.svg", "/ver.svg"],
        link: "https://github.com/arnabjena",
        category: "Backend",
        techStack: ["Golang", "Parallel Processing", "Image Processing"],
        details: "A high-performance command-line tool written in Go that converts standard images into massive pixel art compositions. It leverages Go's concurrency model to process pixels in parallel, handling 8k resolution images in under a minute.",
        features: [
            "Converts high-res images to pixel art",
            "Ultra-fast parallel processing with Goroutines",
            "Command-line interface for batch processing",
            "Adjustable pixel block size",
        ],
    },
    {
        id: 2,
        title: "Indicoded",
        des: "Interactive data visualization exploring Indian cultural patterns using D3.js, p5.js, and React.",
        img: "/p2.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://github.com/arnabjena007",
        category: "Frontend",
        techStack: ["React", "D3.js", "p5.js", "TypeScript"],
        details: "An immersive web experience that helps users explore and understand the rich tapestry of Indian art and culture through interactive visualizations. It uses D3.js for data binding and p5.js for creative coding canvas elements.",
        features: [
            "Interactive maps and cultural timelines",
            "Dynamic data visualization with D3.js",
            "Generative art patterns using p5.js",
            "Responsive design for all devices",
        ],
    },
    {
        id: 3,
        title: "Internloom",
        des: "Internship discovery platform with 5000+ applications, secure payments, and analytics.",
        img: "/p3.png",
        iconLists: ["/next.png", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://internloom.vercel.app",
        category: "Full Stack",
        techStack: ["Next.js", "TypeScript", "PostgreSQL", "TailwindCSS"],
        details: "A comprehensive platform connecting students with high-quality internships. It features a robust job board, application tracking system, and integrated payment gateways for premium features.",
        features: [
            "Real-time internship listings and filtering",
            "Student and Recruiter dashboards",
            "Secure payment integration",
            "Automated application tracking",
        ],
    },
    {
        id: 4,
        title: "APEX",
        des: "Bridging the gap between technical skills and visionary ideas through student collaboration.",
        img: "/p4.jpg",
        iconLists: ["/next.png", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://apex-website-gules.vercel.app/",
        category: "Community Platform",
        techStack: ["HTML", "CSS", "JavaScript", "Firestore", "Vercel"],
        details: "The APEX (Aspiring Pioneers of Excellence) community was born from a common student dilemma: tech-savvy students lack ideas, while non-technical students lack skills. APEX bridges this gap by fostering collaboration, enabling technical students to gain ideas and non-technical students to acquire essential skills. This synergy cultivates an environment where visionary ideas become impactful realities.",
        features: [
            "Fosters collaboration between technical and non-technical students",
            "Enables sharing of visionary ideas and skills",
            "Cultivates an environment for impactful realities",
            "Community-driven platform",
        ],
    },
    {
        id: 5,
        title: "Mapify",
        des: "A modern, interactive web application for finding shortest paths in Kolkata using Dijkstra's algorithm.",
        img: "/p5.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://github.com/arnabjena",
        category: "Web Application",
        techStack: ["React", "Leaflet", "Dijkstra Algorithm", "TailwindCSS"],
        details: "A modern, interactive web application for finding shortest paths in Kolkata using Dijkstra's algorithm. It features an interactive Leaflet-based map with OpenStreetMap tiles, allowing users to select locations directly on the map or use text input. The application visualizes paths in real-time, displays distance, path segments, and computation time.",
        features: [
            "Interactive Leaflet-based map with OpenStreetMap tiles",
            "Real-time path visualization with Dijkstra's algorithm",
            "User-friendly input: Text, Landmark interactions, Map clicking",
            "Real-time results: Distance, Segments, Computation time",
        ],
    }
];

export const workExperience = [
    {
        id: 1,
        title: "Founding Engineer",
        company: "InternLoom",
        date: "2024 – Present",
        desc: "Built and scaled an internship discovery platform focused on structured listings and high signal matching.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Docker"],
        points: [
            "Built and scaled an internship discovery platform focused on structured listings and high signal matching",
            "Architected the full stack system end to end, including frontend, backend, database design, and deployment",
            "Designed and implemented large scale scraping and ingestion pipelines to process internship applications and listings",
            "Built internal dashboards and admin tools to manage data quality, moderation, and platform operations",
            "Optimized performance and reliability to support growing user traffic and real world usage",
        ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Research Intern",
        company: "IIT Ropar",
        date: "2024",
        desc: "Worked on AI driven brain tumor detection using medical imaging data.",
        tech: ["Python", "Deep Learning", "Medical Imaging"],
        points: [
            "Worked on AI driven brain tumor detection using medical imaging data",
            "Implemented and evaluated deep learning models for classification and analysis of MRI scans",
            "Collaborated with researchers to preprocess datasets and improve model robustness",
            "Contributed to experimentation, evaluation pipelines, and result analysis for research outcomes",
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Tech Lead",
        company: "Apex",
        date: "2023 – 2024",
        desc: "Led technical development for Apex, overseeing architecture and implementation across teams.",
        tech: ["Next.js", "React", "Node.js", "PostgreSQL"],
        points: [
            "Led technical development for Apex, overseeing architecture and implementation across teams",
            "Designed and built the core platform including website, event management system, and internal dashboards",
            "Mentored developers and coordinated technical decisions to ensure consistency and delivery quality",
            "Took ownership of deployments, system reliability, and feature rollouts make theexperience system better",
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];

export const volunteering = [
    {
        id: 1,
        title: "Executive Secretary",
        company: "CodeX",
        date: "September 2024–Present",
        points: [
            "Managing Largest technical Club of MITB Student Project",
            "Increased student enrollment to 2000+ students",
            "Organized technical events HackTheWeb, GameForge and ForFeit",
        ],
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Executive Committee Member",
        company: "MITB ACM Student Chapter",
        date: "October 2023–October 2024",
        points: [
            "Awarded outstanding community Service Award 2024 by ACM India Council",
            "Organized MIT ACM Chapter’s maiden Techfest Turinger’24",
        ],
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Quizzing Society Head",
        company: "Mimansa",
        date: "August 2024–Present",
        points: [
            "Leading Inter-University quiz team. Won Quizzes in Shoolini University, IISC, Christ University, IIIT Bengaluru",
            "Won the Inter-Department General Quiz at MAHE Bengaluru’s annual Fest RUBARU",
            "Hosted many themed quizzes throughout the year",
        ],
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/arnabjena",
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://twitter.com/arnabjena", // Placeholder
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://linkedin.com/in/arnabjena", // Placeholder based on name
    },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },
    {
        id: 5,
        title: "Currently building a JS Animation library",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
