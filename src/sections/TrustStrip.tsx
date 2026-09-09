import React from 'react';
import { Mic, Globe, MapPin, BrainCircuit } from 'lucide-react';

export const TrustStrip = () => {
  return (
    <section className="border-y border-gray-200 bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">
          Built around one simple idea:
        </p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-agri-dark)] mb-10 max-w-3xl mx-auto leading-tight">
          “Technology should make farming simpler — not more complicated.”
        </h2>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <TrustItem icon={<Mic />} label="Voice-first" />
          <TrustItem icon={<Globe />} label="Multilingual" />
          <TrustItem icon={<MapPin />} label="Farm-aware" />
          <TrustItem icon={<BrainCircuit />} label="AI-assisted" />
        </div>

      </div>
    </section>
  );
};

const TrustItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-[var(--color-agri-lightgreen)] text-[var(--color-agri-forest)] flex items-center justify-center">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
    </div>
    <span className="font-semibold text-gray-700">{label}</span>
  </div>
);
