
export type Language = 'en' | 'vi';

export interface Translation {
  nav: {
    strategy: string;
    platform: string;
    venture: string;
    insights: string;
    about: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    headline: string;
    subheadline: string;
    cta: string;
    secondaryCta: string;
  };
  thesis: {
    title: string;
    subtitle: string;
    reduction: string;
    metric: string;
    moatTitle: string;
    moatDesc: string;
    scaleTitle: string;
    scaleDesc: string;
  };
  about: {
    title: string;
    problemTitle: string;
    problemDesc: string;
    solutionTitle: string;
    pillars: {
      consulting: { title: string; desc: string };
      software: { title: string; desc: string };
      capital: { title: string; desc: string };
    };
    softwareFeatures: string[];
    teamTitle: string;
    founders: {
      ceo: { name: string; role: string; bio: string; image: string };
      coo: { name: string; role: string; bio: string; image: string };
    };
  };
  form: {
    title: string;
    name: string;
    company: string;
    position: string;
    email: string;
    phone: string;
    country: string;
    language: string;
    needs: string;
    budget: string;
    timeline: string;
    submit: string;
    required: string;
    success: string;
  };
  tech: {
    title: string;
    badge: string;
    googleCloud: string;
    vertexAI: string;
    scalable: string;
  };
  footer: {
    products: string;
    company: string;
    contact: string;
    slogan: string;
  };
}

export interface AppState {
  lang: Language;
  setLang: (lang: Language) => void;
}
