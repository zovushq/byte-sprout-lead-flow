import { Check, X, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CostComparison = () => {
  const inHouseRoles = [
    { role: "🎥 Video Editor", salary: "$50,000–$70,000" },
    { role: "✍️ Scriptwriter & Strategist", salary: "$60,000–$90,000" },
    { role: "📱 Social Media Manager", salary: "$55,000–$75,000" },
    { role: "🤖 AI + Automation Engineer", salary: "$80,000–$120,000" },
    { role: "📊 Performance Analyst", salary: "$45,000–$65,000" },
    { role: "💼 Project Manager", salary: "$60,000+" },
    { role: "🧰 Tools & Software", salary: "$5,000–$10,000/year" },
  ];

  const hiddenCosts = [
    "Office space & utilities",
    "High-end equipment & laptops", 
    "Health insurance & benefits",
    "Annual salary increments",
    "Employee training & development",
    "Team retreats & bonuses",
    "HR & recruitment costs",
    "Paid time off & sick leave"
  ];

  const ourAdvantages = [
    "Multi-client data insights",
    "Proven strategies across industries", 
    "Latest AI & automation tools",
    "No hiring or training delays",
    "Scalable team resources",
    "Performance-driven results"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            In-House Team vs. ByteSprout
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building an in-house team costs 7x more than our proven solution. 
            Here's the honest breakdown that most agencies won't show you.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* In-House Team Card */}
          <Card className="border-destructive/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-destructive"></div>
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-destructive flex items-center justify-center gap-2">
                <X className="w-6 h-6" />
                In-House Team
              </CardTitle>
              <div className="text-4xl font-bold text-destructive">
                $350,000–$450,000
                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-3 text-foreground">Required Team Members:</h4>
                <div className="space-y-2">
                  {inHouseRoles.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{item.role}</span>
                      <span className="font-medium text-foreground">{item.salary}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Visible Costs:</span>
                    <span className="text-destructive">$350K–$450K/year</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-destructive/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-2 text-destructive">+ Hidden Costs:</h4>
                <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                  {hiddenCosts.map((cost, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-destructive rounded-full"></div>
                      {cost}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ByteSprout Card */}
          <Card className="border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/80"></div>
            <CardHeader className="text-center pb-6">
              <div className="bg-lime/10 text-navy px-3 py-1 rounded-full inline-block mb-3 text-sm font-semibold">
                Early Adopter Program Offer
              </div>
              <CardTitle className="text-2xl text-primary flex items-center justify-center gap-2">
                <Check className="w-6 h-6" />
                ByteSprout
              </CardTitle>
              <div className="text-4xl font-bold text-primary">
                $21,564
                <span className="text-lg font-normal text-muted-foreground">/year</span>
              </div>
              <div className="text-sm text-muted-foreground">
                just $1,797/month • All-inclusive
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold mb-3 text-primary">Everything Included:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Full video production team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>AI-powered automation & DM system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Strategy & content planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Performance tracking & optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>All tools & software included</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-2 text-green-800 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Our Competitive Edge:
                </h4>
                <div className="space-y-1 text-sm text-green-700">
                  {ourAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-green-600 rounded-full"></div>
                      {advantage}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Save $300,000+ Per Year
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Why spend 7x more building an in-house team when you can get better results, 
            faster execution, and proven expertise with ByteSprout? Plus, we bring 
            multi-client insights that no in-house team can match.
          </p>
          <div className="text-3xl font-bold text-primary">
            That's a 86% cost reduction with 10x better results
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostComparison;