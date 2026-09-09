import { motion } from 'framer-motion';
import { Mic, Sprout } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      
      {/* Full-screen video/image background */}
      <div className="absolute inset-0">
        <video 
          autoPlay loop muted playsInline
          className="w-full h-full object-cover"
          poster="/Screenshot_2026-09-10_004049.png_2K_20260910004934.jpeg"
        >
          <source src="/Crop_flowing_with_wind_20260910005804.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-20 sm:pb-28 lg:pb-36">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Your farm deserves <br className="hidden sm:block" />
              better answers.
            </h1>

            <p className="text-base sm:text-lg text-white/70 mb-10 max-w-xl leading-relaxed font-medium">
              AgriScribe turns your voice into actionable crop advice, weather-aware decisions, and real financial clarity — in your language.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2.5 bg-white text-gray-900 px-7 py-3.5 rounded-full text-[15px] font-semibold hover:bg-gray-100 transition-colors"
              >
                Enter My Farm
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
              </a>
              <button className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-7 py-3.5 rounded-full text-[15px] font-semibold hover:bg-white/20 transition-colors">
                <Mic className="w-4 h-4" />
                Ask AgriScribe
              </button>
            </div>
          </motion.div>

          {/* Voice demo — small, anchored bottom-right */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute bottom-8 right-8 w-[380px]"
          >
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 text-left">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mic className="w-3.5 h-3.5 text-white/80" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-0.5">Farmer</p>
                  <p className="text-[13px] text-white/90 leading-snug">"मेरे कपास के पत्तों पर भूरे दाग हैं।"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sprout className="w-3.5 h-3.5 text-green-300" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-wider mb-0.5">AgriScribe</p>
                  <p className="text-[13px] text-green-300/90 leading-snug">"Take a photo of the affected leaf — I'll check for leaf spot."</p>
                </div>
              </div>
              {/* waveform */}
              <div className="flex items-center justify-center gap-1 mt-4 h-4">
                {[1,2,3,4,5].map(i => (
                  <motion.div
                    key={i}
                    animate={{ height: ['3px','14px','3px'] }}
                    transition={{ repeat: Infinity, duration: 1.1, delay: i * 0.12 }}
                    className="w-[3px] bg-green-400/50 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
