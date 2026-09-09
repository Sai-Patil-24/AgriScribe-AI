import React from 'react';
import { motion } from 'framer-motion';
import { Map, Camera, CloudSun, Wallet, FileSpreadsheet, LayoutDashboard } from 'lucide-react';

const features = [
  {
    icon: <Map />,
    title: "My Farm",
    subtitle: "Your farm, remembered.",
    desc: "AgriScribe keeps track of land, crop, soil, location, sowing date, and farm history.",
    highlight: "No need to repeat your farm details every time.",
  },
  {
    icon: <Camera />,
    title: "Crop Health",
    subtitle: "Show us what's wrong.",
    desc: "Take a crop or leaf photo. AI provides possible issue, confidence, and recommended next steps.",
    highlight: "AI crop health screening",
  },
  {
    icon: <CloudSun />,
    title: "Weather Advice",
    subtitle: "Weather that leads to action.",
    desc: "Instead of showing 31°C and 70% rain, AgriScribe explains what it means for your specific crop.",
    highlight: '"Rain expected tomorrow. Consider delaying irrigation."',
  },
  {
    icon: <Wallet />,
    title: "Farm Economics",
    subtitle: "Know where your money is going.",
    desc: "See total cost, expected revenue, and estimated margin. Track expenses by simply speaking.",
    highlight: "Seeds → Fertilizer → Labour → Revenue",
  },
  {
    icon: <FileSpreadsheet />,
    title: "Documents",
    subtitle: "Paperwork made guided.",
    desc: "Find relevant benefits → Check eligibility → Identify missing info → Prepare application.",
    highlight: "Prepare. Review. Submit.",
  },
  {
    icon: <LayoutDashboard />,
    title: "Farm Health",
    subtitle: "One simple view of your farm.",
    desc: "Dashboard showing crop health, water, weather, pest risk, and estimated margin.",
    highlight: "Know what needs attention today.",
  },
];

export const CoreFeatures = () => {
  return (
    <section id="features" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Everything your farm needs. <br />
            <span className="text-gray-400">In one place.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, subtitle, desc, highlight, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay, duration: 0.4 }}
    className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group"
  >
    <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center text-gray-900 border border-gray-100 mb-5 group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-100 transition-colors">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
    </div>
    
    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{title}</p>
    <h3 className="text-lg font-bold text-gray-900 mb-3">{subtitle}</h3>
    
    <p className="text-sm text-gray-500 mb-5 leading-relaxed">{desc}</p>
    
    <div className="bg-green-50 border border-green-100 px-4 py-3 rounded-xl">
      <p className="text-[13px] font-semibold text-green-700">{highlight}</p>
    </div>
  </motion.div>
);
