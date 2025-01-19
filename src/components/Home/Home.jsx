import { Navbar } from "@/components/Home/Navbar";
import { Hero } from "@/components/Home/Hero";
import { BelowHero } from "@/components/Home/BelowHero";
import AboutUs from "@/components/Home/AboutUs";

export default function Home({
  activeTab,
  setActiveTab,
}) {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#051650]">
      <div className="bg-gradient-to-b from-[#FFFFFF] via-[#678FFF] via-45% via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative">
        <div className="relative z-10">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <Hero />
        </div>
      </div>
      <BelowHero />
      <AboutUs />
    </main>
  );
}