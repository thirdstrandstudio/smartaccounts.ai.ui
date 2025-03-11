
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string; sender: 'user' | 'agent'; time: Date}[]>([
    {text: "Hello! How can I help you today?", sender: "agent", time: new Date()}
  ]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage = {text: newMessage, sender: 'user' as const, time: new Date()};
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Simulate agent response after a delay
    setTimeout(() => {
      const responses = [
        "I'd be happy to help with that. Could you provide more details?",
        "Thanks for your question. Let me look into this for you.",
        "That's a great question. Our SmartAccounts AI platform can definitely handle that.",
        "Let me connect you with a specialist who can give you more information about our pricing plans.",
        "Would you like to schedule a demo to see how this feature works in detail?"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const agentMessage = {text: randomResponse, sender: 'agent' as const, time: new Date()};
      setMessages(prev => [...prev, agentMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        className="fixed bottom-4 left-4 z-40 bg-smart-blue text-white rounded-full p-3 shadow-lg hover:bg-smart-blue/90 transition-colors"
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-4 z-40 bg-background border border-border rounded-lg shadow-xl w-[350px] overflow-hidden"
          >
            {/* Chat header */}
            <div className="bg-smart-blue text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">Live Support</h3>
                  <p className="text-xs opacity-80">We usually reply in a few minutes</p>
                </div>
              </div>
              <button onClick={toggleChat} className="text-white/80 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Chat messages */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-smart-blue text-white rounded-br-none'
                        : 'bg-muted rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'}`}>
                      {formatTime(message.time)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat input */}
            <form onSubmit={handleSendMessage} className="border-t border-border p-3 flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-smart-blue hover:bg-smart-blue/90 px-3">
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatSupport;
