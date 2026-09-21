import { Link } from "react-router-dom";
import { profile } from "../data/resumeData";
import { GithubIcon, MailIcon, PhoneIcon, DownloadIcon, ArrowDownIcon } from "./Icons";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  const { contact } = profile;

  return (
    <div className="relative h-full w-full bg-navy-950">
      <HeroVisual />
      <div className="relative z-10 flex h-full flex-col justify-center">
        <div className="section-shell w-full">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-navy-300 sm:mb-4 sm:text-sm">
              {profile.title}
            </p>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Bridging the gap between{" "}
              <span className="text-navy-200">code</span> and{" "}
              <span className="text-navy-200">creativity</span>.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-200 sm:mt-6 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9 sm:gap-4">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-navy-900 shadow-sm transition hover:bg-navy-100 sm:px-6 sm:py-3 sm:text-sm"
              >
                View Projects
                <ArrowDownIcon className="h-4 w-4" />
              </Link>
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold text-white transition hover:border-white/60 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
              >
                Download Resume
                <DownloadIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-navy-300 sm:mt-10 sm:gap-6 sm:text-sm">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                {contact.githubLabel}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/-/g, "")}`}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                {contact.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-navy-300 sm:bottom-10">
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
}
