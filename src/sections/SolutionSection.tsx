import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CloudSun, FileSpreadsheet, Wallet, LayoutDashboard, Mic, Wheat } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-agri-dark)] mb-4">
            Meet AgriScribe-AI
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
            One intelligent place for your farm.
          </p>
        </div>

        <div className="relative h-[600px] flex items-center justify-center max-w-4xl mx-auto">
          
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-20 w-48 h-48 bg-[var(--color-agri-forest)] rounded-full shadow-2xl flex flex-col items-center justify-center text-white border-8 border-white/80"
          >
            <Wheat className="w-12 h-12 mb-2 text-[var(--color-agri-yellow)]" />
            <span className="font-bold text-lg tracking-wide">YOUR FARM</span>
          </motion.div>

          {/* Orbiting Nodes */}
          <div className="absolute inset-0">
            <Node icon={<ShieldAlert />} title="Crop Health" angle={-90} delay={0.1} color="text-red-600" />
            <Node icon={<CloudSun />} title="Weather" angle={-30} delay={0.2} color="text-blue-500" />
            <Node icon={<Wallet />} title="Economics" angle={30} delay={0.3} color="text-green-600" />
            <Node icon={<FileSpreadsheet />} title="Documents" angle={90} delay={0.4} color="text-gray-600" />
            <Node icon={<LayoutDashboard />} title="Farm Health" angle={150} delay={0.5} color="text-purple-600" />
            <Node icon={<Mic />} title="Voice Assistant" angle={210} delay={0.6} color="text-[var(--color-agri-forest)]" />
          </div>

          {/* SVG Connecting Lines Background */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <circle cx="50%" cy="50%" r="200" stroke="#f3f4f6" strokeWidth="2" fill="none" />
            <circle cx="50%" cy="50%" r="200" stroke="var(--color-agri-lightgreen)" strokeWidth="4" fill="none" strokeDasharray="10 20" className="animate-[spin_60s_linear_infinite]" />
          </svg>

        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-xl font-medium text-gray-700 leading-relaxed bg-[var(--color-agri-cream)] p-8 rounded-2xl border border-[var(--color-agri-earth)]/20 shadow-sm">
            AgriScribe remembers the context of your farm so every recommendation becomes more personal and relevant.
          </p>
        </div>

      </div>
    </section>
  );
};

const Node = ({ icon, title, angle, delay, color }: { icon: React.ReactNode, title: string, angle: number, delay: number, color: string }) => {
  const radius = 200; // Match SVG circle radius
  const radian = (angle * Math.PI) / 180;
  // CSS top/left percentages for absolute positioning from center
  const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
  const left = `calc(50% + ${Math.cos(radian) * radius}px)`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 50 }}
      className="absolute flex flex-col items-center w-32 text-center -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ top, left }}
    >
      <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-3 group hover:scale-110 transition-transform">
        {React.cloneElement(icon as React.ReactElement<any>, { className: `w-8 h-8 ${color}` })}
      </div>
      <h4 className="font-bold text-gray-800 text-sm bg-white/80 px-2 rounded-full shadow-sm border border-gray-50">{title}</h4>
    </motion.div>
  );
};
