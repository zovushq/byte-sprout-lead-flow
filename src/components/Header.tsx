
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import DefaultNav from "./header/DefaultNav";
import CalculatorNav from "./header/CalculatorNav";
import DefaultMobileNav from "./header/DefaultMobileNav";
import CalculatorMobileNav from "./header/CalculatorMobileNav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
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

  // Universal: Logo click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  // Scroll to a section by id (on current page)
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ========== NAVIGATION LOGIC ==========

  // For main site navigation sections (home page)
  const handleLinkClick = (sectionId: string) => {
    if (location.pathname === "/") {
      // On home, just scroll to section
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate home, then scroll
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // delay to allow route change
    }
    setIsMenuOpen(false);
  };

  // For calculator page navigation
  const handleCalculatorNav = (target: "home" | "calculator" | "faq") => {
    if (target === "home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
      setIsMenuOpen(false);
    }
    if (target === "calculator") {
      if (location.pathname === "/calculator") {
        scrollToSection("custom-calculator");
      } else {
        navigate("/calculator");
        setTimeout(() => {
          scrollToSection("custom-calculator");
        }, 100);
      }
      setIsMenuOpen(false);
    }
    if (target === "faq") {
      if (location.pathname === "/calculator") {
        scrollToSection("calculator-faq");
      } else {
        navigate("/calculator");
        setTimeout(() => {
          scrollToSection("calculator-faq");
        }, 100);
      }
      setIsMenuOpen(false);
    }
  };

  // ========== END NAVIGATION LOGIC ==========

  return (
    <header 
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={handleLogoClick}>
              <img 
                src="/lovable-uploads/9618184f-6be5-4203-aa1e-d59883f4397e.png" 
                alt="ByteSprout Logo – AI-Powered Content Creation for Law Firms"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname === "/calculator" 
              ? <CalculatorNav handleCalculatorNav={handleCalculatorNav} /> 
              : <DefaultNav handleLinkClick={handleLinkClick} />}
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
            {location.pathname === "/calculator" 
              ? <CalculatorMobileNav handleCalculatorNav={handleCalculatorNav} />
              : <DefaultMobileNav handleLinkClick={handleLinkClick} />}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
