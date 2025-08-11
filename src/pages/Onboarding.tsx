import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Play } from "lucide-react";
import React, { useState } from "react";
import OnboardingHeader from "@/components/OnboardingHeader";
import { Helmet } from "react-helmet-async";
const GOOGLE_FORM_LINK = "https://forms.gle/uUyQgbWHjQvjs1Bz7"; // Replace with your real form link

const VIDEO_SCRIPT = `
Hello! I'm feeling great right now with a relaxed tone and confident that I'll do well on this recording 😃. I'm in front of the camera, ready to go. I'm excited to try out this new tool and see what I can achieve with it.

<Close your mouth and breathe through your nose>

The lighting is perfect—no harsh shadows on my face. My pronunciation is clear, and I'm relaxed because this process has been simple, easy, and enjoyable 🥰. I'll add some natural, subtle hand movements 👐 throughout the recording, avoiding too much body or head movement. These gestures will help me look more natural and at ease.

<Close your mouth and breathe through your nose>

I'm not wearing sunglasses or accessories, so my face is clearly visible. My tone is steady, and I'm speaking naturally, with pauses between sentences. I'm relaxed, and this recording process has been fun 🥰.

<Close your mouth and breathe through your nose>

As I record, I'm thinking of happy memories that make me feel life is full and interesting. I'm holding onto this relaxed, joyful mood 😃 and hoping to carry it with me 🥰.

<Close your mouth and breathe through your nose>

I'll continue adding slight hand movements 👐 to keep things feeling natural. My tone remains steady and expressive, and I'm proud of how it's going so far. I'll keep giving my best until the recording is done.

<Close your mouth and breathe through your nose>

It's been a pleasure recording today, and I'm excited to see the final result. So far, everything has gone smoothly, and I hope things are going great for you too 😃.

<Close your mouth and breathe through your nose>
`;
const VOICE_SCRIPT = `
Hi there! I'm [Your Name]

Today's a good day. The lighting's perfect, and I'm speaking clearly and confidently, with a calm tone and natural energy.

Sometimes I speak slowly. Other times, I might pick up the pace — especially when I'm excited about something. Let me show you...

Here's a happy line! 😄

Here's a curious one...?

And here's one with quiet confidence.

This script includes short sentences. Long ones too — because I want my voice model to sound flexible and real, like a real conversation.

Now I'll pause... just for a moment.

(Pause for 5 seconds)

I'm not rushing. I'm relaxed.

This recording feels good — because I'm just being myself.

Alright, we're wrapping up now. This voice model's going to be great — I can already feel it.

Thanks for listening. Let's do something amazing together.
`;
const VideoEmbed = ({
  size = "large",
  videoId
}: {
  size?: "large" | "medium" | "small";
  videoId: string;
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  const sizeClasses = {
    large: "max-w-2xl",
    medium: "max-w-md",
    small: "max-w-lg"
  };
  const alignmentClass = size === "large" ? "mx-auto" : "";
  return <div className={`mb-6 ${sizeClasses[size]} ${alignmentClass}`}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
        {!isVideoPlaying ? <div className="relative w-full h-full cursor-pointer group" onClick={handleVideoPlay}>
            <img src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} alt="ByteSprout Onboarding Video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-colors duration-300">
              <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-navy ml-1" />
              </div>
            </div>
          </div> : <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1`} title="ByteSprout Onboarding Video" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={{
        border: 0
      }} />}
      </div>
    </div>;
};
const Onboarding = () => {
  const scrollToStep1 = () => {
    const element = document.getElementById('step-1');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="min-h-screen flex flex-col bg-muted">
      <Helmet>
        <title>ByteSprout | Client Onboarding | AI Avatar Content Setup for Attorneys</title>
        <meta name="description" content="Start your ByteSprout journey with ease. Follow our step-by-step onboarding guide to submit video, voice, and brand assets — and launch your AI-powered legal content system fast." />
      </Helmet>
      {/* NAV */}
      <OnboardingHeader />

      <main className="flex-1 pt-[84px]">
        <div className="container mx-auto max-w-3xl px-4">
          {/* Section: Welcome */}
          <section className="mb-12 text-center">
            <div className="h-10 md:h-14" />
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in leading-tight md:leading-[1.15]">
              Welcome to ByteSprout Onboarding!
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground animate-fade-in mb-8">
              We're excited to help you transform your practice with AI-powered content and qualified leads. Onboarding is simple, structured, and stress-free!
            </p>
            
            {/* Hero Video - Updated */}
            <VideoEmbed size="large" videoId="_SQdfw_ckK8" />
            
            {/* Start Onboarding Button */}
            <Button size="lg" onClick={scrollToStep1} className="bg-lime text-navy hover:bg-lime/90 font-semibold py-4 transition-all duration-300 hover:scale-105 text-base px-8">
              Start Onboarding
            </Button>
          </section>

          {/* Section: Step 1 */}
          <section id="step-1" className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-scale-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 1: Share Your Info</h2>
            
            <VideoEmbed size="medium" videoId="RAngpPrILus" />
            
            <p className="mb-4 text-muted-foreground">
              Help us kick off the process by providing your details.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Your info will let us prepare your contract and send your initial invoice (via PayPal).</li>
              <li>All data is secure and used only for onboarding purposes.</li>
            </ul>
            <Button asChild size="lg" variant="outline" className="border-lime text-navy hover:bg-lime/10 font-semibold">
              <a href={GOOGLE_FORM_LINK} target="_blank" rel="noopener noreferrer">
                Fill Out the Info Form
              </a>
            </Button>
          </section>

          {/* Section: Step 2 */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 2: Your Private Slack Channel</h2>
            
            <VideoEmbed size="medium" videoId="PevjbIzAqZc" />
            
            <p className="text-muted-foreground mb-3">
              Once you sign up, you'll get a dedicated Slack channel to chat with our team in real time.
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-3">
              <li>Ask questions, share files, and get quick updates – all in one place.</li>
              <li>We'll share onboarding requirements and confirm each step there.</li>
              <li>All your files (videos, scripts, consent forms) can be shared securely through Slack.</li>
            </ul>
          </section>

          {/* Section: Step 3 - Updated */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 3: Record Your AI Avatar Training &amp; Consent Video 🎬</h2>
            
            <VideoEmbed size="medium" videoId="fTcvGJ_vmtA" />
            
            <p className="text-muted-foreground mb-4">
              To create your personalized AI avatar, we'll need two video recordings:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li><strong>Your training video</strong> (pre-recorded)</li>
              <li><strong>Your consent video</strong> (recorded in real-time during the session)</li>
            </ul>

            <div className="bg-lime/10 border border-lime/30 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-navy mb-2 flex items-center">📱 Important Recording Format</h3>
              <p className="text-navy">
                <strong>Please record your training video in vertical format</strong> — just like how you'd shoot a Reel or TikTok.
              </p>
              <p className="text-navy mt-1">
                Since your avatar will be used in short-form content, recording vertically ensures everything fits perfectly on screen.
              </p>
            </div>

            <p className="mb-4 text-muted-foreground">There are two types of avatars we can create:</p>
            <ul className="mb-6 list-disc pl-6 text-muted-foreground">
              <li><strong>Still Avatar:</strong> For announcements, training, and regular social videos. <span className="text-lime font-semibold">(Recommended for most cases! 🌟)</span></li>
              <li><strong>Motion Avatar:</strong> Best for external marketing and ads.</li>
            </ul>

            <div className="mb-6">
              <h3 className="font-semibold text-navy mb-2">⭐ Still Avatar Video Instructions</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Record 2-5 minutes of footage (required).</li>
                <li>Use a high-resolution camera in a well-lit, quiet environment.</li>
                <li>Look directly at the camera. Pause between sentences, mouth closed.</li>
                <li>Use subtle, natural gestures. Keep hands below chest.</li>
              </ul>
              <h4 className="font-medium mb-1 mt-4 text-navy">Things to Avoid ❌</h4>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>Stitched or cut footage, talking fast without pauses.</li>
                <li>Changing position, loud background noise, bad lighting.</li>
                <li>Gestures above chest, looking away from camera.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-navy mb-2">🎥 Motion Avatar Video Instructions</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Record at least 3 minutes, front or 45° angle.</li>
                <li>Well-lit, stable and clear view of your face and mouth.</li>
                <li>Avoid fast movements and hand gestures above chest.</li>
              </ul>
              <h4 className="font-medium mb-1 mt-4 text-navy">Things to Avoid ❌</h4>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>Stitches/cuts, loud background noise, shaky video.</li>
                <li>Fast head movements, bad lighting, hands above chest.</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-navy mb-2">✅ Example Script to Read On-Camera</h3>
              <pre className="bg-muted text-[15px] p-4 rounded whitespace-pre-wrap">{VIDEO_SCRIPT.trim()}</pre>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-navy mb-2">📋 How the Submission Works</h3>
              <p className="text-muted-foreground mb-3">To complete this step:</p>
              <ol className="list-decimal pl-6 text-muted-foreground mb-2 space-y-2">
                <li><strong>You can record your training video at your convenience.</strong> We recommend using a professional setup if available. Save the final file on your desktop or in an easy-to-access location.</li>
                <li><strong>Once you're ready</strong>, we'll email you the login credentials for your personal HeyGen account (licensed under our ByteSprout Team Plan).</li>
                <li>We'll <strong>hop on a quick Zoom/Google Meet call</strong> with you. You'll:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Log into HeyGen (we'll guide you).</li>
                    <li>Upload your avatar training video.</li>
                    <li>Record your <strong>real-time consent video</strong> using your webcam inside HeyGen. <em>(Required for avatar creation.)</em></li>
                  </ul>
                </li>
              </ol>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> The consent video must be recorded immediately after the upload. It's a mandatory part of HeyGen's security protocol and can't be skipped or done separately.
                </p>
              </div>
              <p className="text-muted-foreground mt-3">
                This session will take 5–10 minutes. We'll be right there with you to walk you through it live, step-by-step.
              </p>
              <p className="text-lime font-semibold mt-2">
                Let us know when you're ready — and we'll schedule the session! 📅
              </p>
            </div>
          </section>

          {/* Section: Step 4 - Updated */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">🗣️ Step 4: Record Your Voice for Avatar</h2>
            
            <VideoEmbed size="medium" videoId="-_JR4LYZ51Q" />
            
            <p className="text-muted-foreground mb-4">
              This helps make your AI avatar sound exactly like you.
            </p>
            
            <div className="mb-4">
              <h3 className="font-semibold text-navy mb-2">What You'll Do:</h3>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Use the script below to record a 2–5 minute voice sample.</li>
                <li>You can use your phone or any microphone you have — just make sure you're in a quiet space.</li>
                <li>Upload the audio file to your Slack channel once done.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-navy mb-2">🎤 Voice Recording Script:</h3>
              <div className="bg-muted p-4 rounded border-l-4 border-lime">
                <pre className="text-[15px] whitespace-pre-wrap">{VOICE_SCRIPT.trim()}</pre>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h4 className="font-medium text-navy mb-2">💡 Tips:</h4>
              <ul className="list-disc pl-6 text-sm text-blue-800">
                <li>Speak with natural energy (more expressive than usual — the AI tends to flatten it a bit).</li>
                <li>Don't worry if you mess up once or twice — just relax and try again.</li>
              </ul>
            </div>
          </section>

          {/* Section: Creating Different Avatar Looks */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 5: Creating Different Avatar Looks</h2>
            
            <VideoEmbed size="medium" videoId="an5wZF_CbTg" />
            
            <p className="text-muted-foreground mb-4">
              You can create up to <b>100 different looks</b> for the same person—all under one avatar slot!
            </p>

            <div className="bg-lime/10 border border-lime/30 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-navy mb-2 flex items-center">📱 Important Recording Format</h3>
              <p className="text-navy">
                <strong>Please make sure all your avatar looks are recorded vertically</strong> — just like Instagram Reels, TikToks, or YouTube Shorts.
              </p>
              <p className="text-navy mt-1">
                This ensures your avatar fits perfectly in the short-form content we'll be creating for you.
              </p>
            </div>

            <h3 className="font-semibold text-navy mb-3">AI Avatar Look Guidance for Attorneys</h3>
            <p className="mb-3 text-muted-foreground">
              To help us create a compelling, professional AI avatar that represents your firm with authority and trust, here are a few styling and setup recommendations:
            </p>
            
            <div className="mb-3">
              <h4 className="font-medium text-navy mb-1 flex items-center">📍 Background Options</h4>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Your office or desk setup</li>
                <li>A bookshelf or law library background</li>
                <li>A neutral hallway or conference room</li>
                <li>Clean, uncluttered walls with subtle décor</li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-medium text-navy mb-1 flex items-center">👔 Wardrobe Suggestions</h4>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Dress as you would when meeting a client or appearing in court:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Suit and tie or blazer with a button-down shirt</li>
                    <li>Legal robes (if applicable in your jurisdiction)</li>
                    <li>Professional attire in solid, neutral colors (avoid flashy patterns)</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-medium text-navy mb-1 flex items-center">🎥 Camera Angles</h4>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Primarily front-facing (direct eye contact builds trust)</li>
                <li>Optional: 45° angles for natural variation</li>
              </ul>
            </div>
            <div className="mb-3">
              <h4 className="font-medium text-navy mb-1 flex items-center">🧍‍♂️ Posture &amp; Framing</h4>
              <ul className="list-disc pl-6 text-muted-foreground mb-2">
                <li>Seated behind a desk or standing confidently</li>
                <li>Frame from mid-chest up, ensuring shoulders and hands are visible</li>
                <li>Avoid slouching — upright and composed posture is key</li>
              </ul>
            </div>
            <div className="mt-4 bg-muted rounded p-4 text-[15px] text-navy">
              These variations (backgrounds, outfits, angles) help us make your avatar more lifelike and dynamic — creating the impression of real-time presence in every video.
            </div>
            <div className="mt-2 text-muted-foreground text-sm">
              <b>Reminder:</b> Your avatar reflects exactly what you put into it. Any coughs, unusual movements, robotic or echoey voice, or off-pitch speech in your original footage will appear in the avatar. Ensure your footage is clean and precise for the best results!
            </div>
          </section>

          {/* Section: Thumbnail Photo Guidance */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 6: Thumbnail Photo</h2>
            
            <VideoEmbed size="medium" videoId="an5wZF_CbTg" />
            
            <p className="text-muted-foreground">
              Please send a professional photo for use as your video thumbnail and branding. Use a plain, well-lit background and dress professionally.
            </p>
          </section>

          {/* Section: Social Media Access for Auto Posting */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 7: Social Media Account Access</h2>
            
            <VideoEmbed size="medium" videoId="J9pvoWH_HiI" />
            
            <p className="text-muted-foreground">
              We'll request access (or a manager invitation) for your TikTok, Instagram, Facebook, YouTube, and Google My Business profiles to automate publishing.
              You'll receive detailed instructions in Slack for securely connecting your accounts.
            </p>
          </section>

          {/* Section: Access for DM Automation */}
          <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
            <h2 className="text-2xl font-bold text-navy mb-4">Step 8: Direct Message Automation Setup</h2>
            
            <VideoEmbed size="medium" videoId="xA277kpa0qE" />
            
            <p className="text-muted-foreground">
              For DM automation, we'll walk you through connecting your social media accounts with our ManyChat workspace (or similar service).
              This allows us to respond instantly to leads.
              All details and step-by-step help will be in your Slack channel.
            </p>
          </section>


          {/* Section: Need Help */}
          <section className="mb-10 bg-gradient-to-br from-navy via-primary to-navy rounded-2xl p-8 text-white text-center animate-fade-in">
            <h2 className="text-2xl font-bold mb-3">Questions? Here to Help!</h2>
            <p className="mb-2">
              If you have questions at any step, message us in your Slack channel or email
              <a href="mailto:hello@zovus.tech" className="underline hover:text-lime ml-1">hello@zovus.tech</a>
            </p>
            <Link to="/" className="inline-block mt-3">
              <Button variant="outline" className="border-lime text-lime hover:bg-lime/20 hover:text-white transition">
                Back to Home
              </Button>
            </Link>
          </section>
        </div>
      </main>
      {/* Footer fixes: remove margin/padding above and below */}
      <footer className="w-full bg-white/80 border-t border-border text-muted-foreground text-xs">
        <div className="container mx-auto max-w-3xl px-4 py-4 text-center">
          © 2025 ByteSprout (A <a href="https://www.zovus.tech" className="underline" target="_blank" rel="noopener noreferrer">ZOVUS Company</a>). All rights reserved.
        </div>
      </footer>
    </div>;
};
export default Onboarding;