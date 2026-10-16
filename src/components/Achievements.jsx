import React from 'react';
import { Trophy, Award, Sparkles, Star, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

export const Achievements = () => {
  const { lang, isRtl } = useLanguage();
  const t = portfolioData[lang].achievements;
  const achievements = portfolioData.achievementsData;
  const isEn = lang === 'en';

  const triggerConfetti = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#0075FF', '#00D2FE', '#7C3AED', '#F59E0B']
    });
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-[#0D1117] dark:bg-[#0D1117] bg-slate-50 transition-colors">
      
      {/* Decorative Aura */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>05. {t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            {t.subtitle}
          </h2>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item) => {
            const title = isEn ? item.titleEn : item.titleAr;
            const org = isEn ? item.orgEn : item.orgAr;
            const date = isEn ? item.dateEn : item.dateAr;
            const badge = isEn ? item.badgeEn : item.badgeAr;
            const desc = isEn ? item.descEn : item.descAr;
            const isTrophy = item.icon === 'Trophy';

            return (
              <div
                key={item.id}
                onClick={triggerConfetti}
                className="group relative rounded-3xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200 p-8 hover:border-amber-400/50 transition-all duration-300 hover:shadow-glow-purple cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Background soft glow on hover */}
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br from-amber-400/20 to-neon-purple/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>

                <div>
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {isTrophy ? (
                        <Trophy className="w-8 h-8 text-white" />
                      ) : (
                        <Award className="w-8 h-8 text-white" />
                      )}
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20">
                        {badge}
                      </span>
                      <span className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500 mt-1">
                        {date}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white dark:text-white text-slate-900 group-hover:text-amber-400 transition-colors">
                    {title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm font-semibold text-neon-cyan mt-1">
                    {org}
                  </p>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Interactive Click Tip */}
                <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-400 text-slate-500">
                  <span className="flex items-center gap-1 text-neon-blue">
                    <Sparkles className="w-3.5 h-3.5" />
                    {isEn ? 'Tap for celebration' : 'اضغط للاحتفال'}
                  </span>
                  <span className="text-amber-400 font-semibold">★ Verified Distinction</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
