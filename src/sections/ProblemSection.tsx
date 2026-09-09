import React from 'react';
import { CloudSun, Sprout, Landmark, FileText, BookOpen, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSection = () => {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">The Problem</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
            Farming information is everywhere.
            <br /><span className="text-gray-300">Useful decisions are not.</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Farmers don't need more raw data. They need that data translated into the right action at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[240px]">
          
          <BentoCard className="md:col-span-2 bg-gray-50 border border-gray-100" delay={0.05}>
            <div className="h-full flex flex-col justify-between">
              <div className="flex gap-3 flex-wrap">
                <AppPill icon={<CloudSun className="text-blue-500" />} label="Weather" />
                <AppPill icon={<Sprout className="text-green-500" />} label="Crop advice" />
                <AppPill icon={<Landmark className="text-orange-500" />} label="Gov portal" />
                <AppPill icon={<FileText className="text-gray-500" />} label="Forms" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Too many apps</h3>
                <p className="text-sm text-gray-500">Juggling a dozen different apps just to make one simple decision.</p>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="bg-blue-50 border border-blue-100 relative overflow-hidden" delay={0.1}>
            <div className="absolute -right-6 -top-6 opacity-[0.06]">
              <CloudSun className="w-52 h-52 text-blue-600" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Weather without context</h3>
              <p className="text-sm text-gray-600">"It will rain." But should I spray today or wait?</p>
            </div>
          </BentoCard>

          <BentoCard className="bg-green-50 border border-green-100 relative overflow-hidden" delay={0.15}>
            <div className="absolute -right-6 -bottom-6 opacity-[0.06]">
              <BookOpen className="w-52 h-52 text-green-600" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Opaque expenses</h3>
              <p className="text-sm text-gray-600">Tracking costs in notebooks without seeing real margins.</p>
            </div>
          </BentoCard>

          <BentoCard className="md:col-span-2 bg-orange-50 border border-orange-100 relative overflow-hidden" delay={0.2}>
            <div className="absolute -right-8 -bottom-8 opacity-[0.06]">
              <Search className="w-56 h-56 text-orange-600" />
            </div>
            <div className="h-full flex flex-col justify-end relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Unclear crop symptoms</h3>
              <p className="text-sm text-gray-600">Endless searching trying to figure out what's harming the harvest.</p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ children, className, delay }: { children: React.ReactNode, className: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ delay, duration: 0.4 }}
    className={`rounded-2xl p-7 ${className}`}
  >
    {children}
  </motion.div>
);

const AppPill = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="bg-white px-3 py-2 rounded-lg border border-gray-100 flex items-center gap-2">
    {React.cloneElement(icon as React.ReactElement<any>, { className: "w-4 h-4" })}
    <span className="text-xs font-semibold text-gray-600">{label}</span>
  </div>
);
