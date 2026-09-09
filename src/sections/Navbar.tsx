import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Wheat } from 'lucide-react';
import { Button } from '../components/Button';
import { MotionButton } from '../components/MotionButton';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent pt-6'} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <Wheat className="w-8 h-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold tracking-tight text-gray-900">
            AgriScribe<span className="text-green-500">.ai</span>
          </span>
        </div>

        {/* Center Navigation Pill */}
        <div className="hidden lg:flex items-center space-x-2 bg-white/60 backdrop-blur-md rounded-full px-2 py-2 shadow-sm border border-black/5">
          <a href="#how-it-works" className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors">How It Works</a>
          <a href="#features" className="text-gray-700 hover:text-gray-900 px-5 py-2 rounded-full text-sm font-medium transition-colors">Features</a>
          <a href="#impact" className="text-gray-700 hover:text-gray-900 px-5 py-2 rounded-full text-sm font-medium transition-colors">Impact</a>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 cursor-pointer transition-colors pr-4 border-r border-gray-200">
            <Globe className="w-5 h-5" />
            <span className="text-sm font-medium">EN</span>
          </div>
          <MotionButton label="Enter My Farm" />
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 hover:text-green-600 focus:outline-none bg-white/50 p-2 rounded-full backdrop-blur-sm"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-4 rounded-2xl shadow-xl overflow-hidden border border-gray-100 mx-4"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#how-it-works" className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 hover:bg-gray-50">How It Works</a>
              <a href="#features" className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>
              <a href="#impact" className="block px-3 py-2 rounded-xl text-base font-medium text-gray-900 hover:bg-gray-50">Impact</a>
              
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-700 bg-gray-50 rounded-xl">
                <Globe className="w-5 h-5" />
                <span className="font-medium">English</span>
              </div>
              
              <div className="pt-4">
                <button className="w-full text-center text-sm font-medium text-white bg-gray-900 rounded-full px-5 py-3 hover:bg-gray-800 transition-colors">
                  Enter My Farm
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

