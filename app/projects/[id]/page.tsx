import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { projects } from "@/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);
  
  if (!project) return null;

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-[#09090B] mt-2">
      {/* Block */}
      <div className="w-full border-t z-0 items-center justify-center flex border-neutral-200 dark:border-neutral-900">
        <div className="max-w-2xl w-full relative mx-auto">
          <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12"></div>
        </div>
      </div>
      <div className="w-full relative border-b border-t font-mono tracking-tight dark:border-neutral-900 border-neutral-200">
        <div className="mx-auto gap-1  flex flex-col max-w-2xl border-x dark:border-neutral-900 border-neutral-200    relative">
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border"></div>
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800  -top-1 -right-1 absolute border"></div>
          <div className="p-2 items-center flex gap-2 mt-2">
            <Link href={"/projects"}>
              <div className="text-neutral-700 w-fit hover:dark:bg-neutral-900 hover:dark:border-neutral-800 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50">
                <ChevronLeft />
              </div>
            </Link>
            <p className="text-lg font-sans font-semibold">{project?.title}</p>
          </div>
          {/* Video Block (Mocked with image since there's no ProjectVideoPlayer) */}
          <div className="h-70 border m-2 rounded-lg p-2 border-neutral-200 dark:border-neutral-800 relative aspect-video">
            <Image src={project?.img} alt={project?.title} fill className="object-cover rounded" />
          </div>
          {/* Links Block */}
          <div className="w-full p-2 grid  m-2 grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-900  rounded-lg overflow-hidden text-sm">
            <Link
              href={project?.link}
              target="_blank"
              className="flex items-center justify-center gap-1.5 py-2.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              Github
            </Link>

            <Link
              href={project?.link}
              target="_blank"
              className={`flex items-center  justify-center gap-1.5 py-2.5   hover:bg-neutral-50 text-neutral-600 dark:text-neutral-400  dark:hover:bg-neutral-900 cursor-pointer transition-colors`}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
              Live Link
            </Link>
          </div>
          <div className="flex items-start mx-5 justify-center flex-col">
            <div className="flex items-center w-full justify-between">
              <h3 className="text-xl font-sans font-semibold">
                {project?.title}
              </h3>
              <span
                className={`text-[11px] flex items-center gap-1 justify-center  rounded-full text-emerald-700  dark:text-emerald-400`}
              >
                <div className="w-3 h-3 relative">
                  <div
                    className={`w-3 h-3 animate-ping rounded-full bg-green-300`}
                  ></div>{" "}
                  <div
                    className={`absolute w-2 h-2 -translate-y-1/2 left-1/2 top-1/2 bg-green-500 rounded-full   -translate-x-1/2`}
                  />
                </div>
                Live
              </span>
            </div>
            <div>
              <p className="text-wrap text-neutral-800 dark:text-neutral-200  py-3 ">
                {project?.details || project?.des}
              </p>
            </div>
          </div>
          <div className="px-5 py-3  border-y border-neutral-200 dark:border-neutral-800">
            <p className="text-lg font-sans font-semibold text-neutral-800 dark:text-neutral-300 mb-2.5 tracking-wide ">
              Stack used
            </p>
            <div className="flex flex-wrap gap-2 pb-2">
              {project?.techStack.map((item, i) => {
                  const iconSrc = project.iconLists?.[i];
                  const icon = iconSrc ? <Image src={iconSrc} alt={item} width={12} height={12} className="opacity-70" /> : null;
                  return <Badge key={i} name={item} icon={icon} />;
              })}
            </div>
          </div>
          <div className="p-4 -mt-1 font-sans border-neutral-200 dark:border-neutral-900 items-center justify-center flex ">
            <p className="text-sm text-neutral-600">
              For more cool projects, visit my{" "}
              <Link
                href={"https://github.com/arnabjena007"}
                target={"_blank"}
                className="text-neutral-900 dark:text-neutral-300 font-semibold"
              >
                Github.
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <div className="w-full border-b z-0 items-center justify-center flex border-neutral-200 dark:border-neutral-900">
        <div className="max-w-2xl w-full relative mx-auto">
          <div className="dotted-background w-full h-[12.5rem] flex items-center justify-center p-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Badge = ({ name, icon }: { name: string; icon?: React.ReactNode }) => (
  <div className="inline-flex  items-center gap-1.5 px-3 py-1 rounded-md border border-dashed border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors cursor-default select-none whitespace-nowrap">
    {icon && <span className="flex items-center justify-center">{icon}</span>}
    {name}
  </div>
);
