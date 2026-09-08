import { STATS } from '../data/gymData';
import { ShieldCheck, Wind, Calendar, Zap } from 'lucide-react';

const icons = [ShieldCheck, Wind, Calendar, Zap];

export default function Statistics() {
  return (
    <section id="statistics" className="py-12 bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                id={`stat-${idx}`}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col items-center text-center justify-center hover:border-neutral-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-500 mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold uppercase tracking-wider text-rose-400 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400">
                  {stat.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
