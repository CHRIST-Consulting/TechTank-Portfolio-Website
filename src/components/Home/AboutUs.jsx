import { motion } from 'framer-motion';

export default function AboutUs() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full bg-white">
      {/* Main Heading */}
      <motion.div 
        className="w-full flex items-center justify-center py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h1 className="text-[#001449] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center">
          About Us
        </h1>
      </motion.div>

      {/* Mission Section */}
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-5xl 2xl:max-w-7xl grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            className="w-full h-[300px] md:h-[270px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] overflow-hidden rounded-lg shadow-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <img
              src="/about 1.png"
              alt="Team members in discussion"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="flex flex-col justify-center space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h2 className="text-[#000033] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Our Mission: Empowering Business, Driving Innovation
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Our mission is to bridge the gap between technology and business success. We believe in creating value by providing transformative solutions that enhance efficiency, scalability, and innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Story Section */}
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-20 bg-gray-50">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-5xl 2xl:max-w-7xl grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div 
            className="flex flex-col justify-center space-y-6 order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-[#000033] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Story
            </h2>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Christ Consulting was born from a vision to redefine the role of technology in business growth. Our journey began with a small team of passionate individuals dedicated to making an impact. Over time, we've grown into a trusted partner for organizations across industries, delivering customized solutions powered by the latest technological advancements.
            </p>
          </motion.div>
          <motion.div 
            className="w-full h-[300px] md:h-[270px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] overflow-hidden rounded-lg shadow-xl order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <img
              src="/about 2.png"
              alt="Team members collaborating"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}