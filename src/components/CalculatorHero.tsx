
import React from "react";
import { Calculator } from "lucide-react";

const CalculatorHero = () => (
  <section className="py-16 bg-gradient-to-br from-navy via-primary to-navy text-white text-center">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto animate-fade-in">
        <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-lime font-semibold mb-4">
          <Calculator className="h-6 w-6" />
          Pricing Calculator
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
          Instantly Calculate Your ByteSprout Plan Cost
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-2">
          See exactly what you’ll pay—no sign-up needed.  
        </p>
        <p className="text-white/70 text-base max-w-xl mx-auto">
          Customize the number of AI reels, Avatars, and automation options for your law firm. Designed for transparency and flexibility.
        </p>
      </div>
    </div>
  </section>
);

export default CalculatorHero;
