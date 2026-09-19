const links = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/80 backdrop-blur-sm">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#top" className="text-sm font-bold tracking-tight text-navy-900">
          Chanagun<span className="text-navy-500">.</span>
        </a>
        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-700 transition hover:text-navy-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#projects"
          className="rounded-full bg-navy-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-navy-800 sm:hidden"
        >
          Projects
        </a>
      </nav>
    </header>
  );
}
