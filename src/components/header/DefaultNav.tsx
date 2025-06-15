
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

interface DefaultNavProps {
  handleLinkClick: (sectionId: string) => void;
}

const DefaultNav = ({ handleLinkClick }: DefaultNavProps) => (
  <>
    <button 
      onClick={() => handleLinkClick('problem')}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      Problem
    </button>
    <button 
      onClick={() => handleLinkClick('solution')}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      Solution
    </button>
    <button 
      onClick={() => handleLinkClick('why-choose-us')}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      Why Us
    </button>
    <button 
      onClick={() => handleLinkClick('pricing')}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      Pricing
    </button>
    <button 
      onClick={() => handleLinkClick('faq')}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      FAQ
    </button>
    <Button 
      onClick={() => handleLinkClick('contact')}
      className="bg-navy hover:bg-navy/90 text-white"
    >
      Get Started
    </Button>
  </>
);

export default DefaultNav;
