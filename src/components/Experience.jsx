import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Award, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { lang, isRtl } = useLanguage();
  const t = portfolioData[lang].experience;
  const experiences = portfolioData.experienceData;
  const isEn = lang === 'en';

  const colorStyles = {
    blue: {
      dot: 'bg-neon-blue ring-neon-blue/30',
      tag: 'text-neon-blue bg-neon-blue/10 border-neon-blue/20',
      border: 'hover:border-neon-blue/50',
    },
    cyan: {
      dot: 'bg-neon-cyan ring-neon-cyan/30',
      tag: 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20',
      border: 'hover:border-neon-cyan/50',
    },
    emerald: {
      dot: 'bg-emerald-400 ring-emerald-400/30',
      tag: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      border: 'hover:border-emerald-400/50',
    },
    purple: {
      dot: 'bg-neon-purple ring-neon-purple/30',
      tag: 'text-neon-purple bg-neon-purple/10 border-neon-purple/20',
      border: 'hover:border-neon-purple/50',
    },
    violet: {
      dot: 'bg-violet-400 ring-violet-400/30',
      tag: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
      border: 'hover:border-violet-400/50',
    },
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0B0F17] dark:bg-[#0B0F17] bg-white transition-colors">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-blue/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-neon-blue bg-neon-blue/10 border border-neon-blue/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04. {t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            {t.subtitle}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center/Side Line */}
          <div className={`absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan ${isRtl ? 'right-4 sm:right-1/2' : 'left-4 sm:left-1/2'} -translate-x-1/2 opacity-30 hidden sm:block`}></div>

          <div className="space-y-12">
            {experiences.map((item, idx) => {
              const role = isEn ? item.roleEn : item.roleAr;
              const org = isEn ? item.orgEn : item.orgAr;
              const period = isEn ? item.period : item.periodAr;
              const desc = isEn ? item.descEn : item.descAr;
              const styling = colorStyles[item.color] || colorStyles.blue;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node on Timeline */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B0F17] border-2 border-white/80 z-20 hidden sm:flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${styling.dot} animate-ping`}></div>
                  </div>

                  {/* Content Card (Taking half width on desktop) */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-10 sm:rtl:pl-0 sm:rtl:pr-10' : 'sm:pr-10 sm:rtl:pr-0 sm:rtl:pl-10'}`}>
                    <div className={`p-6 sm:p-7 rounded-2xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200 transition-all duration-300 ${styling.border} hover:shadow-glow-blue group`}>
                      
                      {/* Top Info Bar: Period & Track Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400 dark:text-slate-400 text-slate-500">
                          <Calendar className="w-3.5 h-3.5 text-neon-cyan" />
                          <span>{period}</span>
                        </span>
                        
                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${styling.tag}`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Role & Organization */}
                      <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white text-slate-900 group-hover:text-neon-cyan transition-colors">
                        {role}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-neon-blue mt-1">
                        <Building2 className="w-4 h-4 text-neon-purple flex-shrink-0" />
                        <span>{org}</span>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                        {desc}
                      </p>

                      {/* Skills Acquired Tags */}
                      <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/10 border-slate-100 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
