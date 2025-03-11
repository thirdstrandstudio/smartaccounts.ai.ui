
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SmartAccounts AI has transformed how we manage our finances. The AI forecasting has helped us anticipate cash flow issues before they happen.",
    author: "Sarah Johnson",
    role: "CEO, Bright Digital",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    stars: 5
  },
  {
    quote: "We've saved over 15 hours a week on accounting tasks and discovered tax strategies we didn't know existed. The ROI is incredible.",
    author: "Mark Chen",
    role: "CFO, TechStart Inc",
    avatar: "https://randomuser.me/api/portraits/men/47.jpg",
    stars: 5
  },
  {
    quote: "Having our banking, accounting, and invoicing in one place is game-changing. The interface is intuitive and the AI assistance is like having a financial advisor on staff.",
    author: "Jessica Williams",
    role: "Owner, Craft Collective",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5
  },
  {
    quote: "The tax optimization features alone paid for the subscription in the first month. I can't imagine running my business without it now.",
    author: "David Rodriguez",
    role: "Founder, Rodriguez Consulting",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-smart-yellow/10 rounded-full px-4 py-1 text-smart-yellow font-medium text-sm mb-4">
            Success Stories
          </div>
          <h2 className="mb-6">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground">
            Businesses of all sizes have transformed their financial operations with SmartAccounts AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-smart-yellow fill-smart-yellow" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="mb-6 text-lg italic">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center rounded-full bg-smart-blue/5 px-4 py-2">
            <div className="flex -space-x-3 mr-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${i * 10 + 5}.jpg`} 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">Join 10,000+ businesses using SmartAccounts AI</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
