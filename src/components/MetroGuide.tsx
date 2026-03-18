import React, { useState } from 'react';
import { METRO_LINES } from '../constants';
import { Train, ChevronRight, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const MetroGuide: React.FC = () => {
  const [activeLine, setActiveLine] = useState(METRO_LINES[0].id);
  const currentLine = METRO_LINES.find(l => l.id === activeLine)!;

  return (
    <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-brand-primary/10 rounded-2xl">
          <Train className="w-6 h-6 text-brand-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold serif">地铁交通指南</h2>
          <p className="text-sm text-gray-500">便捷穿梭于林城之间</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        {METRO_LINES.map(line => (
          <button
            key={line.id}
            onClick={() => setActiveLine(line.id)}
            className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeLine === line.id 
                ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20 scale-105' 
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            style={{ backgroundColor: activeLine === line.id ? line.color : undefined }}
          >
            {line.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeLine}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-6"
        >
          <div className="p-6 rounded-2xl bg-gray-50 border border-black/5">
            <p className="text-gray-700 leading-relaxed">{currentLine.description}</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
            <div className="flex overflow-x-auto pb-6 gap-8 relative z-10 no-scrollbar">
              {currentLine.stations.map((station, idx) => (
                <div key={station} className="flex flex-col items-center min-w-[100px] group">
                  <div 
                    className="w-4 h-4 rounded-full border-4 border-white shadow-sm mb-3 transition-transform group-hover:scale-150"
                    style={{ backgroundColor: currentLine.color }}
                  />
                  <span className="text-xs font-medium text-gray-600 whitespace-nowrap rotate-45 origin-left mt-2">
                    {station}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 flex items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-3xl">
        <div className="text-center">
          <Map className="w-8 h-8 text-gray-300 mx-auto mb-2" />
          <p className="text-sm text-gray-400">建议使用手机地图获取实时到站信息</p>
        </div>
      </div>
    </div>
  );
};
