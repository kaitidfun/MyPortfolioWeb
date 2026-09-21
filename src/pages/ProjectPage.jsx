import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/resumeData";
import DemoPlaceholder from "../components/DemoPlaceholder";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { demoType, details } = project;

  return (
    <>
    <article className="section-shell py-16 sm:py-20">
      <Reveal>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy-600 transition hover:text-navy-800 dark:text-navy-300 dark:hover:text-white"
        >
          &larr; Back to projects
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mt-6 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-navy-600 dark:text-navy-300">
          {details.subheading}
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl dark:text-white">
          {details.heading}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-500 dark:text-navy-300">
          {details.description}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <DemoPlaceholder type={demoType} label={details.demoLabel} />
      </Reveal>

      <Reveal delay={0.15} className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800 dark:text-navy-200">
            Highlights
          </h2>
          <ul className="mt-4 space-y-3">
            {details.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-ink-700 dark:text-navy-200">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-500" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {details.certification && (
            <p className="mt-5 rounded-lg bg-navy-50 px-4 py-3 text-xs font-medium text-navy-700 dark:bg-navy-900 dark:text-navy-300">
              {details.certification}
            </p>
          )}
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800 dark:text-navy-200">
            Tech Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {details.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-navy-200 px-3 py-1 text-xs font-medium text-navy-800 dark:border-navy-700 dark:text-navy-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </article>
    <Footer />
    </>
  );
}
