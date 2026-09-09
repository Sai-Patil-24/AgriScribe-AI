import React from 'react';
import { UserSquare2, ShieldAlert, CloudSun, FileSpreadsheet, Wallet, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

const Slide5Features = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-12 relative overflow-hidden">
      
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-agri-green">
          Six capabilities. One connected farm intelligence system.
        </h2>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-8 max-w-6xl mx-auto w-full content-center">
        
        <FeatureCard 
          icon={<UserSquare2 />} 
          title="1. Persistent Farmer Profile" 
          desc="AgriScribe remembers: land, crop, soil, location, sowing date, irrigation and farm history." 
          delay={0.1}
        />
        
        <FeatureCard 
          icon={<ShieldAlert />} 
          title="2. Crop Health Screening" 
          desc="Farmer takes a crop/leaf photo and AI identifies possible diseases, pests or crop stress." 
          delay={0.2}
        />
        
        <FeatureCard 
          icon={<CloudSun />} 
          title="3. Weather-Aware Recommendation" 
          desc="Instead of only showing weather, AI explains: 'What does today's weather mean for my farm?'" 
          delay={0.3}
        />
        
        <FeatureCard 
          icon={<FileSpreadsheet />} 
          title="4. Document Generation" 
          desc="Find relevant agricultural schemes, identify missing information and prepare applications." 
          delay={0.4}
        />
        
        <FeatureCard 
          icon={<Wallet />} 
          title="5. Crop Cost & Profit Estimation" 
          desc="Track seeds, fertilizer, labour, pesticides and estimate revenue and crop margin." 
          delay={0.5}
        />
        
        <FeatureCard 
          icon={<LayoutDashboard />} 
          title="6. Farm Health Dashboard" 
          desc="One simple screen showing: crop status, weather risk, farm tasks, health alerts and economics." 
          delay={0.6}
        />

      </div>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-agri-green hover:shadow-xl transition-shadow flex flex-col h-full"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl bg-agri-lightgreen/10 text-agri-green flex items-center justify-center">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
      </div>
      <h3 className="font-bold text-xl text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 leading-relaxed">
      {desc}
    </p>
  </motion.div>
);

export default Slide5Features;
