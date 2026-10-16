import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X, Cpu, ChevronRight, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

export const Navbar = () => {
  const { lang, toggleLang, isRtl } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = portfolioData[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.about },
    { href: '#skills', label: t.skills },
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience },
    { href: '#achievements', label: t.achievements },
    { href: '#contact', label: t.contact },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F17]/85 dark:bg-[#0B0F17]/85 bg-white/85 backdrop-blur-md border-b border-white/10 dark:border-white/10 border-slate-200/80 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-neon-blue to-neon-purple p-0.5 shadow-glow-blue transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0B0F17] dark:bg-[#0B0F17] rounded-[10px] flex items-center justify-center">
              <Cpu className="w-5 h-5 text-neon-cyan group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-tight text-white dark:text-white text-slate-900 group-hover:text-neon-cyan transition-colors">
              {isRtl ? 'أثر نصار سليمان' : 'Athar Nassar'}
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-neon-blue">
              {isRtl ? 'هندسة الإلكترونيات والحاسبات' : 'ECE @ Nile University'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium rounded-lg text-slate-300 dark:text-slate-300 text-slate-700 hover:text-white dark:hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle, Language Toggle, and Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            title={lang === 'en' ? 'Switch to Arabic' : 'التحويل للإنجليزية'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border border-white/10 dark:border-white/10 border-slate-300 bg-white/5 hover:bg-white/10 text-slate-200 dark:text-slate-200 text-slate-800 transition-all hover:border-neon-blue"
          >
            <Globe className="w-3.5 h-3.5 text-neon-cyan" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-white/10 dark:border-white/10 border-slate-300 bg-white/5 hover:bg-white/10 text-slate-200 dark:text-slate-200 text-slate-800 transition-all hover:border-neon-purple hover:text-amber-400"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-90" />
            ) : (
              <Moon className="w-4 h-4 text-neon-purple transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Quick Contact Button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-semibold rounded-lg group bg-gradient-to-br from-neon-blue to-neon-purple group-hover:from-neon-blue group-hover:to-neon-purple hover:text-white text-white shadow-glow-blue"
          >
            <span className="relative px-3.5 py-1.5 transition-all ease-in duration-75 bg-[#0B0F17] rounded-[7px] group-hover:bg-opacity-0">
              {t.contact}
            </span>
          </a>
        </div>

        {/* Mobile Menu & Quick Controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Language Switcher (Mobile) */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded text-xs font-mono font-medium border border-white/15 bg-white/5 text-slate-200"
          >
            {lang === 'en' ? 'عر' : 'EN'}
          </button>

          {/* Theme Switcher (Mobile) */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded border border-white/15 bg-white/5 text-slate-200"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neon-purple" />}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 text-slate-300 border border-white/10"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-neon-cyan" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-card-dark dark:bg-[#0B0F17]/95 bg-white/95 border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 dark:text-slate-200 text-slate-800 bg-white/5 hover:bg-neon-blue/15 hover:text-neon-cyan transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className={`w-4 h-4 text-slate-500 ${isRtl ? 'rotate-180' : ''}`} />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
