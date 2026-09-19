import { profile } from "../data/resumeData";
import { GithubIcon, MailIcon, PhoneIcon, DownloadIcon, ArrowDownIcon } from "./Icons";

export default function Hero() {
  const { contact } = profile;

  return (
    <section
      id="top"
      className="section-shell flex min-h-[92vh] flex-col justify-center gap-10 py-24 sm:py-28"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-navy-600">
          {profile.title}
        </p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
          Bridging the gap between{" "}
          <span className="text-navy-700">code</span> and{" "}
          <span className="text-navy-700">creativity</span>.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-800"
          >
            View Projects
            <ArrowDownIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-navy-400 hover:bg-navy-50"
          >
            Download Resume
            <DownloadIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-ink-500">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-navy-700"
          >
            <GithubIcon className="h-5 w-5" />
            {contact.githubLabel}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 transition hover:text-navy-700"
          >
            <MailIcon className="h-5 w-5" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 transition hover:text-navy-700"
          >
            <PhoneIcon className="h-5 w-5" />
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
