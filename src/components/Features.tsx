
import React from "react";
import { motion } from "framer-motion";
import { 
  CreditCard, 
  BarChart, 
  PieChart, 
  FilePlus, 
  Clock, 
  TrendingUp, 
  Wallet, 
  Banknote
} from "lucide-react";

const features = [
  {
    icon: <Banknote size={50} />,
    title: "Integrated Banking",
    description: "Connect your business bank accounts for real-time transaction tracking and categorization."
  },
  {
    icon: <FilePlus size={50} />,
    title: "Automated Invoicing",
    description: "Create, send, and track professional invoices with customizable templates."
  },
  {
    icon: <CreditCard size={50} />,
    title: "Simplified Billing",
    description: "Set up recurring payments and automated billing cycles for your clients."
  },
  {
    icon: <BarChart size={50} />,
    title: "AI Forecasting",
    description: "Predictive financial modeling to anticipate cash flow and revenue trends."
  },
  {
    icon: <Wallet size={50} />,
    title: "Tax Optimization",
    description: "AI identifies potential tax savings and strategies tailored to your business."
  },
  {
    icon: <TrendingUp size={50} />,
    title: "Expense Analysis",
    description: "Identify spending patterns and receive AI recommendations for cost optimization."
  },
  {
    icon: <PieChart size={50} />,
    title: "Financial Reports",
    description: "Comprehensive financial reports generated automatically with visualizations."
  },
  {
    icon: <Clock size={50} />,
    title: "Time Saving",
    description: "Automate routine accounting tasks, saving you hours of manual work each week."
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-smart-gray/30">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block bg-smart-mint/20 rounded-full px-6 py-2 text-smart-mint font-bold text-base mb-6">
            Smart Features
          </div>
          <h2 className="mb-8">All Your Financial Tools in One Place</h2>
          <p className="text-xl text-muted-foreground">
            SmartAccounts AI combines essential financial operations with powerful AI capabilities to streamline your business processes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover-lift border-2 border-smart-gray/40 hover:border-smart-blue/30"
            >
              <div className="w-20 h-20 rounded-xl bg-smart-blue/15 flex items-center justify-center text-smart-blue mb-6 mx-auto">
                {feature.icon}
              </div>
              <h4 className="mb-4 text-center">{feature.title}</h4>
              <p className="text-muted-foreground text-center text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
