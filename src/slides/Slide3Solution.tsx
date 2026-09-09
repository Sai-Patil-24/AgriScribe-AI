import React from 'react';
import { UserSquare2, ShieldAlert, CloudSun, FileSpreadsheet, Wallet, LayoutDashboard, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const Slide3Solution = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-12 relative overflow-hidden">
      
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-agri-green">
          One farm. One assistant. One place.
        </h2>
      </div>

      <div className="flex-1 relative flex items-center justify-center mt-8">
        
        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full z-0">
          <circle cx="50%" cy="50%" r="220" stroke="#e5e7eb" strokeWidth="2" fill="none" strokeDasharray="6 6" />
        </svg>

        {/* Central Hub */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="relative z-10 w-48 h-48 bg-agri-green rounded-full shadow-2xl flex flex-col items-center justify-center text-white border-8 border-white"
        >
          <BrainCircuit className="w-16 h-16 mb-2 text-agri-yellow" />
          <span className="font-bold text-xl">AgriScribe</span>
          <span className="text-agri-yellow font-bold">AI</span>
        </motion.div>

        {/* The 6 nodes */}
        <Node icon={<UserSquare2 />} title="My Farm" delay={0.1} angle={-90} desc="Persistent Profile" />
        <Node icon={<ShieldAlert />} title="Crop Health" delay={0.2} angle={-30} desc="AI Screening" />
        <Node icon={<CloudSun />} title="Weather" delay={0.3} angle={30} desc="Aware Recommendations" />
        <Node icon={<FileSpreadsheet />} title="Documents" delay={0.4} angle={90} desc="Auto-Generation" />
        <Node icon={<Wallet />} title="Economics" delay={0.5} angle={150} desc="Cost & Profit" />
        <Node icon={<LayoutDashboard />} title="Dashboard" delay={0.6} angle={210} desc="Farm Health Center" />

      </div>

      <div className="mt-8 text-center bg-agri-lightgreen/10 py-6 px-12 rounded-2xl mx-auto border border-agri-lightgreen/20 max-w-4xl">
        <p className="text-2xl font-bold text-agri-green">
          “Instead of asking farmers to learn technology, <br />
          AgriScribe makes technology understand the farmer.”
        </p>
      </div>

    </div>
  );
};

const Node = ({ icon, title, desc, delay, angle }: { icon: React.ReactNode, title: string, desc: string, delay: number, angle: number }) => {
  const radius = 220;
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * radius;
  const y = Math.sin(radian) * radius;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, x, y }}
      transition={{ delay, type: "spring", stiffness: 40 }}
      className="absolute flex flex-col items-center w-40 text-center"
      style={{ marginLeft: -80, marginTop: -40 }} // center alignment
    >
      <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border-2 border-agri-lightgreen/20 flex items-center justify-center text-agri-green mb-3">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-10 h-10" })}
      </div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-xs text-gray-500 font-medium">{desc}</p>
    </motion.div>
  );
};

export default Slide3Solution;
