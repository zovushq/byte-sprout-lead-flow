

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToSampleReels = () => {
    const element = document.getElementById('sample-reels');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-navy via-primary to-navy text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Turn Your Legal Expertise Into 
              <span className="text-lime block"> High-Value Clients</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
              We create engaging short-form content using your AI avatar and automate lead qualification—no camera time, no content creation, just qualified prospects in your calendar.
            </p>
            
            {/* YouTube Video Section */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                {!isVideoPlaying ? (
                  <div 
                    className="relative w-full h-full cursor-pointer group"
                    onClick={handleVideoPlay}
                  >
                    <img
                      src="https://img.youtube.com/vi/d-QyoO2972c/maxresdefault.jpg"
                      alt="ByteSprout Demo Video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors duration-300">
                      <div className="w-14 h-14 md:w-20 md:h-20 bg-lime rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-7 w-7 md:h-10 md:w-10 text-navy ml-1" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/d-QyoO2972c?autoplay=1&modestbranding=1&rel=0&playsinline=1"
                    title="ByteSprout Demo Video"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0 }}
                  />
                )}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" onClick={scrollToContact} className="bg-lime text-navy hover:bg-lime/90 font-semibold py-4 transition-all duration-300 hover:scale-105 text-base px-[20px]">
                Get 4 Qualified Leads This Month
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" onClick={scrollToSampleReels} className="bg-white text-navy border border-black hover:bg-transparent hover:text-white hover:border-white px-8 py-4 text-lg transition-all duration-300">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">16</div>
                <div className="text-white/80 font-medium mb-2">AI-Avatar Reels Monthly</div>
                <div className="text-white/60 text-sm">Stay top of mind on every platform</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">100%</div>
                <div className="text-white/80 font-medium mb-2">Automated Lead Qualification</div>
                <div className="text-white/60 text-sm">We handle the chasing, you close</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-lime mb-2">$0</div>
                <div className="text-white/80 font-medium mb-2">Setup Fees</div>
                <div className="text-white/60 text-sm">Simple retainer, no hidden costs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
