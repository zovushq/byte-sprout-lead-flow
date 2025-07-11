
import { Target, Clock, Shield, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Target,
      title: "Laser-Focused on Law Firms",
      description: "We understand legal marketing compliance, client acquisition costs, and what converts browsers into clients. Not a generic agency."
    },
    {
      icon: Clock,
      title: "Zero Time Investment",
      description: "No content brainstorming sessions, no video calls, no management. You approve content and collect leads—that's it."
    },
    {
      icon: Shield,
      title: "100% Bar Compliant",
      description: "Every piece of content and interaction follows state bar guidelines. Our AI never gives legal advice or makes inappropriate claims."
    },
    {
      icon: TrendingUp,
      title: "Predictable Lead Flow",
      description: "No more feast or famine. Consistent content creation means consistent lead generation, month after month."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Law Firms Choose ByteSprout
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're not just another marketing agency. We're the only AI content and lead generation system built specifically for legal professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-8 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-lime/20 p-3 rounded-lg inline-block mb-4">
                  <benefit.icon className="h-6 w-6 text-lime" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">The Numbers Don't Lie</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-lime mb-2">$125</div>
                <div className="text-white/80 font-medium mb-2">Average Cost Per Lead</div>
                <div className="text-white/60 text-sm">Half the cost of traditional paid ads.</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-lime mb-2">2x</div>
                <div className="text-white/80 font-medium mb-2">Higher Conversion</div>
                <div className="text-white/60 text-sm">Our content converts viewers to clients—twice as well as ads.</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-lime mb-2">30%+</div>
                <div className="text-white/80 font-medium mb-2">Monthly Growth</div>
                <div className="text-white/60 text-sm">Law firms grow faster with ByteSprout.</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold text-lime mb-2">7</div>
                <div className="text-white/80 font-medium mb-2">Days to First Lead</div>
                <div className="text-white/60 text-sm">From setup to signed client—fast.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
