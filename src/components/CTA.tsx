
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-smart-blue/10 to-smart-purple/10" />
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-smart-mint/10"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-smart-blue/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="mb-6">
            Ready to Transform Your Business Finances?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using SmartAccounts AI to streamline their financial operations, save time, and make smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse"
            >
              Start Your Free Trial <ArrowRight size={16} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover-lift"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
