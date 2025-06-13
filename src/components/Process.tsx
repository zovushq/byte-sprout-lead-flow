
import { ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "AI Avatar Creation",
      description: "We create your digital twin in one session. You provide voice sample and a video for training your custom avatar—we handle the tech magic."
    },
    {
      number: "02", 
      title: "Content Strategy & Creation",
      description: "Our team brainstorms topics, writes scripts, and produces 4 educational reels per week using your avatar."
    },
    {
      number: "03",
      title: "Client Approval",
      description: "Every piece of content gets your approval before going live. You maintain complete control over your brand."
    },
    {
      number: "04",
      title: "Multi-Platform Publishing",
      description: "We post across TikTok, Instagram Reels, YouTube Shorts, and Facebook optimized for maximum reach."
    },
    {
      number: "05",
      title: "AI Lead Qualification",
      description: "Our DM automation engages commenters and viewers, qualifying them based on your ideal client profile."
    },
    {
      number: "06",
      title: "Calendar Integration",
      description: "Qualified leads book directly into your calendar with all their information pre-populated in your dashboard."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From setup to lead delivery in 7 days. No learning curve, no management headaches—just results.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col lg:flex-row items-start lg:items-center gap-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-lime text-navy rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-navy mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-shrink-0">
                    <ArrowRight className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-lime/10 border border-lime/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-navy mb-4">
              Setup Complete in 7 Days
            </h3>
            <p className="text-lg text-muted-foreground">
              Most firms see their first qualified lead within 2 weeks of launch. 
              Your content machine runs 24/7 while you focus on serving clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
