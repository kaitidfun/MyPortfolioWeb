import { projects } from "../data/resumeData";
import ProjectDetailSection from "./ProjectDetailSection";

export default function ProjectDetails() {
  return (
    <section className="section-shell py-8 sm:py-12">
      <div className="divide-y divide-navy-100">
        {projects.map((project, index) => (
          <ProjectDetailSection
            key={project.id}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
