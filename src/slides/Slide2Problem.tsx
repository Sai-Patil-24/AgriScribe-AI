import React from 'react';
import { MicOff, Smartphone, LeafyGreen, CloudLightning, TrendingDown } from 'lucide-react';

const ProblemCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="glass-card p-6 flex flex-col items-center text-center bg-white shadow-md hover:shadow-xl transition-shadow">
    <div className="w-16 h-16 rounded-full bg-red-50 text-red-600 flex items-center justify-center mb-4">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8" })}
    </div>
    <h3 className="font-bold text-lg mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

const Slide2Problem = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-12 relative overflow-hidden">
      
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold text-agri-green mb-2">
          Farming is already difficult.
        </h2>
        <h3 className="text-2xl font-semibold text-gray-600">
          Technology shouldn't make it harder.
        </h3>
      </div>

      <div className="grid grid-cols-5 gap-6 mb-12 z-10">
        <ProblemCard 
          icon={<MicOff />} 
          title="Language barrier" 
          desc="Many digital platforms require typing and unfamiliar terminology." 
        />
        <ProblemCard 
          icon={<Smartphone />} 
          title="Too many apps" 
          desc="Weather, crop advice, schemes, and records are scattered." 
        />
        <ProblemCard 
          icon={<LeafyGreen />} 
          title="Crop uncertainty" 
          desc="Struggle to identify diseases, pests, or crop stress early." 
        />
        <ProblemCard 
          icon={<CloudLightning />} 
          title="Weather decisions" 
          desc="Weather data doesn't explain what action to take." 
        />
        <ProblemCard 
          icon={<TrendingDown />} 
          title="Profit uncertainty" 
          desc="Expenses are known, but crop profitability is unclear." 
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative bg-gray-100 rounded-3xl p-8 border border-gray-200">
        <div className="flex items-center justify-center gap-12">
          <div className="flex flex-col gap-3 items-end">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-gray-400 font-medium text-sm">Weather App</div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-gray-400 font-medium text-sm">Government Portal</div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-gray-400 font-medium text-sm">Notes App</div>
          </div>
          
          <div className="text-4xl font-bold text-gray-300">→</div>
          
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
            <span className="text-4xl">👨‍🌾</span>
            <div className="absolute -top-2 -right-2 text-2xl">❓</div>
          </div>

          <div className="text-4xl font-bold text-gray-300">←</div>

          <div className="flex flex-col gap-3 items-start">
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-gray-400 font-medium text-sm">News / YouTube</div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-gray-400 font-medium text-sm">Market Prices</div>
            <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-200 text-gray-400 font-medium text-sm">Calculator</div>
          </div>
        </div>

        <div className="absolute bottom-6 bg-agri-earth text-white px-8 py-3 rounded-full font-bold shadow-md text-lg">
          “Information exists. The problem is turning it into the right action.”
        </div>
      </div>

    </div>
  );
};

export default Slide2Problem;
