import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Camera, Brain, Lightbulb, Wallet, FileText } from 'lucide-react';

export const FarmerStory = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-[var(--color-agri-dark)] mb-4">
            One farmer.<br/>
            One farm.<br/>
            <span className="text-[var(--color-agri-forest)]">One connected experience.</span>
          </h2>
          <div className="inline-flex flex-col items-center mt-6 p-4 bg-[var(--color-agri-cream)] rounded-2xl border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800">Meet Ramesh</h3>
            <p className="text-sm text-gray-500 font-medium">3-acre cotton farmer</p>
          </div>
        </div>

        <div className="relative pl-8 md:pl-0">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>

          <div className="space-y-12">
            <StoryNode 
              icon={<Mic />}
              title="Ramesh speaks"
              desc='"My cotton leaves have brown spots."'
              align="left"
            />
            <StoryNode 
              icon={<Camera />}
              title="He takes a photo"
              desc="AI screens the crop for possible issues."
              align="right"
            />
            <StoryNode 
              icon={<Brain />}
              title="AgriScribe checks context"
              desc="Crop stage + farm history + weather"
              align="left"
            />
            <StoryNode 
              icon={<Lightbulb />}
              title="Recommendation"
              desc='"Monitor the affected plants and avoid unnecessary irrigation before tomorrow&apos;s expected rain."'
              align="right"
              highlight
            />
            <StoryNode 
              icon={<Wallet />}
              title="Ramesh checks economics"
              desc="Current spending and expected margin."
              align="left"
            />
            <StoryNode 
              icon={<FileText />}
              title="He checks benefits"
              desc="Relevant government support is identified and the application can be prepared."
              align="right"
            />
          </div>

        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[var(--color-agri-dark)] bg-[var(--color-agri-yellow)]/20 inline-block px-8 py-4 rounded-2xl">
            One conversation can lead to multiple useful actions.
          </h3>
        </div>

      </div>
    </section>
  );
};

const StoryNode = ({ icon, title, desc, align, highlight }: any) => {
  const isLeft = align === 'left';
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex items-center md:justify-between w-full ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Center Icon */}
      <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-gray-100 shadow-sm flex items-center justify-center z-10 text-[var(--color-agri-forest)]">
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
      </div>

      <div className="w-full pl-16 md:pl-0 md:w-[45%]">
        <div className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 ${highlight ? 'ring-2 ring-[var(--color-agri-yellow)]' : ''}`}>
          <h4 className="font-bold text-gray-800 text-lg mb-2">{title}</h4>
          <p className={`${highlight ? 'text-[var(--color-agri-forest)] font-semibold' : 'text-gray-600'} leading-relaxed`}>{desc}</p>
        </div>
      </div>
      
      {/* Empty div for spacing on the other side */}
      <div className="hidden md:block w-[45%]"></div>
    </motion.div>
  );
};
