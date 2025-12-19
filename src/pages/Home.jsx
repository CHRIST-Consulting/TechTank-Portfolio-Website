import { Helmet } from 'react-helmet-async';
import { Hero } from "@/components/Home/Hero";
import BelowHero from "@/components/Home/BelowHero";
import AboutUs from "@/components/Home/AboutUs";
import OurClient from "@/components/Home/OurClient";
import Testimonials from "@/components/Home/Testimonials";
import { organizationSchema, websiteSchema } from '@/lib/structuredData';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>TechTank | CHRIST Consulting - Innovative Technology Solutions</title>
        <meta name="title" content="TechTank | CHRIST Consulting - Innovative Technology Solutions" />
        <meta name="description" content="TechTank | CHRIST Consulting offers cutting-edge technology solutions, AI consulting, web development, cybersecurity, and hands-on internship programs for students. Join us to innovate, build, and lead in the tech world!" />
        <meta name="keywords" content="TechTank, CHRIST Consulting, technology consulting, AI solutions, web development, cybersecurity, cloud computing, internships, student projects, data science, DevOps" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://techtank-cc.vercel.app/" />
        <meta property="og:title" content="TechTank | CHRIST Consulting - Innovative Technology Solutions" />
        <meta property="og:description" content="Explore AI, web development, cybersecurity, and hands-on training with TechTank | CHRIST Consulting. Innovate, build, and lead with us!" />
        <meta property="og:url" content="https://techtank-cc.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://techtank-cc.vercel.app/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TechTank | CHRIST Consulting - Innovative Technology Solutions & Internships" />
        <meta name="twitter:description" content="TechTank | CHRIST Consulting specializes in AI, web development, cybersecurity, and student training programs. Learn, build, and grow with us!" />
        <meta name="twitter:image" content="https://techtank-cc.vercel.app/images/logo.png" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
      </Helmet>
      <div className="bg-gradient-to-b from-[#ffffff] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative">
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