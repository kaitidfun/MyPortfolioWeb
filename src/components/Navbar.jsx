import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SECTION_TOTAL_VH } from "../constants";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [overHero, setOverHero] = useState(location.pathname === "/");

  useEffect(() => {
    if (location.pathname !== "/") {
      setOverHero(false);
      return;
    }

    const updateOverHero = () => {
      const heroRange = window.innerHeight * (SECTION_TOTAL_VH / 100);
      setOverHero(window.scrollY < heroRange * 0.5);
    };

    updateOverHero();
    window.addEventListener("scroll", updateOverHero, { passive: true });
    window.addEventListener("resize", updateOverHero);
    return () => {
      window.removeEventListener("scroll", updateOverHero);
      window.removeEventListener("resize", updateOverHero);
    };
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition-all duration-300 ${
        overHero ? "bottom-0 top-auto bg-transparent" : "top-0 bottom-auto border-b border-navy-100 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav
        className={`section-shell flex items-center justify-between transition-all duration-300 ${
          overHero ? "h-12 sm:h-14" : "h-16"
        }`}
      >
        <Link
          to="/"
          className={`font-bold tracking-tight transition-all duration-300 ${
            overHero ? "text-xs text-white/90 sm:text-sm" : "text-sm text-navy-900"
          }`}
        >
          Chanagun
          <span className={overHero ? "text-navy-300" : "text-navy-500"}>.</span>
        </Link>
        <ul className="hidden items-center gap-6 sm:flex sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`font-medium transition-all duration-300 ${
                  overHero
                    ? "text-xs text-white/70 hover:text-white sm:text-sm"
                    : "text-sm text-ink-700 hover:text-navy-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/#projects"
          className={`rounded-full font-semibold transition sm:hidden ${
            overHero
              ? "bg-white/90 px-3 py-1.5 text-[11px] text-navy-900 hover:bg-white"
              : "bg-navy-900 px-4 py-2 text-xs text-white hover:bg-navy-800"
          }`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
