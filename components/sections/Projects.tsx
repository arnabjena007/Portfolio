import Link from "next/link";
import { projects } from "@/data";
import { Link as LinkIcon, ChevronLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// Reusing the adapted ProjectCard that matches your data
const ProjectCard = ({ 
  title, 
  description, 
  isActive, 
  category, 
  projectImage, 
  stack, 
  iconLists,
  link, 
  id 
}: {
  title: string;
  description: string;
  isActive: boolean;
  category: string;
  projectImage: string;
  stack: string[];
  iconLists?: string[];
  link: string;
  id: number;
}) => {
  return (
    <Link href={`/projects/${id}`} className="group block h-full">
      <div className="flex flex-col h-full relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800/60 bg-white dark:bg-[#0a0a0c] hover:bg-neutral-50 dark:hover:bg-[#121215] hover:-translate-y-2 hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700/80 transition-all duration-300 ease-out">
        
        {/* Media section with permanent grid background */}
        <div className="w-full h-44 relative overflow-hidden bg-neutral-100 dark:bg-[#111115] border-b border-neutral-100 dark:border-neutral-800/50 transition-all duration-500 ease-out">
          
          {/* Grid pattern (always visible) */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
               style={{ backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
          </div>

          {/* Project Image (Hidden till half, pops up slightly but stays attached to bottom) */}
          <div className="absolute inset-x-6 top-0 h-full transform translate-y-[40%] rounded-t-xl transition-all duration-500 ease-out group-hover:translate-y-[20%] group-hover:scale-[0.95] overflow-hidden shadow-none group-hover:shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)] z-10 border-t border-l border-r border-transparent group-hover:border-neutral-200 dark:group-hover:border-neutral-700/50">
            <Image 
              src={projectImage} 
              alt={title} 
              fill 
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="p-5 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold font-sans text-neutral-900 dark:text-white transition-colors inline-flex items-center gap-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">
              <span className="group-hover:underline decoration-neutral-300 dark:decoration-neutral-600 underline-offset-4">{title}</span>
              <LinkIcon size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-neutral-400" />
            </h3>
          </div>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-6 leading-relaxed">
          {description}
        </p>

          <div className="flex items-center justify-between mt-auto">
            {/* Tech Stack Icons */}
            <div className="flex items-center -space-x-2">
              {iconLists?.slice(0, 4).map((icon, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-white dark:bg-[#151518] border border-neutral-200 dark:border-neutral-700 flex items-center justify-center p-1.5 shadow-sm relative z-[4-i]">
                  <Image src={icon} alt="tech" width={16} height={16} className="object-contain" />
                </div>
              ))}
              {iconLists && iconLists.length > 4 && (
                <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-[10px] font-medium text-neutral-600 dark:text-neutral-400 shadow-sm relative z-0">
                  +{iconLists.length - 4}
                </div>
              )}
            </div>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
              View Project <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-2xl mx-auto px-3 py-6">
        <div className="flex items-baseline justify-between mb-5">
          <h2 className="relative font-serif italic text-3xl md:text-4xl inline-block font-bold text-neutral-900 dark:text-neutral-100">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(0, 4).map((p, i) => {
            return (
              <ProjectCard
                key={i}
                id={p.id}
                title={p.title}
                description={p.des}
                isActive={!p.link.includes('github')}
                category={p.category}
                projectImage={p.img}
                stack={p.techStack || []}
                iconLists={p.iconLists}
                link={p.link}
              />
            );
          })}
        </div>
        <div className="flex mt-6 w-full items-center justify-center">
          <Link href="/projects">
            <button className="group flex items-center gap-2 rounded-lg ring-1 active:scale-95 ring-neutral-200 dark:ring-neutral-800 bg-white dark:bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-950 px-4 py-2 dark:text-white font-medium text-neutral-800 shadow-sm dark:shadow-lg hover:shadow-md transition-all duration-200">
              More Projects
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition duration-300"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
