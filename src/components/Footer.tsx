
import React from "react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/9618184f-6be5-4203-aa1e-d59883f4397e.png" 
                  alt="ByteSprout Logo – AI-Powered Content Creation for Law Firms"
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The AI-powered content and lead generation system built specifically for law firms. 
                Turn your expertise into qualified leads on autopilot.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-navy mb-4">Navigation</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => scrollToSection('problem')}
                    className="hover:text-navy transition-colors text-left"
                  >
                    Problem
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('solution')}
                    className="hover:text-navy transition-colors text-left"
                  >
                    Solution
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('why-choose-us')}
                    className="hover:text-navy transition-colors text-left"
                  >
                    Why Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="hover:text-navy transition-colors text-left"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('faq')}
                    className="hover:text-navy transition-colors text-left"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Trust & Compliance */}
            <div>
              <h4 className="font-semibold text-navy mb-4">Trust & Compliance</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>– Bar Compliance Ready</li>
                <li>– Data Secure</li>
                <li>– Cancel Anytime</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground">
              © 2025 ByteSprout (A <a href="https://www.zovus.tech" className="underline">ZOVUS</a> Company). All rights reserved.
            </div>
            <div className="text-muted-foreground mt-4 md:mt-0">
              Built for law firms who want to grow smarter, not harder.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
