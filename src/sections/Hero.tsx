import React from 'react';
import { motion } from 'framer-motion';
import { Mic, ArrowRight, Camera, CloudRain, IndianRupee, Sprout } from 'lucide-react';
import { MotionButton } from '../components/MotionButton';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-sm font-semibold tracking-wide mb-8 border border-green-100 shadow-sm">
            AI-POWERED FARMING COMPANION
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight">
            Your farm. Your data. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">Your AI assistant.</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            AgriScribe helps you understand crop health, weather, farm costs and agricultural services — all from one simple place.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <MotionButton label="Enter My Farm" />
            <button className="group flex items-center justify-center space-x-2 bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-all hover:shadow-md">
              <div className="bg-gray-100 p-1.5 rounded-full group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                <Mic className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" />
              </div>
              <span>Ask AgriScribe</span>
            </button>
          </div>
          
          <p className="text-sm font-medium text-gray-400 flex items-center justify-center">
            <Sprout className="w-4 h-4 mr-2 text-green-500" />
            Built for farmers. Designed for simplicity.
          </p>
        </motion.div>

        {/* Bottom Video & Voice Demo */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group"
        >
          {/* Main Background Video */}
          <div className="absolute inset-0 overflow-hidden bg-gray-900">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              poster="https://images.unsplash.com/photo-1592982537447-6f206cb927bb?auto=format&fit=crop&q=80&w=2000"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-tractor-plowing-a-field-28821-large.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent mix-blend-multiply"></div>
          
          {/* Voice Interaction Demo Card (Floating) */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 text-left"
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0 mt-1">
                <Mic className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Farmer</p>
                <p className="text-sm font-medium text-gray-900 leading-relaxed">"मेरे कपास के पत्तों पर भूरे दाग हैं।"</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 border-t border-gray-100 pt-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white flex-shrink-0 mt-1 shadow-sm border border-green-600">
                <Sprout className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">AgriScribe</p>
                <p className="text-sm font-medium text-green-700 leading-relaxed">"Let's check your crop. Take a clear photo of the affected leaf."</p>
              </div>
            </div>
            
            {/* Subtle waveform animation */}
            <div className="flex items-center justify-center gap-1.5 mt-5 h-5">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: ['4px', '20px', '4px'] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.15 }}
                  className="w-1.5 bg-green-500/40 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Data Widgets */}
          <FloatingWidget 
            icon={<Camera className="w-4 h-4 text-gray-700" />} 
            title="Crop check" 
            value="Possible leaf spot" 
            className="top-12 left-12"
            delay={1.2}
          />
          <FloatingWidget 
            icon={<CloudRain className="w-4 h-4 text-blue-500" />} 
            title="Tomorrow" 
            value="Rain expected" 
            className="top-32 right-12"
            delay={1.4}
          />
          <FloatingWidget 
            icon={<IndianRupee className="w-4 h-4 text-green-600" />} 
            title="Est. margin" 
            value="₹48,000" 
            className="bottom-32 right-24"
            delay={1.6}
          />

        </motion.div>
      </div>
    </section>
  );
};

const FloatingWidget = ({ icon, title, value, className, delay }: { icon: React.ReactNode, title: string, value: string, className: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    whileHover={{ scale: 1.05 }}
    transition={{ delay, duration: 0.5, type: 'spring', stiffness: 100 }}
    className={`absolute hidden md:flex items-center gap-3 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-white cursor-pointer ${className}`}
  >
    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
      {icon}
    </div>
    <div className="flex flex-col text-left pr-2">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{title}</span>
      <span className="text-sm font-bold text-gray-900">{value}</span>
    </div>
  </motion.div>
);
