import { services } from '@/components/Services/data'
import Service from '@/components/Services/Service'
import React from 'react'
import { Helmet } from 'react-helmet'

const backgroundColors = [{
    bgColor: "bg-[#D9D9D9]",
    textColor: "text-[#051650]"
}, {
    bgColor: "bg-[#051650]",
    textColor: "text-white"
}]

export default function Services() {
    let count = 0

    return (
        <main>
            <Helmet>
                <title>Our Services | TechTank | CHRIST Consulting</title>
                <meta name="title" content="Our Services | TechTank | CHRIST Consulting" />
                <meta name="description" content="TechTank | CHRIST Consulting specializes in Frontend Development, Backend Development, Full Stack Development, Chatbot Development, and Technical Training. Explore our expert tech solutions." />
                <meta name="keywords" content="Frontend Development, Backend Development, Full Stack Development, Chatbot Development, Technical Training, web development, AI chatbot, software solutions, coding bootcamp, programming training" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://techtank-cc.vercel.app/services" />
                <meta property="og:title" content="Our Services | TechTank | CHRIST Consulting" />
                <meta property="og:description" content="Discover TechTank's expert services, including Frontend & Backend Development, Full Stack Solutions, Chatbot Development, and Technical Training." />
                <meta property="og:url" content="https://techtank-cc.vercel.app/services" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://techtank-cc.vercel.app/images/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Services | TechTank | CHRIST Consulting" />
                <meta name="twitter:description" content="We offer top-tier Frontend & Backend Development, Full Stack Solutions, Chatbot Development, and Technical Training at TechTank | CHRIST Consulting." />
                <meta name="twitter:image" content="https://techtank-cc.vercel.app/images/logo.png" />
            </Helmet>
            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative mb-4">
                <div className="relative z-10">
                    <img src="/images/services/hero_image.png" loading='eager' alt="Service Background" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />

                    <div className="relative container mx-auto px-6 flex flex-col items-center justify-end min-h-screen">
                        <h1 className="text-6xl font-bold text-white mb-8 text-center mt-auto">
                            Our Services
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mx-auto my-8 flex flex-col gap-6">
                {
                    services.map((service) => {
                        count++
                        return <Service
                            key={service.title}
                            bgColor={backgroundColors[count % 2].bgColor}
                            textColor={backgroundColors[count % 2].textColor}
                            title={service.title}
                            description={service.description}
                            imageUrls={service.imageUrls}
                        />
                    })
                }
            </div>

        </main>
    )
}
