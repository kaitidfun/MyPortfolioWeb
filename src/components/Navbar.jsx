import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
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
      setOverHero(window.scrollY < window.innerHeight * 0.5);
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        overHero
          ? "bg-transparent"
          : "border-b border-navy-100 bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link
          to="/"
          className={`text-sm font-bold tracking-tight transition-colors ${
            overHero ? "text-white" : "text-navy-900"
          }`}
        >
          Chanagun
          <span className={overHero ? "text-navy-300" : "text-navy-500"}>.</span>
        </Link>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  overHero
                    ? "text-white/80 hover:text-white"
                    : "text-ink-700 hover:text-navy-700"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/#projects"
          className={`rounded-full px-4 py-2 text-xs font-semibold transition sm:hidden ${
            overHero
              ? "bg-white text-navy-900 hover:bg-navy-100"
              : "bg-navy-900 text-white hover:bg-navy-800"
          }`}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
