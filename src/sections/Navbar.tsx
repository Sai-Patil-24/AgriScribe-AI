import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Wheat } from 'lucide-react';
import { Button } from '../components/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-agri-cream)]/90 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Wheat className="w-8 h-8 text-[var(--color-agri-earth)]" />
            <span className="ml-2 text-2xl font-extrabold tracking-tight text-[var(--color-agri-forest)]">
              AgriScribe<span className="text-[var(--color-agri-yellow)]">-AI</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-[var(--color-agri-forest)] font-medium transition-colors">How It Works</a>
            <a href="#features" className="text-gray-600 hover:text-[var(--color-agri-forest)] font-medium transition-colors">Features</a>
            <a href="#impact" className="text-gray-600 hover:text-[var(--color-agri-forest)] font-medium transition-colors">Impact</a>
            
            <div className="flex items-center space-x-2 text-gray-500 hover:text-[var(--color-agri-dark)] cursor-pointer transition-colors border-l border-gray-200 pl-6">
              <Globe className="w-5 h-5" />
              <span className="font-medium">EN</span>
            </div>

            <Button variant="primary" size="sm">Enter My Farm</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[var(--color-agri-forest)] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--color-agri-cream)] border-b border-black/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 shadow-xl">
              <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-agri-forest)] hover:bg-black/5">How It Works</a>
              <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-agri-forest)] hover:bg-black/5">Features</a>
              <a href="#impact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[var(--color-agri-forest)] hover:bg-black/5">Impact</a>
              
              <div className="flex items-center space-x-2 px-3 py-2 text-gray-600">
                <Globe className="w-5 h-5" />
                <span className="font-medium">English</span>
              </div>
              
              <div className="pt-2">
                <Button variant="primary" className="w-full">Enter My Farm</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
