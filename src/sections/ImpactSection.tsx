import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, IndianRupee, Landmark } from 'lucide-react';

export const ImpactSection = () => {
  return (
    <section id="impact" className="py-24 bg-[var(--color-agri-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[var(--color-agri-dark)] mb-4">
            Built to make farming simpler.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ImpactCard 
            icon={<Leaf />}
            title="HEALTHIER CROPS"
            desc="Early screening and timely action"
            delay={0.1}
          />
          <ImpactCard 
            icon={<Droplets />}
            title="SMARTER RESOURCE USE"
            desc="Weather-aware decisions"
            delay={0.2}
          />
          <ImpactCard 
            icon={<IndianRupee />}
            title="BETTER FARM ECONOMICS"
            desc="Understand costs and potential returns"
            delay={0.3}
          />
          <ImpactCard 
            icon={<Landmark />}
            title="EASIER ACCESS"
            desc="Simplify agricultural programs and paperwork"
            delay={0.4}
          />
        </div>

      </div>
    </section>
  );
};

const ImpactCard = ({ icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
  >
    <div className="w-16 h-16 rounded-full bg-[var(--color-agri-lightgreen)]/50 text-[var(--color-agri-forest)] flex items-center justify-center mb-6">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8" })}
    </div>
    <h3 className="font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </motion.div>
);
