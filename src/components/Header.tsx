
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/9618184f-6be5-4203-aa1e-d59883f4397e.png" 
              alt="ByteSprout Logo – AI-Powered Content Creation for Law Firms"
              className="h-10 w-auto"
            />
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
              onClick={() => scrollToSection('why-choose-us')}
              className="text-foreground hover:text-navy transition-colors"
            >
              Why Us
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
          <nav className="md:hidden mt-4 pt-4 border-t border-border/20">
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
                onClick={() => scrollToSection('why-choose-us')}
                className="text-left text-foreground hover:text-navy transition-colors"
              >
                Why Us
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
