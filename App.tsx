
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header.tsx';
import { translations } from './translations.ts';
import { Language } from './types.ts';
import { DashboardMockup } from './components/DashboardMockup.tsx';
import { Logo } from './components/Logo.tsx';
import { ChatWidget } from './components/ChatWidget.tsx';
import { ContactForm } from './components/ContactForm.tsx';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en'); 
  const [isFormOpen, setIsFormOpen] = useState(false);
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-emerald-500/30">
      <Header lang={lang} onLangChange={setLang} onGetStarted={() => setIsFormOpen(true)} t={t} />

      <main>
        {/* Hero Section */}
        <section id="platform" className="relative overflow-hidden px-6 pt-24 pb-32">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold tracking-wider text-emerald-500 uppercase">{t.hero.badge}</span>
                </div>
                
                <h1 className="font-heading text-5xl font-extrabold leading-tight text-white md:text-7xl">
                  {t.hero.headline}
                </h1>
                <p className="mt-6 text-xl text-slate-400 max-w-xl">
                  {t.hero.subheadline}
                </p>
                
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="rounded-full bg-emerald-500 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-emerald-500/20 transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95"
                  >
                    {t.hero.cta}
                  </button>
                  <button className="rounded-full border border-slate-700 bg-slate-800/50 px-10 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-slate-700 hover:border-emerald-500/30">
                    {t.hero.secondaryCta}
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <DashboardMockup />
                <div className="absolute -top-10 -right-10 hidden lg:block">
                  <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/80 p-4 backdrop-blur-xl shadow-2xl">
                    <p className="text-[10px] font-bold uppercase text-slate-500">Capital Efficiency</p>
                    <p className="text-2xl font-bold text-emerald-500">94.2%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Thesis Section */}
        <section id="strategy" className="bg-slate-900/30 py-24 px-6 border-y border-white/5">
          <div className="mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl font-bold text-white">{t.thesis.title}</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
                {t.thesis.subtitle}
              </p>
            </motion.div>

            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: t.thesis.reduction,
                  val: t.thesis.metric,
                  desc: lang === 'vi' ? "Sử dụng mô hình dự đoán AI để giảm thiểu rủi ro." : "Utilizing AI-driven predictive modeling for risk mitigation.",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: t.thesis.moatTitle,
                  val: "Data Loop",
                  desc: t.thesis.moatDesc,
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: t.thesis.scaleTitle,
                  val: "∞ Scale",
                  desc: t.thesis.scaleDesc,
                  icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group rounded-3xl border border-white/5 bg-slate-900/50 p-10 text-left transition-all hover:border-emerald-500/30 hover:bg-slate-800/50"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 group-hover:scale-110 transition-transform">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-2xl font-black text-emerald-500">{item.val}</p>
                  <p className="mt-4 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-32 px-6 overflow-hidden bg-slate-950 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            {/* Mission Statement */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-32"
            >
               <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">{t.about.title}</span>
               <h2 className="mt-8 font-heading text-4xl font-extrabold text-white leading-tight md:text-6xl max-w-5xl mx-auto">
                 {lang === 'en' ? 'Bridging the Execution Gap with the World’s First AI-First Operating System.' : 'Xóa bỏ "Khoảng cách thực thi" bằng Hệ điều hành ưu tiên AI đầu tiên trên thế giới.'}
               </h2>
               <p className="mt-8 text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                 {lang === 'en' 
                    ? "We don't just advise; we build the infrastructure for global dominance. Integrating high-level strategy, autonomous execution, and institutional capital."
                    : "Chúng tôi không chỉ tư vấn; chúng tôi xây dựng hạ tầng để thống trị toàn cầu. Tích hợp chiến lược cao cấp, thực thi tự chủ và vốn định chế."}
               </p>
            </motion.div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-32 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="font-heading text-3xl font-bold text-white mb-6 underline decoration-emerald-500/30 decoration-4 underline-offset-8">
                  {t.about.problemTitle}
                </h3>
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  {t.about.problemDesc}
                </p>
                <div className="space-y-4">
                  {(lang === 'en' 
                    ? ["Disconnected legacy tools", "Static dust-gathering PDFs", "Lack of operational transparency"]
                    : ["Công cụ di sản rời rạc", "File PDF tĩnh bám bụi", "Thiếu minh bạch vận hành"]
                  ).map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-rose-400">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-10 rounded-[32px] border-emerald-500/20 relative overflow-hidden"
              >
                <div className="absolute -right-20 -bottom-20 h-64 w-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
                <h3 className="font-heading text-3xl font-bold text-emerald-500 mb-8">{t.about.solutionTitle}</h3>
                <div className="space-y-8">
                  {[t.about.pillars.consulting, t.about.pillars.software, t.about.pillars.capital].map((p, i) => (
                    <div key={i} className="relative z-10">
                      <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Software Capabilities Grid */}
            <div className="mt-24 rounded-[40px] bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent p-1">
              <div className="bg-slate-950 rounded-[39px] p-10 lg:p-20 border border-white/5 shadow-2xl">
                <div className="text-center mb-16">
                  <h3 className="font-heading text-4xl font-bold text-white mb-4">Autonomous Enterprise OS</h3>
                  <p className="text-slate-400 uppercase tracking-widest text-xs font-bold italic">Planning to Action • 100% Zero-Touch Execution</p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {t.about.softwareFeatures.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/40 border border-white/5 transition-all hover:bg-slate-900/80 hover:border-emerald-500/30"
                    >
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 text-emerald-500">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-slate-300 font-semibold leading-snug">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Business Model Section */}
            <div id="insights" className="mt-32 text-center py-20 border-y border-white/5 scroll-mt-20">
                <h3 className="font-heading text-3xl font-bold text-white mb-12">{lang === 'en' ? 'Our Diversified Business Model' : 'Mô hình Kinh doanh Đa dạng'}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                  {[
                    { label: lang === 'en' ? 'Strategic Consulting' : 'Tư vấn Chiến lược', type: 'High-Ticket Advisory' },
                    { label: lang === 'en' ? 'SaaS Subscription' : 'Thuê bao SaaS', type: 'Recurring Revenue' },
                    { label: lang === 'en' ? 'Venture Carry' : 'Lợi nhuận Đầu tư', type: 'Equity & Success Fees' }
                  ].map((m, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-white/5">
                      <p className="text-emerald-500 font-black text-xl mb-2">{m.label}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{m.type}</p>
                    </div>
                  ))}
                </div>
            </div>

            {/* Founder Team */}
            <div id="venture" className="mt-32 scroll-mt-20">
              <h2 className="text-center font-heading text-4xl font-bold text-white mb-16">{t.about.teamTitle}</h2>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                {[t.about.founders.ceo, t.about.founders.coo].map((founder, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="group relative overflow-hidden rounded-[40px] bg-slate-900/40 border border-white/5 p-8 md:p-12 text-left backdrop-blur-sm transition-all hover:bg-slate-900/60 hover:border-emerald-500/30"
                  >
                    <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                      <div className="relative h-48 w-48 flex-shrink-0">
                        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-2xl group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-950 bg-slate-800 shadow-2xl">
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="h-full w-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">{founder.name}</h4>
                        <div className="mt-3 inline-block rounded-full bg-emerald-500/10 px-4 py-1 border border-emerald-500/20">
                          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-500">{founder.role}</p>
                        </div>
                        <p className="mt-6 text-sm text-slate-300 leading-relaxed font-medium">
                          {founder.bio}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 mb-4">{t.tech.badge}</span>
              <h2 className="font-heading text-4xl font-bold text-white mb-16">{t.tech.title}</h2>
              
              <div className="grid grid-cols-2 gap-12 md:grid-cols-4 items-center">
                <div className="flex flex-col items-center gap-4">
                  <span className="text-xl font-bold text-white">{t.tech.googleCloud}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-lg font-bold text-slate-300">Vertex AI</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-lg font-bold text-slate-300">BigQuery</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-lg font-bold text-slate-300">K8s Cluster</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ChatWidget />
      
      <ContactForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
        t={t} 
      />

      <footer className="border-t border-white/5 bg-slate-950 py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <Logo className="mb-6 justify-center" />
          <p className="text-sm text-slate-500 max-w-md mx-auto">{t.footer.slogan}</p>
          <div className="mt-8 text-[10px] text-slate-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} PROVIEW VC. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
