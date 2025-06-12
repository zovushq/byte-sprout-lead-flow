
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const features = [
    "AI Avatar Creation & Setup",
    "16 Professional Reels per Month (4/week)",
    "Content Strategy & Scriptwriting", 
    "Multi-Platform Publishing (TikTok, IG, YouTube, FB)",
    "AI-Powered DM Automation",
    "Lead Qualification & Scoring",
    "Automated Appointment Booking",
    "Real-Time Lead Dashboard",
    "SMS & Email Notifications",
    "Client Approval Workflow",
    "Bar Compliance Monitoring",
    "Monthly Performance Reports"
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              One plan, everything included. No hidden fees, no long-term contracts. 
              Cancel anytime (but you won't want to).
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border-2 border-lime/20 animate-scale-in">
            <div className="text-center mb-8">
              <div className="bg-lime/10 text-navy px-4 py-2 rounded-full inline-block mb-4">
                <span className="font-semibold">Complete System</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                $2,500<span className="text-lg font-normal text-muted-foreground">/month</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Everything you need to turn your expertise into a lead generation machine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-lime/20 rounded-full p-1">
                    <Check className="h-4 w-4 text-navy" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-8 mb-8">
              <h4 className="text-xl font-semibold text-navy mb-4">ROI Breakdown</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-navy">4</div>
                  <div className="text-muted-foreground">Qualified Leads/Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-navy">$625</div>
                  <div className="text-muted-foreground">Cost Per Lead</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lime">$25K+</div>
                  <div className="text-muted-foreground">Monthly Revenue Potential</div>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="w-full bg-navy hover:bg-navy/90 text-white font-semibold py-4 text-lg"
            >
              Start Growing Your Practice Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-center text-muted-foreground mt-4">
              30-day money-back guarantee • No setup fees • Cancel anytime
            </p>
          </div>

          <div className="mt-12 text-center animate-fade-in">
            <h4 className="text-2xl font-bold text-navy mb-4">
              Compare to Your Current Marketing Spend
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h5 className="font-semibold text-navy mb-2">Google Ads</h5>
                <div className="text-lg text-muted-foreground">$3,000+/month</div>
                <div className="text-sm text-muted-foreground">For unqualified clicks</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h5 className="font-semibold text-navy mb-2">Marketing Agency</h5>
                <div className="text-lg text-muted-foreground">$5,000+/month</div>
                <div className="text-sm text-muted-foreground">Plus ad spend</div>
              </div>
              <div className="bg-lime/10 rounded-lg p-6 border-2 border-lime/20">
                <h5 className="font-semibold text-navy mb-2">ByteSprout</h5>
                <div className="text-lg font-bold text-navy">$2,500/month</div>
                <div className="text-sm text-lime">Everything included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
