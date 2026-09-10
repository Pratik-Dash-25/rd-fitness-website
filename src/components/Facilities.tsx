import { FACILITIES } from '../data/gymData';
import { Wind, Dumbbell, ShieldCheck, Activity } from 'lucide-react';

export default function Facilities() {
  return (
    <section id="facilities" className="py-10 sm:py-20 lg:py-28 bg-neutral-900/50 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Premium Infrastructure
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            World-Class Facilities In The Heart Of Jaraka
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed">
            Step onto a gym floor meticulously calibrated for hygiene, biomechanical efficiency, and absolute comfort. Located at the SR Market Complex on NH 16.
          </p>
        </div>

        {/* Feature Banner: 100% Air Conditioned */}
        <div className="mb-8 sm:mb-14 p-4 sm:p-8 rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                <Wind className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-1">
                  100% Fully Air-Conditioned Training Arena
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
                  High-capacity industrial cooling units maintain optimal indoor climate and moisture balance. Train aggressively without the suffocating heat or humidity of conventional gyms.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-semibold text-neutral-300">
              <span className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] sm:text-xs">
                Continuous Air Exchange
              </span>
              <span className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] sm:text-xs">
                Odor & Dust Filtered
              </span>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              id={`facility-${facility.id}`}
              className="rounded-2xl bg-neutral-950 border border-neutral-800/80 overflow-hidden hover:border-neutral-700 transition-all flex flex-col group"
            >
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-900/90 backdrop-blur-md border border-neutral-800 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-rose-400">
                  {facility.category}
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-1.5 sm:mb-2 group-hover:text-rose-400 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-3 sm:mb-4">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900 flex items-center gap-2 text-xs font-medium text-rose-400">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>{facility.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
