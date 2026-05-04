import { Metadata } from "next";
import Footer from "@/components/common/Footer";
import DesignCTA from "@/components/ui/UIUxpage/DesignCTA";
import Hero from "@/components/ui/UIUxpage/Hero";
import TopServices from "@/components/ui/UIUxpage/TopServices";

export const metadata: Metadata = {
  title: "UI/UX Design | Elevate Agency",
  description: "Explore our UI/UX design services to enhance your digital presence.",
};

export default function UIUXPage() {
  return (
    <div className="">
      <Hero />

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
        <TopServices />
        <DesignCTA />
        <Footer />
      </div>
    </div>
  );
}
