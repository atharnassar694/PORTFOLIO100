import React from 'react';
import { X, Cpu, CheckCircle2, Sliders, Layers, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const ProjectModal = ({ project, onClose }) => {
  const { lang, isRtl } = useLanguage();
  if (!project) return null;

  const t = portfolioData[lang].projects;
  const isEn = lang === 'en';

  const title = isEn ? project.titleEn : project.titleAr;
  const description = isEn ? project.descEn : project.descAr;
  const highlights = isEn ? project.highlightsEn : project.highlightsAr;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-3xl my-8 rounded-3xl glass-card-dark dark:glass-card-dark bg-[#161B22] dark:bg-[#161B22] bg-white border border-neon-blue/40 shadow-glow-blue overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top Header Banner with Gradient Accent */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-block px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            {project.badge}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto text-start">
          
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-2">
              {isEn ? 'System Overview' : 'نظرة عامة على النظام'}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-700 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Schematic / Architecture Flow */}
          {project.schematic && (
            <div className="p-4 rounded-2xl bg-black/40 dark:bg-black/40 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200">
              <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan font-bold mb-2">
                <Terminal className="w-4 h-4" />
                <span>{isEn ? 'Hardware / Data Flow Architecture' : 'المعمارية ومسار تدفق البيانات'}</span>
              </div>
              <p className="text-xs sm:text-sm font-mono text-slate-300 dark:text-slate-300 text-slate-800 break-words leading-relaxed">
                {project.schematic}
              </p>
            </div>
          )}

          {/* Technical Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neon-cyan font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-neon-purple" />
              <span>{t.keyHighlights}</span>
            </h4>
            <ul className="space-y-2.5">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology & Peripherals Tags */}
          <div className="pt-4 border-t border-white/10 dark:border-white/10 border-slate-200">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-500 font-bold mb-3">
              {t.technologies}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-neon-cyan border border-white/10 dark:border-white/10 border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-black/20 dark:bg-black/20 bg-slate-50 border-t border-white/10 dark:border-white/10 border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-white/10 dark:bg-white/10 bg-slate-200 hover:bg-white/20 text-white dark:text-white text-slate-800 transition-colors"
          >
            {isEn ? 'Close' : 'إغلاق'}
          </button>
        </div>

      </div>
    </div>
  );
};
