import TallyIframe from '@/components/Contact/TallyIframe'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function Contact() {
    return (
        <main>
            <Helmet>
                <title>Contact Us | TechTank | CHRIST Consulting</title>
                <meta name="title" content="Contact Us | TechTank | CHRIST Consulting" />
                <meta name="description" content="Get in touch with TechTank at CHRIST Consulting for inquiries about our services, partnerships, or technical training programs. We're here to assist you." />
                <meta name="keywords" content="TechTank contact, CHRIST Consulting contact, technology consulting inquiries, service inquiries, technical training contact, partnership inquiries" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://techtank-cc.vercel.app/contact" />
                <meta property="og:title" content="Contact Us | TechTank | CHRIST Consulting" />
                <meta property="og:description" content="Reach out to TechTank at CHRIST Consulting for any questions or information regarding our technology services and training programs." />
                <meta property="og:url" content="https://techtank-cc.vercel.app/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://techtank-cc.vercel.app/images/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | TechTank | CHRIST Consulting" />
                <meta name="twitter:description" content="Connect with TechTank at CHRIST Consulting for inquiries about our technology solutions and educational programs." />
                <meta name="twitter:image" content="https://techtank-cc.vercel.app/images/logo.png" />

            </Helmet>
            <div className="bg-gradient-to-b from-white via-[#003AFF] via-[35.22%] to-[#0a2d9e] to-[78.1%]">
                <div className=" mx-auto flex-col items-center justify-center min-h-screen pt-32 pb-1">
                    <h1 className="text-6xl font-bold text-white mb-8 text-center">
                        Contact Us
                    </h1>
                    <TallyIframe />
                </div>
            </div>
        </main>
    )
}
