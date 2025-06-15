
import { Button } from "@/components/ui/button";

interface DefaultMobileNavProps {
  handleLinkClick: (sectionId: string) => void;
}

const DefaultMobileNav = ({ handleLinkClick }: DefaultMobileNavProps) => (
  <div className="flex flex-col space-y-4">
    <button 
      onClick={() => handleLinkClick('problem')}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      Problem
    </button>
    <button 
      onClick={() => handleLinkClick('solution')}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      Solution
    </button>
    <button 
      onClick={() => handleLinkClick('why-choose-us')}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      Why Us
    </button>
    <button 
      onClick={() => handleLinkClick('pricing')}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      Pricing
    </button>
    <button 
      onClick={() => handleLinkClick('faq')}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      FAQ
    </button>
    <Button 
      onClick={() => handleLinkClick('contact')}
      className="bg-navy hover:bg-navy/90 text-white w-full"
    >
      Get Started
    </Button>
  </div>
);

export default DefaultMobileNav;
