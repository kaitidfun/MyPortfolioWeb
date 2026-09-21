import FullSection from "../components/FullSection";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ProjectGallery from "../components/ProjectGallery";
import TechStack from "../components/TechStack";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <FullSection zIndex={10}>
        <Hero />
      </FullSection>
      <FullSection zIndex={20}>
        <AboutSection />
      </FullSection>
      <FullSection zIndex={30}>
        <ProjectGallery />
      </FullSection>
      <FullSection zIndex={40}>
        <TechStack />
      </FullSection>
      <FullSection zIndex={50}>
        <ContactSection />
      </FullSection>
    </>
  );
}
