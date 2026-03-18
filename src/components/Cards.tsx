import React from 'react';
import { motion } from 'motion/react';
import { Attraction, Food } from '../types';
import { MapPin, Tag, Utensils } from 'lucide-react';

export const AttractionCard: React.FC<{ attraction: Attraction }> = ({ attraction }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={attraction.imageUrl} 
          alt={attraction.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {attraction.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold serif mb-2 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-brand-primary" />
          {attraction.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {attraction.description}
        </p>
      </div>
    </motion.div>
  );
};

export const FoodCard: React.FC<{ food: Food }> = ({ food }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex flex-col md:flex-row gap-6 bg-white p-4 rounded-3xl border border-black/5 shadow-sm"
    >
      <div className="w-full md:w-48 h-48 rounded-2xl overflow-hidden shrink-0">
        <img 
          src={food.imageUrl} 
          alt={food.name} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold serif flex items-center gap-2">
            <Utensils className="w-4 h-4 text-brand-accent" />
            {food.name}
          </h3>
          <span className="text-brand-accent font-mono font-bold">{food.priceRange}</span>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          {food.description}
        </p>
      </div>
    </motion.div>
  );
};
