
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, User } from "lucide-react";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there! 👋 How can I help you with SmartAccounts AI today?", isUser: false }
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = { id: Date.now(), text: message, isUser: true };
    setMessages([...messages, userMessage]);
    setMessage("");
    
    // Simulate response after delay
    setTimeout(() => {
      const responseMessages = [
        "Thanks for your message! A sales representative will get back to you shortly.",
        "Would you like to schedule a demo call with our team?",
        "I'd be happy to answer any questions about our pricing plans.",
        "SmartAccounts AI can help you save up to 15 hours per week on accounting tasks!"
      ];
      const randomResponse = responseMessages[Math.floor(Math.random() * responseMessages.length)];
      setMessages(prev => [...prev, { id: Date.now(), text: randomResponse, isUser: false }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-smart-blue text-white shadow-lg flex items-center justify-center hover-lift"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>
      
      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-28 left-6 z-50 w-96 h-[500px] bg-white rounded-xl shadow-2xl border-2 border-smart-blue/20 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-smart-blue p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold">Sales Support</h4>
                  <p className="text-sm text-white/80">We're here to help</p>
                </div>
              </div>
            </div>
            
            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto flex flex-col space-y-4">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`rounded-xl p-3 max-w-[80%] ${
                      msg.isUser 
                        ? 'bg-smart-blue text-white rounded-tr-none' 
                        : 'bg-smart-gray/20 text-foreground rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-grow"
                />
                <Button type="submit" className="bg-smart-blue">
                  <Send size={18} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Typical response time: under 5 minutes
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatSupport;
