import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ReviewSlider from "@/components/ReviewSlider";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrafficSection from "@/components/TrafficSection";
import FAQsSection from "@/components/FAQsSection";
import ContactSection from "@/components/ContactSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ReviewSlider />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <TrafficSection />
        <PricingSection />
        <FAQsSection />
        <ContactSection />
        <Footer />
        <ChatWidget />
      </div>
    </ThemeProvider>
  );
};

export default Index;
