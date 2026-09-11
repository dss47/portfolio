
import { Project } from "@/lib/data";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Code2 } from "lucide-react";

type ProjectCardProps = {
  projectData: Project;
};

export default function ProjectCard({ projectData }: ProjectCardProps) {

  return (
    <div className="group border border-zinc-800 w-full bg-zinc-900/75 flex flex-col sm:flex-row items-center gap-6 p-3 transition-all duration-200 hover:scale-101 hover:border-zinc-600 hover:shadow-lg hover:shadow-zinc-900/50 transform-gpu">
      <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-zinc-500 transition-colors duration-300 group-hover:border-white" />
      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-zinc-500 transition-colors duration-300 group-hover:border-white" />
      <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-zinc-500 transition-colors duration-300 group-hover:border-white" />
      <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-zinc-500 transition-colors duration-300 group-hover:border-white" />
      <Image
        src={projectData.imageUrl}
        alt={projectData.title}
        width={400}
        height={400}
        className="w-full sm:w-72 h-48 sm:h-auto rounded-xl object-cover shrink-0"
      />

      <div className="w-full flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{projectData.title}</h2>
          <span className="text-xs text-zinc-400">{projectData.date}</span>
        </div>

        <div>
          <p className={`text-xs text-zinc-400 line-clamp-2`}>
            {projectData.description}
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-1.5">
          {projectData.tags.map((tag) => (
            <div
              key={tag.name}
              className="flex flex-row justify-center items-center gap-1 px-2.5 py-1.5 bg-zinc-700/10 border border-zinc-700 rounded-full text-xs"
            >
              <img src={tag.icon} alt={tag.name} width={16} height={16} />
              <span className="text-s font-bold text-gray-300">{tag.name}</span>
            </div>
          ))}
        </div>

        {projectData.githubUrl && (
          <a
            href={projectData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-m text-zinc-400 hover:text-white transition-colors"
          >
            <Code2 size={14} />
            <span>Github</span>
            <ArrowUpRight size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
