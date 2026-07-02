import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandsCarousel from './components/BrandsCarousel';
import Features from './components/Features';
import Comparison from './components/Comparison';
import SecurityBlock from './components/SecurityBlock';
import LeadForm from './components/LeadForm';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import SocialProof from './components/SocialProof';

export default function App() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0C] font-sans text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <BrandsCarousel />
        <Features />
        <Comparison />
        <SecurityBlock />
        <LeadForm />
        <Gallery />
        <Location />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)} />
      
      <CookieBanner onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)} />
      <PrivacyPolicy isOpen={isPrivacyPolicyOpen} onClose={() => setIsPrivacyPolicyOpen(false)} />
      <SocialProof />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50 group flex items-center">
        <div className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold mr-3 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
           Dúvidas? <span className="text-green-600">Fale Conosco</span>
        </div>
        <a 
          href="https://wa.me/5554996207852?text=Ol%C3%A1%2C%20equipe%20Vaapty%20Passo%20Fundo!%20Gostaria%20de%20avaliar%20meu%20carro."
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Contato pelo WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
