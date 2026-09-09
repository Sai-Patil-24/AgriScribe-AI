import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Wheat } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgb(0,0,0,0.04)] py-3' : 'bg-transparent py-5'} px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center h-14">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center cursor-pointer">
          <Wheat className={`w-7 h-7 ${scrolled ? 'text-green-600' : 'text-white'} transition-colors`} />
          <span className={`ml-2 text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>
            AgriScribe<span className={`${scrolled ? 'text-green-500' : 'text-green-300'} transition-colors`}>.ai</span>
          </span>
        </div>

        {/* Center Navigation */}
        <div className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-1.5 py-1.5 border border-white/10">
          <a href="#how-it-works" className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${scrolled ? 'bg-gray-900 text-white' : 'bg-white/15 text-white'}`}>How It Works</a>
          <a href="#features" className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${scrolled ? 'text-gray-600 hover:text-gray-900' : 'text-white/70 hover:text-white'}`}>Features</a>
        </div>

        {/* Right */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center gap-1.5 text-sm font-medium cursor-pointer transition-colors ${scrolled ? 'text-gray-500 hover:text-gray-700' : 'text-white/60 hover:text-white'}`}>
            <Globe className="w-4 h-4" />
            <span>EN</span>
          </div>
          <a href="#" className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all ${scrolled ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 hover:bg-gray-100'}`}>
            Enter My Farm
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-gray-800 bg-gray-100' : 'text-white bg-white/10'}`}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white mt-3 rounded-2xl shadow-xl overflow-hidden border border-gray-100 mx-2"
          >
            <div className="px-4 py-5 space-y-2">
              <a href="#how-it-works" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-50">How It Works</a>
              <a href="#features" className="block px-4 py-2.5 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-50">Features</a>
              <div className="pt-3">
                <a href="#" className="block text-center text-sm font-semibold text-white bg-gray-900 rounded-full px-5 py-3 hover:bg-gray-800 transition-colors">
                  Enter My Farm
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
