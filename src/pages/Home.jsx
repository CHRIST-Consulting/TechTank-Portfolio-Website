import { Hero } from "@/components/Home/Hero";
import BelowHero from "@/components/Home/BelowHero";
import AboutUs from "@/components/Home/AboutUs";

export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-[#ffffff] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative">
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <BelowHero />
      <AboutUs />
    </main>
  );
}