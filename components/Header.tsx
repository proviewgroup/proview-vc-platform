
import React from 'react';
import { Logo } from './Logo.tsx';
import { Language, Translation } from '../types.ts';

interface HeaderProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  onGetStarted: () => void;
  t: Translation;
}

export const Header: React.FC<HeaderProps> = ({ lang, onLangChange, onGetStarted, t }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#strategy" onClick={(e) => scrollToSection(e, 'strategy')} className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-500">{t.nav.strategy}</a>
          <a href="#platform" onClick={(e) => scrollToSection(e, 'platform')} className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-500">{t.nav.platform}</a>
          <a href="#venture" onClick={(e) => scrollToSection(e, 'venture')} className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-500">{t.nav.venture}</a>
          <a href="#insights" onClick={(e) => scrollToSection(e, 'insights')} className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-500">{t.nav.insights}</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-500 underline decoration-emerald-500/50 decoration-2 underline-offset-4">{t.nav.about}</a>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onLangChange(lang === 'en' ? 'vi' : 'en')}
            className="flex h-8 w-12 items-center justify-center rounded-full border border-emerald-500/20 text-[10px] font-black uppercase text-emerald-500 transition-all hover:bg-emerald-500 hover:text-white"
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>
          <button 
            onClick={onGetStarted}
            className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-600 active:scale-95"
          >
            {t.nav.getStarted}
          </button>
        </div>
      </div>
    </header>
  );
};
