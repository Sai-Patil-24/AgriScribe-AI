import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Landmark, IndianRupee, Satellite, Radio, LineChart, Users, Smartphone } from 'lucide-react';

const Slide8Impact = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-10 relative overflow-hidden">
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-agri-green">
          From information to better farming decisions
        </h2>
      </div>

      <div className="flex-1 flex flex-col w-full max-w-6xl mx-auto gap-8">
        
        {/* Impact Cards */}
        <div className="grid grid-cols-4 gap-6">
          <ImpactCard icon={<Leaf />} title="HEALTHIER CROPS" delay={0.1}>
            Early crop-health screening and timely recommendations
          </ImpactCard>
          <ImpactCard icon={<Droplets />} title="SMARTER RESOURCES" delay={0.2}>
            Better irrigation and weather-aware decisions
          </ImpactCard>
          <ImpactCard icon={<IndianRupee />} title="BETTER ECONOMICS" delay={0.3}>
            Understand expenses, expected revenue and profitability
          </ImpactCard>
          <ImpactCard icon={<Landmark />} title="BETTER ACCESS" delay={0.4}>
            Simplify agricultural schemes and documentation
          </ImpactCard>
        </div>

        {/* Future Pipeline */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-wider">Future Pipeline</h3>
          <div className="flex justify-between items-center px-4">
            <FutureItem icon={<Satellite />} label="Satellite Monitoring" />
            <div className="h-px bg-gray-200 flex-1 mx-4"></div>
            <FutureItem icon={<Radio />} label="IoT Soil Sensors" />
            <div className="h-px bg-gray-200 flex-1 mx-4"></div>
            <FutureItem icon={<LineChart />} label="Market Intelligence" />
            <div className="h-px bg-gray-200 flex-1 mx-4"></div>
            <FutureItem icon={<Users />} label="Expert Escalation" />
            <div className="h-px bg-gray-200 flex-1 mx-4"></div>
            <FutureItem icon={<Smartphone />} label="Offline Support" />
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-auto text-center bg-agri-green text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background in closing card */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <h1 className="text-3xl font-extrabold mb-4 text-white relative z-10">
            “Technology should not make farmers learn more technology.”
          </h1>
          <h2 className="text-2xl font-bold text-agri-yellow relative z-10 mb-8">
            “It should make farming simpler.”
          </h2>
          
          <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/20 relative z-10">
            <h3 className="text-2xl font-bold tracking-tight">
              AgriScribe<span className="text-agri-yellow">-AI</span>
            </h3>
            <p className="text-sm mt-1 text-gray-200 font-medium">"Know your farm. Know what to do. Grow better."</p>
          </div>
        </motion.div>

      </div>

    </div>
  );
};

const ImpactCard = ({ icon, title, children, delay }: { icon: React.ReactNode, title: string, children: React.ReactNode, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-agri-lightgreen flex flex-col items-center text-center"
  >
    <div className="w-14 h-14 bg-agri-lightgreen/10 text-agri-green rounded-full flex items-center justify-center mb-4">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-7 h-7" })}
    </div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{children}</p>
  </motion.div>
);

const FutureItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex flex-col items-center text-center w-24">
    <div className="w-10 h-10 bg-gray-50 text-gray-500 rounded-xl flex items-center justify-center mb-2 border border-gray-200">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
    </div>
    <span className="text-xs font-semibold text-gray-600 leading-tight">{label}</span>
  </div>
);

export default Slide8Impact;
