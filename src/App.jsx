import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useLanguage } from './context/LanguageContext';

function App() {
  const { lang, isRtl } = useLanguage();

  return (
    <div className={`min-h-screen bg-[#0B0F17] dark:bg-[#0B0F17] bg-[#F8FAFC] text-slate-100 dark:text-slate-100 text-slate-900 transition-colors duration-300 ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      {/* Sticky Glass Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
