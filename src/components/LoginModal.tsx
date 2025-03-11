
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-background rounded-xl shadow-xl overflow-hidden z-10 mx-4"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-foreground/70 hover:text-foreground transition-colors"
            >
              <X size={20} />
            </button>

            {/* Login form */}
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Welcome Back</h3>
                <p className="text-muted-foreground">
                  Log in to continue to SmartAccounts AI
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="text-sm text-smart-blue hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-smart-blue hover:bg-smart-blue/90"
                >
                  Log in
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <a href="#" className="text-smart-blue hover:underline">
                    Sign up
                  </a>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  className="w-full mb-3 hover-lift"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 5C13.6168 5 15.1013 5.55353 16.2863 6.47406L19.9235 3.00409C17.8088 1.13964 15.0406 0 12 0C7.3924 0 3.39667 2.59991 1.3858 6.40985L5.43024 9.60278C6.40997 6.91937 8.97619 5 12 5Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.8961 12.1769C23.8961 11.4592 23.8368 10.7593 23.7314 10.0779H12V14.9558H18.6984C18.3555 16.6729 17.3997 18.1043 16.0269 19.0615L20.0364 22.1284C22.1823 19.9846 23.8961 16.5472 23.8961 12.1769Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.43023 14.3971C5.16054 13.6457 5 12.8385 5 12C5 11.1615 5.16054 10.3543 5.43023 9.60278L1.3858 6.40985C0.504333 8.08002 0 9.98016 0 12C0 14.0198 0.504333 15.92 1.3858 17.5901L5.43023 14.3971Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 24C15.0406 24 17.809 22.9148 19.9236 20.9958L16.0269 18.0615C14.9211 18.8564 13.5724 19.3731 12 19.3731C8.97619 19.3731 6.40997 17.4538 5.43024 14.7704L1.38574 17.9632C3.39667 21.8001 7.3924 24 12 24Z"
                      fill="#34A853"
                    />
                  </svg>
                  Continue with Google
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;
