import { profile } from "../data/resumeData";
import { GithubIcon, MailIcon, PhoneIcon } from "./Icons";

export default function Footer() {
  const { contact } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-950 text-navy-100">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-navy-300">{profile.title}</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-navy-200 transition hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            {contact.githubLabel}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 text-navy-200 transition hover:text-white"
          >
            <MailIcon className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phone.replace(/-/g, "")}`}
            className="inline-flex items-center gap-2 text-navy-200 transition hover:text-white"
          >
            <PhoneIcon className="h-4 w-4" />
            {contact.phone}
          </a>
        </div>
      </div>
      <div className="section-shell border-t border-navy-800 py-5 text-xs text-navy-400">
        &copy; {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
