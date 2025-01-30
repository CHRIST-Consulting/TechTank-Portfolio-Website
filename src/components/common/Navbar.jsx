import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const activeTab = window.location.pathname.replace("/", "");

  const tabs = [
    { id: '', label: 'Home', href: '/' },
    { id: 'team', label: 'Team', href: '/team' },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <motion.div
        className={`w-screen h-fit fixed top-0 z-50 transition-colors duration-300 bg-transparent`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row w-screen">
          <AnimatePresence>
            {!scrolled && (
              <motion.div
                className="flex justify-start items-center mx-10 w-32 h-16 sm:w-40 sm:h-24 lg:w-48 bg-transparent ml-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 }
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="hidden sm:flex justify-center lg:justify-center items-center w-full h-24 bg-transparent absolute top-0 left-0 z-10">
            <nav className="flex w-fit h-fit justify-center items-center">
              <ul className="flex flex-row justify-center items-center w-fit h-fit py-2 rounded-full bg-white shadow-lg">
                {tabs.map((tab) => (
                  <motion.li
                    key={tab.id}
                    className={`mx-2 px-4 lg:mx-2 lg:px-5 py-2 rounded-full cursor-pointer transition-colors ${activeTab === tab.id ? 'bg-[#051650] text-white' : 'bg-transparent text-black'
                      }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a href={tab.href} className="text-sm lg:text-lg">{tab.label}</a>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="sm:hidden flex items-center absolute top-0 right-0 h-16 pr-4">
            <motion.button
              onClick={toggleSidebar}
              className="text-gray-600 focus:outline-none focus:text-gray-900 z-[30]"
              aria-label="Toggle sidebar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSidebarOpen ? (
                <IoMdClose size={24} />
              ) : (
                <RxHamburgerMenu size={24} />
              )}
            </motion.button>

            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  className="fixed inset-y-0 right-0 z-20 w-2/3 bg-white shadow-lg"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                    <motion.button
                      onClick={toggleSidebar}
                      className="text-gray-600 focus:outline-none focus:text-gray-900"
                      aria-label="Close sidebar"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IoMdClose size={24} />
                    </motion.button>
                  </div>
                  <nav className="mt-4">
                    <ul className="space-y-2">
                      {tabs.map((tab) => (
                        <motion.li
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          key={tab.id}
                        >
                          <a
                            href={tab.href}
                            className={`block px-4 py-2 text-lg ${activeTab === tab.id
                              ? 'bg-[#051650] text-white'
                              : 'text-gray-600 hover:bg-gray-100'
                              }`}
                            onClick={() => {
                              toggleSidebar();
                            }}
                          >
                            {tab.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isSidebarOpen && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={toggleSidebar}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </>
  );
}