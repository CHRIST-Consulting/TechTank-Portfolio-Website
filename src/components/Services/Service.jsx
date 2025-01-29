import React, { useEffect, useState } from 'react'


export default function Service({ bgColor, textColor, title, description, imageUrls }) {
    const displayImages = imageUrls
        && [...imageUrls.images, ...imageUrls.images, ...imageUrls.images, ...imageUrls.images]

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsSmallScreen(window.innerWidth < 640)
        })
        return () => {
            window.removeEventListener('resize', () => {
                setIsSmallScreen(window.innerWidth < 640)
            })
        }
    }, [])

    return (
        <div className={`p-8 my-4 ${bgColor}`}>
            <h2 className={`text-4xl font-bold ${textColor} mb-6`}>{title}</h2>
            <p className={`${textColor} mb-12 max-w-2xl`}>{description}</p>
            <div className={`flex justify-between group items-center gap-3 scroll-smooth overflow-visible hide-scrollbar ${isSmallScreen ? 'animate-mobileScroll' : 'animate-scroll'}`}>
                {
                    imageUrls && displayImages.map((image, index) => (
                        <div key={index} className="bg-white/10 p-2 mx-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                            <img src={imageUrls.baseUrl + image} alt="Frontend Service" className="rounded-lg object-cover shadow-md max-w-[240px] max-h-[200px] min-w-[240px] min-h-[200px]" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
