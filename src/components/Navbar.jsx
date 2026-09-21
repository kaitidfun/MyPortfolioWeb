import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SECTION_TOTAL_VH } from "../constants";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [visible, setVisible] = useState(location.pathname !== "/");

  useEffect(() => {
    if (location.pathname !== "/") {
      setVisible(true);
      return;
    }

    const updateVisible = () => {
      const heroRange = window.innerHeight * (SECTION_TOTAL_VH / 100);
      setVisible(window.scrollY > heroRange * 0.92);
    };

    updateVisible();
    window.addEventListener("scroll", updateVisible, { passive: true });
    window.addEventListener("resize", updateVisible);
    return () => {
      window.removeEventListener("scroll", updateVisible);
      window.removeEventListener("resize", updateVisible);
    };
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] border-b border-navy-100 bg-white/80 backdrop-blur-sm transition-opacity duration-300 dark:border-navy-800 dark:bg-navy-950/80 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-tight text-navy-900 dark:text-white">
          Chanagun<span className="text-navy-500">.</span>
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <ul className="hidden items-center gap-6 sm:flex sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-ink-700 transition hover:text-navy-700 dark:text-navy-200 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle className="text-navy-700 dark:text-navy-200" />
        </div>
        <Link
          to="/#projects"
          className="rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-800 sm:hidden"
        >
          Projects
        </Link>
      </nav>
    </header>
  );
}
