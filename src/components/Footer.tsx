
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import LegalModal from "./LegalModal";

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  
  return (
    <>
      <footer className="bg-white border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-smart-blue flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-lg tracking-tight">
                  SmartAccounts<span className="text-smart-blue">AI</span>
                </span>
              </div>
              <p className="text-muted-foreground mb-6">
                Transforming business finance with AI-powered accounting, banking, invoicing, and billing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Product */}
            <div>
              <h5 className="font-semibold mb-5">Product</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold mb-5">Company</h5>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h5 className="font-semibold mb-5">Stay Updated</h5>
              <p className="text-muted-foreground mb-4">
                Subscribe to our newsletter for the latest updates and financial tips.
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow"
                />
                <Button className="bg-smart-blue hover:bg-smart-blue/90">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} SmartAccounts AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-muted-foreground hover:text-smart-blue transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="text-muted-foreground hover:text-smart-blue transition-colors"
              >
                Terms of Service
              </button>
              <a href="#" className="text-muted-foreground hover:text-smart-blue transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <LegalModal 
        isOpen={isPrivacyModalOpen} 
        onClose={() => setIsPrivacyModalOpen(false)}
        title="Privacy Policy"
        content={`
          # Privacy Policy

          **Last Updated: ${new Date().toLocaleDateString()}**

          ## 1. Introduction

          Welcome to SmartAccounts AI. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.

          ## 2. Data We Collect

          We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:

          - **Identity Data** includes first name, last name, username or similar identifier.
          - **Contact Data** includes billing address, delivery address, email address and telephone numbers.
          - **Financial Data** includes bank account details, payment card details, and transaction data.
          - **Technical Data** includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.
          - **Profile Data** includes your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses.
          - **Usage Data** includes information about how you use our website, products and services.
          - **Marketing and Communications Data** includes your preferences in receiving marketing from us and our third parties and your communication preferences.

          ## 3. How We Use Your Data

          We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:

          - Where we need to perform the contract we are about to enter into or have entered into with you.
          - Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.
          - Where we need to comply with a legal obligation.

          ## 4. Data Security

          We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.

          ## 5. Data Retention

          We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.

          ## 6. Your Legal Rights

          Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:

          - Request access to your personal data.
          - Request correction of your personal data.
          - Request erasure of your personal data.
          - Object to processing of your personal data.
          - Request restriction of processing your personal data.
          - Request transfer of your personal data.
          - Right to withdraw consent.

          ## 7. Contact Us

          If you have any questions about this privacy policy or our privacy practices, please contact us at:

          **Email:** privacy@smartaccountsai.com
          **Mail:** SmartAccounts AI Privacy Team, 123 Business Street, Tech City, TC 12345
        `}
      />
      <LegalModal 
        isOpen={isTermsModalOpen} 
        onClose={() => setIsTermsModalOpen(false)}
        title="Terms of Service"
        content={`
          # Terms of Service

          **Last Updated: ${new Date().toLocaleDateString()}**

          ## 1. Agreement to Terms

          By accessing and using SmartAccounts AI, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.

          ## 2. Services

          SmartAccounts AI provides AI-powered financial management services including:
          - Accounting automation
          - Banking integration
          - Invoice management
          - Financial forecasting
          - Tax optimization

          ## 3. User Accounts

          When you create an account with us, you guarantee that:
          - The information you provide is accurate and complete
          - You will maintain the accuracy of such information
          - You are authorized to use the service
          - You will not share your account credentials

          ## 4. Intellectual Property

          The Service and its original content, features, and functionality are owned by SmartAccounts AI and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

          ## 5. Payment Terms

          - Subscription fees are billed in advance
          - No refunds for partial months of service
          - 14-day free trial available for new accounts
          - Automatic renewal unless cancelled
          - Price changes will be notified in advance

          ## 6. Data Processing

          By using our service, you agree that:
          - We may process your financial data
          - We use encryption for data protection
          - We maintain security protocols
          - We comply with relevant regulations

          ## 7. Limitation of Liability

          SmartAccounts AI shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of the service.

          ## 8. Changes to Terms

          We reserve the right to modify these terms at any time. We will notify users of any material changes.

          ## 9. Governing Law

          These Terms shall be governed by and defined following the laws of [Your Jurisdiction].

          ## 10. Contact Information

          For any questions about these Terms, please contact us at:
          **Email:** legal@smartaccountsai.com
          **Mail:** SmartAccounts AI Legal Team, 123 Business Street, Tech City, TC 12345
        `}
      />
    </>
  );
};

export default Footer;
