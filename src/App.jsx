import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import { SECTION_HOLD_VH, SECTION_TOTAL_VH } from "./constants";

// Index (0-based) of each full-viewport, position:sticky section stacked on
// the home page (see Home.jsx: hero, about, projects, skills, contact).
// Both scrollIntoView() and offsetTop report bogus positions for these
// elements once they're stacked/stuck, so the only reliable target is
// index * each section's total scroll height (SECTION_TOTAL_VH).
const HOME_STACK_SECTIONS = { about: 1, projects: 2, skills: 3, contact: 4 };
const NUM_HOME_SECTIONS = 5;

// Once the scroll settles mid-transition (past a section's "aim lock" hold,
// but not yet fully into the next one), snap on to whichever side is
// closer instead of leaving two sections half-covering each other.
function useScrollSnap(enabled) {
  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer = null;

    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const vh = window.innerHeight;
        const sectionHeight = vh * (SECTION_TOTAL_VH / 100);
        const holdHeight = vh * (SECTION_HOLD_VH / 100);
        const maxIndex = NUM_HOME_SECTIONS - 1;
        const y = window.scrollY;
        const index = Math.min(maxIndex, Math.floor(y / sectionHeight));
        if (index >= maxIndex) return;

        const offset = y - index * sectionHeight;
        if (offset <= holdHeight) return;

        const progress = (offset - holdHeight) / (sectionHeight - holdHeight);
        const target =
          progress < 0.5 ? index * sectionHeight : (index + 1) * sectionHeight;

        if (Math.abs(target - y) > 2) {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [enabled]);
}

function ScrollManager() {
  const location = useLocation();

  useScrollSnap(location.pathname === "/");

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const index = HOME_STACK_SECTIONS[location.hash.slice(1)];
      if (index !== undefined) {
        const target = index * (SECTION_TOTAL_VH / 100) * window.innerHeight;
        // The browser's own native fragment scroll (and scrollIntoView on
        // these sticky sections) races with this and can win, so re-assert
        // the correct position a beat after anything else has settled.
        const timer = setTimeout(() => {
          window.scrollTo({ top: target, behavior: "smooth" });
        }, 80);
        return () => clearTimeout(timer);
      }
    }

    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        const frame = requestAnimationFrame(() =>
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        );
        return () => cancelAnimationFrame(frame);
      }
    }

    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <ScrollManager />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
