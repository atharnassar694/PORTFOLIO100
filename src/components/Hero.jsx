import React from 'react';
import { ArrowRight, Download, Mail, Award, CheckCircle2, Sparkles, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { TechVisual } from './TechVisual';

export const Hero = () => {
  const { lang, isRtl } = useLanguage();
  const t = portfolioData[lang].hero;

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden circuit-grid-dark dark:circuit-grid-dark circuit-grid-light">
      {/* Background Neon Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-neon-blue/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-neon-purple/15 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            
            {/* Top Engineering Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 dark:bg-neon-blue/10 backdrop-blur-md text-xs sm:text-sm font-medium text-neon-cyan mb-6 shadow-glow-blue animate-float">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{t.badge}</span>
            </div>

            {/* Greeting & Main Name */}
            <div className="space-y-1">
              <p className="text-sm sm:text-base font-mono text-neon-cyan tracking-wider font-semibold">
                {t.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white dark:text-white text-slate-900 leading-[1.15]">
                {t.name}
              </h1>
            </div>

            {/* Role / Subheading */}
            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-bold text-gradient-cyan">
              {t.role}
            </h2>

            {/* Tagline / Bio Lead */}
            <p className="mt-4 text-base sm:text-lg text-slate-300 dark:text-slate-300 text-slate-600 max-w-2xl leading-relaxed">
              {t.tagline}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 shadow-glow-blue transform hover:-translate-y-0.5"
              >
                <span>{t.viewProjects}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 dark:text-slate-200 text-slate-800 bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 border border-white/10 dark:border-white/10 border-slate-300 transition-all duration-300 hover:border-neon-cyan"
              >
                <Mail className="w-4 h-4 text-neon-cyan" />
                <span>{t.contactMe}</span>
              </a>
            </div>

            {/* Stats Metrics Bar */}
            <div className="mt-12 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/10 dark:border-white/10 border-slate-200">
              {t.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl glass-card-dark dark:glass-card-dark bg-white/60 dark:bg-[#161B22]/80 border border-white/5 dark:border-white/5 border-slate-200 hover:border-neon-blue/40 transition-colors"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-neon-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-100 dark:text-white text-slate-800 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-slate-400 dark:text-slate-400 text-slate-500 font-mono truncate">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Visual Column (NO PERSONAL PHOTOS - Stunning Circuit & Microcontroller Component) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <TechVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
