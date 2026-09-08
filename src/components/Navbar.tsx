import { useState, useEffect } from 'react';
import { GYM_DETAILS } from '../data/gymData';
import { createWhatsAppUrl, getGymCurrentStatus } from '../utils/gymHelpers';
import { Menu, X, Phone, MessageCircle, Clock, MapPin, Instagram } from 'lucide-react';
import RdFitnessLogo from './RdFitnessLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const status = getGymCurrentStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Memberships', href: '#pricing' },
    { name: 'Trainer', href: '#trainer' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Hours & Location', href: '#location' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-neutral-950/90 to-transparent'
      }`}
    >
      {/* Top micro bar for timings & location */}
      <div className="hidden lg:block border-b border-neutral-800/60 bg-neutral-950/80 text-xs text-neutral-400 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{GYM_DETAILS.address}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3.5 h-3.5 text-rose-500" />
              <span>Mon-Sat: 6-11 AM & 4-9 PM | Sun: 6-10 AM</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${status.badgeColor}`}>
              <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-400'}`} />
              {status.statusText}
            </span>
            <a
              id="top-phone-link"
              href={GYM_DETAILS.phoneTel}
              className="hover:text-rose-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-rose-500" />
              {GYM_DETAILS.phoneFormatted}
            </a>
            <a
              id="top-instagram-link"
              href={GYM_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram page"
              className="hover:text-rose-400 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a id="brand-logo" href="#" className="flex items-center gap-3 group">
            <RdFitnessLogo className="w-11 h-11 sm:w-12 sm:h-12 transition-transform duration-300 group-hover:scale-105" showGlow />
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-wider text-white uppercase group-hover:text-rose-400 transition-colors">
                RD FITNESS
              </span>
              <span className="text-[10px] tracking-widest text-neutral-400 -mt-1 uppercase font-medium">
                Jaraka • Jajpur
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className="hover:text-rose-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="navbar-phone-btn"
              href={GYM_DETAILS.phoneTel}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-lg bg-neutral-900 border border-neutral-700 hover:border-neutral-600 text-neutral-200 hover:text-white transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-rose-500" />
              <span>Call Us</span>
            </a>

            <a
              id="navbar-whatsapp-cta"
              href={createWhatsAppUrl('Hi RD Fitness! I want to inquire about gym membership and workout slots.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold uppercase tracking-wide rounded-lg bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-900/40 hover:shadow-rose-700/50 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Join on WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-phone-shortcut"
              href={GYM_DETAILS.phoneTel}
              aria-label="Call RD Fitness"
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-rose-500"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-rose-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div id="mobile-menu" className="lg:hidden bg-neutral-950 border-b border-neutral-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="mb-4 pb-3 border-b border-neutral-900">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border ${status.badgeColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-400'}`} />
                {status.statusText}
              </span>
              <span>{status.slotDetail}</span>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-rose-400 py-1.5 border-b border-neutral-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-col gap-3">
            <a
              id="mobile-drawer-whatsapp"
              href={createWhatsAppUrl('Hi RD Fitness! I want to join the gym in Jaraka.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-rose-950/50"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Join via WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                id="mobile-drawer-call"
                href={GYM_DETAILS.phoneTel}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-rose-500" />
                <span>Call 9861622093</span>
              </a>
              <a
                id="mobile-drawer-instagram"
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-200 font-medium"
              >
                <Instagram className="w-3.5 h-3.5 text-rose-500" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
