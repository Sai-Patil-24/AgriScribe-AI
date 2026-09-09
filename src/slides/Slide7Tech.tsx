import React from 'react';
import { motion } from 'framer-motion';
import { Database, LayoutTemplate, Layers, Server, BrainCircuit } from 'lucide-react';

const Slide7Tech = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-12 relative overflow-hidden">
      
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-extrabold text-agri-green">
          Simple experience. Powerful AI underneath.
        </h2>
      </div>

      <div className="flex-1 flex w-full max-w-6xl mx-auto gap-8">
        
        {/* Architecture Layers */}
        <div className="flex-1 flex flex-col justify-between relative">
          
          <Layer title="USER LAYER" color="bg-blue-50" border="border-blue-200" delay={0.1}>
            <div className="flex justify-around items-center w-full">
              <span className="font-bold text-blue-900">👨‍🌾 Farmer</span>
              <span className="text-blue-700">🎙️ Voice</span>
              <span className="text-blue-700">📷 Image</span>
              <span className="text-blue-700">📱 Web interface</span>
            </div>
          </Layer>

          <Layer title="AI UNDERSTANDING LAYER" color="bg-purple-50" border="border-purple-200" delay={0.2}>
            <div className="flex justify-around text-sm font-semibold text-purple-800 w-full">
              <span>Speech-to-Text</span>
              <span>Translation</span>
              <span>Information Extraction</span>
              <span>Computer Vision</span>
            </div>
          </Layer>

          <Layer title="FARM INTELLIGENCE LAYER" color="bg-green-50" border="border-green-200" delay={0.3}>
            <div className="flex justify-around text-sm font-semibold text-green-800 w-full flex-wrap gap-2">
              <span>🌾 Profile</span>
              <span>🌱 Stage</span>
              <span>🧪 Soil</span>
              <span>🌦️ Weather</span>
              <span>💰 Economics</span>
              <span>📚 Knowledge</span>
            </div>
          </Layer>

          <Layer title="AI DECISION LAYER" color="bg-orange-50" border="border-orange-200" delay={0.4}>
            <div className="flex justify-around text-sm font-bold text-orange-800 w-full">
              <span>RAG + LLM</span>
              <span>Personalized Recommendation Engine</span>
            </div>
          </Layer>

          <Layer title="ACTION LAYER" color="bg-red-50" border="border-red-200" delay={0.5}>
            <div className="flex justify-around text-sm font-semibold text-red-800 w-full">
              <span>📊 Dashboard</span>
              <span>🔔 Alerts</span>
              <span>💰 Profit Est.</span>
              <span>📄 Apps</span>
              <span>🎙️ Voice Response</span>
            </div>
          </Layer>

          {/* Connecting Arrows behind layers */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-200 -z-10 -translate-x-1/2"></div>
        </div>

        {/* Tech Stack Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col"
        >
          <h3 className="font-bold text-xl text-gray-800 mb-6 flex items-center gap-2 border-b pb-4">
            <Server className="w-5 h-5 text-agri-green" /> Technology Stack
          </h3>
          
          <div className="space-y-6 flex-1">
            <TechItem icon={<LayoutTemplate />} label="Frontend" value="React / Tailwind" />
            <TechItem icon={<Layers />} label="Backend" value="FastAPI / Python" />
            <TechItem icon={<BrainCircuit />} label="AI Models" value="Whisper, LLMs, Vision Models" />
            <TechItem icon={<Database />} label="Knowledge" value="RAG / Vector Database" />
          </div>
        </motion.div>

      </div>

    </div>
  );
};

const Layer = ({ title, color, border, children, delay }: { title: string, color: string, border: string, children: React.ReactNode, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={`w-full ${color} border-2 ${border} rounded-xl p-4 shadow-sm flex flex-col items-center relative my-2 bg-opacity-80 backdrop-blur-sm`}
  >
    <div className="absolute -top-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-600 border shadow-sm">
      {title}
    </div>
    <div className="mt-3 w-full">
      {children}
    </div>
  </motion.div>
);

const TechItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div>
    <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mb-1">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-4 h-4" })} {label}
    </div>
    <div className="font-bold text-gray-800 bg-gray-50 p-2 rounded-lg border border-gray-100">
      {value}
    </div>
  </div>
);

export default Slide7Tech;
