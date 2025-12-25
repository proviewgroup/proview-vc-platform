
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
        <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
      </svg>
    </div>
    <span className="font-heading text-xl font-bold tracking-tight text-white">
      PROVIEW <span className="text-emerald-500">VC</span>
    </span>
  </div>
);
