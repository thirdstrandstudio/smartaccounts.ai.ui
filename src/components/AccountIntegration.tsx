
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, LucideIcon, CheckCircle } from "lucide-react";

// Create platform integration display items
const platforms = [
  { name: "Amazon", color: "#FF9900", shortName: "AMZ" },
  { name: "eBay", color: "#E53238", shortName: "BAY" },
  { name: "Etsy", color: "#F16521", shortName: "ETSY" },
  { name: "Shopify", color: "#7AB55C", shortName: "SHPY" },
  { name: "PayPal", color: "#0070BA", shortName: "PP" },
  { name: "Stripe", color: "#635BFF", shortName: "STRP" },
  { name: "QuickBooks", color: "#2CA01C", shortName: "QB" },
  { name: "Xero", color: "#13B5EA", shortName: "XERO" },
  { name: "Wise", color: "#66B8FF", shortName: "WISE" },
  { name: "Barclays", color: "#00AEEF", shortName: "BARC" },
  { name: "HSBC", color: "#DB0011", shortName: "HSBC" },
  { name: "Monzo", color: "#14233C", shortName: "MONZ" },
  { name: "Starling", color: "#192B58", shortName: "STAR" },
  { name: "Revolut", color: "#8C52FF", shortName: "RVLT" },
];

const AccountIntegration = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block bg-smart-orange/20 rounded-full px-6 py-2 text-smart-orange font-bold text-base mb-6">
            Seamless Integration
          </div>
          <h2 className="mb-8">All Your Accounts in One Place</h2>
          <p className="text-xl text-muted-foreground">
            SmartAccounts AI connects with all your financial platforms to give you a complete picture of your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left column - Integration illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="bg-white shadow-2xl rounded-lg p-6 border-2 border-smart-blue/20 max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h4 className="text-xl font-bold">Connected Accounts</h4>
                    <p className="text-muted-foreground">14 active connections</p>
                  </div>
                  <Button className="bg-smart-blue">
                    Add New <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
                  {platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex flex-col items-center"
                    >
                      <div 
                        className="w-14 h-14 rounded-lg flex items-center justify-center text-white font-bold shadow-md mb-2"
                        style={{ backgroundColor: platform.color }}
                      >
                        {platform.shortName}
                      </div>
                      <span className="text-xs font-medium">{platform.name}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 bg-smart-gray/20 rounded-md p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Shield className="text-smart-blue" size={24} />
                    <span className="font-medium">Data encrypted and secure</span>
                  </div>
                  <Button variant="outline" size="sm" className="text-xs">Manage</Button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-smart-mint/20 rounded-full z-[-1]"></div>
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-smart-purple/20 rounded-full z-[-1]"></div>
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="mb-4">Pull Data From Everywhere</h3>
            <p className="text-lg text-muted-foreground mb-6">
              SmartAccounts AI connects to all your financial platforms, including marketplaces, payment processors, banks, and accounting software.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-smart-mint mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold">E-commerce Platforms</h5>
                  <p className="text-muted-foreground">Amazon, eBay, Etsy, Shopify, and more</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-smart-mint mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold">Payment Processors</h5>
                  <p className="text-muted-foreground">PayPal, Stripe, Square, and more</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-smart-mint mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold">Banking Institutions</h5>
                  <p className="text-muted-foreground">Connect with traditional and digital banks worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="text-smart-mint mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold">Accounting Software</h5>
                  <p className="text-muted-foreground">QuickBooks, Xero, FreshBooks, and more</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-6 bg-smart-mint hover:bg-smart-mint/90">
              Explore All Integrations <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccountIntegration;
