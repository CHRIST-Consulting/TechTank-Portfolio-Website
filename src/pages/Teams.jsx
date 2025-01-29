import { teamMembers } from '@/components/Teams/constants'
import MemberCard from '@/components/Teams/MemberCard'
import React from 'react'

export default function Teams() {
    return (
        <main>
            <section className="bg-gradient-to-b from-[#FFFFFF] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative mb-4">
                <div className="relative container mx-auto px-6 pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <img src="/images/teams/teams_top.png" alt="Team Illustration" className="w-full max-w-3xl mx-auto" />
                        <h1 className="flex gap-2 text-4xl font-bold mb-8 justify-center">
                            <span className="text-white">MEET</span>
                            <span className="text-blue-400">OUR</span>
                            <span className="text-white">TEAM</span>
                        </h1>
                        <p className="md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed text-left mt-4">
                            CHRIST Consulting is held together by a team of dynamic students and faculties whose varying areas of expertise glue the organisation together. Our team brings over 50 years of coaching, training and behavioural change expertise. Our approach is to understand your specific needs in depth and create the most effective intervention possible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 container mx-auto px-6 flex flex-col items-center justify-center">
                <div className="w-full mb-8">
                    <div className="flex gap-2 lg:text-[70px] text-[40px] font-bold justify-center">
                        <h1 className="text-white">Our</h1>
                        <h1 className="text-blue-400">Tech</h1>
                        <h1 className="text-white">Team</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, i) => (
                        <MemberCard key={i} {...member} />
                    ))}
                </div>
            </section>
        </main>
    )
}
