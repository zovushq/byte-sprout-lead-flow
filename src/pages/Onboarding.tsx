import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const GOOGLE_FORM_LINK = "https://forms.gle/your-form-link";  // Replace with your real form link

const VIDEO_SCRIPT = `
Hello! I'm feeling great right now with a relaxed tone and confident that I'll do well on this recording 😃. I'm in front of the camera, ready to go. I'm excited to try out this new tool and see what I can achieve with it.

<Close your mouth and breathe through your nose>

The lighting is perfect—no harsh shadows on my face. My pronunciation is clear, and I'm relaxed because this process has been simple, easy, and enjoyable 🥰. I'll add some natural, subtle hand movements 👐 throughout the recording, avoiding too much body or head movement. These gestures will help me look more natural and at ease.

<Close your mouth and breathe through your nose>

I'm not wearing sunglasses or accessories, so my face is clearly visible. My tone is steady, and I'm speaking naturally, with pauses between sentences. I'm relaxed, and this recording process has been fun 🥰.

<Close your mouth and breathe through your nose>

As I record, I'm thinking of happy memories that make me feel life is full and interesting. I'm holding onto this relaxed, joyful mood 😃 and hoping to carry it with me 🥰.

<Close your mouth and breathe through your nose>

I’ll continue adding slight hand movements 👐 to keep things feeling natural. My tone remains steady and expressive, and I’m proud of how it’s going so far. I’ll keep giving my best until the recording is done.

<Close your mouth and breathe through your nose>

It’s been a pleasure recording today, and I’m excited to see the final result. So far, everything has gone smoothly, and I hope things are going great for you too 😃.

<Close your mouth and breathe through your nose>
`;

const CONSENT_SCRIPT = `
I [Full Name], hereby allow HeyGen to use the footage of me to build a HeyGen Avatar for use on the HeyGen platform.
`;

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-muted pt-8 pb-28">
      <div className="container mx-auto max-w-3xl px-4">
        {/* Section: Welcome */}
        <section className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 animate-fade-in">
            Welcome to ByteSprout Onboarding!
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground animate-fade-in">
            We’re excited to help you transform your practice with AI-powered content and qualified leads. Onboarding is simple, structured, and stress-free!
          </p>
        </section>

        {/* Section: Step 1 */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-scale-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 1: Share Your Info</h2>
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
          <p className="text-muted-foreground mb-3">
            Once you sign up, you’ll get a dedicated Slack channel to chat with our team in real time.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground mb-3">
            <li>Ask questions, share files, and get quick updates – all in one place.</li>
            <li>We’ll share onboarding requirements and confirm each step there.</li>
            <li>All your files (videos, scripts, consent forms) can be shared securely through Slack.</li>
          </ul>
        </section>

        {/* Section: Step 3 - Training Your Avatar */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 3: Record Your AI Avatar Videos & Audio</h2>
          <p className="text-muted-foreground mb-2">There are two types of avatars we can create:</p>
          <ul className="mb-4 list-disc pl-6 text-muted-foreground">
            <li><b>Still Avatar:</b> For announcements, training, and regular social videos. <span className="text-lime">(Recommended for most cases!)</span></li>
            <li><b>Motion Avatar:</b> Best for external marketing and ads.</li>
          </ul>
          <div className="mb-6">
            <h3 className="font-semibold text-navy mb-2">⭐ Still Avatar Video Instructions</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-2">
              <li>Record 2-5 minutes of footage (required).</li>
              <li>Use a high-resolution camera in a well-lit, quiet environment.</li>
              <li>Look directly at the camera. Pause between sentences, mouth closed.</li>
              <li>Use subtle, natural gestures. Keep hands below chest.</li>
            </ul>
            <h4 className="font-medium mb-1 mt-4 text-navy">Things to Avoid</h4>
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
            <h4 className="font-medium mb-1 mt-4 text-navy">Things to Avoid</h4>
            <ul className="list-disc pl-6 text-sm text-muted-foreground">
              <li>Stitches/cuts, loud background noise, shaky video.</li>
              <li>Fast head movements, bad lighting, hands above chest.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-navy mb-2">✅ Example Script to Read On-Camera</h3>
            <pre className="bg-muted text-[15px] p-4 rounded whitespace-pre-wrap">{VIDEO_SCRIPT.trim()}</pre>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-navy mb-2">🔊 Audio Guidelines (Voice Cloning)</h3>
            <ul className="list-disc pl-6 text-muted-foreground mb-2">
              <li>Use the script above and exaggerate emotions! Aim for a lively, expressive tone.</li>
              <li>Avoid robotic or monotone speaking. Speak clearly and in a quiet room.</li>
              <li>You can use your phone’s recorder if no professional mic is available.</li>
            </ul>
            <span className="block text-sm text-muted-foreground">Tip: The AI clone reduces excitement by ~30%. So, be even more expressive in your recording!</span>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold text-navy mb-2">📥 How to Send Videos & Audio</h3>
            <p className="text-muted-foreground mb-2">
              When done, upload your video and audio files directly to your private Slack channel. Our team will confirm receipt and next steps.
            </p>
          </div>
        </section>

        {/* Section: Consent Video */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 4: Record Consent Video</h2>
          <p className="text-muted-foreground mb-2">
            To ensure compliance and safety, please record a brief consent video (under 30 seconds).
          </p>
          <h3 className="font-semibold mb-1 mt-3">What to Say</h3>
          <pre className="bg-muted text-[15px] p-4 rounded whitespace-pre-wrap mb-2">{CONSENT_SCRIPT.trim()}</pre>
          <ul className="list-disc pl-6 text-muted-foreground mb-2">
            <li>Keep the video style and quality just like your main avatar video.</li>
            <li>Make sure the same person appears, with clear lighting and sound.</li>
            <li>Avoid screen recordings, unclear audio, or unmatched footage.</li>
          </ul>
          <div className="mb-1 text-muted-foreground">
            <b>Submit your consent video via Slack.</b>
          </div>
        </section>

        {/* Section: Thumbnail Photo Guidance */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 5: Thumbnail Photo</h2>
          <p className="text-muted-foreground">
            Please send a professional photo for use as your video thumbnail and branding. Use a plain, well-lit background and dress professionally.
          </p>
        </section>

        {/* Section: Social Media Access for Auto Posting */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 6: Social Media Account Access</h2>
          <p className="text-muted-foreground">
            We'll request access (or a manager invitation) for your TikTok, Instagram, Facebook, YouTube, and Google My Business profiles to automate publishing.
            You'll receive detailed instructions in Slack for securely connecting your accounts.
          </p>
        </section>

        {/* Section: Access for DM Automation */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 7: Direct Message Automation Setup</h2>
          <p className="text-muted-foreground">
            For DM automation, we’ll walk you through connecting your social media accounts with our ManyChat workspace (or similar service).
            This allows us to respond instantly to leads.
            All details and step-by-step help will be in your Slack channel.
          </p>
        </section>

        {/* Section: Using Your Lead Dashboard */}
        <section className="mb-10 bg-white rounded-2xl p-8 shadow border border-border animate-fade-in">
          <h2 className="text-2xl font-bold text-navy mb-4">Step 8: Access Your Lead Dashboard</h2>
          <p className="text-muted-foreground">
            You'll be provided with a GoHighLevel dashboard to view conversations, qualified leads, and performance analytics in real time.
            We’ll show you how to use this platform during onboarding.
          </p>
        </section>

        {/* Section: Need Help */}
        <section className="mb-10 bg-gradient-to-br from-navy via-primary to-navy rounded-2xl p-8 text-white text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-3">Questions? Here to Help!</h2>
          <p className="mb-2">
            If you have questions at any step, message us in your Slack channel or email
            <a href="mailto:zovus.inc@gmail.com" className="underline hover:text-lime ml-1">zovus.inc@gmail.com</a>
          </p>
          <Link to="/" className="inline-block mt-3">
            <Button variant="outline" className="border-lime text-lime hover:bg-lime/20 transition">
              Back to Home
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Onboarding;
