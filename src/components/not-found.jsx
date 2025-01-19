import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#051650] flex items-center justify-center px-4">
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl bottom-0 right-0"></div>
        </div>

        <motion.div
          className="text-center space-y-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-medium text-[#B1D8FF] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
          </p>
          
          <motion.button
            onClick={() => navigate('/')}
            className="group inline-flex items-center bg-white hover:bg-white/90 text-blue-900 rounded-full px-6 py-3 text-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}