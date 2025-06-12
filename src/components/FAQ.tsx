
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most firms see their first qualified lead within 2 weeks of launch. We typically deliver 4-8 qualified leads per month, with some firms seeing higher numbers based on their practice area and market."
    },
    {
      question: "Is this compliant with bar regulations?",
      answer: "Absolutely. We work exclusively with law firms and understand advertising regulations across all states. Our AI never provides legal advice, makes guarantees about outcomes, or violates any bar guidelines. Every piece of content is reviewed for compliance."
    },
    {
      question: "What if I don't like the content?",
      answer: "You have complete control. Every piece of content requires your approval before publishing. If you're not satisfied, we revise until it meets your standards. Your brand reputation is our top priority."
    },
    {
      question: "How much time do I need to invest?",
      answer: "Minimal. Initial setup takes about 2 hours for avatar creation and strategy discussion. After that, you'll spend 10-15 minutes per week reviewing and approving content. That's it."
    },
    {
      question: "What types of law firms do you work with?",
      answer: "We work with all practice areas, but we're particularly effective for personal injury, family law, criminal defense, and business law. Our content strategy adapts to your specific practice area and target clients."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, no long-term contracts required. We're confident you'll see results, but if you're not satisfied, you can cancel with 30 days notice. We also offer a 30-day money-back guarantee for new clients."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "Our AI qualification system asks specific questions about budget, timeline, and case details before booking appointments. You only get leads that match your ideal client profile—no tire kickers or unqualified prospects."
    },
    {
      question: "What platforms do you post on?",
      answer: "We publish across TikTok, Instagram Reels, YouTube Shorts, and Facebook. Each platform is optimized differently to maximize reach and engagement for your target audience."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about our AI content and lead generation system.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-lg px-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-muted rounded-lg p-8">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Book a 15-minute call to discuss your specific needs and see if ByteSprout is right for your firm.
            </p>
            <Button 
              className="bg-navy hover:bg-navy/90 text-white"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
