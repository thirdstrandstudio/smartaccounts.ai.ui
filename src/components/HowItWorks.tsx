
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Accounts",
    description: "Securely link your business bank accounts, credit cards, and existing accounting software."
  },
  {
    number: "02",
    title: "AI Analyzes Your Data",
    description: "Our AI reviews your financial history to understand patterns and identify optimization opportunities."
  },
  {
    number: "03",
    title: "Receive Smart Insights",
    description: "Get personalized recommendations for tax savings, expense reductions, and financial forecasts."
  },
  {
    number: "04",
    title: "Run Your Business Better",
    description: "Make informed decisions with real-time financial data and AI-powered insights."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-smart-purple/10 rounded-full px-4 py-1 text-smart-purple font-medium text-sm mb-4">
            Simple Process
          </div>
          <h2 className="mb-6">How SmartAccounts AI Works</h2>
          <p className="text-lg text-muted-foreground">
            Getting started is easy. Our intelligent platform does the heavy lifting so you can focus on growing your business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-smart-gray hidden md:block" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 
                    ? "md:flex-row" 
                    : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12`}
              >
                {/* Step number and content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-smart-blue text-white rounded-full text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-muted-foreground max-w-md mx-auto md:mx-0">
                    {step.description}
                  </p>
                </div>

                {/* Illustration */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-smart-blue/5 to-smart-teal/5 rounded-xl p-6 relative">
                  <div className="aspect-video rounded-lg bg-white shadow-md overflow-hidden">
                    <div className="w-full h-4 bg-smart-gray/10 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-smart-orange"></div>
                        <div className="w-2 h-2 rounded-full bg-smart-yellow"></div>
                        <div className="w-2 h-2 rounded-full bg-smart-mint"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="w-full h-4 bg-smart-gray/20 rounded-full mb-3"></div>
                      <div className="w-2/3 h-4 bg-smart-gray/20 rounded-full mb-6"></div>
                      <div className="grid grid-cols-4 gap-2">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="h-12 bg-smart-gray/10 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-20"
        >
          <Button size="lg" className="bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse">
            Get Started Now <ChevronRight size={16} className="ml-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
