import Footer from "@/components/common/Footer";
import MarqueeBanner from "@/components/common/MarqueeBanner";
import DeepDive from "@/components/ui/howWeDoIt/DeepDive";
import Hero from "@/components/ui/howWeDoIt/Hero";
import HowConnect from "@/components/ui/howWeDoIt/HowConnect";

export default function HowWeDoItPage() {
  return (
    <div>
      <Hero />
      <MarqueeBanner />

      {/* Vertical stripe background wrapping the Deep Dive section */}
      <div
        style={{
          backgroundColor: "#ffffff",
          backgroundImage: `repeating-linear-gradient(
            to right,
            rgb(255 254 254 / 0%),
            rgb(219 219 219 / 55%) 54%,
            rgb(255 255 255 / 5%) 103%
          )`,
          backgroundSize: "59px 2%",
        }}
      >
        <DeepDive />
        {/* <div className="overflow-x-clip">
          <FooterCrossMarquee inline />
        </div> */}
        <HowConnect />

        <Footer />
      </div>
    </div>
  );
}
