import React from 'react';
import { CloudSun, Sprout, Landmark, FileText, BookOpen, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Farming information is everywhere.<br/>
            <span className="text-gray-400">Useful decisions are not.</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Farmers don't need more raw data. They need that data translated into the right action at the exact right time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Bento Item 1: Apps */}
          <BentoCard 
            className="md:col-span-2 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
            delay={0.1}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex gap-4 flex-wrap mb-4">
                <AppIcon icon={<CloudSun className="text-blue-500" />} label="Weather app" />
                <AppIcon icon={<Sprout className="text-green-500" />} label="Crop advice" />
                <AppIcon icon={<Landmark className="text-orange-500" />} label="Gov portal" />
                <AppIcon icon={<FileText className="text-gray-500" />} label="Forms" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Too many apps</h3>
                <p className="text-gray-500">Juggling a dozen different applications just to make one simple decision.</p>
              </div>
            </div>
          </BentoCard>

          {/* Bento Item 2: Weather */}
          <BentoCard 
            className="bg-blue-50 border border-blue-100 relative overflow-hidden"
            delay={0.2}
          >
            <div className="absolute -right-4 -top-4 opacity-10">
              <CloudSun className="w-48 h-48 text-blue-500" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weather without context</h3>
              <p className="text-gray-600 text-sm">"It will rain." But should I spray fertilizer today or tomorrow?</p>
            </div>
          </BentoCard>

          {/* Bento Item 3: Expenses */}
          <BentoCard 
            className="bg-green-50 border border-green-100 relative overflow-hidden"
            delay={0.3}
          >
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <BookOpen className="w-48 h-48 text-green-500" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Opaque expenses</h3>
              <p className="text-gray-600 text-sm">Tracking expenses in notebooks without a clear picture of actual profit margins.</p>
            </div>
          </BentoCard>

          {/* Bento Item 4: Symptoms */}
          <BentoCard 
            className="md:col-span-2 bg-gray-900 text-white relative overflow-hidden group"
            delay={0.4}
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&q=80&w=1000" 
                alt="Farmer checking crops"
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Unclear crop symptoms</h3>
              <p className="text-gray-300">Endless internet searching trying to figure out what disease is affecting the harvest.</p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ children, className, delay }: { children: React.ReactNode, className: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay, duration: 0.6 }}
    className={`rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    {children}
  </motion.div>
);

const AppIcon = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white px-4 py-2.5 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-2 cursor-pointer"
  >
    <div className="bg-gray-50 p-2 rounded-lg">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
    </div>
    <span className="font-semibold text-gray-700 text-[10px] uppercase tracking-wider">{label}</span>
  </motion.div>
);
