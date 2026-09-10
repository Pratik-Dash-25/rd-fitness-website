import { GYM_DETAILS } from '../data/gymData';
import { ShieldCheck, Wind, HeartHandshake, Dumbbell, UserCheck, Apple, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, typeof ShieldCheck> = {
  ShieldCheck,
  Wind,
  HeartHandshake,
  Dumbbell,
  UserCheck,
  Apple,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-10 sm:py-20 lg:py-24 bg-neutral-900/60 border-y border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose RD Fitness
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            The Gold Standard Of Fitness In Jaraka
          </h2>
          <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
            Built on a philosophy of pure performance, safety, and honest value. We removed admission fees, installed heavy-duty air conditioning, and brought certified coaching directly to NH 16.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {GYM_DETAILS.highlights.map((item) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            return (
              <div
                key={item.title}
                id={`feature-${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="p-5 sm:p-7 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-rose-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-rose-500 group-hover:bg-rose-600 group-hover:text-white transition-colors mb-3 sm:mb-5">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="font-display text-lg sm:text-2xl font-semibold uppercase text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Trainer & Admission guarantee */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-white font-bold text-lg">
              ₹0 Admission Fee Guaranteed
            </div>
            <p className="text-sm text-neutral-400 max-w-xl">
              Pay solely for your chosen training duration. No setup fees, no administrative deductions, no hidden charges.
            </p>
          </div>
          <a
            id="why-us-pricing-btn"
            href="#pricing"
            className="shrink-0 px-6 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-100 text-sm font-semibold border border-neutral-700 transition-colors"
          >
            Check Transparent Pricing →
          </a>
        </div>
      </div>
    </section>
  );
}
