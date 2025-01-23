import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

export default function Service({ bgColor, textColor, title, description, deviceType = "computer" }) {
    return (
        <div className={`p-8 my-4 ${bgColor}`}>
            <h2 className={`text-4xl font-bold ${textColor} mb-6`}>{title}</h2>
            <p className={`${textColor} mb-12 max-w-2xl`}>{description}</p>
            <div className="">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >

                    {
                        Array(9).fill().map((_, i) => (
                            <div key={i} className="bg-white/10 p-2 mx-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                                <img src="/images/services/placeholder.png" alt="Backend Service" className="w-full rounded-lg shadow-md" />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
