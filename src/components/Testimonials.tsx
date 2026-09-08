import { TESTIMONIALS } from '../data/gymData';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-neutral-900/40 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5 text-rose-500" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Loved By Lifters Across Jaraka & Jajpur
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Real feedback from our members training on NH 16. Hear about their experiences with our coach, equipment, and welcoming atmosphere.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="p-7 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* Rating stars & date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500">{t.date}</span>
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {t.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold uppercase text-white tracking-wide">
                      {t.name}
                    </h4>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Member</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
