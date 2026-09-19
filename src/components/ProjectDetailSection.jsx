import DemoPlaceholder from "./DemoPlaceholder";

export default function ProjectDetailSection({ project, reverse }) {
  const { id, demoType, details } = project;

  return (
    <div
      id={id}
      className="grid scroll-mt-24 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16"
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="text-sm font-semibold uppercase tracking-widest text-navy-600">
          {details.subheading}
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
          {details.heading}
        </h3>
        <p className="mt-4 leading-relaxed text-ink-500">
          {details.description}
        </p>

        <ul className="mt-6 space-y-3">
          {details.highlights.map((point) => (
            <li key={point} className="flex gap-3 text-sm text-ink-700">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-500" />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {details.certification && (
          <p className="mt-5 rounded-lg bg-navy-50 px-4 py-3 text-xs font-medium text-navy-700">
            {details.certification}
          </p>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {details.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-navy-200 px-3 py-1 text-xs font-medium text-navy-800"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={reverse ? "lg:order-1" : ""}>
        <DemoPlaceholder type={demoType} label={details.demoLabel} />
      </div>
    </div>
  );
}
