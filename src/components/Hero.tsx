import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { Phone, ArrowRight, ShieldCheck, Wind, Heart, Sparkles, MapPin, Award } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import RdFitnessLogo from './RdFitnessLogo';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[auto] sm:min-h-screen pt-20 sm:pt-28 pb-10 sm:pb-16 flex items-center justify-center overflow-hidden bg-neutral-950 w-full max-w-full">
      {/* Background with gym imagery and gradient overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="RD Fitness Gym Floor"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
        {/* Subtle fiery glow accent */}
        <div className="absolute -top-40 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 sm:w-96 h-80 sm:h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Main Copy & CTAs */}
          <div className="lg:col-span-8">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 backdrop-blur-sm max-w-full">
              <RdFitnessLogo className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="tracking-wide uppercase truncate sm:whitespace-normal">Jaraka's Premier Fitness • NH 16</span>
            </div>

            {/* Main Title: Compact on mobile, grand on desktop */}
            <h1 className="font-display text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white leading-tight mb-4 sm:mb-6">
              <span className="sm:hidden block text-rose-500 text-base font-semibold tracking-widest mb-1">RD FITNESS</span>
              <span className="hidden sm:inline">Forge Your Strength. <br /></span>
              <span className="sm:hidden">Premium Fitness. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-amber-500">
                <span className="hidden sm:inline">Transform Your Life.</span>
                <span className="sm:hidden">Affordable Membership.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl font-normal">
              <span className="sm:hidden">
                Fully air-conditioned gym with world-class equipment & expert coaching by <strong className="text-white font-semibold">Debabrata Rath</strong> at SR Market Complex. <strong className="text-white font-semibold">₹0 Admission Fee.</strong>
              </span>
              <span className="hidden sm:inline">
                Welcome to <strong className="text-white font-semibold">RD FITNESS</strong> at SR Market Complex, Jaraka. Experience world-class strength machines, high-capacity air conditioning, expert guidance by <strong className="text-white font-semibold">Coach Debabrata Rath</strong>, and <strong className="text-white font-semibold">zero admission fee</strong>.
              </span>
            </p>

            {/* Feature Highlight Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 mb-6 sm:mb-10 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">₹0 Admission Fee</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <Wind className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="truncate">100% Fully AC</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span className="truncate">Female-Friendly</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="truncate">NH 16, Jaraka</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-12">
              <a
                id="hero-whatsapp-btn"
                href={createWhatsAppUrl('Hello RD Fitness! I want to inquire about gym membership and current joining offers.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-xl shadow-rose-950/60 hover:shadow-rose-600/40 transition-all hover:scale-[1.02] group"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Join Now on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  id="hero-call-btn"
                  href={GYM_DETAILS.phoneTel}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-neutral-100 font-semibold text-xs sm:text-base transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-rose-500" />
                  <span>Call: {GYM_DETAILS.phone}</span>
                </a>

                <a
                  id="hero-view-plans-link"
                  href="#pricing"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center px-3 sm:px-4 py-3 sm:py-4 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/60 sm:bg-transparent rounded-xl sm:rounded-none border border-neutral-800 sm:border-0 transition-colors sm:underline sm:underline-offset-4"
                >
                  Plans (from ₹100)
                </a>
              </div>
            </div>

            {/* Compact Official Training Seal (Mobile & Tablet) */}
            <div className="lg:hidden flex flex-col items-center justify-center mb-5 sm:mb-6">
              <div className="relative group w-full max-w-[280px] sm:max-w-xs">
                {/* Outer subtle glowing atmosphere */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-rose-600/25 to-red-500/10 blur-lg pointer-events-none" />
                
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-neutral-900/70 border border-neutral-800/90 backdrop-blur-md shadow-xl flex flex-col items-center text-center">
                  <RdFitnessLogo className="w-20 h-20 sm:w-24 sm:h-24 filter drop-shadow-xl transition-transform duration-300 group-hover:scale-105" showGlow />
                  
                  <div className="mt-2.5 space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-neutral-800/90 border border-neutral-700 text-neutral-200 text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
                      <Award className="w-3 h-3 text-rose-500 shrink-0" />
                      <span>Official Training Seal</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-neutral-400 pt-0.5 text-center leading-tight">
                      Debabrata Rath Mentorship • Jaraka, NH 16
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick value banner */}
            <div className="pt-4 sm:pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>₹100 Day • ₹1,000/Mo • ₹2,400/3Mo • ₹4,000/6Mo • ₹6,000/Yr</span>
              </div>
              <div className="text-neutral-400">
                Mon-Sat: <span className="text-neutral-200">6–11 AM & 4–9 PM</span> | Sun: <span className="text-rose-400 font-medium">CLOSED</span>
              </div>
            </div>
          </div>

          {/* Dedicated Logo Showcase Badge (Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer pulsing atmospheric rings */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose-600/30 to-red-500/10 blur-xl group-hover:blur-2xl transition-all duration-500" />
              
              <div className="relative p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800/90 backdrop-blur-md shadow-2xl flex flex-col items-center text-center">
                <RdFitnessLogo className="w-56 h-56 xl:w-64 xl:h-64 filter drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" showGlow />
                
                <div className="mt-5 space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800/80 border border-neutral-700 text-neutral-200 text-xs font-semibold tracking-wider uppercase">
                    <Award className="w-3.5 h-3.5 text-rose-500" />
                    <span>Official Training Seal</span>
                  </div>
                  <p className="text-xs text-neutral-400 pt-1">
                    Debabrata Rath Mentorship • Jaraka, NH 16
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
