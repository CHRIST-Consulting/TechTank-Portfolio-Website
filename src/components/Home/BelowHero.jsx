import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const BelowHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textLines = ["Grow Digital", "Your Business", "With", "CHRIST Consulting"];

  const getTextAnimation = (index) => {
    const start = 0.01 + index * 0.15;
    const end = start + 0.4;

    return {
      opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
      y: useTransform(scrollYProgress, [start, end], [-30, -120]),
    };
  };

  return (
    <div ref={containerRef} className="relative min-h-[20vh] sm:min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] xl:min-h-[110vh] w-full">
      <div className="h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-[80vh] bg-[#051650] relative flex items-center">
        <div className="absolute inset-0 flex flex-col justify-start items-start px-4 sm:px-8 md:px-16 lg:px-24 space-y-2 sm:space-y-4 lg:space-x-0">
          {textLines.map((line, index) => (
            <motion.div
              key={index}
              className="overflow-hidden w-full"
              style={getTextAnimation(index)}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 20,
              }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold tracking-wide leading-none whitespace-nowrap">
                {line}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full h-auto absolute bottom-0 left-0">
        <img
          src="/hero-bottom.png"
          alt="Hero Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BelowHero;