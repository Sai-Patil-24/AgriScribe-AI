import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Globe, MapPin, BrainCircuit } from 'lucide-react';

export const TrustStrip = () => {
  return (
    <section className="bg-gray-50 py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">
            Built around one simple idea
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            “Technology should make farming simpler — not more complicated.”
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-200/60">
          <TrustItem icon={<Mic />} label="Voice-first" description="Speak naturally in your local language" delay={0.1} />
          <TrustItem icon={<Globe />} label="Multilingual" description="Support for multiple regional dialects" delay={0.2} />
          <TrustItem icon={<MapPin />} label="Farm-aware" description="Contextualized to your specific location" delay={0.3} />
          <TrustItem icon={<BrainCircuit />} label="AI-assisted" description="Powered by advanced agronomy models" delay={0.4} />
        </div>

      </div>
    </section>
  );
};

const TrustItem = ({ icon, label, description, delay }: { icon: React.ReactNode, label: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="flex flex-col items-center text-center px-4"
  >
    <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-900 mb-6 group-hover:scale-110 transition-transform">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8" })}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{label}</h3>
    <p className="text-sm font-medium text-gray-500 leading-relaxed">{description}</p>
  </motion.div>
);
