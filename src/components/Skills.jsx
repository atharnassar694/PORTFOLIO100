import React, { useState } from 'react';
import { 
  Code2, Cpu, Terminal, Database, Activity, Layout, 
  Wifi, Radio, Layers, Sliders, Zap, Cloud, GitFork, 
  Server, DatabaseZap, Network, GitBranch, FileCode, Share2, Wrench
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2, Cpu, Terminal, Database, Activity, Layout,
  Wifi, Radio, Layers, Sliders, Zap, Cloud, GitFork,
  Server, DatabaseZap, Network, GitBranch, FileCode, Share2
};

export const Skills = () => {
  const { lang, isRtl } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const t = portfolioData[lang].skills;
  const skillsCategories = portfolioData.skillsData;

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'كافة المهارات' : 'All Arsenal' },
    { id: 'languages', label: t.categories.languages },
    { id: 'embedded', label: t.categories.embedded },
    { id: 'data', label: t.categories.data },
    { id: 'tools', label: t.categories.tools },
  ];

  const filteredCategories = selectedCategory === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0B0F17] dark:bg-[#0B0F17] bg-white transition-colors">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-neon-purple bg-neon-purple/10 border border-neon-purple/20 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>02. {t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            {t.subtitle}
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow-blue scale-105'
                  : 'bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-white/10 dark:hover:bg-white/10 text-slate-300 dark:text-slate-300 text-slate-700 border border-white/10 dark:border-white/10 border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Groups & Cards */}
        <div className="space-y-12">
          {filteredCategories.map((catGroup) => (
            <div key={catGroup.category} className="space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="h-px flex-1 bg-white/10 dark:bg-white/10 bg-slate-200"></span>
                <h3 className="text-sm font-mono uppercase tracking-wider text-neon-cyan font-bold px-2">
                  {t.categories[catGroup.category]}
                </h3>
                <span className="h-px flex-1 bg-white/10 dark:bg-white/10 bg-slate-200"></span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {catGroup.items.map((skill, idx) => {
                  const Icon = iconMap[skill.icon] || Cpu;
                  return (
                    <div
                      key={idx}
                      className="group p-5 rounded-2xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200 hover:border-neon-blue/50 transition-all duration-300 hover:shadow-glow-blue flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="p-3 rounded-xl bg-neon-blue/10 dark:bg-neon-blue/10 bg-slate-100 text-neon-cyan group-hover:scale-110 transition-transform">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-neon-purple border border-white/10 dark:border-white/10 border-slate-200">
                            {skill.tag}
                          </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold text-white dark:text-white text-slate-900 group-hover:text-neon-cyan transition-colors">
                          {skill.name}
                        </h4>

                        <p className="mt-2 text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-600 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>

                      {/* Proficiency Indicator Bar */}
                      <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/10 border-slate-100">
                        <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                          <span className="text-slate-400 dark:text-slate-400 text-slate-500">Proficiency</span>
                          <span className="text-neon-cyan font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/10 dark:bg-white/10 bg-slate-200 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan transition-all duration-1000 group-hover:from-neon-cyan group-hover:to-neon-purple"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
