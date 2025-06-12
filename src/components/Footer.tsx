
import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-navy" />
                </div>
                <span className="text-2xl font-bold text-navy">ByteSprout</span>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                The AI-powered content and lead generation system built specifically for law firms. 
                Turn your expertise into qualified leads on autopilot.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-navy mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>AI Avatar Creation</li>
                <li>Content Production</li>
                <li>Lead Qualification</li>
                <li>DM Automation</li>
                <li>Appointment Booking</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-navy mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Bar Compliance</li>
                <li>Data Security</li>
                <li>Client Agreement</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground">
              © 2024 ByteSprout. All rights reserved.
            </div>
            <div className="text-muted-foreground mt-4 md:mt-0">
              Built for law firms who want to grow smarter, not harder.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
