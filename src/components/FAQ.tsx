
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does SmartAccounts AI differ from traditional accounting software?",
    answer: "SmartAccounts AI goes beyond traditional accounting by integrating accounting, banking, invoicing, and billing into one platform, powered by AI. Our system proactively analyzes your data to identify tax savings, optimize spending, and provide forecasting, unlike conventional software that simply records transactions."
  },
  {
    question: "Is my financial data secure with SmartAccounts AI?",
    answer: "Absolutely. We employ bank-level encryption and security measures to protect your data. We're SOC 2 compliant and never store banking credentials on our servers. All connections to financial institutions use tokenized access through secure APIs."
  },
  {
    question: "Can I migrate my data from my current accounting software?",
    answer: "Yes, we offer seamless migration from popular accounting platforms including QuickBooks, Xero, and FreshBooks. Our onboarding team will guide you through the process to ensure all your historical data transfers correctly."
  },
  {
    question: "How accurate is the AI forecasting?",
    answer: "Our AI forecasting models are trained on both your historical data and industry benchmarks. Most customers report 85-95% accuracy in cash flow and revenue forecasts after 3 months of use as the system learns your business patterns."
  },
  {
    question: "Can SmartAccounts AI integrate with my other business tools?",
    answer: "Yes, we integrate with popular business tools including payment processors, CRM systems, e-commerce platforms, and more. Our API also allows for custom integrations if you have specialized needs."
  },
  {
    question: "Do I need accounting knowledge to use SmartAccounts AI?",
    answer: "No accounting expertise is required. The platform is designed to be intuitive for business owners with any level of financial knowledge. Our AI assistant can explain financial concepts in plain language and guide you through any process."
  },
  {
    question: "What kind of support do you offer?",
    answer: "All plans include access to our knowledge base and email support. Business and Enterprise plans include priority support with faster response times, and Enterprise customers receive a dedicated account manager for personalized assistance."
  },
  {
    question: "Is there a limit to how many transactions I can process?",
    answer: "There are no transaction limits on any of our plans. Whether you have 100 or 100,000 monthly transactions, SmartAccounts AI can handle your volume without additional charges."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-smart-pink/10 rounded-full px-4 py-1 text-smart-pink font-medium text-sm mb-4">
            Questions & Answers
          </div>
          <h2 className="mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about SmartAccounts AI and how it can transform your business finances.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-smart-gray/5">
                  <span className="text-lg font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-muted-foreground">
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
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a 
            href="#" 
            className="text-smart-blue hover:text-smart-blue/80 font-medium"
          >
            Contact our support team
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
