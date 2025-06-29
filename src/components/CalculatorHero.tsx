import React from "react";
import { Calculator } from "lucide-react";
const CalculatorHero = () => <section className="bg-gradient-to-br from-navy via-primary to-navy text-white text-center py-[100px] md:py-[120px]">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto animate-fade-in flex flex-col items-center space-y-7">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-lime font-semibold mb-3 md:mb-4 text-base md:text-lg">
          <Calculator className="h-6 w-6" />
          Pricing Calculator
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-3 leading-tight">
          Instantly Calculate Your ByteSprout Plan Cost
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-2 md:mb-3">See exactly what you’ll pay—no surprises.</p>
        <p className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-1 md:mb-2">Easily customize the number of AI reels and avatars to suit your law firm’s needs. Our plans are built for transparency and flexibility.</p>
      </div>
    </div>
  </section>;
export default CalculatorHero;