import { motion } from 'framer-motion';
import { Mic } from 'lucide-react';

export const FinalCTA = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      
      {/* Full background image */}
      <div className="absolute inset-0">
        <img 
          src="/Screenshot_2026-09-10_004049.png_2K_20260910004934.jpeg" 
          alt="Farm landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Your farm already has a story. Let AI help you understand it.
          </h2>
          
          <p className="text-white/50 mb-8 leading-relaxed">
            Start building a smarter picture of your farm today. No complicated setups — just natural conversation.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 bg-white text-gray-900 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
              Enter My Farm
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
            </a>
            <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/15 px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors">
              <Mic className="w-4 h-4" />
              Ask AgriScribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
