import { useState, FormEvent } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { Phone, Instagram, Send, Sparkles, MapPin, Clock, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactCTA() {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('Muscle & Strength Gain');
  const [slot, setSlot] = useState('Morning Batch (6:00 AM – 11:00 AM)');
  const [notes, setNotes] = useState('');

  const goals = [
    'Muscle & Strength Gain',
    'Fat Loss & Body Transformation',
    'General Fitness & Conditioning',
    'Women’s Fitness & Toning',
    '1-Day Trial / Walk-in Pass',
    'Fee & Membership Inquiries',
  ];

  const slots = [
    'Morning Batch (6:00 AM – 11:00 AM)',
    'Evening Batch (4:00 PM – 9:00 PM)',
    'Flexible / Both Batches',
  ];

  const constructedMessage = `Hi RD Fitness! My name is ${name.trim() || '[Your Name]'}. I am interested in joining RD FITNESS Jaraka.
🎯 Primary Goal: ${goal}
⏰ Preferred Slot: ${slot}${notes.trim() ? `\n📝 Note: ${notes.trim()}` : ''}
Please share enrollment details and slot availability.`;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppUrl(constructedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-10 sm:py-20 lg:py-28 bg-neutral-900/60 border-t border-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                <span>Get In Touch Instantly</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                Ready To Start Your Transformation?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Connect with us directly on WhatsApp or give us a quick call. Coach Debabrata and the RD FITNESS team are ready to welcome you with zero admission fees.
              </p>
            </div>

            {/* Direct Connect Buttons */}
            <div className="space-y-3">
              <a
                id="contact-whatsapp-direct"
                href={createWhatsAppUrl('Hi RD Fitness! I want to speak to Coach Debabrata about joining.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-emerald-500/40 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <WhatsAppIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase">Chat on WhatsApp</div>
                    <div className="text-xs text-neutral-400">+91 {GYM_DETAILS.phone} • Instant Reply</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                id="contact-call-direct"
                href={GYM_DETAILS.phoneTel}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-rose-500/40 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase">Direct Phone Call</div>
                    <div className="text-xs text-neutral-400">{GYM_DETAILS.phoneFormatted}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                id="contact-instagram-direct"
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-rose-400/40 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 text-rose-400 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase">Follow On Instagram</div>
                    <div className="text-xs text-neutral-400">{GYM_DETAILS.instagramHandle}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-rose-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800/80 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2 text-neutral-300 font-semibold">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>SR Market Complex, NH 16, Jaraka, Jajpur</span>
              </div>
              <p>Walk-ins welcome Mon–Sat (6–11 AM & 4–9 PM). Sunday CLOSED.</p>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Pre-fill Form */}
          <div className="lg:col-span-7">
            <div className="p-4 sm:p-8 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase text-white tracking-wide">
                    Quick WhatsApp Inquiry
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Select your fitness goals and jump straight into a chat with Coach Debabrata
                  </p>
                </div>
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="user-name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name (e.g. Ramesh / Priya)"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors"
                  />
                </div>

                {/* Goal Selector */}
                <div>
                  <label htmlFor="user-goal" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Primary Fitness Goal
                  </label>
                  <select
                    id="user-goal"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    {goals.map((g) => (
                      <option key={g} value={g} className="bg-neutral-900 text-white">
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Slot */}
                <div>
                  <label htmlFor="user-slot" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Preferred Workout Timing
                  </label>
                  <select
                    id="user-slot"
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors"
                  >
                    {slots.map((s) => (
                      <option key={s} value={s} className="bg-neutral-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom note */}
                <div>
                  <label htmlFor="user-notes" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Any Questions or Notes (Optional)
                  </label>
                  <textarea
                    id="user-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Inquiring about 3-month fee, diet chart availability, or beginner guidance..."
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-rose-500 transition-colors resize-none"
                  />
                </div>

                {/* Message preview */}
                <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-1">
                    WhatsApp Message Preview:
                  </div>
                  <p className="text-xs text-neutral-300 font-mono whitespace-pre-line leading-relaxed">
                    {constructedMessage}
                  </p>
                </div>

                {/* Submit button */}
                <button
                  id="submit-whatsapp-inquiry-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-rose-950/60 transition-all cursor-pointer"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send Message on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
