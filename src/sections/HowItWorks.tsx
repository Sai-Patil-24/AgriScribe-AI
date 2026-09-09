import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Camera, Brain, Lightbulb, CheckCircle2 } from 'lucide-react';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-agri-dark)] text-white relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-agri-forest)] rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            From “What is happening?”<br/>
            <span className="text-[var(--color-agri-yellow)]">to “What should I do?”</span>
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Line connecting steps */}
          <div className="absolute top-[3rem] left-8 right-8 h-1 bg-gray-800 hidden lg:block">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-[var(--color-agri-yellow)]"
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <Step 
              num="01" 
              icon={<Mic />} 
              title="Speak" 
              desc="Tell AgriScribe what is happening." 
              delay={0.1} 
            />
            <Step 
              num="02" 
              icon={<Camera />} 
              title="Show" 
              desc="Upload a crop image when needed." 
              delay={0.3} 
            />
            <Step 
              num="03" 
              icon={<Brain />} 
              title="Understand" 
              desc="AI combines your farm context, crop, weather and history." 
              delay={0.5} 
            />
            <Step 
              num="04" 
              icon={<Lightbulb />} 
              title="Recommend" 
              desc="Get a simple, personalized recommendation." 
              delay={0.7} 
            />
            <Step 
              num="05" 
              icon={<CheckCircle2 />} 
              title="Act" 
              desc="Complete the task, track it or prepare the document." 
              delay={0.9} 
              highlight
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const Step = ({ num, icon, title, desc, delay, highlight = false }: { num: string, icon: React.ReactNode, title: string, desc: string, delay: number, highlight?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative flex flex-col items-center lg:items-start text-center lg:text-left"
  >
    <div className="text-[var(--color-agri-yellow)] font-bold text-sm mb-4">{num}</div>
    
    <div className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative z-10 ${highlight ? 'bg-[var(--color-agri-yellow)] text-[var(--color-agri-dark)]' : 'bg-gray-800 text-white border border-gray-700'}`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-10 h-10" })}
    </div>
    
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
      {desc}
    </p>
  </motion.div>
);
