import React from 'react'

export default function Service({ bgColor, textColor, title, description }) {
    return (
        <div className={`p-8 my-4 ${bgColor}`}>
            <h2 class={`text-4xl font-bold ${textColor} mb-6`}>{title}</h2>
            <p className={`${textColor} mb-12 max-w-2xl`}>{description}</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    Array(4).fill().map(() => (
                        <div className="bg-white/10 p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                            <img src="/images/services/placeholder.png" alt="Backend Service" className="w-full rounded-lg shadow-md" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
