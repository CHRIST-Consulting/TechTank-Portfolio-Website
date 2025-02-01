import React from 'react'
import { Card } from '../ui/card'

function MemberCard({ imageUrl, name, role, skills }) {
    return (
        <Card className="bg-white rounded-lg shadow-lg relative overflow-hidden group h-[520px] w-[320px]">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}>
                <img src={`/images/teams/backdrops/${imageUrl}`} loading='lazy' alt="" />
            </div>

            <img src={`/images/teams/profiles/${imageUrl}`} loading='lazy' alt={name} className='w-full relative h-[80%] object-cover z-1' />

            <div className='absolute text-[#001F54] font-medium text-sm bottom-[20%] left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-start p-2 px-4 gap-2 bg-[#002B59B2] z-2'>
                {
                    skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white">
                            {skill}
                        </span>
                    ))
                }
            </div>

            <div className='p-4 text-left h-[20%] bg-white relative z-1'>
                <h3 className='text-xl font-bold text-[#001F54] m-0'>{name}</h3>
                <p className='text-base italic mt-1'>{role}</p>
            </div>
        </Card>
    )
}

export default MemberCard