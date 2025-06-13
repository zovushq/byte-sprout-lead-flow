
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const Contact = () => {
  const openCalendly = () => {
    window.open('https://cal.com/zovus/bytesprout', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy via-primary to-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to 10x Your Lead Generation?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Join the law firms already growing their practice with AI-powered content. 
              No risk, no long-term contracts—just results.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Get Started in 4 Simple Steps</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="space-y-3">
                  <div className="bg-lime/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <span className="text-lime font-bold text-lg">1</span>
                  </div>
                  <h4 className="font-semibold">Book Discovery Call</h4>
                  <p className="text-white/80 text-sm">We learn about your practice, goals, and what kind of leads you want.</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-lime/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <span className="text-lime font-bold text-lg">2</span>
                  </div>
                  <h4 className="font-semibold">Strategy & Proposal</h4>
                  <p className="text-white/80 text-sm">We show you exactly how ByteSprout will grow your firm — if it's a fit, we move forward.</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-lime/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <span className="text-lime font-bold text-lg">3</span>
                  </div>
                  <h4 className="font-semibold">Onboarding & Setup</h4>
                  <p className="text-white/80 text-sm">We collect a few brand details (logos, preferences, etc.), build your avatar, and design your funnel.</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-lime/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <span className="text-lime font-bold text-lg">4</span>
                  </div>
                  <h4 className="font-semibold">Launch & Go Live</h4>
                  <p className="text-white/80 text-sm">We start producing reels and qualifying leads. You just show up to booked calls.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg"
                onClick={openCalendly}
                className="bg-lime text-navy hover:bg-lime/90 font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-5 w-5" />
                <span>zovus.inc@gmail.com</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">Done-for-You</div>
                <div className="text-white/80 font-medium mb-2 text-lime">Setup</div>
                <div className="text-white/60 text-sm">We handle avatar, scripts, content, and automation.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">Zero</div>
                <div className="text-white/80 font-medium mb-2 text-lime">Learning Curve</div>
                <div className="text-white/60 text-sm">You don't need to lift a finger — we build and manage everything.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">14</div>
                <div className="text-white/80 font-medium mb-2 text-lime">Clients Within Days</div>
                <div className="text-white/60 text-sm">Most firms start seeing qualified leads within 1–2 weeks.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">✓</div>
                <div className="text-white/80 font-medium mb-2 text-lime">Fits Any Practice Area</div>
                <div className="text-white/60 text-sm">Custom workflows for immigration, PI, criminal defense, and more.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
