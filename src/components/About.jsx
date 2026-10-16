import React from 'react';
import { GraduationCap, Award, Cpu, Database, Activity, Network, CheckCircle2, BookOpen, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { lang, isRtl } = useLanguage();
  const t = portfolioData[lang].about;

  const pillarIcons = [Cpu, Database, Activity, Network];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0D1117] dark:bg-[#0D1117] bg-slate-50 transition-colors">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>01. {t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            {t.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education & Scholarship Highlight Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Academic Credential Card */}
            <div className="relative p-6 sm:p-8 rounded-2xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-neon-blue/30 shadow-glow-blue overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon-blue/20 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3.5 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple text-white shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-neon-cyan uppercase tracking-wider">
                    {t.educationTitle}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white text-slate-900 leading-snug">
                    {t.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/10 dark:border-white/10 border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400 dark:text-slate-400 text-slate-600 font-medium">Institution</span>
                  <span className="text-white dark:text-white text-slate-900 font-semibold">{t.institution}</span>
                </div>

                {/* Scholarship Badge */}
                <div className="p-3.5 rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400 flex-shrink-0 animate-pulse" />
                  <div className="text-xs sm:text-sm font-semibold text-neon-cyan">
                    {t.scholarshipBadge}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Micro Badge Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl glass-card-dark dark:bg-[#161B22]/70 bg-white border border-white/10 dark:border-white/10 border-slate-200">
                <div className="text-neon-cyan font-mono font-bold text-lg">AVR & ESP32</div>
                <div className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-1">
                  {lang === 'ar' ? 'تحكم عتادي وبرمجة دقيقة' : 'Bare-metal & RTOS'}
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card-dark dark:bg-[#161B22]/70 bg-white border border-white/10 dark:border-white/10 border-slate-200">
                <div className="text-neon-purple font-mono font-bold text-lg">Azure Data</div>
                <div className="text-xs text-slate-400 dark:text-slate-400 text-slate-600 mt-1">
                  {lang === 'ar' ? 'مسار مايكروسوفت DEPI' : 'ETL & Cloud Pipelines'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: In-depth Bio and 4 Technical Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200">
              <p className="text-base sm:text-lg font-semibold text-white dark:text-white text-slate-900 leading-relaxed">
                {t.lead}
              </p>
              
              <p className="mt-4 text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                {t.bio1}
              </p>
              
              <p className="mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                {t.bio2}
              </p>

              {/* 4 Core Pillars */}
              <div className="mt-8 pt-6 border-t border-white/10 dark:border-white/10 border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {t.highlights.map((highlight, idx) => {
                  const Icon = pillarIcons[idx % pillarIcons.length];
                  return (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100/80 border border-white/5 hover:border-neon-blue/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-neon-blue/15 text-neon-cyan flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 dark:text-slate-200 text-slate-800">
                        {highlight}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
