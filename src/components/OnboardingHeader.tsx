
import { Button } from "@/components/ui/button";
import { Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OnboardingHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const controlNavbar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > lastScrollY && window.scrollY > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
          setLastScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
    // eslint-disable-next-line
  }, [lastScrollY]);

  // Clicking the logo or home always scrolls to top of homepage
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

  // Clicking calculator always scrolls to top of calculator page
  const handleCalculatorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/calculator") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/calculator");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setIsMenuOpen(false);
  };

  // Desktop nav menu (centered)
  const renderDesktopMenu = () => (
    <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
      <button
        className="relative text-foreground border-b-2 border-transparent hover:border-lime transition-colors font-normal pb-1"
        style={{ fontWeight: 400 }}
        onClick={handleLogoClick}
      >
        Home
      </button>
      <button
        className="relative text-foreground border-b-2 border-transparent hover:border-lime transition-colors font-normal pb-1"
        style={{ fontWeight: 400 }}
        onClick={handleCalculatorClick}
      >
        Calculator
      </button>
    </nav>
  );

  // Desktop right (contact)
  const renderDesktopContact = () => (
    <div className="hidden md:flex items-center">
      <a
        href="mailto:zovus.inc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          className="border-lime text-navy hover:bg-lime/10 gap-1 font-semibold px-3 py-1.5 transition"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </Button>
      </a>
    </div>
  );

  // Mobile Nav
  const renderNavLinks = (isMobile = false) => (
    <>
      <button
        className={`relative ${
          isMobile ? "text-left w-full py-2" : ""
        } text-foreground border-b-2 border-transparent hover:border-lime transition-colors font-normal pb-1`}
        onClick={handleLogoClick}
        style={{ fontWeight: 400 }}
      >
        Home
      </button>
      <button
        className={`relative ${
          isMobile ? "text-left w-full py-2" : ""
        } text-foreground border-b-2 border-transparent hover:border-lime transition-colors font-normal pb-1`}
        onClick={handleCalculatorClick}
        style={{ fontWeight: 400 }}
      >
        Calculator
      </button>
      <a
        href="mailto:zovus.inc@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={isMobile ? "w-full py-2" : ""}
      >
        <Button
          variant="outline"
          className="border-lime text-navy hover:bg-lime/10 gap-1 font-semibold px-3 py-1.5 transition"
        >
          <Mail className="h-4 w-4" />
          Contact Us
        </Button>
      </a>
    </>
  );

  const renderMobileMenu = () =>
    isMenuOpen ? (
      <nav className="md:hidden mt-4 pt-4 border-t border-border/20 w-full">
        <div className="flex flex-col items-start space-y-2">
          {renderNavLinks(true)}
        </div>
      </nav>
    ) : null;

  return (
    <header
      className={`fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:justify-normal">
          {/* Left: logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={handleLogoClick} aria-label="ByteSprout Home">
              <img
                src="/lovable-uploads/9618184f-6be5-4203-aa1e-d59883f4397e.png"
                alt="ByteSprout Logo"
                className="h-10 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Center: menu */}
          {renderDesktopMenu()}

          {/* Right: contact */}
          {renderDesktopContact()}

          {/* Mobile: hamburger */}
          <button
            className="md:hidden p-1 rounded hover:bg-navy/5 transition ml-auto"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {renderMobileMenu()}
      </div>
    </header>
  );
};

export default OnboardingHeader;
