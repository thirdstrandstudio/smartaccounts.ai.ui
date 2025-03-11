
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactModal from "./ContactModal";

const FAQData = [
  {
    question: "How does the AI help with my accounting?",
    answer:
      "SmartAccounts AI analyzes your transactions in real-time, categorizes them automatically, and provides tax optimization recommendations. It learns from your business patterns to predict cash flow, identify potential savings, and alert you to unusual spending or opportunities.",
  },
  {
    question: "Can I connect all my business accounts?",
    answer:
      "Yes, SmartAccounts AI connects with over 15,000 financial institutions worldwide. You can connect bank accounts, credit cards, payment processors, e-commerce platforms, and investment accounts for a complete financial picture.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We implement bank-level 256-bit encryption, two-factor authentication, and regular security audits. We're SOC 2 Type II certified and GDPR compliant. Your data is never sold to third parties.",
  },
  {
    question: "Do you support multi-currency businesses?",
    answer:
      "Yes, SmartAccounts AI supports all major currencies and automatically handles currency conversions using real-time exchange rates. You can generate reports in your preferred currency regardless of the original transaction currency.",
  },
  {
    question: "Can SmartAccounts replace my accountant?",
    answer:
      "SmartAccounts AI works best as a powerful tool for your accountant, automating mundane tasks so they can focus on strategic advice. Many accountants love working with clients who use our platform because it provides clean, accurate data and collaborative features.",
  },
  {
    question: "How does the 14-day trial work?",
    answer:
      "Our 14-day trial gives you full access to all features of your selected plan. No credit card is required to start, and you'll receive a reminder before the trial ends. You can upgrade, downgrade, or cancel at any time.",
  },
];

const FAQ = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <section id="faq" className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-block bg-smart-purple/20 rounded-full px-6 py-2 text-smart-purple font-bold text-base mb-6">
              Got Questions?
            </div>
            <h2 className="mb-8">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about SmartAccounts AI and how it can transform your business finances.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-lg mb-6">
              Still have questions? We're here to help.
            </p>
            <Button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-smart-blue hover:bg-smart-blue/90 hover-lift button-pulse"
            >
              Contact our support team <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
};

export default FAQ;
