import React from 'react';
import { Navbar, Hero } from './components/Layout';
import { AttractionCard, FoodCard } from './components/Cards';
import { MetroGuide } from './components/MetroGuide';
import { TravelConsultant } from './components/TravelConsultant';
import { ATTRACTIONS, FOODS } from './constants';
import { motion } from 'motion/react';
import { MapPin, Utensils, Train, MessageSquare, Heart } from 'lucide-react';

const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="text-center mb-16">
    <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-2xl mb-4 text-brand-primary">
      {icon}
    </div>
    <h2 className="text-4xl font-bold serif mb-2 tracking-tight">{title}</h2>
    <p className="text-gray-500 font-medium">{subtitle}</p>
  </div>
);

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-black/5 py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Heart className="w-5 h-5 text-red-500 fill-current" />
        <span className="text-sm font-medium text-gray-600">爱上贵阳 · 爽爽生活</span>
      </div>
      <p className="text-xs text-gray-400">© 2026 贵阳旅游咨询网. All rights reserved.</p>
      <div className="flex gap-6 text-xs text-gray-500 font-medium">
        <a href="#" className="hover:text-brand-primary">隐私政策</a>
        <a href="#" className="hover:text-brand-primary">服务条款</a>
        <a href="#" className="hover:text-brand-primary">联系我们</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {/* Attractions Section */}
        <section id="attractions">
          <SectionHeader 
            title="著名景点" 
            subtitle="走进贵阳，感受林城之美" 
            icon={<MapPin className="w-6 h-6" />} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ATTRACTIONS.map(attraction => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </section>

        {/* Food Section */}
        <section id="food">
          <SectionHeader 
            title="地道美食" 
            subtitle="舌尖上的贵阳，酸辣鲜香" 
            icon={<Utensils className="w-6 h-6" />} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FOODS.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        </section>

        {/* Transport Section */}
        <section id="transport">
          <SectionHeader 
            title="交通指南" 
            subtitle="地铁穿行，便捷抵达每一个角落" 
            icon={<Train className="w-6 h-6" />} 
          />
          <div className="max-w-4xl mx-auto">
            <MetroGuide />
          </div>
        </section>

        {/* AI Consultant Section */}
        <section id="consultant">
          <SectionHeader 
            title="在线咨询" 
            subtitle="您的专属 AI 旅游顾问，随时待命" 
            icon={<MessageSquare className="w-6 h-6" />} 
          />
          <div className="max-w-3xl mx-auto">
            <TravelConsultant />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
