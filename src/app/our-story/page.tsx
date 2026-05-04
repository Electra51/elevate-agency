import Footer from "@/components/common/Footer";
import BlogSection from "@/components/ui/OurStoryPage/BlogSection";
import CustomerTestimonial from "@/components/ui/OurStoryPage/CustomerTestimonial";
import Hero from "@/components/ui/OurStoryPage/Hero";
import HowWeWork from "@/components/ui/OurStoryPage/HowWeWork";
import Philosophy from "@/components/ui/OurStoryPage/Philosophy";
import UnfairAdvantage from "@/components/ui/OurStoryPage/Unfairadvantage";

const page = () => {
  return (
    <div>
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
        {" "}
        <HowWeWork />
        <Philosophy />
        <UnfairAdvantage />
        <BlogSection />
        <CustomerTestimonial />
        <Footer />
      </div>
    </div>
  );
};

export default page;
