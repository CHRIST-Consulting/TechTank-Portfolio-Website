import Service from '@/components/Services/Service'
import React from 'react'

const services = [
    {
        title: "Front End Development",
        description: "Our mission is to bridge the gap between technology and business success. We believe in creating value by providing transformative solutions that enhance efficiency, scalability, and innovation."
    },
    {
        title: "Back End Development",
        description: "Our mission is to bridge the gap between technology and business success. We believe in creating value by providing transformative solutions that enhance efficiency, scalability, and innovation."
    },
    {
        title: "Full Stack Development",
        description: "Our mission is to bridge the gap between technology and business success. We believe in creating value by providing transformative solutions that enhance efficiency, scalability, and innovation."
    },
    {
        title: "Chatbots",
        description: "Our mission is to bridge the gap between technology and business success. We believe in creating value by providing transformative solutions that enhance efficiency, scalability, and innovation."
    },
    {
        title: "Technical Training",
        description: "Our mission is to bridge the gap between technology and business success. We believe in creating value by providing transformative solutions that enhance efficiency, scalability, and innovation."
    }
]

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
            <div className="bg-gradient-to-b from-[#FFFFFF] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative mb-4">
                <div className="relative z-10">
                    <img src="/images/services/hero_image.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover object-center opacity-80" />

                    <div className="relative container mx-auto px-6 flex flex-col items-center justify-end min-h-screen">
                        <h1 className="text-6xl font-bold text-white mb-8 text-center mt-auto">
                            Our Services
                        </h1>
                    </div>
                </div>
            </div>

            <div class="mx-auto my-8 flex flex-col gap-6">
                {
                    services.map((service) => {
                        count++
                        return <Service key={service.title} bgColor={backgroundColors[count % 2].bgColor} textColor={backgroundColors[count % 2].textColor} title={service.title} description={service.description} />
                    })
                }
            </div>

        </main>
    )
}
