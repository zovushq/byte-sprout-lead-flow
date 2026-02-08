import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Can I create a plan with more than 15 reels per month?",
    answer:
      "Yes! You can select any number of reels above the minimum (15) to fit your content strategy. Pricing updates automatically.",
  },
  {
    question: "What happens if I want to add more AI avatars later?",
    answer:
      "Your first 2 custom avatars are included in every plan. You can add extra AI avatars (for additional attorneys or team members) anytime for just $50/month per avatar.",
  },
  {
    question: "Does the price include lead qualification and booking?",
    answer:
      "Yes, all ByteSprout plans include AI-powered DM automation by default — which means automated lead qualification and booking is fully included in your pricing. No extra fees — it's all built-in to help you convert more leads, faster.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Our pricing is simple and transparent. You pay $333 per reel with a minimum of 15 reels per month. 2 custom AI avatars are included, and you can add more for $50/month each. All plans include AI-powered DM automation at no extra cost.",
  }
];

const CalculatorFAQ = () => (
  <section className="py-16 bg-background" id="calculator-faq">
    <div className="container mx-auto px-4 max-w-3xl">
      <div className="mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-navy mb-2">Frequently Asked Questions</h2>
        <p className="text-base md:text-lg text-muted-foreground">Answers about how pricing works and how to build your plan.</p>
      </div>
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-4">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default CalculatorFAQ;
