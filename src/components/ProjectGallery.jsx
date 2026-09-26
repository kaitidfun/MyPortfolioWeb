import { Link } from "react-router-dom";
import { projects } from "../data/resumeData";
import CoverPlaceholder from "./CoverPlaceholder";
import Reveal from "./Reveal";

export default function ProjectGallery() {
  return (
    <div className="flex h-full w-full flex-col justify-center bg-white py-16 sm:py-20 dark:bg-navy-950">
    <div className="section-shell w-full">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 sm:text-sm dark:text-navy-300">
          Selected Work
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-ink-900 sm:mt-3 sm:text-4xl dark:text-white">
          Project Gallery
        </h2>
        <p className="mt-2 hidden text-sm text-ink-500 sm:mt-3 sm:block dark:text-navy-300">
          Four projects spanning generative AI, IoT hardware, game design, and
          interactive design — click a card for the full write-up.
        </p>
      </Reveal>

      <div className="mt-6 flex flex-col gap-4 sm:mt-10 sm:gap-6">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <Link
              to={`/projects/${project.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg dark:border-navy-800 dark:bg-navy-900 dark:hover:border-navy-600"
            >
              <CoverPlaceholder />
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-wide text-navy-500 dark:text-navy-400">
                  {project.subtitle}
                </span>
                <h3 className="mt-1 text-base font-bold text-ink-900 group-hover:text-navy-800 sm:mt-2 sm:text-xl dark:text-white dark:group-hover:text-navy-300">
                  {project.name}
                </h3>
                <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-ink-500 sm:block dark:text-navy-300">
                  {project.blurb}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-navy-50 px-2.5 py-1 text-[11px] font-medium text-navy-700 sm:px-3 sm:text-xs dark:bg-navy-800 dark:text-navy-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-3 hidden items-center text-sm font-semibold text-navy-700 sm:mt-6 sm:inline-flex dark:text-navy-300">
                  View details
                  <span className="ml-1 transition group-hover:translate-x-1">
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
    </div>
  );
}
