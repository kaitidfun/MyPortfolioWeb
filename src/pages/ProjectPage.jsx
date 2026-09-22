import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/resumeData";
import DemoPlaceholder from "../components/DemoPlaceholder";
import GestureList from "../components/GestureList";
import HeroClip from "../components/HeroClip";
import StatsCallout from "../components/StatsCallout";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import HardwarePhotos from "../components/HardwarePhotos";
import ChallengesList from "../components/ChallengesList";
import { GithubIcon } from "../components/Icons";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

function SectionHeading({ children }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-wide text-navy-800 dark:text-navy-200">
      {children}
    </h2>
  );
}

function BackToProjectsLink() {
  return (
    <Link
      to="/#projects"
      className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-navy-200 bg-white py-1.5 pl-1.5 pr-3.5 text-xs font-semibold text-navy-700 shadow-sm transition hover:border-navy-300 hover:bg-navy-50 dark:border-navy-700 dark:bg-navy-900 dark:text-navy-200 dark:hover:bg-navy-800"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy-100 text-navy-700 dark:bg-navy-800 dark:text-navy-200">
        &larr;
      </span>
      Back to projects
    </Link>
  );
}

function ProjectHeader({ project, details, compact = false }) {
  if (compact) {
    return (
      <>
        <Reveal className="flex flex-wrap items-center gap-3">
          <BackToProjectsLink />
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-600 dark:text-navy-300">
            {details.subheading}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-4">
          <h1 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
            {details.heading}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-navy-300">
            {details.description}
          </p>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-900 dark:bg-navy-700 dark:hover:bg-navy-600"
            >
              <GithubIcon className="h-4 w-4" />
              View source on GitHub
            </a>
          )}
        </Reveal>
      </>
    );
  }

  return (
    <>
      <Reveal>
        <BackToProjectsLink />
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

        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-900 dark:bg-navy-700 dark:hover:bg-navy-600"
          >
            <GithubIcon className="h-4 w-4" />
            View source on GitHub
          </a>
        )}
      </Reveal>
    </>
  );
}

function HighlightsAndTechStack({ details, compact = false }) {
  return (
    <div className={compact ? "flex flex-col gap-8" : "grid gap-10 sm:grid-cols-2"}>
      <div>
        <SectionHeading>Highlights</SectionHeading>
        <ul className="mt-4 space-y-3">
          {details.highlights.map((point) => (
            <li
              key={point}
              className={`flex gap-3 text-ink-700 dark:text-navy-200 ${compact ? "text-xs" : "text-sm"}`}
            >
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
        <SectionHeading>Tech Stack</SectionHeading>
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
    </div>
  );
}

function IotProjectLayout({ project, details }) {
  return (
    <article className="section-shell py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[300px_1fr] lg:items-start lg:gap-10 xl:grid-cols-[340px_1fr] xl:gap-14">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <ProjectHeader project={project} details={details} compact />
          <Reveal delay={0.15} className="mt-10">
            <HighlightsAndTechStack details={details} compact />
          </Reveal>
        </div>

        <div className="flex min-w-0 flex-col gap-14">
          <Reveal>
            <HeroClip src={details.heroClip} />
          </Reveal>

          {details.stats && (
            <Reveal delay={0.05}>
              <StatsCallout stats={details.stats} />
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <SectionHeading>Gestures</SectionHeading>
            <div className="mt-4">
              <GestureList gestures={details.gestures} />
            </div>
          </Reveal>

          {details.architecture && (
            <Reveal delay={0.05}>
              <SectionHeading>Architecture</SectionHeading>
              <p className="mt-2 text-sm text-ink-500 dark:text-navy-300">
                Video capture, gesture recognition, and playback control are split across three
                stages.
              </p>
              <div className="mt-4">
                <ArchitectureDiagram
                  stages={details.architecture.stages}
                  devices={details.architecture.devices}
                />
              </div>
            </Reveal>
          )}

          {details.hardwarePhotos && (
            <Reveal delay={0.05}>
              <SectionHeading>Hardware</SectionHeading>
              <div className="mt-4">
                <HardwarePhotos photos={details.hardwarePhotos} />
              </div>
            </Reveal>
          )}

          {details.challenges && (
            <Reveal delay={0.05}>
              <SectionHeading>Challenges &amp; Solutions</SectionHeading>
              <div className="mt-4">
                <ChallengesList challenges={details.challenges} />
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </article>
  );
}

function DefaultProjectLayout({ project, details, demoType }) {
  return (
    <article className="section-shell py-16 sm:py-20">
      <ProjectHeader project={project} details={details} />

      <Reveal delay={0.1} className="mt-10">
        <DemoPlaceholder type={demoType} label={details.demoLabel} />
      </Reveal>

      {details.stats && (
        <Reveal delay={0.12} className="mt-6">
          <StatsCallout stats={details.stats} />
        </Reveal>
      )}

      <Reveal delay={0.15} className="mt-12">
        <HighlightsAndTechStack details={details} />
      </Reveal>
    </article>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { demoType, details } = project;

  return (
    <>
      {details.gestures ? (
        <IotProjectLayout project={project} details={details} />
      ) : (
        <DefaultProjectLayout project={project} details={details} demoType={demoType} />
      )}
      <Footer />
    </>
  );
}
