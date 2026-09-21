import { SECTION_TOTAL_VH } from "../constants";

// A full-viewport section that stacks on top of the previous one as the
// page scrolls, purely through position:sticky + z-index (no JS-driven
// whole-page animation) — the incoming section is a solid page sliding up
// to cleanly cover the one beneath it. Individual pieces of content inside
// each section use <Reveal> for their own staggered entrance.
export default function FullSection({ zIndex = 10, className = "", children }) {
  return (
    <div className="relative w-full" style={{ height: `${SECTION_TOTAL_VH}vh` }}>
      <section
        className={`sticky top-0 flex h-screen w-full flex-col overflow-hidden ${className}`}
        style={{ zIndex }}
      >
        {children}
      </section>
    </div>
  );
}
