import { GYM_DETAILS } from '../data/gymData';

export function createWhatsAppUrl(message?: string): string {
  const defaultMsg = 'Hi RD Fitness! I would like to inquire about gym membership and timings at your Jaraka facility.';
  const text = encodeURIComponent(message || defaultMsg);
  return `${GYM_DETAILS.whatsappBaseUrl}?text=${text}`;
}

export interface GymStatus {
  isOpen: boolean;
  statusText: string;
  badgeColor: string;
  slotDetail: string;
}

export function getGymCurrentStatus(): GymStatus {
  try {
    // Convert to Indian Standard Time (UTC + 5:30)
    const now = new Date();
    const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 3600000;
    const istDate = new Date(utcTime + istOffset);

    const day = istDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
    const hour = istDate.getHours();
    const minute = istDate.getMinutes();
    const currentMinutes = hour * 60 + minute;

    if (day === 0) {
      // Sunday: Strictly CLOSED all day
      return {
        isOpen: false,
        statusText: 'Closed Today (Sunday)',
        badgeColor: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
        slotDetail: 'Sunday is a rest day • Opens Monday at 6:00 AM',
      };
    } else {
      // Mon - Sat:
      // Morning: 6:00 AM - 11:00 AM (360 to 660)
      // Evening: 4:00 PM - 9:00 PM (960 to 1260)
      if (currentMinutes >= 360 && currentMinutes < 660) {
        return {
          isOpen: true,
          statusText: 'Open Now (Morning Batch)',
          badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          slotDetail: 'Morning slot active until 11:00 AM',
        };
      } else if (currentMinutes >= 960 && currentMinutes < 1260) {
        return {
          isOpen: true,
          statusText: 'Open Now (Evening Batch)',
          badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
          slotDetail: 'Evening slot active until 9:00 PM',
        };
      } else if (currentMinutes < 360) {
        return {
          isOpen: false,
          statusText: 'Closed Now',
          badgeColor: 'bg-neutral-800 text-neutral-400 border-neutral-700',
          slotDetail: 'Opens today at 6:00 AM',
        };
      } else if (currentMinutes >= 660 && currentMinutes < 960) {
        return {
          isOpen: false,
          statusText: 'Midday Break (Closed)',
          badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
          slotDetail: 'Evening batch opens at 4:00 PM',
        };
      } else {
        const nextOpen = day === 6 ? 'Opens Monday at 6:00 AM (Sunday Closed)' : 'Opens tomorrow at 6:00 AM';
        return {
          isOpen: false,
          statusText: 'Closed for the Night',
          badgeColor: 'bg-neutral-800 text-neutral-400 border-neutral-700',
          slotDetail: nextOpen,
        };
      }
    }
  } catch {
    return {
      isOpen: false,
      statusText: 'Mon–Sat: 6–11 AM & 4–9 PM (Sun Closed)',
      badgeColor: 'bg-neutral-800 text-neutral-400 border-neutral-700',
      slotDetail: 'Sunday Closed • Open Mon–Sat',
    };
  }
}
