import React, { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const OurClient = () => {
  const [clientImages, setClientImages] = useState([[], [], [], []])
  const controls = useRef([useAnimation(), useAnimation(), useAnimation(), useAnimation()])
  const durations = [25, 25, 25, 25]

  useEffect(() => {
    fetch('/client-images/clientImages.json')
      .then(response => response.json())
      .then(data => {
        const images = Object.values(data)
        setClientImages(images)
      })
      .catch(error => console.error('Error loading client images:', error))
  }, [])

  useEffect(() => {
    controls.current.forEach((control, index) => {
      const isEven = index % 2 === 0
      control.start({
        x: isEven ? "-50%" : "0%",
        transition: {
          duration: durations[index],
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        },
      })
    })
  }, [])

  const handleMouseEnter = (rowIndex) => {
    controls.current[rowIndex].stop()
  }

  const handleMouseLeave = (rowIndex) => {
    const isEven = rowIndex % 2 === 0
    controls.current[rowIndex].start({
      x: isEven ? "-50%" : "0%",
      transition: {
        duration: durations[rowIndex],
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        repeatType: "loop",
      },
    })
  }

  return (
    <div id="our-clients" className=" bg-[#051650] py-20">
      <div className="container mx-auto ">
        <h1 className="text-white text-7xl font-bold mb-10 text-center">
          Our Clients
        </h1>

        <div className="space-y-5">
          {clientImages.map((rowImages, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#051650] to-transparent z-10" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#051650] to-transparent z-10" />

              <motion.div
                className="flex w-fit"
                animate={controls.current[rowIndex]}
                initial={{ x: rowIndex % 2 === 0 ? "0%" : "-50%" }}
                onMouseEnter={() => handleMouseEnter(rowIndex)}
                onMouseLeave={() => handleMouseLeave(rowIndex)}
              >
                {[...rowImages, ...rowImages].map((imagePath, index) => (
                  <div key={index} className="mx-6">
                    <div className="w-[220px] h-[125px] bg-white rounded-[24px] p-2">
                      <div className="w-full h-full rounded-[20px] border-[3px] border-[#051650] bg-white p-3">
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={imagePath || "/placeholder.svg"}
                            loading="lazy"
                            alt={`Client Logo ${index + 1}`}
                            className="max-w-[80%] max-h-[80%] object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurClient