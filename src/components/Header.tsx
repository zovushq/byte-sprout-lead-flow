
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-navy" />
            </div>
            <span className="text-2xl font-bold text-navy">ByteSprout</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('problem')}
              className="text-foreground hover:text-navy transition-colors"
            >
              Problem
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-foreground hover:text-navy transition-colors"
            >
              Solution
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-navy transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-navy transition-colors"
            >
              FAQ
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-navy hover:bg-navy/90 text-white"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('problem')}
                className="text-left text-foreground hover:text-navy transition-colors"
              >
                Problem
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-left text-foreground hover:text-navy transition-colors"
              >
                Solution
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left text-foreground hover:text-navy transition-colors"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-foreground hover:text-navy transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-navy hover:bg-navy/90 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
