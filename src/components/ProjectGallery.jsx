import { Link } from "react-router-dom";
import { projects } from "../data/resumeData";
import CoverPlaceholder from "./CoverPlaceholder";
import Reveal from "./Reveal";

export default function ProjectGallery() {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-white py-4 sm:py-5 dark:bg-navy-950">
    <div className="section-shell w-full">
      <Reveal className="max-w-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-navy-600 sm:text-xs dark:text-navy-300">
          Selected Work
        </p>
        <h2 className="mt-1 text-base font-bold tracking-tight text-ink-900 sm:text-xl dark:text-white">
          Project Gallery
        </h2>
      </Reveal>

      <div className="mt-2.5 flex flex-col gap-2 sm:mt-3 sm:gap-2.5">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <Link
              to={`/projects/${project.id}`}
              className="group flex flex-row items-stretch overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-navy-300 hover:shadow-lg dark:border-navy-800 dark:bg-navy-900 dark:hover:border-navy-600"
            >
              <CoverPlaceholder
                label="Cover soon"
                className="w-20 flex-shrink-0 sm:w-1/3 sm:min-w-[140px] md:w-1/4"
              />
              <div className="flex flex-1 flex-col justify-center p-2 sm:p-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-navy-500 sm:text-xs dark:text-navy-400">
                  {project.subtitle}
                </span>
                <h3 className="mt-0.5 text-sm font-bold text-ink-900 group-hover:text-navy-800 sm:text-base dark:text-white dark:group-hover:text-navy-300">
                  {project.name}
                </h3>
                <p className="mt-1 hidden text-xs leading-snug text-ink-500 sm:line-clamp-1 sm:block dark:text-navy-300">
                  {project.blurb}
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1 sm:mt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-navy-50 px-2 py-0.5 text-[10px] font-medium text-navy-700 dark:bg-navy-800 dark:text-navy-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
    </div>
  );
}
