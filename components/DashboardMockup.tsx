
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', val: 4000 },
  { name: 'Feb', val: 3000 },
  { name: 'Mar', val: 5000 },
  { name: 'Apr', val: 8000 },
  { name: 'May', val: 12000 },
  { name: 'Jun', val: 18000 },
];

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-500/10 bg-slate-900/50 p-6 emerald-glow">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Startup Alpha OS</h3>
          <p className="text-xs text-slate-400">Real-time Growth & Efficiency Metrics</p>
        </div>
        <div className="flex gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live Execution</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: 'AI Optimization', val: '+42%', color: 'text-emerald-500' },
          { label: 'Burn Rate', val: '-18%', color: 'text-rose-500' },
          { label: 'Scale Factor', val: '8.4x', color: 'text-blue-500' },
        ].map((item, idx) => (
          <div key={idx} className="rounded-lg bg-slate-800/50 p-3">
            <p className="text-[10px] text-slate-500 uppercase">{item.label}</p>
            <p className={`text-xl font-bold ${item.color}`}>{item.val}</p>
          </div>
        ))}
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #10b981', borderRadius: '8px' }}
              itemStyle={{ color: '#10b981' }}
            />
            <Area type="monotone" dataKey="val" stroke="#10b981" fillOpacity={1} fill="url(#colorVal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 border-t border-slate-800 pt-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-[10px] font-bold">AI</div>
          <p className="text-xs text-slate-300 italic">"Strategy: Current trajectory suggests Series B readiness in 4.2 months. Suggesting burn-rate optimization on Marketing cloud..."</p>
        </div>
      </div>
    </div>
  );
};
