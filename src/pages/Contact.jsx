import TallyIframe from '@/components/Contact/TallyIframe'
import React from 'react'

export default function Contact() {
    return (
        <main>
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
