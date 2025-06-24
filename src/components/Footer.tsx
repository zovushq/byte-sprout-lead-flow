import React from "react";
import { Instagram, Facebook, Linkedin, X as XIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const SOCIALS = [{
  name: "Instagram",
  href: "https://www.instagram.com/bytesprouthq/",
  Icon: Instagram,
  hover: "hover:text-[#E4405F] hover:drop-shadow-[0_0_8px_#e4405faa]",
  label: "Instagram"
}, {
  name: "Facebook",
  href: "https://www.facebook.com/bytesprouthq",
  Icon: Facebook,
  hover: "hover:text-[#1877F3] hover:drop-shadow-[0_0_8px_#1877f3aa]",
  label: "Facebook"
}, {
  name: "LinkedIn",
  href: "https://www.linkedin.com/company/bytesprouthq",
  Icon: Linkedin,
  hover: "hover:text-[#0A66C2] hover:drop-shadow-[0_0_8px_#0a66c2aa]",
  label: "LinkedIn"
}, {
  name: "X",
  href: "https://x.com/bytesprouthq",
  Icon: XIcon,
  hover: "hover:text-[#111] hover:drop-shadow-[0_0_8px_#1118]",
  label: "X (Twitter)"
}];
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper for smooth scroll to element by id
  const smoothScrollTo = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    }, 100); // Allow DOM time to render if navigating
  };

  // For calculator page navigation footer
  const handleCalcNav = (target: "home" | "calculator" | "faq") => {
    if (target === "home") {
      if (location.pathname === "/") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      } else {
        navigate("/");
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }, 100);
      }
    }
    if (target === "calculator") {
      if (location.pathname === "/calculator") {
        smoothScrollTo("custom-calculator");
      } else {
        navigate("/calculator");
        smoothScrollTo("custom-calculator");
      }
    }
    if (target === "faq") {
      if (location.pathname === "/calculator") {
        smoothScrollTo("calculator-faq");
      } else {
        navigate("/calculator");
        smoothScrollTo("calculator-faq");
      }
    }
  };

  // Unified handler for all navigation menu links (retains for home page)
  const handleNavMenuClick = (sectionId: string) => {
    if (location.pathname === "/") {
      // home page scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  // Logo click: always go home/top
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 100);
    }
  };
  return <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Link to="/" onClick={handleLogoClick}>
                  <img src="/lovable-uploads/9618184f-6be5-4203-aa1e-d59883f4397e.png" alt="ByteSprout Logo – AI-Powered Content Creation for Law Firms" className="h-10 w-auto cursor-pointer" />
                </Link>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The AI-powered content and lead generation system built specifically for law firms. 
                Turn your expertise into qualified leads on autopilot.
              </p>
              {/* Social Icons */}
              <div className="mt-6 flex items-center space-x-5">
                {SOCIALS.map(({
                name,
                href,
                Icon,
                hover,
                label
              }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={`transition-colors text-black ${hover}`}>
                    <Icon size={28} strokeWidth={2} />
                  </a>)}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold text-navy mb-4">Navigation</h4>
              <ul className="space-y-2 text-muted-foreground">
                {location.pathname === "/calculator" ? <>
                    {/* HOME */}
                    <li>
                      <button onClick={() => handleCalcNav("home")} className="hover:text-navy transition-colors text-left">
                        Home
                      </button>
                    </li>
                    {/* CALCULATOR SECTION SCROLL */}
                    <li>
                      <button onClick={() => handleCalcNav("calculator")} className="hover:text-navy transition-colors text-left">
                        Calculator
                      </button>
                    </li>
                    {/* FAQ SECTION SCROLL */}
                    <li>
                      <button onClick={() => handleCalcNav("faq")} className="hover:text-navy transition-colors text-left">
                        FAQs
                      </button>
                    </li>
                  </> :
              // Default for all other pages (preserving old logic)
              <>
                    <li>
                      <button onClick={() => handleNavMenuClick('problem')} className="hover:text-navy transition-colors text-left">
                        Problem
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavMenuClick('solution')} className="hover:text-navy transition-colors text-left">
                        Solution
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavMenuClick('why-choose-us')} className="hover:text-navy transition-colors text-left">
                        Why Us
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavMenuClick('pricing')} className="hover:text-navy transition-colors text-left">
                        Pricing
                      </button>
                    </li>
                    <li>
                      <button onClick={() => handleNavMenuClick('faq')} className="hover:text-navy transition-colors text-left">
                        FAQ
                      </button>
                    </li>
                    <li>
                      {/* Calculator remains a Link */}
                      <Link to="/calculator" className="hover:text-navy transition-colors text-left block">
                        Calculator
                      </Link>
                    </li>
                    <li>
                      {/* Onboarding page link */}
                      
                    </li>
                  </>}
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
              © 2025 ByteSprout (A{" "}
              <a href="https://www.zovus.tech" className="underline" target="_blank" rel="noopener noreferrer">
                ZOVUS
              </a>
              {" "}Company). All rights reserved.
            </div>
            <div className="text-muted-foreground mt-4 md:mt-0">
              Built for law firms who want to grow smarter, not harder.
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;