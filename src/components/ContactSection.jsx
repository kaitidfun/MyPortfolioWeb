import { profile } from "../data/resumeData";
import { GithubIcon, MailIcon, PhoneIcon } from "./Icons";
import Reveal from "./Reveal";

export default function ContactSection() {
  const { contact } = profile;
  const year = new Date().getFullYear();

  return (
    <div className="flex h-full w-full flex-col justify-center bg-navy-950 text-navy-100">
      <div className="section-shell">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-navy-400 sm:text-sm">
            Get In Touch
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:mt-3 sm:text-4xl">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm text-navy-300 sm:mt-2 sm:text-base">
            {profile.title}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-6">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-navy-200 transition hover:text-white sm:text-base"
          >
            <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            {contact.githubLabel}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-sm text-navy-200 transition hover:text-white sm:text-base"
          >
            <MailIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-navy-200 transition hover:text-white sm:text-base"
          >
            <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            {contact.phone}
          </a>
        </Reveal>
      </div>

      <div className="section-shell mt-8 border-t border-navy-800 pt-4 pb-4 text-xs text-navy-400 sm:mt-12 sm:pt-5">
        &copy; {year} {profile.name}. All rights reserved.
      </div>
    </div>
  );
}
