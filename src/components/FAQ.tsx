import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const faqData = [
  {
    question: "What is ByteSprout and how does it work?",
    answer:
      "ByteSprout is an AI-powered content creation and lead generation system designed specifically for law firms. We create engaging short-form video content using your AI avatar, distribute it across multiple platforms, and automate lead qualification. This allows you to turn your legal expertise into qualified leads without spending time on content creation or marketing.",
  },
  {
    question: "How much time will I need to invest?",
    answer:
      "One of the biggest advantages of ByteSprout is that it requires minimal time investment from you. We handle the entire content creation and lead generation process, from topic brainstorming and script writing to video production and lead qualification. You simply approve the content and show up to the qualified calls booked directly into your calendar.",
  },
  {
    question: "Is the content bar-compliant?",
    answer:
      "Yes, absolutely. We understand the importance of adhering to state bar guidelines and legal marketing compliance. Every piece of content and interaction is carefully crafted to ensure it follows all relevant regulations. Our AI never gives legal advice or makes inappropriate claims.",
  },
  {
    question: "What type of law firms does ByteSprout work for?",
    answer:
      "ByteSprout is designed to work for a wide range of law firms across various practice areas. Whether you specialize in personal injury, estate planning, criminal defense, or any other area of law, our system can be customized to meet your specific needs and target your ideal client profile.",
  },
  {
    question: "How quickly can I expect to see results?",
    answer:
      "Most firms start seeing their first qualified lead within 1-2 weeks of launching their ByteSprout campaign. Our AI-powered content machine works 24/7 to generate leads, allowing you to quickly grow your practice without increasing your workload.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common questions about ByteSprout
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-lg px-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-navy hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16 bg-navy text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-white/90 mb-6">
              We're here to help. Book a 30-minute call to discuss your specific needs and see if ByteSprout is right for your firm.
            </p>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-lime text-navy hover:bg-lime/90 font-semibold"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
