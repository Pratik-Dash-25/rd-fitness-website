import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Wind, Heart, Sparkles, MapPin, Award } from 'lucide-react';
import RdFitnessLogo from './RdFitnessLogo';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-24 sm:pt-28 pb-16 flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Background with gym imagery and gradient overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="RD Fitness Gym Floor"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 scale-105 transform"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent" />
        {/* Subtle fiery glow accent */}
        <div className="absolute -top-40 right-0 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Main Copy & CTAs */}
          <div className="lg:col-span-8">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-sm">
              <RdFitnessLogo className="w-5 h-5 shrink-0" />
              <span className="tracking-wide uppercase">Jaraka's Premier Fitness Destination • NH 16</span>
            </div>

            {/* Main Title */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white leading-none mb-6">
              Forge Your Strength. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-red-500 to-amber-500">
                Transform Your Life.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl font-normal">
              Welcome to <strong className="text-white font-semibold">RD FITNESS</strong> at SR Market Complex, Jaraka. Experience world-class strength machines, high-capacity air conditioning, expert guidance by <strong className="text-white font-semibold">Coach Debabrata Rath</strong>, and <strong className="text-white font-semibold">zero admission fee</strong>.
            </p>

            {/* Feature Highlight Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-10 text-xs sm:text-sm font-medium">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>₹0 Admission Fee</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <Wind className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% Fully AC</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Female-Friendly</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-200">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>SR Market, NH 16</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                id="hero-whatsapp-btn"
                href={createWhatsAppUrl('Hello RD Fitness! I want to inquire about gym membership and current joining offers.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-base uppercase tracking-wider shadow-xl shadow-rose-950/60 hover:shadow-rose-600/40 transition-all hover:scale-[1.02] group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Join Now on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                id="hero-call-btn"
                href={GYM_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-600 text-neutral-100 font-semibold text-base transition-all shadow-md"
              >
                <Phone className="w-5 h-5 text-rose-500" />
                <span>Call: {GYM_DETAILS.phoneFormatted}</span>
              </a>

              <a
                id="hero-view-plans-link"
                href="#pricing"
                className="inline-flex items-center justify-center px-4 py-4 text-sm font-medium text-neutral-400 hover:text-white transition-colors underline underline-offset-4"
              >
                View Plans (from ₹100)
              </a>
            </div>

            {/* Quick value banner */}
            <div className="pt-6 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Transparent Pricing: ₹100 Day • ₹1,000/Mo • ₹6,000/Year (₹500/Mo)</span>
              </div>
              <div className="text-neutral-400">
                Mon-Sat: <span className="text-neutral-200">6–11 AM & 4–9 PM</span> | Sun: <span className="text-neutral-200">6–10 AM</span>
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
