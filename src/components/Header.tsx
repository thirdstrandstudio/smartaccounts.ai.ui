
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { X, Menu, ChevronRight } from "lucide-react";
import LoginModal from "./LoginModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Handle scroll effect for the header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-smart-blue flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight">
              SmartAccounts<span className="text-smart-blue">AI</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-smart-blue transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-smart-blue transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-smart-blue transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-smart-blue transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setIsLoginModalOpen(true)}
              className="hover-lift"
            >
              Log In
            </Button>
            <Button 
              className="bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse"
              onClick={() => setIsLoginModalOpen(true)}
            >
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-background"
        >
          <div className="container mx-auto px-4 py-5 flex flex-col h-full">
            <div className="flex items-center justify-between mb-10">
              <a href="#" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-smart-blue flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="font-bold text-xl tracking-tight">
                  SmartAccounts<span className="text-smart-blue">AI</span>
                </span>
              </a>
              <button
                className="p-2 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 text-lg">
              <a
                href="#features"
                className="flex items-center justify-between py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Features</span>
                <ChevronRight size={20} className="text-smart-blue" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-between py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>How It Works</span>
                <ChevronRight size={20} className="text-smart-blue" />
              </a>
              <a
                href="#pricing"
                className="flex items-center justify-between py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Pricing</span>
                <ChevronRight size={20} className="text-smart-blue" />
              </a>
              <a
                href="#faq"
                className="flex items-center justify-between py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>FAQ</span>
                <ChevronRight size={20} className="text-smart-blue" />
              </a>
            </nav>

            <div className="mt-auto mb-10 space-y-4">
              <Button
                variant="outline"
                className="w-full justify-center hover-lift"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
              >
                Log In
              </Button>
              <Button
                className="w-full justify-center bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsLoginModalOpen(true);
                }}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};

export default Header;
