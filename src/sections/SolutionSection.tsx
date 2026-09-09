import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CloudSun, FileSpreadsheet, Wallet, LayoutDashboard, Mic, Wheat } from 'lucide-react';

const nodes = [
  { icon: <ShieldAlert />, title: "Crop Health", angle: -90, color: "text-red-500" },
  { icon: <CloudSun />, title: "Weather", angle: -30, color: "text-blue-500" },
  { icon: <Wallet />, title: "Economics", angle: 30, color: "text-emerald-500" },
  { icon: <FileSpreadsheet />, title: "Documents", angle: 90, color: "text-gray-500" },
  { icon: <LayoutDashboard />, title: "Farm Health", angle: 150, color: "text-purple-500" },
  { icon: <Mic />, title: "Voice", angle: 210, color: "text-green-600" },
];

export const SolutionSection = () => {
  return (
    <section className="py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">The Solution</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            One intelligent place <br /> for your farm.
          </h2>
        </div>

        {/* Orbiting diagram — desktop only */}
        <div className="relative h-[520px] hidden sm:flex items-center justify-center max-w-3xl mx-auto mb-20">
          
          {/* Central hub */}
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="relative z-20 w-44 h-44 rounded-full bg-gray-950 shadow-xl flex flex-col items-center justify-center text-white border-[6px] border-white"
          >
            <Wheat className="w-10 h-10 mb-1.5 text-green-400" />
            <span className="font-bold text-sm tracking-wider uppercase">Your Farm</span>
          </motion.div>

          {/* Nodes */}
          {nodes.map((n, i) => (
            <Node key={n.title} {...n} delay={0.1 + i * 0.1} />
          ))}

          {/* Orbit ring */}
          <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
            <circle cx="50%" cy="50%" r="200" stroke="#e5e7eb" strokeWidth="1" fill="none" />
            <circle cx="50%" cy="50%" r="200" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeDasharray="6 12" className="animate-[spin_60s_linear_infinite]" opacity="0.4" />
          </svg>
        </div>

        {/* Mobile fallback grid */}
        <div className="sm:hidden grid grid-cols-3 gap-4 mb-16">
          {nodes.map(n => (
            <div key={n.title} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-2">
                {React.cloneElement(n.icon as React.ReactElement<any>, { className: `w-5 h-5 ${n.color}` })}
              </div>
              <span className="text-xs font-bold text-gray-700">{n.title}</span>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

const Node = ({ icon, title, angle, delay, color }: { icon: React.ReactNode, title: string, angle: number, delay: number, color: string }) => {
  const radius = 200;
  const radian = (angle * Math.PI) / 180;
  const top = `calc(50% + ${Math.sin(radian) * radius}px)`;
  const left = `calc(50% + ${Math.cos(radian) * radius}px)`;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 60 }}
      className="absolute flex flex-col items-center w-28 text-center -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ top, left }}
    >
      <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center mb-3 hover:scale-110 transition-transform cursor-pointer">
        {React.cloneElement(icon as React.ReactElement<any>, { className: `w-6 h-6 ${color}` })}
      </div>
      <span className="font-bold text-gray-900 text-xs bg-white px-3 py-1 rounded-full border border-gray-100">{title}</span>
    </motion.div>
  );
};
