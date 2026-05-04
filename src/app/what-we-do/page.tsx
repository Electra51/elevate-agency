import Footer from "@/components/common/Footer";
import MarqueeBanner from "@/components/common/MarqueeBanner";
import Hero from "@/components/ui/whatWeDo/Hero";
import HowWeTake from "@/components/ui/whatWeDo/HowWeTake";
import Promises from "@/components/ui/whatWeDo/Promises";

const page = () => {
  return (
    <div>
      <Hero />
      <MarqueeBanner />
      <div
        className="gradient-bg"
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
        <HowWeTake />
        <Promises />
        <Footer />
      </div>
    </div>
  );
};

export default page;
