import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import HobbySection from "@/components/HobbySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { setupRevealAnimation } from "@/lib/utils";

const Home = () => {
  useEffect(() => {
    document.title = "Haris Setiadi - Personal Website";
    
    // Set up reveal on scroll animation
    const cleanup = setupRevealAnimation();
    
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <HobbySection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
