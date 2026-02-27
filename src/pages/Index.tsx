import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import BipvSection from "@/components/BipvSection";
import ExcellenceSection from "@/components/ExcellenceSection";
import TechnologySection from "@/components/TechnologySection";
import MuestrarioSection from "@/components/MuestrarioSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProjectSection from "@/components/ProjectSection";
import EsgSection from "@/components/EsgSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <BipvSection />
      <ExcellenceSection />
      <TechnologySection />
      <MuestrarioSection />
      <BenefitsSection />
      <ProjectSection />
      <EsgSection />
      <FooterSection />
    </main>
  );
};

export default Index;
