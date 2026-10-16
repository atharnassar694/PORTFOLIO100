import React, { useState, useEffect } from 'react';
import { Cpu, Wifi, Database, Activity, Zap, Radio, Layers, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TechVisual = () => {
  const { lang, isRtl } = useLanguage();
  const [activeNode, setActiveNode] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
      setPulse((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const techNodes = [
    {
      id: 'mcu',
      labelEn: 'AVR & ESP32 Core',
      labelAr: 'معالج AVR و ESP32',
      metricEn: '16MHz / Dual 240MHz',
      metricAr: 'تردد 16 ميجاهرتز / ثنائي النواة',
      icon: Cpu,
      color: 'text-cyan-400',
      border: 'border-cyan-500/40',
      bg: 'bg-cyan-500/10'
    },
    {
      id: 'iot',
      labelEn: 'IoT & Telemetry',
      labelAr: 'إنترنت الأشياء والبث اللاسلكي',
      metricEn: 'Wi-Fi / BLE / MQTT',
      metricAr: 'بروتوكولات Wi-Fi و MQTT',
      icon: Wifi,
      color: 'text-blue-400',
      border: 'border-blue-500/40',
      bg: 'bg-blue-500/10'
    },
    {
      id: 'data',
      labelEn: 'Azure Data Pipeline',
      labelAr: 'خطوط بيانات Azure السحابية',
      metricEn: 'SQL & ETL Ingestion',
      metricAr: 'استعلامات SQL وتدفق البيانات',
      icon: Database,
      color: 'text-purple-400',
      border: 'border-purple-500/40',
      bg: 'bg-purple-500/10'
    },
    {
      id: 'dsp',
      labelEn: 'DSP & FFT Engine',
      labelAr: 'معالجة الإشارات وتحليل FFT',
      metricEn: 'Real-time Signal Spectrum',
      metricAr: 'تحليل طيفي فوري للترددات',
      icon: Activity,
      color: 'text-emerald-400',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10'
    }
  ];

  return (
    <div className="relative w-full max-w-[480px] lg:max-w-[540px] aspect-square flex items-center justify-center p-4 select-none">
      {/* Outer Ambient Glow Orbs */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-[80px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-neon-purple/20 rounded-full blur-[80px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Rotating Background Circuit Rings */}
      <div className="absolute inset-0 rounded-full border border-neon-blue/15 animate-spin-slow pointer-events-none"></div>
      <div className="absolute inset-6 rounded-full border border-dashed border-neon-purple/25 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '35s' }}></div>
      <div className="absolute inset-16 rounded-full border border-cyan-500/10 pointer-events-none"></div>

      {/* Central Microcontroller Die (Chip Unit) */}
      <div className="relative z-10 w-52 sm:w-60 md:w-64 aspect-square rounded-2xl bg-gradient-to-b from-[#161B22] via-[#0D1117] to-[#0A0D13] dark:from-[#1E2532] dark:via-[#161B22] dark:to-[#0B0F17] p-4 sm:p-5 shadow-2xl border border-neon-blue/40 flex flex-col justify-between items-center group transition-all duration-500 hover:border-neon-cyan hover:shadow-glow-cyan">
        
        {/* Silicon Edge Notch & Pins Visuals */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-2 bg-neon-cyan/40 rounded-full"></div>
        {/* Top Pins */}
        <div className="absolute -top-3 left-4 right-4 flex justify-between px-2">
          {[...Array(6)].map((_, i) => (
            <div key={`pin-t-${i}`} className="w-1.5 h-3 bg-gradient-to-b from-neon-blue to-transparent rounded-t-sm animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
          ))}
        </div>
        {/* Bottom Pins */}
        <div className="absolute -bottom-3 left-4 right-4 flex justify-between px-2">
          {[...Array(6)].map((_, i) => (
            <div key={`pin-b-${i}`} className="w-1.5 h-3 bg-gradient-to-t from-neon-purple to-transparent rounded-b-sm animate-pulse" style={{ animationDelay: `${i * 250}ms` }}></div>
          ))}
        </div>
        {/* Left Pins */}
        <div className="absolute -left-3 top-4 bottom-4 flex flex-col justify-between py-2">
          {[...Array(6)].map((_, i) => (
            <div key={`pin-l-${i}`} className="h-1.5 w-3 bg-gradient-to-r from-neon-blue to-transparent rounded-l-sm animate-pulse" style={{ animationDelay: `${i * 180}ms` }}></div>
          ))}
        </div>
        {/* Right Pins */}
        <div className="absolute -right-3 top-4 bottom-4 flex flex-col justify-between py-2">
          {[...Array(6)].map((_, i) => (
            <div key={`pin-r-${i}`} className="h-1.5 w-3 bg-gradient-to-l from-neon-cyan to-transparent rounded-r-sm animate-pulse" style={{ animationDelay: `${i * 220}ms` }}></div>
          ))}
        </div>

        {/* Chip Header Bar */}
        <div className="w-full flex items-center justify-between border-b border-white/10 pb-2 text-[10px] sm:text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-emerald-400 font-semibold tracking-wider">LIVE CLK</span>
          </div>
          <span className="text-neon-cyan font-mono">16.00 MHz</span>
        </div>

        {/* Central Core Icon & Silicon Label */}
        <div className="flex flex-col items-center justify-center my-auto text-center py-2">
          <div className="relative p-4 rounded-xl bg-neon-blue/10 border border-neon-blue/30 shadow-inner group-hover:scale-105 transition-transform duration-300">
            <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-neon-cyan animate-pulse" />
            <Zap className="w-4 h-4 text-neon-purple absolute -top-1 -right-1 animate-bounce" />
          </div>
          <div className="mt-2 font-mono text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
            ATMEGA32 // ESP32
          </div>
          <div className="text-[10px] sm:text-xs font-mono text-neon-blue font-medium">
            EMBEDDED & DATA ARCHITECTURE
          </div>
        </div>

        {/* Bottom Status Bus */}
        <div className="w-full grid grid-cols-3 gap-1 pt-2 border-t border-white/10 text-center font-mono text-[9px] sm:text-[10px]">
          <div className="bg-white/5 py-1 rounded text-cyan-300">GPIO/ADC</div>
          <div className="bg-white/5 py-1 rounded text-purple-300">UART/SPI</div>
          <div className="bg-white/5 py-1 rounded text-emerald-300">AZURE CLD</div>
        </div>
      </div>

      {/* Orbiting Tech Satellite Badges */}
      {/* Top Left: Node 0 (MCU) */}
      <div 
        onClick={() => setActiveNode(0)}
        className={`absolute top-2 left-2 sm:top-4 sm:left-4 z-20 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
          activeNode === 0 ? 'scale-105 ring-2 ring-cyan-400 shadow-glow-cyan' : 'opacity-85'
        }`}
      >
        <div className="glass-card-dark dark:bg-[#161B22]/90 bg-white/90 p-2.5 sm:p-3 rounded-xl shadow-lg border border-cyan-500/30 flex items-center gap-2.5 max-w-[170px] sm:max-w-[200px]">
          <div className="p-2 rounded-lg bg-cyan-500/15 text-cyan-400">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
              {isRtl ? techNodes[0].labelAr : techNodes[0].labelEn}
            </p>
            <p className="text-[9px] sm:text-[10px] text-cyan-400 font-mono mt-0.5">
              {isRtl ? techNodes[0].metricAr : techNodes[0].metricEn}
            </p>
          </div>
        </div>
      </div>

      {/* Top Right: Node 1 (IoT) */}
      <div 
        onClick={() => setActiveNode(1)}
        className={`absolute top-2 right-2 sm:top-4 sm:right-4 z-20 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
          activeNode === 1 ? 'scale-105 ring-2 ring-blue-400 shadow-glow-blue' : 'opacity-85'
        }`}
      >
        <div className="glass-card-dark dark:bg-[#161B22]/90 bg-white/90 p-2.5 sm:p-3 rounded-xl shadow-lg border border-blue-500/30 flex items-center gap-2.5 max-w-[170px] sm:max-w-[200px]">
          <div className="p-2 rounded-lg bg-blue-500/15 text-blue-400">
            <Wifi className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
              {isRtl ? techNodes[1].labelAr : techNodes[1].labelEn}
            </p>
            <p className="text-[9px] sm:text-[10px] text-blue-400 font-mono mt-0.5">
              {isRtl ? techNodes[1].metricAr : techNodes[1].metricEn}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Left: Node 2 (Data) */}
      <div 
        onClick={() => setActiveNode(2)}
        className={`absolute bottom-2 left-2 sm:bottom-4 sm:left-4 z-20 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
          activeNode === 2 ? 'scale-105 ring-2 ring-purple-400 shadow-glow-purple' : 'opacity-85'
        }`}
      >
        <div className="glass-card-dark dark:bg-[#161B22]/90 bg-white/90 p-2.5 sm:p-3 rounded-xl shadow-lg border border-purple-500/30 flex items-center gap-2.5 max-w-[170px] sm:max-w-[200px]">
          <div className="p-2 rounded-lg bg-purple-500/15 text-purple-400">
            <Database className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
              {isRtl ? techNodes[2].labelAr : techNodes[2].labelEn}
            </p>
            <p className="text-[9px] sm:text-[10px] text-purple-400 font-mono mt-0.5">
              {isRtl ? techNodes[2].metricAr : techNodes[2].metricEn}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Right: Node 3 (DSP) */}
      <div 
        onClick={() => setActiveNode(3)}
        className={`absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-20 cursor-pointer transition-all duration-300 transform hover:scale-105 ${
          activeNode === 3 ? 'scale-105 ring-2 ring-emerald-400 shadow-lg shadow-emerald-500/20' : 'opacity-85'
        }`}
      >
        <div className="glass-card-dark dark:bg-[#161B22]/90 bg-white/90 p-2.5 sm:p-3 rounded-xl shadow-lg border border-emerald-500/30 flex items-center gap-2.5 max-w-[170px] sm:max-w-[200px]">
          <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-400">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">
              {isRtl ? techNodes[3].labelAr : techNodes[3].labelEn}
            </p>
            <p className="text-[9px] sm:text-[10px] text-emerald-400 font-mono mt-0.5">
              {isRtl ? techNodes[3].metricAr : techNodes[3].metricEn}
            </p>
          </div>
        </div>
      </div>

      {/* Connecting Trace SVG Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        <line x1="20%" y1="20%" x2="40%" y2="40%" stroke="#00D2FE" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="80%" y1="20%" x2="60%" y2="40%" stroke="#0075FF" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="20%" y1="80%" x2="40%" y2="60%" stroke="#7C3AED" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <line x1="80%" y1="80%" x2="60%" y2="60%" stroke="#10B981" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </svg>
    </div>
  );
};
