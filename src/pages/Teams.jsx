import MemberCard from '@/components/Teams/MemberCard'
import { Card } from '@/components/ui/card'
import React from 'react'

export default function Teams() {
    return (
        <main>
            <section className="bg-gradient-to-b from-[#FFFFFF] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative mb-4">
                <div className="relative container mx-auto px-6 pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <img src="/images/teams/teams_top.png" alt="Team Illustration" className="w-full max-w-3xl mx-auto" />
                        <h1 className="flex gap-2 text-4xl md:text-5xl lg:text-7xl font-bold mb-8 justify-center">
                            <span className="text-white">MEET</span>
                            <span className="text-blue-400">OUR</span>
                            <span className="text-white">TEAM</span>
                        </h1>
                        <p className="md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-left mt-4">
                            CHRIST Consulting is held together by a team of dynamic students and faculties whose varying areas of expertise glue the organisation together. Our team brings over 50 years of coaching, training and behavioural change expertise. Our approach is to understand your specific needs in depth and create the most effective intervention possible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-6">
                <div className="w-full mb-8">
                    <h1 className="flex gap-2 text-4xl font-bold justify-center">
                        <span className="text-white">Our</span>
                        <span className="text-blue-400">Tech</span>
                        <span className="text-white">Team</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <MemberCard />
                    <MemberCard />
                    <MemberCard />
                </div>
            </section>
        </main>
    )
}
