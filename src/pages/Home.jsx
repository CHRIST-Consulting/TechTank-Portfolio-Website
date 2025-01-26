import { Hero } from "@/components/Home/Hero";
import BelowHero from "@/components/Home/BelowHero";
import AboutUs from "@/components/Home/AboutUs";
import OurClient from "@/components/Home/OurClient";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#051650]">
      <div className="bg-gradient-to-b from-[#FFFFFF] via-[#678FFF] via-45% via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative">
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <BelowHero />
      <AboutUs />
      <OurClient />
      <Testimonials />
    </main>
  );
}