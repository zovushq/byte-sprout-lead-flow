
import { Button } from "@/components/ui/button";

interface CalculatorNavProps {
  handleCalculatorNav: (target: "home" | "calculator" | "faq") => void;
}

const CalculatorNav = ({ handleCalculatorNav }: CalculatorNavProps) => (
  <>
    <button
      onClick={() => handleCalculatorNav("home")}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      Home
    </button>
    <button
      onClick={() => handleCalculatorNav("calculator")}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      Calculator
    </button>
    <button
      onClick={() => handleCalculatorNav("faq")}
      className="text-foreground hover:text-green-900 transition-colors"
    >
      FAQs
    </button>
    <Button
      onClick={() => handleCalculatorNav("calculator")}
      className="bg-navy hover:bg-navy/90 text-white"
    >
      Get a Quote
    </Button>
  </>
);

export default CalculatorNav;
