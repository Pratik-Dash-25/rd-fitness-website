import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Facilities from './components/Facilities';
import Pricing from './components/Pricing';
import Trainer from './components/Trainer';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import LocationHours from './components/LocationHours';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Statistics />
        <WhyChooseUs />
        <Services />
        <Facilities />
        <Pricing />
        <Trainer />
        <Gallery />
        <Testimonials />
        <LocationHours />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
