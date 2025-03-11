
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-smart-blue/5 rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-smart-teal/5 rounded-tr-full" />
        <motion.div 
          className="absolute top-20 left-10 w-16 h-16 bg-smart-mint/20 rounded-full"
          animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-12 h-12 bg-smart-purple/20 rounded-full"
          animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block bg-smart-blue/10 rounded-full px-4 py-1 text-smart-blue font-medium text-sm mb-6">
              All-in-one financial solution
            </div>
            
            <h1 className="mb-6 leading-tight">
              Accounting simplified with AI
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              Combine your business accounting, banking, invoicing, and billing into one powerful AI-driven platform.
            </p>

            <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 mb-10">
              <Button 
                size="lg" 
                className="w-full md:w-auto bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse"
              >
                Start Free Trial <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full md:w-auto hover-lift"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-smart-mint" />
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-smart-mint" />
                <span className="text-sm">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={18} className="text-smart-mint" />
                <span className="text-sm">Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="SmartAccounts AI Dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg max-w-[180px]"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-smart-mint flex items-center justify-center text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18M18 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-2 text-sm font-medium">Tax Savings</div>
              </div>
              <div className="text-lg font-bold">$4,280</div>
              <div className="text-xs text-green-500 flex items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                24% optimized
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-6 -right-6 p-4 bg-white rounded-lg shadow-lg max-w-[180px]"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-smart-blue flex items-center justify-center text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-2 text-sm font-medium">Time Saved</div>
              </div>
              <div className="text-lg font-bold">12 hrs/week</div>
              <div className="text-xs text-green-500 flex items-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                  <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                83% efficiency
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
