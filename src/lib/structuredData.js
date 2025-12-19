// Schema.org structured data for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechTank | CHRIST Consulting",
  url: "https://techtank-cc.vercel.app",
  logo: "https://techtank-cc.vercel.app/images/logo.png",
  description:
    "TechTank | CHRIST Consulting offers cutting-edge technology solutions, AI consulting, web development, cybersecurity, and hands-on internship programs for students.",
  sameAs: [
    // Add social media profiles here when available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    url: "https://techtank-cc.vercel.app/contact",
  },
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "TechTank Services",
  description:
    "Professional technology services offered by TechTank | CHRIST Consulting",
  itemListElement: [
    {
      "@type": "Service",
      name: "Frontend Development",
      provider: {
        "@type": "Organization",
        name: "TechTank | CHRIST Consulting",
      },
      description:
        "Professional frontend development services including React, Vue, and modern web technologies",
      serviceType: "Web Development",
    },
    {
      "@type": "Service",
      name: "Backend Development",
      provider: {
        "@type": "Organization",
        name: "TechTank | CHRIST Consulting",
      },
      description:
        "Robust backend development with Node.js, Python, and database management",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      name: "Full Stack Development",
      provider: {
        "@type": "Organization",
        name: "TechTank | CHRIST Consulting",
      },
      description: "Complete end-to-end web application development services",
      serviceType: "Software Development",
    },
    {
      "@type": "Service",
      name: "Chatbot Development",
      provider: {
        "@type": "Organization",
        name: "TechTank | CHRIST Consulting",
      },
      description:
        "AI-powered chatbot development for enhanced customer engagement",
      serviceType: "AI Solutions",
    },
    {
      "@type": "Service",
      name: "Technical Training",
      provider: {
        "@type": "Organization",
        name: "TechTank | CHRIST Consulting",
      },
      description:
        "Comprehensive technical training and internship programs for students",
      serviceType: "Educational Services",
    },
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "TechTank | CHRIST Consulting",
  url: "https://techtank-cc.vercel.app",
  description:
    "Innovative technology solutions, AI consulting, and web development services",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://techtank-cc.vercel.app/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
