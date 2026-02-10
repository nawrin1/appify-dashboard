import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { DATA } from '../../../data/data';

const Kpi = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {DATA.kpis.map((kpi) => (
        <div 
          key={kpi.label} 
          className="group relative p-4 rounded-xl bg-white/[0.02] backdrop-blur-md border border-white/[0.08] shadow-2xl transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:-translate-y-1"
        >
          
          <div className={`absolute -right-2 -top-2 w-16 h-16 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full ${kpi.isPositive ? 'bg-emerald-500' : 'bg-rose-500'}`} />

          <div className="relative z-10">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.1em] mb-1">
              {kpi.label}
            </p>
            
            <div className="flex items-baseline justify-between mt-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {kpi.value}
              </h3>
              
              <div className={`flex items-center px-2 py-1 rounded-full text-[11px] font-bold tracking-wide ${
                kpi.isPositive 
                  ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20' 
                  : 'text-rose-400 bg-rose-500/10 border border-rose-500/20'
              }`}>
                {kpi.isPositive ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                {kpi.change}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5">
              <p className="text-slate-500 text-[8px] font-semibold uppercase tracking-widest">
                Compared to last month
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kpi;