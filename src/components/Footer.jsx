import React from 'react';
import { Cpu, ArrowUp, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { lang, isRtl } = useLanguage();
  const t = portfolioData[lang].footer;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative bg-[#080B10] dark:bg-[#080B10] bg-slate-900 text-slate-400 border-t border-white/10 dark:border-white/10 border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-purple p-0.5 shadow-glow-blue">
              <div className="w-full h-full bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-neon-cyan" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white text-base">
                {lang === 'ar' ? 'أثر نصار سليمان' : 'Athar Nassar Soliman'}
              </span>
              <p className="text-xs font-mono text-neon-blue">
                {lang === 'ar' ? 'هندسة الإلكترونيات والحاسبات' : 'Electronics & Computer Engineering'}
              </p>
            </div>
          </div>

          {/* Jump to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-slate-300 bg-white/5 hover:bg-neon-blue/20 hover:text-white border border-white/10 hover:border-neon-cyan transition-all"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-neon-cyan" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} {t.rights}</p>
          <p className="text-center sm:text-right text-slate-400">
            {t.engineered}
          </p>
        </div>

      </div>
    </footer>
  );
};
