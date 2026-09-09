import React from 'react';
import { motion } from 'framer-motion';
import { Map, Camera, CloudSun, Wallet, FileSpreadsheet, LayoutDashboard } from 'lucide-react';

export const CoreFeatures = () => {
  return (
    <section id="features" className="py-24 bg-[var(--color-agri-cream)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-agri-dark)] mb-4">
            Everything your farm needs.<br/>
            <span className="text-[var(--color-agri-forest)]">In one place.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <FeatureCard 
            num="01"
            icon={<Map />}
            title="My Farm"
            subtitle="Your farm, remembered."
            desc="AgriScribe keeps track of: Land, Crop, Soil, Location, Sowing date, and Farm history."
            highlight="No need to repeat your farm details every time."
            delay={0.1}
          />
          
          <FeatureCard 
            num="02"
            icon={<Camera />}
            title="Crop Health"
            subtitle="Show us what's wrong."
            desc="Take a crop or leaf photo. AI provides possible issue, confidence, and recommended next steps."
            highlight="AI crop health screening"
            delay={0.2}
          />
          
          <FeatureCard 
            num="03"
            icon={<CloudSun />}
            title="Weather-Aware Advice"
            subtitle="Weather is useful only when it leads to action."
            desc="Instead of simply showing 31°C and 70% rain, AgriScribe explains what it means for your specific crop."
            highlight='"Rain is expected tomorrow. Consider delaying irrigation."'
            delay={0.3}
          />
          
          <FeatureCard 
            num="04"
            icon={<Wallet />}
            title="Farm Economics"
            subtitle="Know where your money is going."
            desc="Show Total Cost, Expected Revenue, and Estimated Margin. Illustrate: Seeds → Fertilizer → Labour → Revenue."
            highlight="Track expenses by simply speaking."
            delay={0.4}
          />
          
          <FeatureCard 
            num="05"
            icon={<FileSpreadsheet />}
            title="Documents & Applications"
            subtitle="Turn paperwork into a guided process."
            desc="Find relevant benefit → Check eligibility → Identify missing info → Prepare application."
            highlight="Prepare. Review. Submit."
            delay={0.5}
          />
          
          <FeatureCard 
            num="06"
            icon={<LayoutDashboard />}
            title="Farm Health"
            subtitle="One simple view of your farm."
            desc="Dashboard showing: Crop Health, Water, Weather, Pest Risk, and Estimated Margin."
            highlight="Know what needs attention today."
            delay={0.6}
          />

        </div>

      </div>
    </section>
  );
};

const FeatureCard = ({ num, icon, title, subtitle, desc, highlight, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
  >
    <div className="flex justify-between items-start mb-6">
      <div className="w-14 h-14 bg-[var(--color-agri-cream)] rounded-2xl flex items-center justify-center text-[var(--color-agri-forest)] group-hover:bg-[var(--color-agri-forest)] group-hover:text-white transition-colors">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-7 h-7" })}
      </div>
      <span className="text-2xl font-black text-gray-200">{num}</span>
    </div>
    
    <h3 className="text-sm font-bold text-[var(--color-agri-earth)] uppercase tracking-wider mb-2">{title}</h3>
    <h4 className="text-2xl font-bold text-[var(--color-agri-dark)] mb-4">{subtitle}</h4>
    
    <p className="text-gray-600 mb-6 leading-relaxed">
      {desc}
    </p>
    
    <div className="bg-[var(--color-agri-lightgreen)]/30 border border-[var(--color-agri-forest)]/10 p-4 rounded-xl">
      <p className="text-sm font-semibold text-[var(--color-agri-forest)]">
        {highlight}
      </p>
    </div>
  </motion.div>
);
