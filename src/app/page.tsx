import Footer from "@/components/common/Footer";
import MarqueeBanner from "@/components/common/MarqueeBanner";
import About from "@/components/ui/homepage/About";
import Connect from "@/components/ui/homepage/Connect";
import Faq from "@/components/ui/homepage/Faq";
import Hero from "@/components/ui/homepage/Hero";
import HorizontalScrollSection from "@/components/ui/homepage/HorizontalScrollSection/HorizontalScrollSection";
import PanoramicDesignSlider from "@/components/ui/homepage/PanoramicDesignSlider";
import Pricing from "@/components/ui/homepage/Pricing";
import Service from "@/components/ui/homepage/Service";
import ScrollResetOnLoad from "@/components/ui/homepage/ScrollResetOnLoad";

export default function Home() {
  return (
    <div>
      <ScrollResetOnLoad />
      <Hero />
      <MarqueeBanner />
      <Service />
      <HorizontalScrollSection />
      <div className="relative">
        <PanoramicDesignSlider />
        <About />
      </div>
      <Faq />
      <Pricing />

      <Connect />
      <Footer />
    </div>
  );
}
