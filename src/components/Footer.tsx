import { MapPin, Phone, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
}

export default function Footer({ onOpenPrivacyPolicy }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0C] border-t border-white/10 text-slate-200 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-vaapty-pink/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 mb-16 sm:mb-20">
          
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img src="/vaptlogo.png" alt="Vaapty Passo Fundo" className="h-14 sm:h-16 w-auto object-contain" />
            </div>
            <p className="text-slate-400 mb-8 max-w-sm text-sm sm:text-base leading-relaxed">
              A maior franquia de intermediação de venda de veículos do Brasil. Avaliação gratuita, rápida e segura em Passo Fundo.
            </p>
            <a href="https://www.instagram.com/vaaptypassofundo?igsh=MWFodmZuZGthaW9r" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 px-5 py-3 rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-pink-500/20 font-bold text-white text-sm tracking-wide">
              <Instagram size={20} className="text-white" />
              Siga no Instagram
            </a>
          </div>

          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-8 border-b border-white/10 pb-4">Contato & Localização</h4>
            <ul className="space-y-6 text-slate-300 text-sm sm:text-base">
              <li className="flex items-start gap-4">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <MapPin className="text-vaapty-pink" size={20} />
                </div>
                <span className="leading-relaxed">Av. Brasil Oeste, 3113 - Centro<br/>Passo Fundo - RS, 99025-533</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <Phone className="text-vaapty-pink" size={20} />
                </div>
                <span className="font-medium text-white">(54) 99620-7852</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-8 border-b border-white/10 pb-4">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400 text-sm sm:text-base font-medium">
              <li><a href="#home" className="hover:text-vaapty-pink transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vaapty-pink/50"></span> Início</a></li>
              <li><a href="#vantagens" className="hover:text-vaapty-pink transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vaapty-pink/50"></span> Vantagens</a></li>
              <li><a href="#agendamento" className="hover:text-vaapty-pink transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vaapty-pink/50"></span> Agendar Avaliação</a></li>
              <li><a href="#galeria" className="hover:text-vaapty-pink transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vaapty-pink/50"></span> Galeria de Fotos</a></li>
              <li><a href="#depoimentos" className="hover:text-vaapty-pink transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vaapty-pink/50"></span> Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-vaapty-pink transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vaapty-pink/50"></span> Dúvidas Frequentes</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-xs sm:text-sm tracking-widest text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p className="uppercase">&copy; {new Date().getFullYear()} Vaapty Passo Fundo.<br className="md:hidden" /> Todos os direitos reservados.</p>
            <button 
              onClick={onOpenPrivacyPolicy}
              className="text-vaapty-orange hover:text-vaapty-pink transition-colors underline-offset-4 hover:underline uppercase"
            >
              Política de Privacidade
            </button>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-bold text-slate-400 uppercase">Feito para <span className="text-vaapty-pink">acelerar</span> sua venda.</p>
            <a 
              href="https://portfolio-braian-three.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[10px] sm:text-[11px] text-slate-600 hover:text-vaapty-pink transition-colors uppercase font-medium"
            >
              Desenvolvedor Braian Kmdc Fullstack Dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
