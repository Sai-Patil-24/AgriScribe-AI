import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Camera, Brain, Lightbulb, CheckCircle2 } from 'lucide-react';

const steps = [
  { num: "01", icon: <Mic />, title: "Speak", desc: "Tell AgriScribe what is happening on your farm." },
  { num: "02", icon: <Camera />, title: "Show", desc: "Upload a crop or leaf photo when needed." },
  { num: "03", icon: <Brain />, title: "Understand", desc: "AI combines your farm context, crop, weather, and history." },
  { num: "04", icon: <Lightbulb />, title: "Recommend", desc: "Get a simple, personalized recommendation." },
  { num: "05", icon: <CheckCircle2 />, title: "Act", desc: "Complete the task, track it, or prepare the document.", highlight: true },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="text-sm font-bold text-green-600 uppercase tracking-widest mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            From "What's happening?" <br />
            <span className="text-gray-300">to "What should I do?"</span>
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute top-[56px] left-[10%] right-[10%] h-px bg-gray-100 hidden lg:block">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full bg-green-500 origin-left"
              style={{ height: '2px' }}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <span className="text-green-500 font-bold text-xs tracking-widest mb-3">{step.num}</span>
                
                <motion.div 
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-5 relative z-10 cursor-pointer transition-shadow ${
                    step.highlight 
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/25' 
                      : 'bg-gray-50 text-gray-700 border border-gray-100 hover:shadow-md'
                  }`}
                >
                  {React.cloneElement(step.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                </motion.div>
                
                <h3 className="text-base font-bold text-gray-900 mb-1.5">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-[180px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
