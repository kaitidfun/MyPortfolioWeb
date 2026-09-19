import { projects } from "../data/resumeData";

export default function ProjectGallery() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Project Gallery
        </h2>
        <p className="mt-3 text-ink-500">
          Three projects spanning generative AI, IoT hardware, and interactive
          design — click a card to jump to the full breakdown.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-navy-300 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-navy-500">
              {project.subtitle}
            </span>
            <h3 className="mt-2 text-xl font-bold text-ink-900 group-hover:text-navy-800">
              {project.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-500">
              {project.blurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-6 inline-flex items-center text-sm font-semibold text-navy-700">
              View details
              <span className="ml-1 transition group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
