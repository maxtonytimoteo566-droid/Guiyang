import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Compass className="w-6 h-6 text-brand-primary" />
          <span className="text-xl font-bold serif tracking-tight">贵阳旅游咨询</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#attractions" className="hover:text-brand-accent transition-colors">著名景点</a>
          <a href="#food" className="hover:text-brand-accent transition-colors">地道美食</a>
          <a href="#transport" className="hover:text-brand-accent transition-colors">交通指南</a>
          <a href="#consultant" className="px-4 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-accent transition-colors">在线咨询</a>
        </div>
      </div>
    </nav>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/guiyang-hero/1920/1080" 
          alt="Guiyang Landscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold serif mb-6 tracking-tighter">
            爽爽贵阳
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto opacity-90">
            避暑之都 · 森林之城 · 美食天堂
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a 
              href="#attractions" 
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-brand-bg transition-all hover:scale-105"
            >
              探索景点
            </a>
            <a 
              href="#consultant" 
              className="px-8 py-4 bg-brand-primary text-white rounded-full font-medium hover:bg-brand-accent transition-all hover:scale-105"
            >
              咨询顾问
            </a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
