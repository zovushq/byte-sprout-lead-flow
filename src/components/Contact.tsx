
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firm: '',
    practiceArea: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to discuss your growth strategy.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      firm: '',
      practiceArea: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to 10x Your Lead Generation?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Join law firms who are already using AI to build authority and generate qualified leads on autopilot. Let's discuss your growth strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="firm"
                    placeholder="Firm Name"
                    value={formData.firm}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Input
                    type="text"
                    name="practiceArea"
                    placeholder="Practice Area"
                    value={formData.practiceArea}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your current marketing challenges and goals..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-lime text-navy hover:bg-lime/90 font-semibold"
                >
                  Get My Custom Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Talk Growth</h3>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  Ready to turn your legal expertise into a consistent stream of qualified leads? 
                  Let's discuss how ByteSprout can 10x your client acquisition without adding hours to your day.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-lime/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone Consultation</div>
                    <div className="text-white/80">Schedule a 15-minute strategy call</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-lime/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-white/80">hello@bytesprout.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-lime/20 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-lime" />
                  </div>
                  <div>
                    <div className="font-semibold">Response Time</div>
                    <div className="text-white/80">Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">What Happens Next?</h4>
                <div className="space-y-3 text-white/90">
                  <div className="flex items-start space-x-3">
                    <div className="bg-lime text-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">1</div>
                    <div>We analyze your current marketing and identify opportunities</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-lime text-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">2</div>
                    <div>Custom strategy session tailored to your practice area</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-lime text-navy rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-0.5">3</div>
                    <div>If it's a fit, we can start your AI avatar within 48 hours</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
