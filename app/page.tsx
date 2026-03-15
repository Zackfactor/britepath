import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ComplianceSection from "@/components/ComplianceSection";
import AreasSection from "@/components/AreasSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ComplianceSection />
        <AreasSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
