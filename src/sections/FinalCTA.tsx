import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';
import { MotionButton } from '../components/MotionButton';

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl"
        >
          {/* Background image overlay */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1592982537447-6f206cb927bb?auto=format&fit=crop&q=80&w=2000" 
              alt="Lush green crop field" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Your farm already has a story.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">Let AI help you understand it.</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto">
              Start building a smarter picture of your farm today. No complicated setups, just natural conversation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <MotionButton label="Enter My Farm" />
              <button className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all">
                <Mic className="w-4 h-4 text-white" />
                <span>Ask AgriScribe</span>
              </button>
            </div>

            <div className="inline-block bg-white/5 backdrop-blur-xl px-8 py-4 rounded-full border border-white/10">
              <h3 className="text-xl font-bold tracking-tight text-white">
                AgriScribe<span className="text-green-400">-AI</span>
              </h3>
              <p className="text-xs mt-1 text-gray-400 font-medium uppercase tracking-widest">Know your farm. Grow better.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
