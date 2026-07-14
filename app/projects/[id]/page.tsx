import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { projects } from "@/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";
import CodeSnippetBlock from "@/components/sections/CodeSnippetBlock";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

type ProjectDetail = {
  overview?: string;
  whatItIs?: string;
  problem?: string;
  howItWorks?: string;
  whyItStandsOut?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  repositoryStructure?: string[];
  installation?: string[];
  setupNotes?: string[];
  localRun?: string[];
  flagReference?: string[];
  codeSnippets?: Array<{
    title: string;
    language: string;
    code: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const project = projects.find((p) => p.id.toString() === id);
  
  if (!project) return null;
  const detailProject = project as typeof project & ProjectDetail;

  return (
    <div className="w-full min-h-screen font-serif dark:bg-[#09090B]">
      <div className="w-full max-w-3xl mx-auto border-l border-r border-neutral-200 dark:border-white/[0.1]">
        <div className="relative h-28 border-b border-neutral-200 dark:border-neutral-800/60 overflow-hidden">
          <div className="absolute inset-0 dotted-background" />
        </div>

        <main className="relative border-b border-neutral-200 dark:border-neutral-800/60 font-serif tracking-tight">
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -left-1 absolute border" />
          <div className="w-2 h-2 bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 -top-1 -right-1 absolute border" />

          <div className="px-4 sm:px-6 py-4 items-center flex gap-2">
            <Link href={"/projects"}>
              <div className="text-neutral-700 w-fit hover:dark:bg-neutral-900 hover:dark:border-neutral-800 rounded-md border border-transparent hover:border-neutral-200 hover:bg-neutral-50">
                <ChevronLeft />
              </div>
            </Link>
            <p className="text-lg font-serif font-semibold text-amber-300">{project?.title}</p>
          </div>

          {/* Preview Image */}
          <div className="mx-4 sm:mx-6 border rounded-lg p-2 border-neutral-200 dark:border-neutral-800 relative aspect-video overflow-hidden">
            <Image src={project?.img} alt={project?.title} fill className="object-cover rounded" />
          </div>

          {/* Links Block */}
          <div className="mt-4 grid grid-cols-2 divide-x divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800 text-sm">
            <Link
              href={project?.githubLink || project?.link}
              target="_blank"
              className="flex items-center justify-center gap-1.5 py-2.5 text-white hover:bg-neutral-950/40 transition-colors cursor-pointer font-serif"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </Link>

            <Link
              href={project?.link}
              target="_blank"
              className={`flex items-center justify-center gap-1.5 py-2.5 hover:bg-neutral-950/40 text-white cursor-pointer transition-colors font-serif`}
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

          <div className="flex items-start px-4 sm:px-6 justify-center flex-col gap-5 py-5">
            <div className="flex items-center w-full justify-between">
              <h3 className="text-5xl md:text-7xl leading-none font-serif font-semibold text-amber-300 tracking-tight">
                {project?.title}
              </h3>
              <span className="text-[11px] flex items-center gap-1 justify-center rounded-full text-emerald-300 font-serif">
                <div className="w-3 h-3 relative">
                  <div className="w-3 h-3 animate-ping rounded-full bg-green-300" />
                  <div className="absolute w-2 h-2 -translate-y-1/2 left-1/2 top-1/2 bg-green-500 rounded-full -translate-x-1/2" />
                </div>
                Live
              </span>
            </div>

            <Section title="Overview" text={detailProject.overview || project?.details || project?.des} />
            <Section title="What It Is" text={detailProject.whatItIs} />
            <Section title="Problem" text={detailProject.problem} />
            <Section title="How It Works" text={detailProject.howItWorks} />
            <Section title="Why It Stands Out" text={detailProject.whyItStandsOut} />
            <Section title="Challenge" text={detailProject.challenge} />
            <Section title="Solution" text={detailProject.solution} />
            <Section title="Outcome" text={detailProject.outcome} />
          </div>

          {detailProject.repositoryStructure?.length ? (
            <PlainListSection title="Repository Structure" items={detailProject.repositoryStructure} accent="text-amber-300" />
          ) : null}

          {detailProject.installation?.length ? (
            <CommandListSection title="Installation" items={detailProject.installation} />
          ) : null}

          {detailProject.localRun?.length ? (
            <CommandListSection title="Local Run" items={detailProject.localRun} />
          ) : null}

          {detailProject.flagReference?.length ? (
            <PlainListSection title="Flags" items={detailProject.flagReference} accent="text-amber-300" />
          ) : null}

          {detailProject.codeSnippets?.length ? (
            <div className="px-4 sm:px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-lg font-serif font-semibold text-amber-300 mb-3 tracking-wide">
                Code Snippets
              </p>
              <div className="space-y-4">
                {detailProject.codeSnippets.map((snippet, index) => (
                  <CodeSnippetBlock
                    key={index}
                    title={snippet.title}
                    language={snippet.language}
                    code={snippet.code}
                  />
                ))}
              </div>
            </div>
          ) : null}

          {detailProject.setupNotes?.length ? (
            <PlainListSection title="Setup Notes" items={detailProject.setupNotes} accent="text-amber-300" />
          ) : null}

          {project?.features?.length ? (
            <div className="px-4 sm:px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-lg font-serif font-semibold text-amber-300 mb-3 tracking-wide">
                Key Features
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <div key={index} className="rounded-md border border-amber-300/10 bg-white/5 px-3 py-2 text-sm text-neutral-200 font-serif">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="px-4 sm:px-6 py-4 border-y border-neutral-200 dark:border-neutral-800">
            <p className="text-lg font-serif font-semibold text-amber-300 mb-2.5 tracking-wide ">
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

          <div className="p-4 font-serif border-neutral-200 dark:border-neutral-900 items-center justify-center flex">
            <p className="text-sm text-neutral-400">
              For more cool projects, visit my{" "}
              <Link
                href={"https://github.com/arnabjena007"}
                target={"_blank"}
                className="text-amber-300 font-semibold"
              >
                GitHub.
              </Link>
            </p>
          </div>
        </main>

        <div className="-mx-px">
          <Footer />
        </div>

        <div className="relative h-28 border-t border-neutral-200 dark:border-neutral-800/60 overflow-hidden">
          <div className="absolute inset-0 dotted-background" />
        </div>
      </div>
    </div>
  );
};

export default Page;

const Section = ({ title, text }: { title: string; text?: string }) => {
  if (!text) return null;

  return (
    <div className="w-full">
      <p className="text-xs uppercase tracking-[0.35em] text-amber-300 mb-2 font-serif">
        {title}
      </p>
      <p className="text-wrap text-neutral-100 leading-8 font-serif text-[17px]">
        {text}
      </p>
    </div>
  );
};

const PlainListSection = ({ title, items, accent }: { title: string; items: string[]; accent: string }) => (
  <div className="px-4 sm:px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
    <p className={`text-lg font-serif font-semibold mb-3 tracking-wide ${accent}`}>
      {title}
    </p>
    <div className="space-y-1.5 text-neutral-200 font-serif text-[15px] leading-7">
      {items.map((item, index) => (
        <p key={index} className="before:content-['-'] before:mr-2 before:text-amber-300">
          {item}
        </p>
      ))}
    </div>
  </div>
);

const CommandListSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="px-4 sm:px-6 py-4 border-t border-neutral-200 dark:border-neutral-800">
    <p className="text-lg font-serif font-semibold text-amber-300 mb-3 tracking-wide">
      {title}
    </p>
    <CodeSnippetBlock
      title={title}
      language="sh"
      code={items.join("\n")}
    />
  </div>
);

const Badge = ({ name, icon }: { name: string; icon?: React.ReactNode }) => (
  <div className="inline-flex  items-center gap-1.5 px-3 py-1 rounded-md border border-dashed border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors cursor-default select-none whitespace-nowrap">
    {icon && <span className="flex items-center justify-center">{icon}</span>}
    {name}
  </div>
);
