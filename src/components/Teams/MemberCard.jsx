import React from 'react'
import { Card } from '../ui/card'

function MemberCard() {
    return (
        <Card className="bg-white rounded-lg shadow-lg relative overflow-hidden group">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[url('/images/teams/card-bg.png')] bg-cover bg-center z-0`}></div>

            <img src={`/images/teams/profile.png`} alt={"name"} className='w-full relative h-[80%] object-cover z-1' />

            <div className='absolute text-[#001F54] font-medium text-sm  bottom-[20%] left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-start p-2 px-4 gap-2 bg-[#002B59B2] z-2'>
                {
                    Array(3).fill().map((_, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white">
                            React
                        </span>
                    ))
                }
            </div>

            <div className='p-4 text-left h-[20%] bg-white relative z-1'>
                <h3 className='text-xl font-bold text-[#001F54] m-0'>Harsh Jangid</h3>
                <p className='text-base italic mt-1'>Full Stack Developer</p>
            </div>
        </Card>
    )
}

export default MemberCard