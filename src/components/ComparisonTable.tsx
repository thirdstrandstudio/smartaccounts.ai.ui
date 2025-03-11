
import React from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const features = [
    { name: "AI-Powered Accounting", smartAccounts: true, traditional: false, bank: false },
    { name: "Multi-Currency Support (GBP/USD/EUR)", smartAccounts: true, traditional: false, bank: true },
    { name: "Crypto Integration", smartAccounts: true, traditional: false, bank: false },
    { name: "Real-Time Tax Optimization", smartAccounts: true, traditional: false, bank: false },
    { name: "E-commerce Platform Integration", smartAccounts: true, traditional: false, bank: false },
    { name: "Automatic Receipt Scanning", smartAccounts: true, traditional: true, bank: false },
    { name: "Unlimited Bank Connections", smartAccounts: true, traditional: false, bank: false },
    { name: "Custom Financial Reports", smartAccounts: true, traditional: true, bank: false },
    { name: "Expense Forecasting", smartAccounts: true, traditional: true, bank: false },
    { name: "24/7 Customer Support", smartAccounts: true, traditional: false, bank: true },
    { name: "Mobile App Access", smartAccounts: true, traditional: true, bank: true },
    { name: "Monthly Subscription", smartAccounts: true, traditional: true, bank: false },
  ];

  const handleStartTrial = () => {
    // Dispatch a custom event that the LoginModal component will listen for
    const event = new CustomEvent("openLoginModal");
    window.dispatchEvent(event);
  };

  return (
    <section id="comparison" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-smart-blue/20 rounded-full px-6 py-2 text-smart-blue font-bold text-base mb-6">
            Unbeatable Value
          </div>
          <h2 className="mb-8">See How We Compare</h2>
          <p className="text-xl text-muted-foreground mb-10">
            SmartAccounts AI offers more features at a better price point than traditional accounting software or banking solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full border-collapse mb-10">
            <thead>
              <tr>
                <th className="text-left p-4 border-b-2 border-border"></th>
                <th className="p-4 border-b-2 border-border">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold text-smart-blue mb-2">SmartAccounts AI</div>
                    <div className="text-muted-foreground">All-in-one solution</div>
                  </div>
                </th>
                <th className="p-4 border-b-2 border-border">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold mb-2">Traditional Accounting</div>
                    <div className="text-muted-foreground">Software-only</div>
                  </div>
                </th>
                <th className="p-4 border-b-2 border-border">
                  <div className="flex flex-col items-center">
                    <div className="text-2xl font-bold mb-2">Traditional Bank</div>
                    <div className="text-muted-foreground">Banking-only</div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-muted/30" : ""}>
                  <td className="text-left p-4 font-bold">{feature.name}</td>
                  <td className="p-4 text-center">
                    {feature.smartAccounts ? (
                      <Check size={24} className="text-smart-mint mx-auto" />
                    ) : (
                      <X size={24} className="text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.traditional ? (
                      <Check size={24} className="text-smart-mint mx-auto" />
                    ) : (
                      <X size={24} className="text-destructive mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {feature.bank ? (
                      <Check size={24} className="text-smart-mint mx-auto" />
                    ) : (
                      <X size={24} className="text-destructive mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="text-left p-4 font-bold">Starting Price</td>
                <td className="p-4 text-center font-bold text-smart-blue">$8/month</td>
                <td className="p-4 text-center font-bold">$20/month</td>
                <td className="p-4 text-center font-bold">$25/month</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

        <div className="text-center">
          <Button 
            onClick={handleStartTrial}
            className="bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse px-8 py-6 text-lg"
          >
            Start Your Free Trial <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
