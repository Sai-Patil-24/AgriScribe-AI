import React from 'react';
import { Mic, Leaf, Camera, CloudRain, IndianRupee, FileText, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const Slide1Vision = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col items-center justify-center relative p-12 overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-agri-green/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-agri-earth/10 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 text-center max-w-4xl mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-7xl font-extrabold text-agri-green tracking-tight mb-6"
        >
          AgriScribe<span className="text-agri-yellow">-AI</span>
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-semibold text-agri-earth mb-8"
        >
          "Know your farm. Know what to do. Grow better."
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-700 leading-relaxed"
        >
          A multilingual AI farming companion that helps farmers understand their farm, 
          monitor crop health, make weather-aware decisions, manage farm economics, 
          and simplify agricultural documentation.
        </motion.p>
      </div>

      {/* Hero Visual */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring" }}
        className="relative w-full max-w-3xl h-64 z-10 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center w-48 h-48 bg-agri-lightgreen rounded-full shadow-2xl border-4 border-white z-20">
          <BrainCircuit className="w-20 h-20 text-white" />
          <div className="absolute -bottom-4 bg-white text-agri-green px-4 py-1 rounded-full font-bold shadow-md text-sm">
            AgriScribe
          </div>
        </div>

        {/* Orbiting Icons */}
        <div className="absolute inset-0 flex items-center justify-center">
          <OrbitIcon icon={<Mic />} label="Voice" delay={0} x={-160} y={-80} />
          <OrbitIcon icon={<Leaf />} label="Crop" delay={0.1} x={0} y={-140} />
          <OrbitIcon icon={<Camera />} label="Photo" delay={0.2} x={160} y={-80} />
          <OrbitIcon icon={<CloudRain />} label="Weather" delay={0.3} x={200} y={40} />
          <OrbitIcon icon={<IndianRupee />} label="Economics" delay={0.4} x={120} y={120} />
          <OrbitIcon icon={<FileText />} label="Documents" delay={0.5} x={-120} y={120} />
          <OrbitIcon icon={<BrainCircuit />} label="AI" delay={0.6} x={-200} y={40} />
        </div>
      </motion.div>
    </div>
  );
};

const OrbitIcon = ({ icon, label, delay, x, y }: { icon: React.ReactNode, label: string, delay: number, x: number, y: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: 0, y: 0 }}
    animate={{ opacity: 1, x, y }}
    transition={{ delay: 0.8 + delay, type: "spring", stiffness: 50 }}
    className="absolute flex flex-col items-center"
  >
    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-agri-lightgreen border border-gray-100">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
    </div>
    <span className="mt-2 text-sm font-semibold text-gray-700 bg-white/80 px-2 rounded-full">{label}</span>
  </motion.div>
);

export default Slide1Vision;
