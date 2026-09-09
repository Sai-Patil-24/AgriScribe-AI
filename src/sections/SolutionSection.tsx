import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CloudSun, FileSpreadsheet, Wallet, LayoutDashboard, Mic, Wheat } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-24">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">
            Meet AgriScribe-AI
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            One intelligent place <br /> for your farm.
          </h2>
        </div>

        {/* Orbiting Interactive Diagram */}
        <div className="relative h-[500px] sm:h-[600px] flex items-center justify-center max-w-4xl mx-auto mb-24">
          
          {/* Central Hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-20 w-48 h-48 sm:w-56 sm:h-56 rounded-full shadow-2xl flex flex-col items-center justify-center text-white border-8 border-white overflow-hidden group"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=800" 
                alt="Farming Precision" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green-900/60 backdrop-blur-[2px]"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <Wheat className="w-12 h-12 mb-2 text-green-300" />
              <span className="font-bold text-xl tracking-wider">YOUR FARM</span>
            </div>
          </motion.div>

          {/* Orbiting Nodes */}
          <div className="absolute inset-0 hidden sm:block">
            <Node icon={<ShieldAlert />} title="Crop Health" angle={-90} delay={0.1} color="text-red-500" />
            <Node icon={<CloudSun />} title="Weather" angle={-30} delay={0.2} color="text-blue-500" />
            <Node icon={<Wallet />} title="Economics" angle={30} delay={0.3} color="text-emerald-500" />
            <Node icon={<FileSpreadsheet />} title="Documents" angle={90} delay={0.4} color="text-gray-600" />
            <Node icon={<LayoutDashboard />} title="Farm Health" angle={150} delay={0.5} color="text-purple-500" />
            <Node icon={<Mic />} title="Voice Assistant" angle={210} delay={0.6} color="text-green-600" />
          </div>

          {/* Mobile Grid Fallback (visible only on small screens) */}
          <div className="absolute inset-0 flex sm:hidden flex-wrap items-center justify-center gap-4 pt-64">
            <MobileNode icon={<ShieldAlert />} title="Crop Health" color="text-red-500" />
            <MobileNode icon={<CloudSun />} title="Weather" color="text-blue-500" />
            <MobileNode icon={<Mic />} title="Voice" color="text-green-600" />
          </div>

          {/* SVG Connecting Lines Background */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none hidden sm:block">
            <circle cx="50%" cy="50%" r="220" stroke="#e5e7eb" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="220" stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="8 16" className="animate-[spin_60s_linear_infinite]" opacity="0.5" />
          </svg>
        </div>

        {/* Bottom Horizontal Banner Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto group"
        >
          <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 relative">
            <img 
              src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&q=80&w=800" 
              alt="Greenhouse technology" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="w-full md:w-2/3 pr-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
              AgriScribe remembers the context of your farm.
            </h3>
            <p className="text-gray-500 font-medium text-lg">
              Every recommendation becomes more personal and relevant over time, adapting to your specific crops, climate, and practices.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const Node = ({ icon, title, angle, delay, color }: { icon: React.ReactNode, title: string, angle: number, delay: number, color: string }) => {
  const radius = 220; // Match SVG circle radius
  const radian = (angle * Math.PI) / 180;
  const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
  const left = `calc(50% + ${Math.cos(radian) * radius}px)`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 60 }}
      className="absolute flex flex-col items-center w-36 text-center -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
      style={{ top, left }}
    >
      <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center mb-4 group hover:scale-110 transition-transform hover:shadow-lg">
        {React.cloneElement(icon as React.ReactElement<any>, { className: `w-7 h-7 ${color}` })}
      </div>
      <h4 className="font-bold text-gray-900 text-sm bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-gray-100">{title}</h4>
    </motion.div>
  );
};

const MobileNode = ({ icon, title, color }: { icon: React.ReactNode, title: string, color: string }) => (
  <div className="flex flex-col items-center w-24">
    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-2">
      {React.cloneElement(icon as React.ReactElement<any>, { className: `w-5 h-5 ${color}` })}
    </div>
    <span className="text-xs font-bold text-gray-700">{title}</span>
  </div>
);
