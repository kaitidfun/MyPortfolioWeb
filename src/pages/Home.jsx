import FullSection from "../components/FullSection";
import Hero from "../components/Hero";
import ProjectGallery from "../components/ProjectGallery";
import TechStack from "../components/TechStack";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <FullSection zIndex={10} fadeOut>
        <Hero />
      </FullSection>
      <FullSection zIndex={20} fadeOut>
        <ProjectGallery />
      </FullSection>
      <FullSection zIndex={30} fadeOut>
        <TechStack />
      </FullSection>
      <FullSection zIndex={40} fadeOut={false}>
        <ContactSection />
      </FullSection>
    </>
  );
}
