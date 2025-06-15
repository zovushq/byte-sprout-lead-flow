
import { Button } from "@/components/ui/button";

interface CalculatorMobileNavProps {
  handleCalculatorNav: (target: "home" | "calculator" | "faq") => void;
}

const CalculatorMobileNav = ({ handleCalculatorNav }: CalculatorMobileNavProps) => (
  <div className="flex flex-col space-y-4">
    <button
      onClick={() => handleCalculatorNav("home")}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      Home
    </button>
    <button
      onClick={() => handleCalculatorNav("calculator")}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      Calculator
    </button>
    <button
      onClick={() => handleCalculatorNav("faq")}
      className="text-left text-foreground hover:text-green-900 transition-colors"
    >
      FAQs
    </button>
    <Button
      onClick={() => handleCalculatorNav("calculator")}
      className="bg-navy hover:bg-navy/90 text-white w-full"
    >
      Get a Quote
    </Button>
  </div>
);

export default CalculatorMobileNav;
