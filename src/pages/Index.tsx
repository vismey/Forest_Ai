
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FocusZone from "@/components/FocusZone";
import MusicSection from "@/components/MusicSection";
import ThoughtsSection from "@/components/ThoughtsSection";
import QuotesSection from "@/components/QuotesSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <Services />
      <div id="focus">
        <FocusZone />
      </div>
      <div id="music">
        <MusicSection />
      </div>
      <div id="thoughts">
        <ThoughtsSection />
      </div>
      <QuotesSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
