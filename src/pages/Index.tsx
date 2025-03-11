
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AccountIntegration from "@/components/AccountIntegration";
import BankingFeatures from "@/components/BankingFeatures";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatSupport from "@/components/ChatSupport";
import { ThemeProvider } from "@/hooks/use-theme";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    // Add smooth scrolling to all internal links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href.includes(window.location.origin) && link.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    // Handle custom contact modal event
    const handleOpenContactModal = () => setIsContactModalOpen(true);
    window.addEventListener("openContactModal", handleOpenContactModal);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener("openContactModal", handleOpenContactModal);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Features />
          <AccountIntegration />
          <BankingFeatures />
          <HowItWorks />
          <Pricing />
          <ComparisonTable />
          <Testimonials />
          <FAQ />
          <CTA />
        </main>
        <Footer />
        <ChatSupport />
        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </ThemeProvider>
  );
};

export default Index;
