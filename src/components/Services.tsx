import { SERVICES } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { Check, Dumbbell, Flame, Apple, Activity, Users, Award, MessageCircle } from 'lucide-react';

const iconMap: Record<string, typeof Dumbbell> = {
  Dumbbell,
  Flame,
  Apple,
  Activity,
  Users,
  Award,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
              Comprehensive Fitness Solutions
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
              Disciplines Engineered For Real Results
            </h2>
            <p className="text-base sm:text-lg text-neutral-400">
              Whether your goal is raw strength, aggressive fat loss, or sustainable lifelong agility, our structured programs are tailored to your starting point.
            </p>
          </div>
          <a
            id="services-inquire-all-btn"
            href={createWhatsAppUrl('Hi RD Fitness! I want to consult regarding which workout program fits my current body goals.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm border border-neutral-800 hover:border-neutral-700 transition-all shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-rose-500" />
            <span>Consult Coach Debabrata</span>
          </a>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Dumbbell;
            return (
              <div
                key={service.id}
                id={`service-${service.id}`}
                className="rounded-2xl bg-neutral-900/50 border border-neutral-800/80 overflow-hidden hover:border-rose-500/50 transition-all duration-300 flex flex-col group"
              >
                {/* Visual Header Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-2.5 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700 text-rose-500 shadow-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-3 group-hover:text-rose-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-neutral-800/60">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    id={`service-inquire-${service.id}`}
                    href={createWhatsAppUrl(`Hi RD Fitness! I am interested in your ${service.title} program in Jaraka.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-rose-500/30 text-xs font-semibold text-neutral-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Inquire About This Service</span>
                    <MessageCircle className="w-3.5 h-3.5 text-rose-500" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
