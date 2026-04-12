import MarqueeBanner from "@/components/common/MarqueeBanner";
import Faq from "@/components/ui/homepage/Faq";
import Hero from "@/components/ui/homepage/Hero";
import HorizontalScrollSection from "@/components/ui/homepage/HorizontalScrollSection/HorizontalScrollSection";
import Pricing from "@/components/ui/homepage/Pricing";
import Service from "@/components/ui/homepage/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeBanner />
      <Service />
      <HorizontalScrollSection />
      <Faq />
      <Pricing />
    </div>
  );
}
