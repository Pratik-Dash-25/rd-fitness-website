import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { MessageCircle, Phone, Award, ShieldCheck, Dumbbell, Flame, CheckCircle2 } from 'lucide-react';
import RdFitnessLogo from './RdFitnessLogo';

export default function Trainer() {
  return (
    <section id="trainer" className="py-20 sm:py-28 bg-neutral-900/50 border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Trainer Image & Visual Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=1000&q=85"
                alt="Head Coach Debabrata Rath"
                className="w-full h-[460px] sm:h-[500px] object-cover object-top filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

              {/* Floating Coach Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800">
                <div className="flex items-center gap-3">
                  <RdFitnessLogo className="w-12 h-12 shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase text-white tracking-wide">
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-rose-500" />
              <span>Head Coach & Mentor</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Train Directly Under <br />
              <span className="text-rose-500">{GYM_DETAILS.headCoach}</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-6">
              {GYM_DETAILS.coachBio}
            </p>

            <p className="text-sm text-neutral-400 leading-relaxed mb-8">
              Whether you are lifting for the first time in your life or breaking through an advanced strength plateau, Coach Debabrata provides real-time biomechanical cues, customized rep-ranges, and safe progress tracking.
            </p>

            {/* Coaching Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Posture & Injury Prevention</div>
                  <div className="text-xs text-neutral-400">Strict form correction on squats, deadlifts, and presses.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <Flame className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Sustainable Indian Diet Charts</div>
                  <div className="text-xs text-neutral-400">Practical food plans tailored around wholesome regional foods.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <Dumbbell className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Progressive Overload Tracking</div>
                  <div className="text-xs text-neutral-400">Strategic weights increase for continuous measurable results.</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-white uppercase">Female-Friendly Guidance</div>
                  <div className="text-xs text-neutral-400">Safe, respectful, and encouraging atmosphere for women.</div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                id="trainer-whatsapp-btn"
                href={createWhatsAppUrl(`Hi Coach Debabrata! I want to consult with you regarding workout guidance and joining RD Fitness.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-rose-950/60"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Message Coach Debabrata</span>
              </a>

              <a
                id="trainer-call-btn"
                href={GYM_DETAILS.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-neutral-200 font-semibold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-rose-500" />
                <span>Call Coach: {GYM_DETAILS.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
