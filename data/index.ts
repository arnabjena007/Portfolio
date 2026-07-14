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
        overview: "Pixlate is a Go-based image transformation tool that converts standard images into pixel-art output with a focus on speed, determinism, and batch usage. The project is built for users who want a reliable CLI workflow instead of a heavy graphical editor.",
        whatItIs: "A command-line pixelation pipeline that reads an image, processes it in parallel, and writes a stylized output file.",
        problem: "Naive pixelation approaches get slow on large inputs because they process every region sequentially. That makes the workflow painful when the goal is to generate results quickly and repeatedly.",
        howItWorks: "Pixlate divides the input into blocks, samples or transforms each block independently, and runs those blocks through goroutines so multiple chunks are processed at the same time.",
        whyItStandsOut: "The implementation is intentionally simple at the interface level but strong under the hood. It keeps the surface area small, the output predictable, and the runtime fast enough for large images.",
        repositoryStructure: [
            "cmd/pix contains the Pix CLI entry point",
            "core conversion logic handles pixelation, sorting, and output generation",
            "flag parsing wires input, output, size, and variation controls",
            "shared helpers support image loading, color handling, and export",
        ],
        installation: [
            "go install github.com/arnabjena007/pixlate/cmd/pix@latest",
            "Add your GOBIN or $HOME/go/bin directory to PATH",
            "git clone https://github.com/arnabjena007/Pixlate.git",
            "cd Pixlate",
            "go build ./cmd/pix",
        ],
        setupNotes: [
            "Requires Go 1.18+",
            "The install command is the easiest way to get the binary",
            "You can also build the pix binary locally from source",
        ],
        localRun: [
            "pix -in picture.jpg",
            "pix -in picture.jpg -out pix.output.png -width 800 -height 800",
            "pix -in picture.jpg -sweep",
            "pix -in picture.jpg -variations 4",
        ],
        flagReference: [
            "-in: input image path or URL",
            "-out: output image path",
            "-width and -height: output dimensions",
            "-white-percent, -colorsort, -random, -reverse",
            "-sweep, -random-seed, -variations",
            "-compress: PNG compression level",
            "-seeds: seed positions in \"x y x y ...\" format",
        ],
        codeSnippets: [
            {
                title: "Parallel block pipeline",
                language: "go",
                code: `type Job struct {
  X int
  Y int
  Block image.Image
}

func processJobs(jobs []Job) []image.Image {
  out := make(chan image.Image, len(jobs))
  for _, job := range jobs {
    go func(j Job) {
      out <- convertBlock(j.Block, j.X, j.Y)
    }(job)
  }
  return collectResults(out, len(jobs))
}`,
            },
            {
                title: "CLI invocation",
                language: "bash",
                code: `pix -in picture.jpg -out pix.output.png -width 800 -height 800
pix -in picture.jpg -sweep
pix -in picture.jpg -variations 4`,
            },
        ],
        img: "/pixlate-final.png",
        iconLists: ["/go.svg", "/ver.svg"],
        link: "https://pixlate-web.vercel.app/",
        githubLink: "https://github.com/arnabjena007/PixlateWeb",
        category: "Full Stack",
        techStack: ["Golang"],
        details: "A Go command-line tool that converts images into pixel-art compositions using fast, configurable processing. It supports direct installs, local builds, and several output flags for experimenting with size, colors, sweep mode, and variations.",
        features: [
            "Parallel image processing with Goroutines",
            "High-resolution image support",
            "Adjustable pixel block size",
            "Command-line workflow for automation",
            "Fast conversion pipeline for large inputs",
            "Multiple output and variation modes",
        ],
    },
    {
        id: 2,
        title: "Indicoded",
        des: "Interactive data visualization exploring Indian cultural patterns using D3.js, p5.js, and React.",
        overview: "Indicoded is an interactive storytelling experience that explores Indian cultural patterns through motion, color, and data visualization. The project mixes narrative presentation with responsive graphics so users can browse cultural ideas in a visually immersive way.",
        challenge: "The challenge was turning cultural exploration into something engaging without making the interface feel like a static museum page.",
        solution: "I combined D3.js for structured data-driven visuals with p5.js for expressive generative elements, all wrapped in a React interface for smooth interaction.",
        outcome: "The final experience feels more like a guided visual journey than a dashboard, giving users a more memorable way to explore the material.",
        img: "/indecoded-screenshot.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://indicoded.vercel.app/",
        githubLink: "https://github.com/In-decoded",
        category: "Frontend",
        techStack: ["React", "TypeScript"],
        details: "An immersive web experience that helps users explore Indian art and culture through interactive visualizations. It combines structured charting with creative coding to create a presentation that feels educational, dynamic, and visually distinctive.",
        features: [
            "Interactive cultural storytelling",
            "Data-driven visualizations with D3.js",
            "Generative art effects with p5.js",
            "Responsive layout for different screens",
            "React-based modular UI structure",
        ],
    },
    {
        id: 3,
        title: "GitMap",
        des: "A React component for visualizing GitHub contributions and heatmap with customizable themes.",
        overview: "GitMap is a reusable React component that turns GitHub contribution data into an expressive heatmap interface. It is designed to help developers visualize activity patterns with a clean, customizable widget that can fit into dashboards, profiles, and open-source tooling.",
        challenge: "The difficult part was balancing flexibility and polish so the component could be reused in different products without feeling generic.",
        solution: "I built a configurable component API with theme support, time filters, and interactive controls so users can tailor the display to their needs.",
        outcome: "The component feels lightweight to integrate while still offering enough visual richness and metadata to be genuinely useful.",
        img: "/gitmap-screenshot.png",
        iconLists: ["/re.svg", "/ts.svg", "/ver.svg"],
        link: "https://gitmap-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/gitmap",
        category: "Open Source",
        techStack: ["React", "TypeScript", "Vercel"],
        details: "GitMap is a React component library for visualizing GitHub contributions and heatmaps. It provides a polished, customizable graph with theme options, time filtering, and interaction patterns that make contribution data easier to read and present.",
        features: [
            "Interactive contribution heatmap",
            "Multiple theme presets",
            "Configurable time ranges",
            "Contribution stats and streak data",
            "Reusable React component structure",
        ],
    },
    {
        id: 4,
        title: "Colora",
        des: "A polished editor for marking up PDFs with a calm, premium interface and fast annotation tools.",
        overview: "Colora is a calm, modern PDF annotation workspace built for students, researchers, designers, and professionals who want a distraction-free editing experience. It combines document management, rich annotation tools, and clean page controls into a polished editor that feels effortless to use.",
        whatItIs: "A pastel-inspired PDF annotation and document editing application for opening, annotating, organizing, and exporting multi-page documents.",
        problem: "Most PDF editors become visually heavy and cluttered, which makes simple annotation feel slower and more stressful than it should be.",
        howItWorks: "Colora lets users open a local PDF or image, create a blank document, pick an annotation tool from the sidebar, adjust settings from the toolbar, and export the finished document as a PDF.",
        whyItStandsOut: "Colora keeps the interface calm and minimal while still supporting serious editing workflows. The design uses soft accents, rounded surfaces, and restrained spacing so the document remains the focus instead of the UI.",
        repositoryStructure: [
            "Document management handles PDF, image, and blank-page creation",
            "Annotation modules power drawing, text, notes, shapes, and signatures",
            "Canvas controls manage selection, resizing, movement, and editing",
            "Page navigation and export logic handle multi-page document flow",
        ],
        installation: [
            "git clone https://github.com/arnabjena007/colora",
            "cd colora",
            "npm install",
            "npm run dev",
        ],
        setupNotes: [
            "Designed for local document editing in the browser",
            "Supports PDFs and common image formats such as PNG, JPG, JPEG, and WebP",
            "Works best on a desktop screen for precise annotation",
        ],
        localRun: [
            "npm run dev",
            "Open the local development URL shown in the terminal",
        ],
        flagReference: [
            "Ctrl/Cmd + O: open a PDF or image",
            "Ctrl/Cmd + S: export the document",
            "Ctrl/Cmd + Z: undo",
            "Ctrl/Cmd + Shift + Z: redo",
            "H, T, P/D, S, E, R, O, M, L, A, N, I: tool shortcuts",
        ],
        codeSnippets: [
            {
                title: "Document flow",
                language: "ts",
                code: `const file = await openDocument(input);
const pages = await buildCanvasPages(file);
setActivePage(pages[0]);
setActiveTool("highlighter");`,
            },
            {
                title: "Export pipeline",
                language: "ts",
                code: `const annotationState = collectAnnotations();
const pdfBytes = await exportDocument(annotationState, {
  includeImages: true,
  preservePageOrder: true,
});

saveAsPdf(pdfBytes);`,
            },
        ],
        img: "/colora-screenshot.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://colora-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/colora",
        category: "Community Platform",
        techStack: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
        details: "Colora is a pastel-inspired PDF annotation and document editing application built to keep the workspace calm, minimal, and efficient while still supporting serious editing workflows.",
        features: [
            "Open PDFs, images, or blank pages",
            "Freehand drawing and highlighter tools",
            "Text, notes, shapes, and signatures",
            "Multi-page editing and export",
            "Keyboard shortcuts for fast editing",
            "Rounded, calm, minimal interface",
        ],
    },
    {
        id: 5,
        title: "Scrum",
        des: "A streamlined scrum project for planning, tracking, and moving work through a simple team flow.",
        overview: "Scrum is a team workflow product built to make sprint planning and task movement feel simple, visible, and easy to maintain. It focuses on giving teams a clean place to organize work without adding unnecessary process overhead.",
        challenge: "Many team tools become cluttered quickly, so the goal here was to preserve clarity while still covering the essentials of a scrum workflow.",
        solution: "I designed a compact interface around task visibility, sprint organization, and a straightforward collaboration flow backed by Supabase.",
        outcome: "The platform gives teams a practical way to manage work with less noise and a smoother day-to-day planning experience.",
        img: "/scrum-screenshot.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase.svg"],
        link: "https://scrum-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/Scrum",
        category: "Productivity",
        techStack: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
        details: "Scrum is a focused workspace for teams that want sprint planning, task visibility, and day-to-day collaboration without unnecessary clutter. The interface keeps the workflow light and practical so teams can stay aligned without spending time on complex setup.",
        features: [
            "Sprint planning and task tracking",
            "Clear workflow views",
            "Lightweight collaboration design",
            "Supabase-backed data layer",
            "Built for everyday team use",
        ],
    },
    {
        id: 6,
        title: "APEX",
        des: "Bridging the gap between technical skills and visionary ideas through student collaboration.",
        overview: "APEX is a student collaboration platform built to help technical and non-technical students share ideas, form teams, and turn early concepts into projects. It is meant to be a practical bridge between brainstorming and execution.",
        challenge: "The main challenge was making collaboration feel approachable for different kinds of students, not just people already comfortable with technical tools.",
        solution: "I structured the product around idea sharing, community discovery, and lightweight coordination, backed by Firebase for reliable app data handling.",
        outcome: "The result is a community-first platform that encourages students to participate earlier and collaborate more naturally.",
        img: "/apex-screenshot.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/firebase.svg", "/ver.svg"],
        link: "https://apex-mit.vercel.app/",
        githubLink: "https://github.com/arnabjena007/Apex-MITB",
        category: "Community Platform",
        techStack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase", "Vercel"],
        details: "APEX is a community platform for helping technical and non-technical students collaborate, share ideas, and turn early project concepts into something real. It focuses on lowering the barrier to participation and making project discovery feel more social and accessible.",
        features: [
            "Student idea sharing",
            "Cross-discipline collaboration",
            "Firebase-backed backend services",
            "Project discovery and community flow",
            "Accessible onboarding for new users",
        ],
    },
    {
        id: 7,
        title: "Mapify",
        des: "A modern, interactive web application for finding shortest paths in Kolkata using Dijkstra's algorithm.",
        overview: "Mapify is an interactive route-finding application for Kolkata that helps users discover shortest paths through a map-first experience. It combines search, direct map selection, and algorithmic path calculation into one focused interface.",
        challenge: "The main challenge was presenting graph-search results in a way that stays understandable while users interact with the map in real time.",
        solution: "I built a Leaflet-based interface that supports direct clicks, text input, and real-time Dijkstra path visualization with clear route metrics.",
        outcome: "The app turns shortest-path computation into something visual and approachable, which makes the route data easier to trust and use.",
        img: "/mapify-screenshot.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
        link: "https://mapify-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/Mapify",
        category: "Web Application",
        techStack: ["React", "Leaflet", "Dijkstra Algorithm", "TailwindCSS"],
        details: "A modern, interactive web application for finding shortest paths in Kolkata using Dijkstra's algorithm. It uses a map-first interface to let users choose points directly or through text input, then visualizes the resulting route with clear supporting metrics.",
        features: [
            "Leaflet map with OpenStreetMap tiles",
            "Real-time Dijkstra path visualization",
            "Multiple input modes for route selection",
            "Distance, segment, and timing metrics",
            "Interactive map-first user experience",
        ],
    }
    ,
    {
        id: 8,
        title: "Nehru",
        des: "An immersive historical introduction that uses motion, portrait animation, and narrative pacing to create a quiet entry into the story.",
        overview: "Nehru is an atmospheric interactive experience that introduces a historical voice through a cinematic landing flow. It focuses on mood, pacing, and restrained interaction instead of dense UI so the portrait and narration can do the heavy lifting.",
        whatItIs: "A narrative-first web experience built around a portrait reveal, a short guided intro, and a transition into the main conversation.",
        problem: "Historical or documentary-style web pages often feel static, which makes the opening moment forgettable and weakens the emotional connection.",
        howItWorks: "The page opens with an animated portrait sequence, a brief intro panel, and a continue flow that moves the user from presentation into the main content at a deliberate pace.",
        whyItStandsOut: "Nehru stands out because it uses restraint as the design language. The interface is quiet, the typography is formal, and the experience relies on timing and composition rather than heavy interaction.",
        repositoryStructure: [
            "Intro/landing logic handles the portrait reveal and skip flow",
            "Narrative sections control the transition into the main experience",
            "Motion and animation layers guide pacing and attention",
            "Shared UI components keep the presentation consistent",
        ],
        installation: [
            "git clone https://github.com/arnabjena007/nehru.git",
            "cd nehru",
            "npm install",
            "npm run dev",
        ],
        setupNotes: [
            "Built as a browser experience with a strong visual focus",
            "Best viewed on a larger screen to preserve the composition",
            "Use the intro flow first, then continue into the main narrative",
        ],
        localRun: [
            "npm run dev",
            "Open the local development URL shown in the terminal",
        ],
        flagReference: [
            "Skip Intro: jumps past the opening sequence",
            "Continue: enters the main experience",
        ],
        codeSnippets: [
            {
                title: "Intro state",
                language: "ts",
                code: `const [introDone, setIntroDone] = useState(false);

const continueToStory = () => {
  setIntroDone(true);
  setTimeout(() => scrollToNarrative(), 300);
};`,
            },
            {
                title: "Portrait reveal",
                language: "ts",
                code: `useEffect(() => {
  const timer = setTimeout(() => {
    setPortraitVisible(true);
  }, 150);

  return () => clearTimeout(timer);
}, []);`,
            },
        ],
        img: "/p4.jpg",
        iconLists: ["/next.svg", "/tail.svg", "/ver.svg"],
        link: "https://nehru-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/nehru",
        category: "Interactive Experience",
        techStack: ["Next.js", "TypeScript", "TailwindCSS"],
        details: "An immersive historical introduction that uses motion, portrait animation, and narrative pacing to create a quiet entry into the story. It is designed to feel cinematic, restrained, and deliberate.",
        features: [
            "Portrait-led intro sequence",
            "Skip and continue flow",
            "Narrative pacing and motion",
            "Quiet editorial typography",
            "Minimal interface with strong composition",
        ],
    }
];

export const featuredProjects = [
    {
        id: 1,
        title: "Pixlate",
        des: "Generating pixel art in under 60 seconds using Golang and parallel processing.",
        overview: "Pixlate is a Go-powered pixel art generator built for speed, scale, and batch-friendly workflows. It converts standard images into dense pixel art compositions without sacrificing performance, making it useful for creators who want an automated way to produce stylized output from large source images.",
        challenge: "The core problem was processing large images quickly enough to keep the experience practical, especially when pixelation has to happen across thousands or millions of pixels.",
        solution: "I used Go's concurrency model to split work across goroutines and process image blocks in parallel, which keeps runtime low even for high-resolution inputs.",
        outcome: "The result is a fast command-line tool that handles big images efficiently and keeps the user workflow simple, predictable, and scriptable.",
        img: "/pixlate-final.png",
        iconLists: ["/go.svg", "/ver.svg"],
        link: "https://pixlate-web.vercel.app/",
        githubLink: "https://github.com/arnabjena007/PixlateWeb",
        category: "Full Stack",
        techStack: ["Golang"],
    },
    {
        id: 2,
        title: "Indicoded",
        des: "Interactive data visualization exploring Indian cultural patterns using D3.js, p5.js, and React.",
        overview: "Indicoded is an interactive storytelling experience that explores Indian cultural patterns through motion, color, and data visualization. The project mixes narrative presentation with responsive graphics so users can browse cultural ideas in a visually immersive way.",
        challenge: "The challenge was turning cultural exploration into something engaging without making the interface feel like a static museum page.",
        solution: "I combined D3.js for structured data-driven visuals with p5.js for expressive generative elements, all wrapped in a React interface for smooth interaction.",
        outcome: "The final experience feels more like a guided visual journey than a dashboard, giving users a more memorable way to explore the material.",
        img: "/indecoded-screenshot.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://indicoded.vercel.app/",
        githubLink: "https://github.com/In-decoded",
        category: "Frontend",
        techStack: ["React", "TypeScript"],
    },
    {
        id: 3,
        title: "GitMap",
        des: "A React component for visualizing GitHub contributions and heatmap with customizable themes.",
        overview: "GitMap is a reusable React component that turns GitHub contribution data into an expressive heatmap interface. It is designed to help developers visualize activity patterns with a clean, customizable widget that can fit into dashboards, profiles, and open-source tooling.",
        challenge: "The difficult part was balancing flexibility and polish so the component could be reused in different products without feeling generic.",
        solution: "I built a configurable component API with theme support, time filters, and interactive controls so users can tailor the display to their needs.",
        outcome: "The component feels lightweight to integrate while still offering enough visual richness and metadata to be genuinely useful.",
        img: "/gitmap-screenshot.png",
        iconLists: ["/re.svg", "/ts.svg", "/ver.svg"],
        link: "https://gitmap-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/gitmap",
        category: "Open Source",
        techStack: ["React", "TypeScript", "Vercel"],
    },
    {
        id: 4,
        title: "Scrum",
        des: "A streamlined scrum project for planning, tracking, and moving work through a simple team flow.",
        overview: "Scrum is a team workflow product built to make sprint planning and task movement feel simple, visible, and easy to maintain. It focuses on giving teams a clean place to organize work without adding unnecessary process overhead.",
        challenge: "Many team tools become cluttered quickly, so the goal here was to preserve clarity while still covering the essentials of a scrum workflow.",
        solution: "I designed a compact interface around task visibility, sprint organization, and a straightforward collaboration flow backed by Supabase.",
        outcome: "The platform gives teams a practical way to manage work with less noise and a smoother day-to-day planning experience.",
        img: "/scrum-screenshot.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase.svg"],
        link: "https://scrum-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/Scrum",
        category: "Productivity",
        techStack: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    },
    {
        id: 5,
        title: "Colora",
        des: "A polished editor for marking up PDFs without the clutter.",
        overview: "Colora is a focused PDF markup tool designed around calm visual language and fast annotation flows. It keeps the interface light while still making it easy to inspect, mark up, and organize document pages.",
        challenge: "Document tools often become visually heavy, so the challenge was to make a utility that felt premium without overwhelming the page.",
        solution: "I used a restrained interface, careful spacing, and a simplified interaction model so the document stays at the center of attention.",
        outcome: "The app offers a cleaner markup experience that feels more intentional than a typical utility editor.",
        img: "/colora-screenshot.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ver.svg"],
        link: "https://colora-devo.vercel.app/",
        githubLink: "https://github.com/arnabjena007/colora",
        category: "Community Platform",
        techStack: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
    },
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
        link: "https://x.com/ArnabJena11",
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/arnabjena/",
    },
];



