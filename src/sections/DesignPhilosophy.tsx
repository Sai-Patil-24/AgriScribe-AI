import React from 'react';
import { Mic, Globe, Smartphone, Accessibility, WifiOff } from 'lucide-react';

export const DesignPhilosophy = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--color-agri-dark)] mb-6">
              Designed around the farmer, not the technology.
            </h2>
            <div className="space-y-6">
              <PhilosophyItem icon={<Mic />} text="Voice-first interaction" />
              <PhilosophyItem icon={<Globe />} text="Regional Indian languages" />
              <PhilosophyItem icon={<Smartphone />} text="Mobile-first experience" />
              <PhilosophyItem icon={<Accessibility />} text="Accessible, high-contrast interface" />
              <PhilosophyItem icon={<WifiOff />} text="Low-connectivity ready" />
            </div>
          </div>

          <div className="bg-[var(--color-agri-forest)] rounded-3xl p-10 flex items-center justify-center text-center shadow-xl relative overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
            
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed relative z-10 italic">
              “The AI can be complex.<br/>
              The experience should not be.”
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

const PhilosophyItem = ({ icon, text }: any) => (
  <div className="flex items-center gap-4">
    <div className="text-[var(--color-agri-earth)]">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
    </div>
    <span className="text-lg font-semibold text-gray-700">{text}</span>
  </div>
);
