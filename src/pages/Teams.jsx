import { teamMembers } from '@/components/Teams/constants'
import MemberCard from '@/components/Teams/MemberCard'
import React from 'react'
import { Helmet } from 'react-helmet'

export default function Teams() {
    return (
        <main>
            <Helmet>
                <title>Meet Our Team | TechTank | CHRIST Consulting</title>
                <meta name="title" content="Meet Our Team | TechTank | CHRIST Consulting" />
                <meta name="description" content="Discover the experts behind TechTank at CHRIST Consulting. Our team specializes in technology consulting, AI solutions, web development, and student mentorship. Learn more about our dedicated professionals." />
                <meta name="keywords" content="TechTank team, CHRIST Consulting team, technology consultants, AI experts, web development team, student mentorship, tech professionals, innovation leaders" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://techtank-cc.vercel.app/team" />
                <meta property="og:title" content="Meet Our Team | TechTank | CHRIST Consulting" />
                <meta property="og:description" content="Get to know the professionals driving innovation at TechTank. Our team at CHRIST Consulting excels in technology consulting, AI, web development, and mentoring future tech leaders." />
                <meta property="og:url" content="https://techtank-cc.vercel.app/team" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://techtank-cc.vercel.app/images/logo.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Meet Our Team | TechTank | CHRIST Consulting" />
                <meta name="twitter:description" content="Introducing the experts at TechTank. Our CHRIST Consulting team specializes in technology solutions, AI, web development, and student mentorship." />
                <meta name="twitter:image" content="https://techtank-cc.vercel.app/images/logo.png" />
            </Helmet>
            <section className="bg-gradient-to-b from-[#FFFFFF] via-[#003AFF] via-[59.22%] to-[#051650] to-[78.1%] relative mb-4 lg:min-h-screen lg:pt-10">
                <div className="relative container mx-auto px-6 pt-32 pb-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <img src="/images/teams/teams_top.png" loading='eager' alt="Team Illustration" className="w-full max-w-3xl mx-auto" />
                        <h1 className="flex gap-2 text-4xl lg:text-7xl font-bold mb-8 justify-center">
                            <span className="text-white">MEET</span>
                            <span className="text-[#4cb4ff]">OUR</span>
                            <span className="text-white">TEAM</span>
                        </h1>
                        <p className="md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed text-left mt-4">
                            CHRIST Consulting is held together by a team of dynamic students and faculties whose varying areas of expertise glue the organisation together. Our team brings over 50 years of coaching, training and behavioural change expertise. Our approach is to understand your specific needs in depth and create the most effective intervention possible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 container mx-auto px-6 flex flex-col items-center justify-center">
                <div className="w-full mb-14">
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
