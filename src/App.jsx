import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";

// Order of the full-viewport, position:sticky sections stacked on the home
// page (see Home.jsx), right after the hero. Both scrollIntoView() and
// offsetTop report bogus positions for these elements once they're
// stacked/stuck, so the only reliable target is index * viewport height.
const HOME_STACK_SECTIONS = ["projects", "skills", "contact"];

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const index = HOME_STACK_SECTIONS.indexOf(location.hash.slice(1));
      if (index !== -1) {
        const target = (index + 1) * window.innerHeight;
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
