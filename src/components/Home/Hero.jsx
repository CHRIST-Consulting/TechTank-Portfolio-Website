import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <div className="w-full h-fit 2xl:min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-32 sm:pt-28 lg:pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl bottom-0 right-0"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            className="space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4"> 
              <h2 className="text-2xl sm:text-3xl font-medium text-white/90 tracking-wide">
                Your Trusted Partner In
              </h2>
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#B1D8FF] leading-[1.1]">
                  Technological
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                  Innovation
                </h1>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-white/80 font-light max-w-2xl mx-auto lg:mx-0">
              Where Experience Meets Excellence
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className="group bg-white hover:bg-white/90 text-blue-900 rounded-full px-6 py-3 h-auto text-lg transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative w-full h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full h-full">
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              >
                <img
                  src="/hero.png"
                  alt="Technology Infrastructure"
                  className="w-full h-full object-contain"
                />
              </motion.div>

              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-blue-300/50 rounded-full animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}