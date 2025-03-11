
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 10,
    yearlyPrice: 96,
    description: "Perfect for solopreneurs and freelancers",
    features: [
      "Connect up to 3 accounts",
      "Basic AI tax recommendations",
      "Unlimited invoices",
      "Basic reporting",
      "Email support",
    ],
    recommended: false,
    cta: "Start Free Trial",
    ctaAction: () => {
      const event = new CustomEvent("openLoginModal");
      window.dispatchEvent(event);
    },
  },
  {
    name: "Business",
    monthlyPrice: 20,
    yearlyPrice: 192,
    description: "Ideal for small businesses and growing teams",
    features: [
      "Connect up to 10 accounts",
      "Advanced AI tax optimization",
      "Unlimited invoices & clients",
      "Custom financial reports",
      "Expense forecasting",
      "Priority support",
    ],
    recommended: true,
    cta: "Start Free Trial",
    ctaAction: () => {
      const event = new CustomEvent("openLoginModal");
      window.dispatchEvent(event);
    },
  },
  {
    name: "Enterprise",
    monthlyPrice: 50,
    yearlyPrice: 480,
    description: "For established businesses with complex needs",
    features: [
      "Unlimited account connections",
      "Complete AI financial suite",
      "Multi-entity support",
      "Custom integrations",
      "Advanced forecasting models",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    recommended: false,
    cta: "Contact Sales",
    ctaAction: () => {
      const event = new CustomEvent("openContactModal");
      window.dispatchEvent(event);
    },
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-background to-smart-gray/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-smart-teal/20 rounded-full px-6 py-2 text-smart-teal font-bold text-base mb-6">
            Flexible Pricing
          </div>
          <h2 className="mb-8">Choose the Perfect Plan for Your Business</h2>
          <p className="text-xl text-muted-foreground mb-10">
            All plans include a 14-day free trial with no credit card required. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-6">
            <span className={`text-base font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-smart-blue"
            />
            <div className="flex items-center space-x-2">
              <span className={`text-base font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly
              </span>
              <span className="bg-smart-mint/30 text-smart-mint text-sm font-bold px-3 py-1 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card relative p-8 flex flex-col h-full ${
                plan.recommended 
                  ? "ring-4 ring-smart-blue before:absolute before:top-0 before:right-0 before:left-0 before:h-2 before:bg-smart-blue" 
                  : ""
              }`}
              style={{ minHeight: "660px" }} // Fixed height for all pricing cards
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-smart-blue text-white text-sm font-bold px-4 py-2 rounded-md">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-3">{plan.name}</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">
                    ${isYearly ? Math.round(plan.yearlyPrice / 12) : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-2 text-xl">
                    /month
                  </span>
                </div>
                {isYearly && (
                  <div className="text-base text-muted-foreground mt-2 h-6">
                    Billed annually (${plan.yearlyPrice}/year)
                  </div>
                )}
                {!isYearly && <div className="h-6"></div>} {/* Empty spacer for consistency */}
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={24} className="text-smart-mint mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Button
                  onClick={plan.ctaAction}
                  className={`w-full py-6 text-lg ${
                    plan.recommended 
                      ? "bg-smart-blue hover:bg-smart-blue/90" 
                      : "bg-white border-2 border-border hover:bg-smart-gray/10 text-foreground"
                  } hover-lift button-pulse`}
                >
                  {plan.cta}
                  {plan.recommended && <ArrowRight size={20} className="ml-2" />}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
