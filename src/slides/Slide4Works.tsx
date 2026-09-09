import React from 'react';
import { User, Brain, Map, Lightbulb, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Slide4Works = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-12 relative overflow-hidden">
      
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-agri-green">
          From farmer's words to useful action
        </h2>
      </div>

      <div className="flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto">
        
        <div className="flex items-start justify-between w-full relative">
          
          {/* Horizontal Connector */}
          <div className="absolute top-12 left-10 right-10 h-1 bg-gray-200 -z-10 rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-agri-lightgreen rounded-full"
            />
          </div>

          <Step num={1} icon={<User />} title="FARMER" delay={0.2}>
            Speaks, uploads a<br/>crop image, or enters<br/>simple information.
          </Step>

          <Step num={2} icon={<Brain />} title="UNDERSTAND" delay={0.4}>
            AI processes language,<br/>crop, location, and<br/>symptoms.
          </Step>

          <Step num={3} icon={<Map />} title="FARM CONTEXT" delay={0.6}>
            <span className="text-xs">Crop + Soil + Stage +<br/>Weather + History +<br/>Expenses</span>
          </Step>

          <Step num={4} icon={<Lightbulb />} title="AI DECISION" delay={0.8}>
            Combines knowledge<br/>& farm data for the best<br/>recommendation.
          </Step>

          <Step num={5} icon={<CheckCircle2 />} title="ACTION" delay={1.0} highlight>
            Advice, Alerts,<br/>Tasks, Cost insights,<br/>Documents.
          </Step>

        </div>

        <div className="mt-20 bg-white border border-gray-200 p-6 rounded-2xl shadow-sm text-center mx-16">
          <h3 className="text-xl font-bold text-gray-700">
            Voice + Image + Farm Data + Weather + Agricultural Knowledge <span className="text-agri-green">→ Personalized Action</span>
          </h3>
        </div>

      </div>

    </div>
  );
};

const Step = ({ num, icon, title, children, delay, highlight = false }: { num: number, icon: React.ReactNode, title: string, children: React.ReactNode, delay: number, highlight?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="flex flex-col items-center w-48 text-center bg-white p-4 rounded-xl shadow-md border border-gray-100 relative"
  >
    <div className="absolute -top-4 -left-4 w-8 h-8 bg-agri-earth text-white font-bold rounded-full flex items-center justify-center text-sm shadow-md">
      {num}
    </div>
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${highlight ? 'bg-agri-yellow text-white' : 'bg-agri-green text-white'} shadow-lg`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8" })}
    </div>
    <h3 className="font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-sm text-gray-500 leading-tight">
      {children}
    </p>
  </motion.div>
);

export default Slide4Works;
