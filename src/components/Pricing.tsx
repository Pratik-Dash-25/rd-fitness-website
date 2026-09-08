import { PLANS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { Check, MessageCircle, ShieldCheck, Sparkles } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Honest & Transparent Pricing</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white mb-4">
            Memberships Tailored To Your Goals
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            No hidden admission fees. No sudden price surprises. Choose a plan that matches your commitment level and join on WhatsApp in seconds.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-semibold">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Zero Admission Fee Guarantee on All Plans</span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 items-stretch">
          {PLANS.map((plan) => {
            const isHighlight = plan.popular || plan.bestValue;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 ${
                  plan.bestValue
                    ? 'bg-gradient-to-b from-rose-950/40 via-neutral-900 to-neutral-950 border-2 border-rose-500 shadow-xl shadow-rose-950/40 lg:-translate-y-2'
                    : plan.popular
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-neutral-700 shadow-lg lg:-translate-y-1'
                    : 'bg-neutral-900/50 border border-neutral-800'
                } p-6`}
              >
                {/* Badge if present */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md ${
                        plan.bestValue
                          ? 'bg-rose-600 text-white shadow-rose-900/50'
                          : 'bg-neutral-800 text-amber-300 border border-amber-400/30'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-center pt-2 pb-4 border-b border-neutral-800/80">
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400">{plan.duration}</p>

                    <div className="mt-4 flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-semibold text-rose-500">₹</span>
                      <span className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
                        {plan.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    {plan.originalPrice && (
                      <div className="text-xs text-neutral-500 line-through mt-0.5">
                        Regular: ₹{plan.originalPrice.toLocaleString('en-IN')}
                      </div>
                    )}

                    <div className="mt-1 text-xs font-medium text-rose-400/90">
                      {plan.periodDescription}
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="py-6 space-y-2.5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action CTA */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <a
                    id={`plan-join-btn-${plan.id}`}
                    href={createWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-all ${
                      plan.bestValue
                        ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/60'
                        : isHighlight
                        ? 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Join on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Note */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2">
            No Long-Term Traps • Pure Performance
          </h4>
          <p className="text-xs text-neutral-400 leading-relaxed">
            All memberships at RD FITNESS include unrestricted access to morning and evening training hours, clean air-conditioned gym floor, locker use, and ongoing guidance from Head Coach Debabrata Rath. Need a custom corporate or student pass? Message us on WhatsApp or visit our NH 16 facility.
          </p>
        </div>
      </div>
    </section>
  );
}
