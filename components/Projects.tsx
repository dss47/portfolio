import { Project, projectsData } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="px-3 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold font-lora mb-10">Projects</h1>
        <div className="flex flex-col gap-8">
          {projectsData.map((p: Project) => (
            <ProjectCard key={p.title} projectData={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
