import { motion } from 'framer-motion';
import { ArrowRight, Mic } from 'lucide-react';
import { Button } from '../components/Button';

export const FinalCTA = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[var(--color-agri-dark)]">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1592982537447-6f206cb927bb?auto=format&fit=crop&q=80&w=2000" 
          alt="Lush green crop field" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-agri-forest)]/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-agri-dark)] to-transparent opacity-90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Your farm already has a story.<br/>
            <span className="text-[var(--color-agri-yellow)]">Let AI help you understand it.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12">
            Start building a smarter picture of your farm today.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button variant="primary" size="lg" className="text-lg" icon={<ArrowRight className="w-6 h-6" />}>
              Enter My Farm
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-[var(--color-agri-forest)] focus:ring-white" icon={<Mic className="w-6 h-6" />}>
              Ask AgriScribe
            </Button>
          </div>

          <div className="inline-block bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              AgriScribe<span className="text-[var(--color-agri-yellow)]">-AI</span>
            </h3>
            <p className="text-sm mt-1 text-gray-300 font-medium tracking-wide">"Know your farm. Know what to do. Grow better."</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
