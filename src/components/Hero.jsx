import { Link } from "react-router-dom";
import HeroVisual from "./HeroVisual";
import { ArrowDownIcon } from "./Icons";
import Reveal from "./Reveal";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Hero() {
  return (
    <div className="relative flex h-full w-full flex-col bg-navy-950">
      <HeroVisual />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <Reveal y={32}>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-navy-300 sm:text-sm">
            Chanagun Khunphet
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Code<span className="text-navy-300">.</span> Creativity
            <span className="text-navy-300">.</span>
          </h1>
        </Reveal>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-navy-300">
          <ArrowDownIcon className="h-5 w-5 animate-bounce" />
        </div>
      </div>

      <nav className="section-shell relative z-10 flex h-12 w-full items-center justify-between sm:h-14">
        <Link
          to="/"
          className="text-xs font-bold tracking-tight text-white/90 sm:text-sm"
        >
          Chanagun<span className="text-navy-300">.</span>
        </Link>
        <ul className="hidden items-center gap-6 sm:flex sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-xs font-medium text-white/70 transition hover:text-white sm:text-sm"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/#projects"
          className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-navy-900 transition hover:bg-white sm:hidden"
        >
          Projects
        </Link>
      </nav>
    </div>
  );
}
