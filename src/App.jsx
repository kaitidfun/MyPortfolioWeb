import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";
import ProjectDetails from "./components/ProjectDetails";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProjectGallery />
        <ProjectDetails />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
