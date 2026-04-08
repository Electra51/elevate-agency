import MarqueeBanner from "@/components/common/MarqueeBanner";
import Hero from "@/components/ui/homepage/Hero";
import Service from "@/components/ui/homepage/Service";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeBanner />
      <Service />
    </div>
  );
}
