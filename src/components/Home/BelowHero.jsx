import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const BelowHero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const getTextAnimation = (index) => {
    const start = 0.01 + index * 0.10;
    const end = start + 0.4;

    return {
      opacity: useTransform(scrollYProgress, [start, end], [0, 1]),
      y: useTransform(scrollYProgress, [start, end], [-30, -120]),
    };
  };

  return (
    <div ref={containerRef} className="relative min-h-[200px] h-auto w-full bg-[#051650] flex flex-col justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="w-full pt-8 sm:pt-12 md:pt-16 px-4 sm:px-8"
      >
        <div className="flex flex-col gap-2 sm:gap-4">
          {[
            "Grow Digital",
            "Your Business",
            "With",
            "CHRIST Consulting"
          ].map((text, index) => (
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
              <h1 className='text-white text-[9.5502645503vw] font-bold tracking-wide leading-none whitespace-nowrap'>
                {text}
              </h1>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="w-full mt-auto">
        <img
          src="/images/home/hero-bottom.png"
          alt="Hero Background"
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  );
};

export default BelowHero;