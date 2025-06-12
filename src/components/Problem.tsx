
import { AlertCircle, Clock, DollarSign, Zap } from "lucide-react";

const Problem = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "No Time for Marketing",
      description: "You're billing hours, not creating TikToks. Marketing feels like another full-time job you don't have time for."
    },
    {
      icon: DollarSign,
      title: "Expensive, Ineffective Ads",
      description: "Google Ads cost $200+ per click. Traditional marketing yields unqualified leads who waste your time."
    },
    {
      icon: AlertCircle,
      title: "Inconsistent Lead Flow",
      description: "Feast or famine. Some months you're swamped, others you're wondering where the next client will come from."
    },
    {
      icon: Zap,
      title: "Can't Scale Personal Brand",
      description: "Your expertise is valuable, but you can't be everywhere at once. Your reach is limited to your network."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              The Reality for Most Law Firms
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You're brilliant at law, but marketing feels like speaking a foreign language. 
              Meanwhile, potential clients are scrolling past you every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-navy/10 p-3 rounded-lg">
                    <point.icon className="h-6 w-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-3">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              The Cost of Doing Nothing
            </h3>
            <p className="text-red-700 text-lg">
              While you're focused on current cases, competitors are building authority online, 
              capturing leads 24/7, and filling their pipelines. 
              <strong> Every day you wait is revenue walking out the door.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
