import Hero from "@/components/Hero";
import Features from "@/components/Features";
import VideoSection from "@/components/VideoSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <VideoSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
