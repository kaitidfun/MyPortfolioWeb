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
    <h2 className="text-base font-bold uppercase tracking-wide text-navy-800 dark:text-navy-200">
      {children}
    </h2>
  );
}

function BackToProjectsLink() {
  return (
    <Link
      to="/#projects"
      className="inline-flex flex-shrink-0 items-center gap-1 rounded-full border border-navy-200 bg-navy-50 py-1 pl-1 pr-2.5 text-[11px] font-semibold text-navy-700 shadow-sm transition hover:border-navy-300 hover:bg-navy-100 dark:border-navy-700 dark:bg-navy-900 dark:text-navy-200 dark:hover:bg-navy-800"
    >
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-navy-100 text-navy-700 dark:bg-navy-800 dark:text-navy-200">
        &larr;
      </span>
      Back to projects
    </Link>
  );
}

function ProjectHeader({ project, details }) {
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

function BulletList({ items, className = "mt-4 space-y-2" }) {
  return (
    <ul className={className}>
      {items.map((point) => (
        <li
          key={point}
          className="flex gap-3 text-sm leading-relaxed text-ink-700 dark:text-navy-200"
        >
          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-navy-500" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

function TechStackTags({ details }) {
  return (
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
  );
}

function HighlightsAndTechStack({ details }) {
  return (
    <div className="grid gap-10 sm:grid-cols-2">
      <div>
        <SectionHeading>Highlights</SectionHeading>
        <BulletList items={details.highlights} />

        {details.certification && (
          <p className="mt-5 rounded-lg bg-navy-50 px-4 py-3 text-xs font-medium text-navy-700 dark:bg-navy-900 dark:text-navy-300">
            {details.certification}
          </p>
        )}
      </div>

      <div>
        <SectionHeading>Tech Stack</SectionHeading>
        <TechStackTags details={details} />
      </div>
    </div>
  );
}

function IotProjectLayout({ project, details }) {
  return (
    <article className="section-shell pb-16 pt-24 sm:pb-20 sm:pt-36">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8 xl:grid-cols-[300px_1fr] xl:gap-10">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <BackToProjectsLink />
          </Reveal>

          <Reveal delay={0.05} className="mt-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
              {details.heading}
            </h1>

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
        </div>

        <div className="flex min-w-0 flex-col gap-16">
          <Reveal delay={0.05}>
            <SectionHeading>What is it about?</SectionHeading>
            {details.problem && (
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-navy-300">
                {details.problem}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-navy-300">
              {details.description}
            </p>
            <BulletList items={details.highlights} className="mt-6 space-y-2" />
          </Reveal>

          <Reveal delay={0.05}>
            <SectionHeading>See it in action</SectionHeading>
            <div className="mt-4 flex flex-col gap-4">
              <HeroClip src={details.heroClip} poster={details.heroPoster} />
              {details.stats && (
                <p className="text-sm leading-relaxed text-ink-500 dark:text-navy-300">
                  It tracks hands at{" "}
                  <span className="font-semibold text-navy-800 dark:text-white">
                    {details.stats[0].value}
                  </span>
                  , reacts to a gesture in about{" "}
                  <span className="font-semibold text-navy-800 dark:text-white">
                    {details.stats[1].value}
                  </span>
                  , and recognizes the correct gesture roughly{" "}
                  <span className="font-semibold text-navy-800 dark:text-white">
                    {details.stats[2].value}
                  </span>{" "}
                  of the time — fast and reliable enough to feel like a real controller rather
                  than a novelty.
                </p>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <SectionHeading>How do you control it?</SectionHeading>
            <div className="mt-4">
              <GestureList gestures={details.gestures} />
            </div>
          </Reveal>

          {details.architecture && (
            <Reveal delay={0.05}>
              <SectionHeading>How does it work?</SectionHeading>
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

          {details.hardwarePhoto && (
            <Reveal delay={0.05}>
              <SectionHeading>What's it built on?</SectionHeading>
              <div className="mt-4">
                <HardwarePhotos
                  photo={details.hardwarePhoto}
                  description={details.hardwareDescription}
                />
              </div>
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <SectionHeading>Built with</SectionHeading>
            <TechStackTags details={details} />
          </Reveal>

          {details.challenges && (
            <Reveal delay={0.05}>
              <SectionHeading>What got in the way?</SectionHeading>
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

function ReelCastLayout({ project, details }) {
  return (
    <article className="section-shell pb-16 pt-24 sm:pb-20 sm:pt-36">
      <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start lg:gap-8 xl:grid-cols-[300px_1fr] xl:gap-10">
        <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <BackToProjectsLink />
          </Reveal>

          <Reveal delay={0.05} className="mt-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-ink-900 sm:text-3xl dark:text-white">
              {details.heading}
            </h1>

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
        </div>

        <div className="flex min-w-0 flex-col gap-16">
          <Reveal delay={0.05}>
            <SectionHeading>What is it about?</SectionHeading>
            {details.problem && (
              <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-navy-300">
                {details.problem}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-ink-500 dark:text-navy-300">
              {details.description}
            </p>
            <BulletList items={details.highlights} className="mt-6 space-y-2" />
          </Reveal>

          {details.heroClip && (
            <Reveal delay={0.05}>
              <SectionHeading>See it in action</SectionHeading>
              <div className="mt-4">
                <HeroClip src={details.heroClip} poster={details.heroPoster} />
              </div>
            </Reveal>
          )}

          {details.architecture && (
            <Reveal delay={0.05}>
              <SectionHeading>How does it work?</SectionHeading>
              <p className="mt-2 text-sm text-ink-500 dark:text-navy-300">
                A prompt and a product become a finished, branded video across a few AI-driven
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

          {details.moreFeatures && (
            <Reveal delay={0.05}>
              <SectionHeading>What else can it do?</SectionHeading>
              <BulletList items={details.moreFeatures} className="mt-4 space-y-2" />
              {details.featureClip && (
                <div className="mt-6">
                  <HeroClip
                    src={details.featureClip.src}
                    poster={details.featureClip.poster}
                    caption={details.featureClip.caption}
                  />
                </div>
              )}
            </Reveal>
          )}

          <Reveal delay={0.05}>
            <SectionHeading>Built with</SectionHeading>
            <TechStackTags details={details} />
          </Reveal>

          {details.challenges && (
            <Reveal delay={0.05}>
              <SectionHeading>What got in the way?</SectionHeading>
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
      ) : project.id === "reelcast" ? (
        <ReelCastLayout project={project} details={details} />
      ) : (
        <DefaultProjectLayout project={project} details={details} demoType={demoType} />
      )}
      <Footer />
    </>
  );
}
