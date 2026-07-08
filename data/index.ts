export const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
];


export const projects = [
    {
        id: 1,
        title: "Pixlate",
        des: "Generating pixel art in under 60 seconds using Golang and parallel processing.",
        img: "/pixlate-final.png",
        iconLists: ["/go.svg", "/ver.svg"],
        link: "https://pixlateweb.up.railway.app/",
        category: "Full Stack",
        techStack: ["Golang"],
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
        img: "/indecoded-screenshot.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://github.com/arnabjena007",
        category: "Frontend",
        techStack: ["React", "TypeScript"],
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
        title: "GitMap",
        des: "A React component for visualizing GitHub contributions and heatmap with customizable themes.",
        img: "/gitmap-screenshot.png",
        iconLists: ["/re.svg", "/ts.svg", "/ver.svg"],
        link: "https://gitmap-devo.vercel.app/",
        category: "Open Source",
        techStack: ["React", "TypeScript", "Vercel"],
        details: "GitMap is a React component library for visualizing GitHub contributions and heatmaps. It provides beautiful, customizable contribution graphs with multiple theme options, time range filtering, and interactive controls. Users can explore any GitHub user's contribution activity with a polished, modern interface.",
        features: [
            "Interactive GitHub contribution heatmap visualization",
            "Multiple theme support including GitHub-style colors",
            "Configurable time ranges and randomize feature",
            "Contribution stats: total, streaks, and busiest day",
        ],
    },
    {
        id: 4,
        title: "APEX",
        des: "Bridging the gap between technical skills and visionary ideas through student collaboration.",
        img: "/apex-screenshot.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
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
        link: "https://github.com/arnabjena007",
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
        id: 2,
        title: "Software Developer Intern",
        company: "Center for Data for Public Good, IISc",
        logo: "/cdpg.svg",
        date: "Jan 2026 – Present",
        subtitle: "Bengaluru, India",
        description: "Working at the intersection of technology, policy, and society to enable responsible data sharing and innovation across sectors like urban development, agriculture, geospatial services, and healthcare.",
        points: [
            "Fostering collaboration between academia, industry, and government to address pressing challenges across sectors and empower stakeholders to develop solutions that drive equitable and sustainable progress.",
            "Contributing to software platforms, AI/ML models, innovative applications, and data policies that facilitate the use of data for public good, anchored in translational research and real-world applications."
        ],
        tech: ["/next.svg", "/ts.svg", "/python.svg"],
        className: "md:col-span-2",
        thumbnail: "/cdpg.svg",
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "Stealth Startup",
        logo: "/stealth.svg",
        date: "Mar 2025 – Feb 2026",
        subtitle: "Bengaluru, Full-Time",
        description: "Joined as the founding engineer to architect and ship a live video streaming platform with real-time chat, taking the product from zero to a growing user base single-handedly.",
        points: [
            "Solo-built and scaled the platform to 40,000+ monthly unique visitors with sub-second start times",
            "Designed real-time chat over WebSockets supporting thousands of concurrent connections per stream",
            "Built an in house CDN network from scratch to cut cloud and bandwidth costs by ~80%"
        ],
        tech: ["/next.svg", "/node.svg", "/express.svg", "/figma.svg", "/mongodb.svg", "/ts.svg"],
        className: "md:col-span-2",
        thumbnail: "/stealth.svg",
    },
    {
        id: 4,
        title: "Research Intern",
        company: "IIT Ropar",
        logo: "/iitropar.svg",
        date: "May 2024 – July 2024",
        subtitle: "Rupnagar, India",
        description: "Worked on AI driven brain tumor detection using medical imaging data.",
        points: [
            "Implemented and evaluated deep learning models for classification and analysis of MRI scans",
            "Collaborated with researchers to preprocess datasets and improve model robustness",
            "Contributed to experimentation, evaluation pipelines, and result analysis for research outcomes"
        ],
        tech: ["/python.svg"],
        className: "md:col-span-2",
        thumbnail: "/iitropar.svg",
    }
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
        link: "https://github.com/arnabjena007",
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://twitter.com/arnabjena007", // Placeholder
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://linkedin.com/in/arnabjena007", // Placeholder based on name
    },
];



