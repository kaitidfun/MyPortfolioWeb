import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/resumeData";
import DemoPlaceholder from "../components/DemoPlaceholder";
import GestureList from "../components/GestureList";
import HeroClip from "../components/HeroClip";
import StatsCallout from "../components/StatsCallout";
import StatsList from "../components/StatsList";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import HardwarePhotos from "../components/HardwarePhotos";
import ChallengesList from "../components/ChallengesList";
import { GithubIcon } from "../components/Icons";
import Reveal from "../components/Reveal";
import Footer from "../components/Footer";

function SectionHeading({ children, compact = false }) {
  return (
    <h2
      className={`font-bold uppercase tracking-wide text-navy-800 dark:text-navy-200 ${compact ? "text-xs" : "text-sm"}`}
    >
      {children}
    </h2>
  );
}

function BackToProjectsLink({ compact = false }) {
  return (
    <Link
      to="/#projects"
      className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-navy-200 bg-white font-semibold text-navy-700 shadow-sm transition hover:border-navy-300 hover:bg-navy-50 dark:border-navy-700 dark:bg-navy-900 dark:text-navy-200 dark:hover:bg-navy-800 ${compact ? "py-1 pl-1 pr-2.5 text-[11px]" : "py-1.5 pl-1.5 pr-3.5 text-xs"}`}
    >
      <span
        className={`flex items-center justify-center rounded-full bg-navy-100 text-navy-700 dark:bg-navy-800 dark:text-navy-200 ${compact ? "h-4 w-4" : "h-5 w-5"}`}
      >
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
        <Reveal className="flex flex-wrap items-center gap-2">
          <BackToProjectsLink compact />
          <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-600 dark:text-navy-300">
            {details.subheading}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="mt-3">
          <h1 className="text-xl font-extrabold tracking-tight text-ink-900 sm:text-2xl dark:text-white">
            {details.heading}
          </h1>
          <p className="mt-2.5 text-xs leading-relaxed text-ink-500 dark:text-navy-300">
            {details.description}
          </p>

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-navy-800 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-navy-900 dark:bg-navy-700 dark:hover:bg-navy-600"
            >
              <GithubIcon className="h-3.5 w-3.5" />
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
    <div className={compact ? "flex flex-col gap-5" : "grid gap-10 sm:grid-cols-2"}>
      <div>
        <SectionHeading compact={compact}>Highlights</SectionHeading>
        <ul className={compact ? "mt-3 space-y-2" : "mt-4 space-y-3"}>
          {details.highlights.map((point) => (
            <li
              key={point}
              className={`flex gap-2.5 text-ink-700 dark:text-navy-200 ${compact ? "text-[11px]" : "text-sm"}`}
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-navy-500" />
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
        <SectionHeading compact={compact}>Tech Stack</SectionHeading>
        <div className={compact ? "mt-3 flex flex-wrap gap-1.5" : "mt-4 flex flex-wrap gap-2"}>
          {details.techStack.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border border-navy-200 font-medium text-navy-800 dark:border-navy-700 dark:text-navy-200 ${compact ? "px-2.5 py-0.5 text-[10px]" : "px-3 py-1 text-xs"}`}
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
    <article className="section-shell pb-16 pt-8 sm:pb-20 sm:pt-10">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8 xl:grid-cols-[300px_1fr] xl:gap-10">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <ProjectHeader project={project} details={details} compact />
          <Reveal delay={0.15} className="mt-6">
            <HighlightsAndTechStack details={details} compact />
          </Reveal>
        </div>

        <div className="flex min-w-0 flex-col gap-14">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="w-full flex-shrink-0 sm:w-64">
                <HeroClip src={details.heroClip} />
              </div>
              {details.stats && <StatsList stats={details.stats} />}
            </div>
          </Reveal>

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
