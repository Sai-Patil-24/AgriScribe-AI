import React from 'react';
import { motion } from 'framer-motion';
import { Mic, ArrowRight, Camera, CloudRain, IndianRupee, Sprout } from 'lucide-react';
import { Button } from '../components/Button';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[var(--color-agri-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text content */}
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-agri-forest)]/10 text-[var(--color-agri-forest)] text-sm font-bold tracking-wide mb-6">
                AI-POWERED FARMING COMPANION
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--color-agri-dark)] leading-[1.1] mb-6">
                Your farm.<br/>
                <span className="text-[var(--color-agri-forest)]">Your data.</span><br/>
                Your AI assistant.
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
                AgriScribe helps you understand crop health, weather, farm costs and agricultural services — all from one simple place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
                  Enter My Farm
                </Button>
                <Button variant="outline" size="lg" icon={<Mic className="w-5 h-5" />}>
                  Ask AgriScribe
                </Button>
              </div>
              
              <p className="text-sm font-medium text-gray-500 flex items-center">
                <Sprout className="w-4 h-4 mr-2 text-[var(--color-agri-earth)]" />
                Built for farmers. Designed for simplicity.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Visual & Voice Demo */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            
            {/* Abstract Background Shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-agri-lightgreen)] to-[var(--color-agri-yellow)]/20 rounded-full blur-3xl opacity-60"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto z-10"
            >
              {/* Main Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white aspect-[3/4] bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=800" 
                  alt="Indian farmer checking crops"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Voice Interaction Demo */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mic className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Farmer</p>
                      <p className="text-sm font-medium text-gray-800">"मेरे कपास के पत्तों पर भूरे दाग हैं।"</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-agri-forest)] flex items-center justify-center text-white">
                      <Sprout className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">AgriScribe</p>
                      <p className="text-sm font-medium text-[var(--color-agri-forest)]">"Let's check your crop. Take a clear photo of the affected leaf."</p>
                    </div>
                  </div>
                  
                  {/* Subtle waveform animation */}
                  <div className="flex items-center justify-center gap-1 mt-4 h-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ height: ['4px', '16px', '4px'] }}
                        transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                        className="w-1 bg-[var(--color-agri-forest)]/40 rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <FloatingCard 
                icon={<Camera className="w-4 h-4 text-orange-600" />} 
                title="Crop check" 
                value="Possible leaf spot" 
                className="-left-12 top-20"
                delay={0.5}
              />
              
              <FloatingCard 
                icon={<CloudRain className="w-4 h-4 text-blue-600" />} 
                title="Tomorrow" 
                value="Rain expected" 
                className="-right-10 top-40"
                delay={0.7}
              />
              
              <FloatingCard 
                icon={<IndianRupee className="w-4 h-4 text-green-600" />} 
                title="Est. margin" 
                value="₹48,000" 
                className="-left-8 bottom-48"
                delay={0.9}
              />
              
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ icon, title, value, className, delay }: { icon: React.ReactNode, title: string, value: string, className: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className={`absolute bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-xl border border-white flex flex-col gap-1 hidden md:flex ${className}`}
  >
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs font-bold text-gray-500 uppercase">{title}</span>
    </div>
    <span className="text-sm font-bold text-gray-800">{value}</span>
  </motion.div>
);
