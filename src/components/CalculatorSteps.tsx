
import React from "react";
import { ListOrdered, SquareCheck } from "lucide-react";
const steps = [{
  icon: <ListOrdered className="h-6 w-6 text-lime" />,
  title: "Adjust Your Monthly Reels",
  desc: "Choose how many AI reels you want per month. Minimum is 15 reels."
}, {
  icon: <SquareCheck className="h-6 w-6 text-lime" />,
  title: "Select Automation",
  desc: "Add AI DM automation for more leads—toggle on or off as needed."
}, {
  icon: <ListOrdered className="h-6 w-6 text-lime" />,
  title: "Add Extra AI Avatars",
  desc: "First 2 avatars are included. Add more for your team if desired."
}];
const CalculatorSteps = () => <section className="bg-background py-[60px]">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="mb-8 text-center animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-bold text-navy mb-2">How to Use This Calculator</h2>
        <p className="text-muted-foreground mb-2 text-lg">
          Get a custom quote in seconds. Just follow these simple steps:
        </p>
      </div>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-scale-in">
        {steps.map((step, i) => <li key={i} className="flex items-start gap-4 bg-white shadow rounded-xl px-6 py-5 border border-border">
            <span>{step.icon}</span>
            <div>
              <span className="block font-semibold text-navy text-lg mb-1">{step.title}</span>
              <span className="text-muted-foreground text-sm">{step.desc}</span>
            </div>
          </li>)}
      </ol>
    </div>
  </section>;
export default CalculatorSteps;
