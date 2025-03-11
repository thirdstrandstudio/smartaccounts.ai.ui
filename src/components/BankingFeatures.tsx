
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CreditCard, 
  Banknote, 
  Wallet, 
  RefreshCcw, 
  Globe, 
  Shield, 
  Bitcoin,
  PoundSterling,
  DollarSign,
  Euro
} from "lucide-react";

const BankingFeatures = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-smart-gray/10 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block bg-smart-blue/20 rounded-full px-6 py-2 text-smart-blue font-bold text-base mb-6">
            Complete Banking
          </div>
          <h2 className="mb-8">Full Banking Features</h2>
          <p className="text-xl text-muted-foreground">
            SmartAccounts AI offers comprehensive banking services with multi-currency support and crypto capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="mb-6">Multi-Currency Business Accounts</h3>
            <p className="text-lg text-muted-foreground mb-8">
              Our integrated banking solution supports GBP, USD, and EUR deposit accounts, allowing you to manage international business with ease.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-smart-blue/10">
                <div className="w-12 h-12 rounded-lg bg-smart-blue/15 flex items-center justify-center text-smart-blue mb-4">
                  <Globe size={28} />
                </div>
                <h5 className="mb-2">Global Payments</h5>
                <p className="text-muted-foreground">
                  Send and receive payments internationally with competitive exchange rates
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-smart-blue/10">
                <div className="w-12 h-12 rounded-lg bg-smart-blue/15 flex items-center justify-center text-smart-blue mb-4">
                  <CreditCard size={28} />
                </div>
                <h5 className="mb-2">Business Cards</h5>
                <p className="text-muted-foreground">
                  Issue physical and virtual cards with customizable spending limits
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-smart-blue/10">
                <div className="w-12 h-12 rounded-lg bg-smart-blue/15 flex items-center justify-center text-smart-blue mb-4">
                  <RefreshCcw size={28} />
                </div>
                <h5 className="mb-2">Instant Exchange</h5>
                <p className="text-muted-foreground">
                  Convert between currencies instantly with minimal fees
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-smart-blue/10">
                <div className="w-12 h-12 rounded-lg bg-smart-blue/15 flex items-center justify-center text-smart-blue mb-4">
                  <Shield size={28} />
                </div>
                <h5 className="mb-2">Secure Banking</h5>
                <p className="text-muted-foreground">
                  Bank-grade security with FSCS protection up to £85,000
                </p>
              </div>
            </div>
            
            <Button className="bg-smart-blue hover:bg-smart-blue/90">
              Open Business Account <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
          
          {/* Right column - Banking illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main card */}
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-br from-smart-blue to-smart-purple rounded-xl shadow-2xl p-8 relative z-20 max-w-lg mx-auto"
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h4 className="text-white text-2xl font-bold mb-1">SmartAccounts Business</h4>
                    <p className="text-white/70">Multi-currency account</p>
                  </div>
                  <div className="text-white/90">
                    <Wallet size={32} />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <PoundSterling className="text-white" size={20} />
                      <span className="text-white font-medium">GBP</span>
                    </div>
                    <p className="text-xl font-bold text-white">£24,350.60</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <DollarSign className="text-white" size={20} />
                      <span className="text-white font-medium">USD</span>
                    </div>
                    <p className="text-xl font-bold text-white">$18,275.32</p>
                  </div>
                  
                  <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <Euro className="text-white" size={20} />
                      <span className="text-white font-medium">EUR</span>
                    </div>
                    <p className="text-xl font-bold text-white">€15,420.88</p>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <Bitcoin className="text-white" size={20} />
                        <span className="text-white font-medium">Crypto Account</span>
                      </div>
                      <p className="text-lg font-bold text-white">2.34 BTC + 18.5 ETH</p>
                    </div>
                    <Button size="sm" className="bg-white text-smart-blue hover:bg-white/90">
                      Exchange
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              {/* Background elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-smart-mint/20 rounded-full blur-3xl z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-smart-blue/20 rounded-full z-0"></div>
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-smart-purple/20 rounded-full z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BankingFeatures;
