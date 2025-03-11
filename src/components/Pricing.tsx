
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
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
    ctaAction: () => console.log("Starter plan selected"),
  },
  {
    name: "Business",
    monthlyPrice: 79,
    yearlyPrice: 790,
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
    ctaAction: () => console.log("Business plan selected"),
  },
  {
    name: "Enterprise",
    monthlyPrice: 199,
    yearlyPrice: 1990,
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
    ctaAction: () => console.log("Enterprise plan selected"),
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-white to-smart-gray/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-smart-teal/10 rounded-full px-4 py-1 text-smart-teal font-medium text-sm mb-4">
            Flexible Pricing
          </div>
          <h2 className="mb-6">Choose the Perfect Plan for Your Business</h2>
          <p className="text-lg text-muted-foreground mb-8">
            All plans include a 14-day free trial with no credit card required. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-smart-blue"
            />
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
                Yearly
              </span>
              <span className="bg-smart-mint/20 text-smart-mint text-xs font-medium px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card relative p-6 md:p-8 flex flex-col h-full ${
                plan.recommended 
                  ? "ring-2 ring-smart-blue before:absolute before:top-0 before:right-0 before:left-0 before:h-1 before:bg-smart-blue before:rounded-t-xl" 
                  : ""
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-smart-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.monthlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    /month
                  </span>
                </div>
                {isYearly && (
                  <div className="text-sm text-muted-foreground mt-1">
                    Billed annually (${plan.yearlyPrice}/year)
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={18} className="text-smart-mint mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6">
                <Button
                  onClick={plan.ctaAction}
                  className={`w-full ${
                    plan.recommended 
                      ? "bg-smart-blue hover:bg-smart-blue/90" 
                      : "bg-white border border-border hover:bg-smart-gray/10 text-foreground"
                  } hover-lift button-pulse`}
                >
                  {plan.cta}
                  {plan.recommended && <ArrowRight size={16} className="ml-2" />}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-smart-blue/5 rounded-xl max-w-4xl mx-auto text-center"
        >
          <h4 className="mb-4">Need a custom solution?</h4>
          <p className="text-muted-foreground mb-6">
            We offer tailored plans for businesses with specific requirements. Contact our sales team to discuss your needs.
          </p>
          <Button variant="outline" className="hover-lift">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
