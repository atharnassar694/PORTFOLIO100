import React, { useState } from 'react';
import { 
  Mail, Send, Copy, Check, MapPin, 
  ExternalLink, Sparkles, MessageSquare, AlertCircle 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { portfolioData } from '../data/portfolioData';

// Clean SVG Brand Icons for LinkedIn & GitHub
const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 10.74v-8.37H5.06v8.37h2.8z" />
  </svg>
);

const GitHubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const Contact = () => {
  const { lang, isRtl } = useLanguage();
  const t = portfolioData[lang].contact;
  const isEn = lang === 'en';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [copied, setCopied] = useState(false);

  const emailAddress = "athar.nassar@nu.edu.eg";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    // Simulate high-tech network transmission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0B0F17] dark:bg-[#0B0F17] bg-white transition-colors">
      
      {/* Decorative Neon Spheres */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-neon-blue/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-neon-purple/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-neon-cyan bg-neon-cyan/10 border border-neon-cyan/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06. {t.sectionTitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white text-slate-900 tracking-tight">
            {t.subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Coordinates & Social Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200">
              <h3 className="text-xl font-bold text-white dark:text-white text-slate-900 mb-6">
                {t.directContact}
              </h3>

              {/* Email Card with Quick Copy */}
              <div className="p-4 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500">Official Academic Email</span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-neon-cyan hover:text-neon-blue transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">{t.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{t.copyEmail}</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="font-mono text-sm sm:text-base font-semibold text-white dark:text-white text-slate-900 break-all select-all">
                  {emailAddress}
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200">
                <div className="p-2.5 rounded-xl bg-neon-purple/15 text-neon-purple flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 dark:text-slate-400 text-slate-500">Location</div>
                  <div className="text-sm font-semibold text-white dark:text-white text-slate-900 mt-0.5">
                    {t.university}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/10 border-slate-200">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 text-slate-500 mb-3">
                  {isEn ? 'Professional Portals' : 'الملفات المهنية'}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-neon-blue/15 hover:border-neon-blue border border-white/10 dark:border-white/10 border-slate-200 text-slate-200 dark:text-slate-200 text-slate-800 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 text-sm font-semibold">
                      <LinkedInIcon className="w-4 h-4 text-neon-cyan" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-neon-cyan transition-colors" />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-100 hover:bg-neon-purple/15 hover:border-neon-purple border border-white/10 dark:border-white/10 border-slate-200 text-slate-200 dark:text-slate-200 text-slate-800 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 text-sm font-semibold">
                      <GitHubIcon className="w-4 h-4 text-neon-purple" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-neon-purple transition-colors" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card-dark dark:glass-card-dark bg-white dark:bg-[#161B22] border border-white/10 dark:border-white/10 border-slate-200 shadow-xl">
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 text-slate-700 mb-1.5">
                      {t.form.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={isEn ? "e.g. Alex Morgan" : "مثال: أحمد محمد"}
                      className="w-full px-4 py-3 rounded-xl bg-black/30 dark:bg-black/30 bg-slate-50 border border-white/10 dark:border-white/10 border-slate-300 text-white dark:text-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan transition-colors text-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 text-slate-700 mb-1.5">
                      {t.form.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/30 dark:bg-black/30 bg-slate-50 border border-white/10 dark:border-white/10 border-slate-300 text-white dark:text-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 text-slate-700 mb-1.5">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={isEn ? "Embedded Systems Collaboration / Data Engineering" : "مشروع نظم مدمجة / تدريب هندسي"}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 dark:bg-black/30 bg-slate-50 border border-white/10 dark:border-white/10 border-slate-300 text-white dark:text-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan transition-colors text-sm"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-mono font-medium text-slate-300 dark:text-slate-300 text-slate-700 mb-1.5">
                    {t.form.message} *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder={isEn ? "Write your inquiry or project details here..." : "اكتب تفاصيل استفسارك أو فكرة المشروع هنا..."}
                    className="w-full px-4 py-3 rounded-xl bg-black/30 dark:bg-black/30 bg-slate-50 border border-white/10 dark:border-white/10 border-slate-300 text-white dark:text-white text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-neon-cyan transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{t.form.success}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-medium flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{t.form.error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-blue transition-all duration-300 shadow-glow-blue disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t.form.sending}</span>
                    </>
                  ) : (
                    <>
                      <Send className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      <span>{t.form.send}</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
