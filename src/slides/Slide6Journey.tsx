import React from 'react';
import { Mic, Camera, BrainCircuit, Activity, CheckCircle, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';

const Slide6Journey = () => {
  return (
    <div className="w-full h-full bg-agri-bg flex flex-col px-16 py-10 relative overflow-hidden">
      
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold text-agri-green">
          Meet Ramesh: One conversation, many decisions
        </h2>
        <p className="text-gray-600 font-medium mt-1">3-acre cotton farmer</p>
      </div>

      <div className="flex-1 flex flex-col relative w-full max-w-5xl mx-auto justify-center space-y-4">
        
        {/* Step 1 & 2 */}
        <div className="flex gap-4">
          <JourneyStep num={1} icon={<Mic />} title="SPEAK" color="bg-blue-500" delay={0.1}>
            <p className="text-lg font-medium text-gray-800 italic">"मेरे कपास के पत्तों पर भूरे दाग आ रहे हैं और मिट्टी सूखी है।"</p>
            <p className="text-sm text-gray-500 mt-1">(My cotton leaves have brown spots and soil is dry)</p>
          </JourneyStep>
          
          <JourneyStep num={2} icon={<Camera />} title="SHOW" color="bg-purple-500" delay={0.2}>
            <div className="flex flex-col items-center">
              <div className="w-full h-16 bg-green-100 rounded-lg border-2 border-dashed border-green-300 flex items-center justify-center text-green-700 font-semibold mb-2">
                [ Affected Leaf Photo ]
              </div>
              <p className="text-sm text-gray-600">Farmer takes a photo.</p>
            </div>
          </JourneyStep>
        </div>

        {/* Step 3 & 4 */}
        <div className="flex gap-4">
          <JourneyStep num={3} icon={<BrainCircuit />} title="UNDERSTAND" color="bg-agri-green" delay={0.3}>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              <Tag>Cotton</Tag><Tag>Flowering Stage</Tag><Tag>Image</Tag>
              <Tag>Farm Profile</Tag><Tag>Weather</Tag>
            </div>
          </JourneyStep>

          <JourneyStep num={4} icon={<Activity />} title="ANALYZE" color="bg-orange-500" delay={0.4}>
            <ul className="text-left text-sm text-gray-700 space-y-1 list-disc pl-4">
              <li>Possible crop-health issue</li>
              <li>Soil moisture concern</li>
              <li>Upcoming weather conditions</li>
            </ul>
          </JourneyStep>
        </div>

        {/* Step 5 & 6 */}
        <div className="flex gap-4">
          <JourneyStep num={5} icon={<CheckCircle />} title="ACT" color="bg-green-600" delay={0.5}>
            <div className="bg-green-50 border border-green-200 p-3 rounded-lg text-sm font-medium text-green-800">
              “Rain is expected soon. Avoid unnecessary irrigation. Inspect nearby plants and monitor the leaf symptoms.”
            </div>
          </JourneyStep>

          <JourneyStep num={6} icon={<Wallet />} title="BEYOND ADVICE" color="bg-agri-earth" delay={0.6}>
            <ul className="text-left text-sm text-gray-700 space-y-1">
              <li>💰 Check crop expenses</li>
              <li>📄 Prepare scheme applications</li>
            </ul>
          </JourneyStep>
        </div>

      </div>

      <div className="mt-8 text-center bg-gray-900 text-white py-4 px-12 rounded-xl mx-auto">
        <p className="text-lg font-bold">
          “The farmer doesn't need to understand AI. He only needs to explain what is happening on his farm.”
        </p>
      </div>

    </div>
  );
};

const JourneyStep = ({ num, icon, title, color, children, delay }: { num: number, icon: React.ReactNode, title: string, color: string, children: React.ReactNode, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex-1 bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative"
  >
    <div className="flex items-center gap-3 mb-3 border-b border-gray-100 pb-2">
      <div className={`w-8 h-8 rounded-full ${color} text-white flex items-center justify-center shadow-md`}>
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-4 h-4" })}
      </div>
      <h3 className="font-bold text-gray-800 tracking-wide">STEP {num} : {title}</h3>
    </div>
    <div className="flex-1 flex flex-col justify-center text-center">
      {children}
    </div>
  </motion.div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md font-medium border border-gray-200">{children}</span>
);

export default Slide6Journey;
