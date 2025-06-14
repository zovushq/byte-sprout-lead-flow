import { Bot, Video, Users, MessageSquare, Calendar, Shield } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Video,
      title: "AI Avatar Content Creation",
      description: "We create your digital twin that speaks your expertise. No camera time needed—your avatar delivers educational content that builds trust and authority."
    },
    {
      icon: Bot,
      title: "Automated Lead Qualification",
      description: "Our AI agent engages prospects on TikTok, Instagram, and Facebook, qualifying them based on your criteria before they ever reach you."
    },
    {
      icon: MessageSquare,
      title: "Smart DM Automation",
      description: "Compliant, professional conversations that nurture leads from 'just browsing' to 'ready to hire' without giving legal advice."
    },
    {
      icon: Calendar,
      title: "Seamless Appointment Booking",
      description: "Qualified leads book directly into your calendar. No back-and-forth emails, no phone tag—just ready-to-convert consultations."
    },
    {
      icon: Users,
      title: "Lead Dashboard & Alerts",
      description: "Real-time notifications via SMS and email when qualified leads enter your pipeline. Never miss an opportunity again."
    },
    {
      icon: Shield,
      title: "100% Compliant",
      description: "All content and interactions follow legal advertising guidelines. Your bar standing stays protected while you grow."
    }
  ];

  return (
    <section id="solution" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              Your Complete Content & Lead System
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle everything from content creation to lead delivery. You focus on what you do best—practicing law and closing clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-lime/10 p-3 rounded-lg inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              The ByteSprout Difference
            </h3>
            <p className="text-xl text-white/90 mb-6">
              We don't just create content—we create clients. Every piece of content is strategically designed to move viewers from browsers to bookers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-lime mb-2">Done-For-You</div>
                <div className="text-white/80">No Learning Curve</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime mb-2">4</div>
                <div className="text-white/80">Reels Per Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-lime mb-2">24/7</div>
                <div className="text-white/80">Lead Generation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
