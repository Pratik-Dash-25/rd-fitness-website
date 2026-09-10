import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl } from '../utils/gymHelpers';
import { MapPin, Phone, Instagram, Clock, ShieldCheck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import RdFitnessLogo from './RdFitnessLogo';

export default function Footer() {
  return (
    <footer id="main-footer" className="bg-neutral-950 border-t border-neutral-800 text-neutral-400 text-sm">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RdFitnessLogo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                  RD FITNESS
                </span>
                <span className="text-[10px] tracking-widest text-neutral-400 -mt-1 uppercase font-medium">
                  Jaraka • Jajpur
                </span>
              </div>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Jaraka’s premier fitness center featuring high-grade strength machinery, 100% air-conditioned arena, certified coaching by Debabrata Rath, and zero admission fee.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Zero Admission Fee Guarantee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#why-us" className="hover:text-rose-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">Fitness Services & Programs</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-rose-400 transition-colors">Equipment & Facilities</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-rose-400 transition-colors">Membership Plans (from ₹100)</a>
              </li>
              <li>
                <a href="#trainer" className="hover:text-rose-400 transition-colors">Head Coach Debabrata Rath</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-400 transition-colors">Photo Gallery</a>
              </li>
              <li>
                <a href="#location" className="hover:text-rose-400 transition-colors">Location & Timings</a>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500" />
              <span>Gym Timings</span>
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div>
                <strong className="text-neutral-200 block">Monday – Saturday</strong>
                <p>Morning: 6:00 AM – 11:00 AM</p>
                <p>Evening: 4:00 PM – 9:00 PM</p>
              </div>
              <div className="pt-2 border-t border-neutral-900">
                <div className="flex items-center justify-between">
                  <strong className="text-neutral-200 block">Sunday</strong>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">CLOSED</span>
                </div>
                <p className="text-rose-400/90 text-xs mt-0.5">Weekly Rest Day</p>
              </div>
            </div>
          </div>

          {/* Address & Socials */}
          <div className="space-y-3">
            <h4 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Contact & Address
            </h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{GYM_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0" />
                <a href={GYM_DETAILS.phoneTel} className="hover:text-white transition-colors">
                  {GYM_DETAILS.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-2">
              <a
                id="footer-whatsapp"
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-emerald-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-neutral-800"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                id="footer-phone"
                href={GYM_DETAILS.phoneTel}
                aria-label="Call RD Fitness"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-rose-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-neutral-800"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                id="footer-instagram"
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-neutral-900 hover:bg-rose-600 text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-neutral-800"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-900 bg-black/60 py-6 text-center text-xs text-neutral-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} RD FITNESS. All rights reserved. SR Market Complex, Jaraka, Jajpur.</p>
          <a
            id="developer-credit"
            href="https://wa.me/917991019466?text=Hi%20Pratik%2C%20I%20found%20your%20website%20work%20through%20the%20RD%20Fitness%20website.%20I'm%20interested%20in%20getting%20a%20website%20built%20for%20my%20business.%20Can%20you%20tell%20me%20more%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-200 transition-all duration-300 py-1 px-2 rounded cursor-pointer max-w-full flex-wrap justify-center"
            aria-label="Website crafted by Pratik - Inquire on WhatsApp"
          >
            <span>Website crafted by</span>
            <span className="font-semibold text-rose-400 group-hover:text-rose-300 group-hover:underline underline-offset-4 decoration-rose-500/60 group-hover:drop-shadow-[0_0_8px_rgba(244,63,94,0.45)] transition-all duration-300 transform group-hover:-translate-y-0.5">
              Pratik
            </span>
            <span className="text-amber-400 text-xs inline-block transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
              ⚡
            </span>
            <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
