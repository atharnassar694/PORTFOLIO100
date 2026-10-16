import React, { useState } from 'react';
import { 
  FolderGit2, Cpu, Wifi, Activity, Radio, Gauge, Network, 
  ExternalLink, ArrowUpRight, Sparkles, Layers 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const projectIconMap = {
  Cpu, Wifi, Activity, Radio, Gauge, Network
};

export const Projects = () => {
  const { lang, isRtl } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const t = portfolioData[lang].projects;
  const projects = portfolioData.projectsData;
  const isEn = lang === 'en';

  const filterTabs = [
    { id: 'all', label: t.filterAll },
    { id: 'embedded', label: t.filterEmbedded },
    { id: 'hardware', label: t.filterHardware },
    { id: 'network', label: t.filterNetwork },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0D1117] dark:bg-[#0D1117] bg-slate-50 transition-colors">
      
      {/* Decorative Lights */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>03. {t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            {t.subtitle}
          </h2>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-glow-blue scale-105'
                  : 'bg-white/5 dark:bg-white/5 bg-slate-200/80 hover:bg-white/10 dark:hover:bg-white/10 text-slate-300 dark:text-slate-300 text-slate-700 border border-white/10 dark:border-white/10 border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const Icon = projectIconMap[project.icon] || Cpu;
            const title = isEn ? project.titleEn : project.titleAr;
            const desc = isEn ? project.descEn : project.descAr;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group relative rounded-2xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200 hover:border-neon-cyan/50 transition-all duration-300 hover:shadow-glow-cyan flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Top Subtle Color Accent Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.gradient}`}></div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-neon-blue/10 dark:bg-neon-blue/10 bg-slate-100 text-neon-cyan group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-mono font-medium bg-white/5 dark:bg-white/5 bg-slate-100 text-neon-cyan border border-white/10 dark:border-white/10 border-slate-200">
                        {project.badge}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white text-slate-900 group-hover:text-neon-cyan transition-colors line-clamp-2">
                      {title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-400 dark:text-slate-400 text-slate-600 line-clamp-3 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Tags and CTA */}
                  <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 border-slate-100">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 dark:bg-white/5 bg-slate-100 text-slate-300 dark:text-slate-300 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] font-mono text-neon-blue">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-semibold text-neon-cyan group-hover:text-neon-blue transition-colors">
                      <span>{t.viewDetails}</span>
                      <ArrowUpRight className={`w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isRtl ? 'group-hover:-translate-x-0.5 rotate-90' : ''}`} />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Active Project Detailed Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
};
