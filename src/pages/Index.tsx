
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SampleReels from "@/components/SampleReels";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import CostComparison from "@/components/CostComparison";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>ByteSprout (A Zovus Technologies Company) | AI-Powered Inbound Lead Generation and Qualification System for Law Firms</title>
        <meta name="description" content="ByteSprout, a Zovus Technologies company, helps law firms generate and qualify inbound leads using AI-powered automation. Streamline client acquisition and grow your practice efficiently." />
      </Helmet>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <SampleReels />
      <Process />
      <WhyChooseUs />
      <Pricing />
      <CostComparison />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
