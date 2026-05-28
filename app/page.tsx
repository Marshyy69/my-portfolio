import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTop from "./components/BackToTop";
import SectionDivider from "./components/SectionDivider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgressBar />
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider bgClass="bg-[#0a0a0a]" />
        <AboutSection />
        <SectionDivider bgClass="bg-[#0a0a0a]" />
        <ProjectsSection />
        <SectionDivider bgClass="bg-[#121212]" />
        <CertificatesSection />
        <SectionDivider bgClass="bg-[#0a0a0a]" />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
