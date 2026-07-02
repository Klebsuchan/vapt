import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Vantagens', href: '#vantagens' },
    { name: 'Agendar Avaliação', href: '#agendamento' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-vaapty-purple-dark/95 backdrop-blur-xl border-b border-vaapty-pink/20 py-3 shadow-2xl' : 'bg-transparent py-4 sm:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <a href="#home" className="flex items-center gap-3">
            <img src="/vaptlogo.png" alt="Vaapty Passo Fundo" className="h-10 sm:h-12 w-auto object-contain transition-transform hover:scale-105" />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 text-sm font-bold whitespace-nowrap">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`hover:text-vaapty-orange transition-colors ${isScrolled ? 'text-white' : 'text-slate-200'}`}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex-1 flex justify-end">
          <div className="hidden lg:block">
            <a href="#agendamento" className="px-6 py-2.5 bg-gradient-to-r from-vaapty-pink to-vaapty-orange hover:from-vaapty-pink/80 hover:to-vaapty-orange/80 text-white font-black text-xs rounded-full transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(223,22,89,0.3)] hover:shadow-[0_0_30px_rgba(223,22,89,0.5)] hover:-translate-y-0.5 border border-vaapty-pink/50">
              Vender meu Carro
            </a>
          </div>
          <button className={`lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-white`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden absolute top-full left-0 w-full bg-vaapty-purple-dark/95 backdrop-blur-2xl border-b border-vaapty-pink/20 shadow-2xl py-6 px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-white text-lg font-bold p-3 hover:bg-white/10 hover:text-vaapty-orange rounded-xl transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#agendamento" onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-vaapty-pink to-vaapty-orange text-white text-center px-6 py-4 rounded-xl font-black mt-4 uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(223,22,89,0.3)] border border-vaapty-pink/50">
            Vender meu Carro
          </a>
        </motion.div>
      )}
    </header>
  );
}
