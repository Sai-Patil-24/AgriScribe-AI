import React from 'react';
import { CloudSun, Sprout, Landmark, FileText, BookOpen, Search, UserX } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-[var(--color-agri-cream)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-agri-dark)] mb-4">
            Farming information is everywhere.<br/>
            <span className="text-[var(--color-agri-earth)]">Useful decisions are not.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Scattered Information */}
          <div className="relative h-[500px] bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden p-8 flex items-center justify-center">
            
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(var(--color-agri-forest) 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative w-full h-full">
              <ScatteredApp icon={<CloudSun className="text-blue-500" />} label="Weather app" top="10%" left="10%" delay={0} />
              <ScatteredApp icon={<Sprout className="text-green-500" />} label="Crop advice" top="20%" left="60%" delay={0.1} />
              <ScatteredApp icon={<Landmark className="text-orange-500" />} label="Government portal" top="45%" left="5%" delay={0.2} />
              <ScatteredApp icon={<FileText className="text-gray-500" />} label="Forms" top="40%" left="75%" delay={0.3} />
              <ScatteredApp icon={<BookOpen className="text-amber-600" />} label="Expense notebook" top="75%" left="20%" delay={0.4} />
              <ScatteredApp icon={<Search className="text-purple-500" />} label="Disease search" top="70%" left="65%" delay={0.5} />
              
              {/* Confused Farmer in Center */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-50 rounded-full flex flex-col items-center justify-center border-4 border-white shadow-xl z-20"
              >
                <span className="text-4xl mb-1">👨‍🌾</span>
                <UserX className="w-5 h-5 text-red-500" />
              </motion.div>
              
              {/* Disconnected Lines */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4">
                <line x1="25%" y1="20%" x2="45%" y2="40%" />
                <line x1="75%" y1="30%" x2="55%" y2="45%" />
                <line x1="25%" y1="55%" x2="40%" y2="55%" />
                <line x1="85%" y1="50%" x2="65%" y2="55%" />
                <line x1="35%" y1="85%" x2="45%" y2="65%" />
                <line x1="75%" y1="80%" x2="55%" y2="65%" />
              </svg>
            </div>
          </div>

          {/* Right: Problem Statements */}
          <div className="space-y-8">
            <div className="space-y-6">
              <ProblemStatement title="Too many apps" />
              <ProblemStatement title="Complicated forms" />
              <ProblemStatement title="Unclear crop symptoms" />
              <ProblemStatement title="Weather without context" />
              <ProblemStatement title="Expenses without a clear picture of profit" />
            </div>
            
            <div className="pt-8 border-t border-gray-200 mt-8">
              <p className="text-xl font-bold text-[var(--color-agri-forest)] leading-relaxed border-l-4 border-[var(--color-agri-yellow)] pl-6 py-2 bg-white rounded-r-xl shadow-sm">
                Farmers don't need more information.<br/>
                They need information translated into the right action.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const ScatteredApp = ({ icon, label, top, left, delay }: { icon: React.ReactNode, label: string, top: string, left: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="absolute bg-white px-4 py-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-3 z-10 hover:shadow-lg transition-shadow"
    style={{ top, left }}
  >
    <div className="bg-gray-50 p-2 rounded-lg">
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
    </div>
    <span className="font-semibold text-gray-700 text-sm">{label}</span>
  </motion.div>
);

const ProblemStatement = ({ title }: { title: string }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 w-2 h-2 rounded-full bg-[var(--color-agri-earth)] shrink-0"></div>
    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
  </div>
);
