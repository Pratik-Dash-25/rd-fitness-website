import { GYM_DETAILS } from '../data/gymData';
import { getGymCurrentStatus, createWhatsAppUrl } from '../utils/gymHelpers';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Calendar, MessageCircle } from 'lucide-react';
import RdFitnessLogo from './RdFitnessLogo';

export default function LocationHours() {
  const status = getGymCurrentStatus();

  return (
    <section id="location" className="py-20 sm:py-28 bg-neutral-950 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>Visit The Facility</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Location & Operating Hours
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Conveniently situated right on NH 16 highway inside the well-known SR Market Complex at Jaraka, Jajpur.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Live status card */}
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Current Status
                </span>
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${status.badgeColor}`}>
                  <span className={`w-2 h-2 rounded-full mr-1.5 ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-400'}`} />
                  {status.statusText}
                </span>
              </div>
              <p className="text-sm text-neutral-300">
                {status.slotDetail}
              </p>
            </div>

            {/* Timings breakdown */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5">
              <div className="flex items-center gap-2.5 text-white font-display text-lg uppercase tracking-wide border-b border-neutral-800 pb-3">
                <Clock className="w-5 h-5 text-rose-500" />
                <span>Training Schedule</span>
              </div>

              {/* Mon - Sat */}
              <div>
                <div className="flex items-center justify-between text-sm font-semibold text-white mb-2">
                  <span>Monday – Saturday</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-rose-400 font-normal">2 Batches</span>
                </div>
                <div className="space-y-1.5 pl-3 border-l-2 border-rose-500 text-xs text-neutral-300">
                  <div className="flex justify-between">
                    <span>Morning Batch:</span>
                    <strong className="text-neutral-100 font-semibold">6:00 AM – 11:00 AM</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Evening Batch:</span>
                    <strong className="text-neutral-100 font-semibold">4:00 PM – 9:00 PM</strong>
                  </div>
                </div>
              </div>

              {/* Sunday */}
              <div className="pt-2 border-t border-neutral-800/80">
                <div className="flex items-center justify-between text-sm font-semibold text-white mb-2">
                  <span>Sunday</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-neutral-800 text-neutral-400 font-normal">Morning Only</span>
                </div>
                <div className="pl-3 border-l-2 border-amber-500 text-xs text-neutral-300 flex justify-between">
                  <span>Morning Session:</span>
                  <strong className="text-neutral-100 font-semibold">6:00 AM – 10:00 AM</strong>
                </div>
              </div>
            </div>

            {/* Address & Direct Actions */}
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-1" />
                <div>
                  <div className="text-sm font-bold text-white uppercase mb-1">
                    Gym Address
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {GYM_DETAILS.address}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    Landmark: Highway facing, SR Market Complex, Jaraka town center.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                <a
                  id="directions-map-btn"
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-4 h-4 text-rose-400" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  id="location-call-btn"
                  href={GYM_DETAILS.phoneTel}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {GYM_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 h-[480px] sm:h-[550px] relative">
              <iframe
                title="RD FITNESS Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14917.382025189736!2d86.136000!3d20.816000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a196e85579f1811%3A0x6bcfd30e5272a8cb!2sJaraka%2C%20Odisha%20755050!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter invert contrast-125 opacity-85 hover:opacity-100 transition-opacity"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Pin Card on top of Map */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-2xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 shadow-xl pointer-events-auto">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <RdFitnessLogo className="w-8 h-8 shrink-0" />
                  <div>
                    <h4 className="font-display text-base font-bold text-white uppercase leading-none">
                      RD FITNESS
                    </h4>
                    <span className="text-[10px] text-rose-400 font-medium">NH 16, Jaraka</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  SR Market Complex, Jaraka, Jajpur, Odisha – 755050
                </p>
                <a
                  id="map-open-external-btn"
                  href={GYM_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
