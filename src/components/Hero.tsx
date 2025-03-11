
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import VideoModal from "./VideoModal";

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleStartTrial = () => {
    // Dispatch a custom event that the LoginModal component will listen for
    const event = new CustomEvent("openLoginModal");
    window.dispatchEvent(event);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background elements with bolder colors */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-smart-blue/20 rounded-bl-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-smart-teal/20 rounded-tr-[100px]" />
          <motion.div 
            className="absolute top-20 left-10 w-24 h-24 bg-smart-mint/30 rounded-full"
            animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-16 h-16 bg-smart-purple/30 rounded-full"
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-block bg-smart-blue/20 rounded-full px-6 py-2 text-smart-blue font-bold text-base mb-8">
                All-in-one financial solution
              </div>
              
              <h1 className="mb-8 leading-tight">
                Accounting simplified with AI
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0">
                Combine your business accounting, banking, invoicing, and billing into one powerful AI-driven platform.
              </p>

              <div className="space-y-4 md:space-y-0 md:flex md:space-x-6 mb-12">
                <Button 
                  size="lg" 
                  className="w-full md:w-auto bg-smart-blue hover:bg-smart-blue/90 text-lg py-7 px-8 hover-lift button-pulse"
                  onClick={handleStartTrial}
                >
                  Start Free Trial <ArrowRight size={20} className="ml-3" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full md:w-auto text-lg py-7 px-8 border-2 hover-lift"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  Watch Demo
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-smart-mint" />
                  <span className="text-base font-medium">No credit card required</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-smart-mint" />
                  <span className="text-base font-medium">14-day free trial</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle size={24} className="text-smart-mint" />
                  <span className="text-base font-medium">Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Right column - Dashboard preview with bolder design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-smart-blue/20">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="SmartAccounts AI Dashboard" 
                  className="w-full h-auto"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-smart-blue/30 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating elements with bolder styling */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-8 -left-8 p-6 bg-background rounded-lg shadow-xl max-w-[220px] border-2 border-smart-mint/30"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-smart-mint flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 6V18M18 12H6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-3 text-base font-bold">Tax Savings</div>
                </div>
                <div className="text-2xl font-bold">$4,280</div>
                <div className="text-sm text-green-600 flex items-center font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  24% optimized
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-8 -right-8 p-6 bg-background rounded-lg shadow-xl max-w-[220px] border-2 border-smart-blue/30"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-smart-blue flex items-center justify-center text-white">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="ml-3 text-base font-bold">Time Saved</div>
                </div>
                <div className="text-2xl font-bold">12 hrs/week</div>
                <div className="text-sm text-green-600 flex items-center font-medium">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                    <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  83% efficiency
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Demo Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
};

export default Hero;
