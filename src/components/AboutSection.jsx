import { Link } from "react-router-dom";
import { profile } from "../data/resumeData";
import { GithubIcon, MailIcon, PhoneIcon, DownloadIcon, ArrowDownIcon } from "./Icons";
import ProfilePlaceholder from "./ProfilePlaceholder";

export default function AboutSection() {
  const { contact } = profile;

  return (
    <div className="flex h-full w-full flex-col justify-center bg-white py-16 sm:py-20">
      <div className="section-shell flex w-full flex-col-reverse items-center gap-8 sm:flex-row sm:items-center sm:gap-12">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-navy-600 sm:mb-4 sm:text-sm">
            {profile.title}
          </p>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
            Bridging the gap between{" "}
            <span className="text-navy-700">code</span> and{" "}
            <span className="text-navy-700">creativity</span>.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-500 sm:mt-5 sm:text-base">
            {profile.summary}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-navy-800 sm:px-6 sm:py-3 sm:text-sm"
            >
              View Projects
              <ArrowDownIcon className="h-4 w-4" />
            </Link>
            <a
              href={profile.resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-5 py-2.5 text-xs font-semibold text-navy-900 transition hover:border-navy-400 hover:bg-navy-50 sm:px-6 sm:py-3 sm:text-sm"
            >
              Download Resume
              <DownloadIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-ink-500 sm:mt-8 sm:gap-6 sm:text-sm">
            <a
              href={contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-navy-700"
            >
              <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {contact.githubLabel}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 transition hover:text-navy-700"
            >
              <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 transition hover:text-navy-700"
            >
              <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              {contact.phone}
            </a>
          </div>
        </div>

        <ProfilePlaceholder />
      </div>
    </div>
  );
}
