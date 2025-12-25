
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
        <section id="hero" className="relative overflow-hidden px-6 pt-24 pb-32">
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

        {/* Strategy Section */}
        <section id="strategy" className="bg-slate-900/30 py-24 px-6 border-y border-white/5 scroll-mt-20">
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

        {/* AI Platform Section */}
        <section id="platform" className="py-24 px-6 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">{t.nav.platform}</span>
                <h2 className="mt-6 font-heading text-4xl font-extrabold text-white leading-tight">
                  {t.about.pillars.software.title}
                </h2>
                <p className="mt-6 text-lg text-slate-400">
                  {t.about.pillars.software.desc}
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.about.softwareFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                        <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-sm text-slate-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-emerald-500/10 blur-2xl rounded-[40px]"></div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
                  alt="AI OS Dashboard" 
                  className="relative rounded-3xl border border-white/10 shadow-2xl transition-transform hover:scale-[1.02] duration-500"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Venture Section */}
        <section id="venture" className="py-24 px-6 bg-slate-900/50 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">{t.nav.venture}</span>
              <h2 className="mt-6 font-heading text-4xl font-extrabold text-white">{t.about.pillars.capital.title}</h2>
              <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">{t.about.pillars.capital.desc}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Angel Network", desc: lang === 'vi' ? "Tiếp cận 500+ nhà đầu tư toàn cầu." : "Access to 500+ global individual investors.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { label: "Institutional Bridge", desc: lang === 'vi' ? "Kết nối trực tiếp với các quỹ VC hàng đầu." : "Direct connections with Top-tier VC funds.", icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" },
                { label: "Capital Strategy", desc: lang === 'vi' ? "Lộ trình gọi vốn và định giá chuyên nghiệp." : "Expert fundraising roadmaps and valuations.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { label: "Global Presence", desc: lang === 'vi' ? "Vận hành tại Silicon Valley & Đông Nam Á." : "Execution capability in Silicon Valley & SE Asia.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-3xl glass-panel border-white/5 hover:border-emerald-500/20 transition-all group"
                >
                  <div className="mb-4 text-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.label}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section (Tech Stack) */}
        <section id="insights" className="py-24 px-6 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex-1"
               >
                 <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-500">{t.tech.badge}</span>
                 <h2 className="mt-6 font-heading text-4xl font-extrabold text-white">{t.tech.title}</h2>
                 <p className="mt-6 text-lg text-slate-400">
                   {lang === 'vi' 
                    ? "Tận dụng hạ tầng AI tiên tiến nhất thế giới để đảm bảo độ trễ bằng 0 và độ chính xác tối đa cho các hoạt động của startup."
                    : "Leveraging the most advanced AI infrastructure in the world to ensure zero latency and maximum accuracy for startup operations."}
                 </p>
                 <div className="mt-10 space-y-6">
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-900 border border-white/5 group hover:border-emerald-500/20 transition-colors">
                       <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z"/></svg>
                       </div>
                       <div>
                          <h4 className="font-bold text-white">{t.tech.googleCloud}</h4>
                          <p className="text-xs text-slate-500">Tier 1 Data Centers & Security</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-6 p-6 rounded-2xl bg-slate-900 border border-white/5 group hover:border-emerald-500/20 transition-colors">
                       <div className="h-12 w-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                       </div>
                       <div>
                          <h4 className="font-bold text-white">{t.tech.vertexAI}</h4>
                          <p className="text-xs text-slate-500">Next-gen Model Garden Integration</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
               <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 grid grid-cols-2 gap-4"
               >
                  <div className="mt-12 space-y-4">
                    <div className="aspect-square rounded-3xl bg-slate-900 border border-emerald-500/20 flex flex-col items-center justify-center p-6">
                      <p className="text-3xl font-black text-emerald-500">100%</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-2">Autonomous Operations</p>
                    </div>
                    <div className="aspect-[4/5] rounded-3xl bg-emerald-500 flex flex-col items-center justify-center p-6 text-white shadow-xl shadow-emerald-500/10">
                      <p className="text-4xl font-black">24/7</p>
                      <p className="text-[10px] uppercase tracking-widest text-center mt-2 font-bold">AI Execution</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-[4/5] rounded-3xl bg-slate-900 border border-white/5 flex flex-col items-center justify-center p-6">
                      <p className="text-3xl font-black text-white">0.2s</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-2">Decision Latency</p>
                    </div>
                    <div className="aspect-square rounded-3xl bg-slate-800/50 flex flex-col items-center justify-center p-6 border border-white/5">
                      <p className="text-3xl font-black text-emerald-500">99.9%</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center mt-2">Data Accuracy</p>
                    </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-32 px-6 overflow-hidden bg-slate-950 scroll-mt-20">
          <div className="mx-auto max-w-7xl">
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
            </motion.div>

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

            {/* Founders Section */}
            <div className="mt-32">
              <motion.h3 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center font-heading text-3xl font-bold text-white mb-16"
              >
                {t.about.teamTitle}
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Founder 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-[40px] bg-slate-900 border border-white/5 p-8 transition-all hover:border-emerald-500/30"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
                      <img 
                        src={t.about.founders.ceo.image} 
                        alt={t.about.founders.ceo.name} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-white">{t.about.founders.ceo.name}</h4>
                    <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mt-1">{t.about.founders.ceo.role}</p>
                    <p className="mt-6 text-slate-400 italic leading-relaxed">
                      "{t.about.founders.ceo.bio}"
                    </p>
                    <div className="mt-8 flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Founder 2 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="group relative overflow-hidden rounded-[40px] bg-slate-900 border border-white/5 p-8 transition-all hover:border-emerald-500/30"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-8 h-48 w-48 overflow-hidden rounded-full border-4 border-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
                      <img 
                        src={t.about.founders.coo.image} 
                        alt={t.about.founders.coo.name} 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h4 className="text-2xl font-bold text-white">{t.about.founders.coo.name}</h4>
                    <p className="text-sm font-bold text-emerald-500 uppercase tracking-widest mt-1">{t.about.founders.coo.role}</p>
                    <p className="mt-6 text-slate-400 italic leading-relaxed">
                      "{t.about.founders.coo.bio}"
                    </p>
                    <div className="mt-8 flex gap-4">
                      <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
        <div className="mx-auto max-w-7xl flex flex-col items-center gap-10">
          <div className="text-center">
            <Logo className="mb-6 justify-center" />
            <p className="text-sm text-slate-500 max-w-md mx-auto">{t.footer.slogan}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl text-center md:text-left border-y border-white/5 py-10">
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">{lang === 'vi' ? 'Sản phẩm' : 'Products'}</h4>
                <ul className="text-sm text-slate-500 space-y-2">
                   <li className="hover:text-emerald-500 cursor-pointer transition-colors">AI OS Platform</li>
                   <li className="hover:text-emerald-500 cursor-pointer transition-colors">Venture Builder</li>
                   <li className="hover:text-emerald-500 cursor-pointer transition-colors">Strategic Advisory</li>
                </ul>
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">{lang === 'vi' ? 'Công ty' : 'Company'}</h4>
                <ul className="text-sm text-slate-500 space-y-2">
                   <li className="hover:text-emerald-500 cursor-pointer transition-colors">About Us</li>
                   <li className="hover:text-emerald-500 cursor-pointer transition-colors">Insights</li>
                   <li className="hover:text-emerald-500 cursor-pointer transition-colors">Team</li>
                </ul>
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">{lang === 'vi' ? 'Liên hệ' : 'Contact'}</h4>
                <div className="text-sm text-slate-500 space-y-2">
                   <p className="text-slate-300 font-medium">{lang === 'vi' ? 'Địa chỉ trụ sở chính:' : 'Headquarters:'}</p>
                   <p className="leading-relaxed">KPIBSC Building, Hà Nội, Việt Nam.</p>
                   <p className="pt-2">ceo@proviewvc.com</p>
                </div>
             </div>
          </div>

          <div className="text-[10px] text-slate-600 uppercase tracking-widest flex flex-col items-center gap-2">
            <span>&copy; {new Date().getFullYear()} PROVIEW VC. ALL RIGHTS RESERVED.</span>
            <span className="text-slate-800">SECURE DISPATCH PROTOCOL ENABLED</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
