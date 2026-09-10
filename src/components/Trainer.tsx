import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { Phone, Award, ShieldCheck, Dumbbell, Flame, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import RdFitnessLogo from './RdFitnessLogo';

export default function Trainer() {
  return (
    <section id="trainer" className="py-10 sm:py-20 lg:py-28 bg-neutral-900/50 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Trainer Image & Visual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 max-w-md mx-auto">
              <img
                src={GYM_DETAILS.coachImage || '/trainer-debabrata-rath.jpg'}
                alt="Head Coach Debabrata Rath"
                className="w-full h-[380px] sm:h-[500px] object-cover object-top filter brightness-95"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />

              {/* Floating Coach Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center gap-3">
                  <RdFitnessLogo className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white tracking-wide">
                      {GYM_DETAILS.headCoach}
                    </h3>
                    <p className="text-xs text-rose-400 font-semibold uppercase tracking-wider">
                      {GYM_DETAILS.coachRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle glow */}
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Coach Bio & Coaching Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-rose-500" />
              <span>Head Coach & Mentor</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4 sm:mb-6">
              Train Directly Under <br />
              <span className="text-rose-500">{GYM_DETAILS.headCoach}</span>
            </h2>

            <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed mb-4 sm:mb-6">
              {GYM_DETAILS.coachBio}
            </p>

            <p className="hidden sm:block text-sm text-neutral-400 leading-relaxed mb-8">
              Whether you are lifting for the first time in your life or breaking through an advanced strength plateau, Coach Debabrata provides real-time biomechanical cues, customized rep-ranges, and safe progress tracking.
            </p>

            {/* Coaching Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white uppercase">Posture & Form Correction</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400">Strict form guidance on squats, deadlifts & presses.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <Flame className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white uppercase">Personalized Diet Charts</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400">Practical meal plans tailored around wholesome regional foods.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <Dumbbell className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white uppercase">Progressive Overload</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400">Strategic weights increase for measurable gains.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white uppercase">Female-Friendly Guidance</div>
                  <div className="text-[11px] sm:text-xs text-neutral-400">Safe, respectful, and supportive environment for women.</div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                id="trainer-whatsapp-btn"
                href={createWhatsAppUrl(`Hi Coach Debabrata! I want to consult with you regarding workout guidance and joining RD Fitness.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg shadow-rose-950/60"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Message Coach Debabrata</span>
              </a>

              <a
                id="trainer-call-btn"
                href={GYM_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                <span>Call: {GYM_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
