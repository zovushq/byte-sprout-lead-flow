
import { useState } from "react";
import { Play } from "lucide-react";

// Helper: Gets the max resolution YouTube thumbnail by video ID
const getMaxResYouTubeThumbnail = (url: string) => {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return {
      maxRes: `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`,
      fallback: `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`,
    };
  }
  return { maxRes: undefined, fallback: undefined };
};

const SampleReels = () => {
  const [playingReelId, setPlayingReelId] = useState<number | null>(null);
  const [thumbnailError, setThumbnailError] = useState<{ [id: number]: boolean }>({});

  const sampleReels = [
    {
      id: 1,
      title: "Pulled Over? One Sentence Could Save You.",
      description: "Criminal defense attorney Willie Baker breaks down what to say (and not say) if you're questioned by police. Know your rights — your future could depend on it.",
      videoUrl: "https://youtube.com/shorts/PeEdeRZ7z10?feature=share",
      duration: "0:45"
    },
    {
      id: 2,
      title: "Estate Planning Essentials",
      description: "Why every family needs a will - common misconceptions",
      thumbnail: "/api/placeholder/300/400",
      duration: "0:52"
    },
    {
      id: 3,
      title: "Criminal Defense Rights",
      description: "Understanding your Miranda rights during police stops",
      thumbnail: "/api/placeholder/300/400",
      duration: "0:38"
    }
  ];

  // Function to convert YouTube Shorts URL to embeddable URL
  const getEmbedUrl = (url: string) => {
    // For https://youtube.com/shorts/PeEdeRZ7z10?feature=share
    // Outputs: https://www.youtube.com/embed/PeEdeRZ7z10?autoplay=1
    const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1&modestbranding=1&rel=0&playsinline=1`;
    }
    return url;
  };

  return (
    <section id="sample-reels" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
              See Your AI Avatar In Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These sample reels show exactly what your AI-generated content will look like. 
              Professional, engaging, and perfectly tailored to your practice area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sampleReels.map((reel, index) => (
              <div 
                key={reel.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => {
                  if (reel.videoUrl) setPlayingReelId(reel.id);
                }}
              >
                <div className="relative">
                  <div className="aspect-[9/16] flex items-center justify-center bg-black">
                    {/* First reel: preview with YouTube Shorts thumbnail */}
                    {reel.id === 1 && playingReelId !== reel.id && (() => {
                      const { maxRes, fallback } = getMaxResYouTubeThumbnail(reel.videoUrl!);
                      return (
                        <div className="relative w-full h-full">
                          <img
                            src={!thumbnailError[reel.id] ? maxRes : fallback}
                            alt={reel.title + " thumbnail"}
                            className="w-full h-full object-cover"
                            style={{ aspectRatio: "9/16" }}
                            draggable={false}
                            onError={() =>
                              setThumbnailError((prev) => ({
                                ...prev,
                                [reel.id]: true,
                              }))
                            }
                          />
                          {/* Overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
                            <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 pointer-events-auto">
                              <Play className="h-8 w-8 text-navy ml-1" />
                            </div>
                            <div className="text-white font-semibold text-base drop-shadow">
                              Click to Preview
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                    {/* First reel: active (playing state) */}
                    {reel.id === 1 && playingReelId === reel.id && (
                      <iframe
                        className="w-full h-full rounded"
                        src={getEmbedUrl(reel.videoUrl!)}
                        title={reel.title}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                        style={{
                          border: 0,
                          minHeight: 0,
                          width: '100%',
                          height: '100%',
                          aspectRatio: '9/16',
                        }}
                      />
                    )}

                    {/* Other reels: keep old appearance */}
                    {reel.id !== 1 && (
                      <div className="text-center pointer-events-none w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy/20 to-lime/20 aspect-[9/16]">
                        <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 pointer-events-auto">
                          <Play className="h-8 w-8 text-navy ml-1" />
                        </div>
                        <div className="text-navy font-semibold">Sample AI Avatar</div>
                        <div className="text-muted-foreground text-sm">Click to Preview</div>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm z-10">
                    {reel.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-bold text-lg text-navy mb-2">{reel.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">
                Ready to See Your Practice in Action?
              </h3>
              <p className="text-muted-foreground mb-6">
                We'll create your first AI avatar and sample reel within 48 hours of onboarding. 
                See exactly how your expertise translates into engaging content.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-lime rounded-full"></div>
                <span>All content pre-approved by you</span>
                <div className="w-2 h-2 bg-lime rounded-full"></div>
                <span>Bar-compliant messaging</span>
                <div className="w-2 h-2 bg-lime rounded-full"></div>
                <span>Your brand, your voice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleReels;
