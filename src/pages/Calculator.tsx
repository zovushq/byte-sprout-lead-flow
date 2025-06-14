import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorHero from "@/components/CalculatorHero";
import CalculatorSteps from "@/components/CalculatorSteps";
import CalculatorFAQ from "@/components/CalculatorFAQ";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import ScrollToTop from "@/components/ScrollToTop";

// Constants for pricing
const BASE_REELS = 15;
const INCLUDED_AVATARS = 2;

// Pricing Rules
const getReelPrice = (automation: boolean, special: boolean) => {
  if (special) {
    return automation ? 155 : 115;
  }
  return automation ? 300 : 210;
};
const AVATAR_PRICE = 50; // Per extra avatar (always the same)
const PLAN_DESC = ["Minimum 15 reels/month", "2 custom AI avatars included", "AI-Powered DM Automation (if selected)", "Lead qualification & booking (if selected)", "Founding Member Special (only 3 slots left)"];
const CalculatorPage = () => {
  const [numReels, setNumReels] = useState(BASE_REELS);
  const [withAutomation, setWithAutomation] = useState(true);
  const [extraAvatars, setExtraAvatars] = useState(0);
  const [withOffer, setWithOffer] = useState(true);

  // Pricing logic
  const reelUnitPrice = getReelPrice(withAutomation, withOffer);
  const avatarsCharged = extraAvatars > 0 ? extraAvatars : 0;
  const reelsCharged = numReels >= BASE_REELS ? numReels : BASE_REELS;
  const reelsSubtotal = reelsCharged * reelUnitPrice;
  const avatarSubtotal = avatarsCharged * AVATAR_PRICE;
  const total = reelsSubtotal + avatarSubtotal;
  const offerText = withOffer ? "Founding Member Special (only 3 slots left)" : "Normal Pricing (after all offer slots filled)";
  return <>
      <Header />
      <ScrollToTop />
      <CalculatorHero />
      <CalculatorSteps />
      {/* Calculator Section */}
      <section id="custom-calculator" className="min-h-screen bg-muted flex items-center justify-center py-[65px] px-[10px]">
        <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 relative border border-lime/30">
          <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-3 text-center">
            Custom Plan Calculator
          </h2>
          <p className="text-muted-foreground text-center mb-1">
            Instantly estimate your monthly cost. All prices are monthly. Minimum 15 reels/month.
          </p>
          {/* Offer Toggle */}
          <div className="flex items-center justify-center gap-3 my-8">
            <span className="text-sm md:text-base font-medium text-navy">Show Founding Member Offer</span>
            <Switch checked={withOffer} onCheckedChange={setWithOffer} aria-label="Toggle Founding Member Special" />
          </div>
          <div className={`font-semibold rounded-full py-1 px-4 mx-auto text-center mb-6 w-fit transition-colors duration-200 ${withOffer ? "bg-lime/10 text-lime" : "bg-muted/80 text-navy border border-muted"}`}>
            {offerText}
          </div>

          <div className="space-y-6 mb-6">
            {/* Reels Stepper */}
            <div>
              <label className="block mb-1 font-medium text-navy">
                How many reels per month?
              </label>
              <div className="flex items-center gap-4">
                <Button type="button" onClick={() => setNumReels(v => Math.max(BASE_REELS, v - 1))} size="icon" variant="secondary" aria-label="decrease">
                  −
                </Button>
                <span className="text-2xl font-bold">{numReels}</span>
                <Button type="button" onClick={() => setNumReels(v => v + 1)} size="icon" variant="secondary" aria-label="increase">
                  +
                </Button>
                <span className="ml-2 text-sm text-muted-foreground">
                  (min {BASE_REELS})
                </span>
              </div>
            </div>

            {/* Automation Toggle */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={withAutomation} onChange={() => setWithAutomation(val => !val)} className="h-5 w-5 accent-lime" />
                <span className="font-medium text-navy text-base">
                  Add AI-Powered DM Automation
                </span>
                <span className="text-xs text-muted-foreground">
                  (Lead gen & booking)
                </span>
              </label>
            </div>

            {/* Extra AI Avatars */}
            <div>
              <label className="block mb-1 font-medium text-navy">
                Extra AI Avatars Needed?
              </label>
              <div className="flex items-center gap-4">
                <Button type="button" onClick={() => setExtraAvatars(v => Math.max(0, v - 1))} size="icon" variant="secondary" aria-label="decrease">
                  −
                </Button>
                <span className="text-2xl font-bold">{extraAvatars}</span>
                <Button type="button" onClick={() => setExtraAvatars(v => v + 1)} size="icon" variant="secondary" aria-label="increase">
                  +
                </Button>
                <span className="ml-2 text-sm text-muted-foreground">
                  (2 included — add up to all your attorneys!)
                </span>
              </div>
            </div>
          </div>

          {/* Breakdown Table */}
          <div className="border rounded-xl mb-4 bg-muted/40 overflow-hidden">
            <div className="flex justify-between px-5 py-3 border-b bg-muted/70 font-medium">
              <span>Item</span>
              <span className="text-right">Subtotal</span>
            </div>
            <div className="flex justify-between px-5 py-2">
              <span>
                Reels{" "}
                <span className="text-xs text-muted-foreground">
                  ({reelsCharged} × ${reelUnitPrice}/reel)
                </span>
              </span>
              <span>${reelsSubtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between px-5 py-2">
              <span>
                Extra AI Avatars{" "}
                <span className="text-xs text-muted-foreground">
                  ({avatarsCharged} × ${AVATAR_PRICE}/avatar)
                </span>
              </span>
              <span>${avatarSubtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-end px-5 py-3 border-t bg-muted font-bold text-lg">
              <span>Total: ${total.toLocaleString()}</span>
            </div>
          </div>

          {/* Plan Description */}
          <div className="text-muted-foreground text-sm pt-1 pb-2">
            <div className="font-semibold text-navy mb-1">What's Included:</div>
            <ul className="pl-5 list-disc space-y-1">
              {PLAN_DESC.map(desc => <li key={desc}>{desc}</li>)}
            </ul>
            <div className="mt-2 text-xs text-muted-foreground">
              * Founding Member Special (only 3 slots left)<br />
              Extra avatars charged at $50/month per additional avatar (first 2 included).
            </div>
          </div>
          <div className="mt-2 text-center">
            <a href="https://cal.com/zovus/bytesprout" target="_blank" rel="noopener noreferrer" className="block">
              <Button size="lg" className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-3 text-base">
                Start with this plan
              </Button>
            </a>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <CalculatorFAQ />
      <Footer />
    </>;
};
export default CalculatorPage;