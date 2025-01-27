import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

const OurClient = () => {
  const rows = [
    Array(12).fill("Creatique"),
    Array(12).fill("Creatique"),
    Array(12).fill("Creatique"),
    Array(12).fill("Creatique"),
  ]

  const controls = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

  const durations = [20, 20, 20, 20]

  useEffect(() => {
    controls.forEach((control, index) => {
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
    controls[rowIndex].stop()
  }

  const handleMouseLeave = (rowIndex) => {
    const isEven = rowIndex % 2 === 0
    controls[rowIndex].start({
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
    <div className="min-h-screen bgbg-[#051650] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-7xl font-bold mb-20 text-center">Our Clients</h1>

        <div className="space-y-16">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative overflow-hidden">
              <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r frombg-[#051650] to-transparent z-10" />
              <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l frombg-[#051650] to-transparent z-10" />

              <motion.div
                className="flex w-fit"
                animate={controls[rowIndex]}
                initial={{ x: rowIndex % 2 === 0 ? "0%" : "-50%" }}
                onMouseEnter={() => handleMouseEnter(rowIndex)}
                onMouseLeave={() => handleMouseLeave(rowIndex)}
              >
                {[...row, ...row].map((_, index) => (
                  <div key={index} className="mx-4">
                    <div className="px-8 py-4 bg-transparent border border-white/30 rounded-lg transition-all duration-300 hover:border-[#3B82F6] hover:border-opacity-100">
                      <span className="text-[#3B82F6] text-2xl font-medium block text-center whitespace-nowrap">
                        Creatique
                      </span>
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