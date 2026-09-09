import React from 'react';
import { motion } from 'framer-motion';
import { CloudRain } from 'lucide-react';

export const ProductPreview = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--color-agri-cream)] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-agri-dark)] mb-4">
            Your entire farm at a glance.
          </h2>
        </div>

        {/* Dashboard Mockup Container */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-[2rem] bg-gray-50 border-[12px] border-gray-900 shadow-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9]"
        >
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Good morning, Ramesh 👋</h3>
              <p className="text-sm text-gray-500 font-medium mt-1">Cotton • 3 acres</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--color-agri-lightgreen)] text-[var(--color-agri-forest)] flex items-center justify-center font-bold">R</div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-y-auto bg-gray-50">
            
            {/* Left Column */}
            <div className="space-y-6 md:col-span-2">
              {/* Farm Health Score */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase">Farm Health</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-5xl font-black text-[var(--color-agri-forest)]">82</span>
                    <span className="text-xl text-gray-400">/ 100</span>
                  </div>
                </div>
                <div className="w-24 h-24 rounded-full border-8 border-[var(--color-agri-lightgreen)] border-t-[var(--color-agri-forest)] transform rotate-45"></div>
              </div>

              {/* Today's Actions */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-sm font-bold text-gray-500 uppercase mb-4">Today's Actions</p>
                <div className="space-y-3">
                  <ActionItem icon={<CloudRain />} color="text-blue-500" text="Delay irrigation" />
                  <ActionItem icon={<CameraIcon />} color="text-orange-500" text="Inspect cotton leaves" />
                  <ActionItem icon={<CloudRain />} color="text-gray-500" text="Rain expected tomorrow" />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Economics */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                <p className="text-sm font-bold text-gray-500 uppercase mb-4">Economics</p>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Spent</p>
                    <p className="text-lg font-bold text-red-500">₹42,000</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Est. Revenue</p>
                    <p className="text-lg font-bold text-green-600">₹90,000</p>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 font-bold uppercase mb-1">Est. Margin</p>
                    <p className="text-3xl font-black text-[var(--color-agri-forest)]">₹48,000</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  );
};

const ActionItem = ({ icon, color, text }: any) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
    <div className={`p-2 rounded-lg bg-white shadow-sm ${color}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
    </div>
    <span className="font-semibold text-gray-700">{text}</span>
  </div>
);

const CameraIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);
