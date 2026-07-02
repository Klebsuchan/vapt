import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Calendar, CarFront, Phone, CheckCircle, MessageCircle } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    vehicle: '',
  });

  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const text = `Olá, equipe Vaapty Passo Fundo! Meu nome é ${formData.name} e gostaria de avaliar meu veículo ${formData.vehicle}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/5554996207852?text=${encoded}`, '_blank');
  };

  return (
    <section id="agendamento" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat opacity-20 mix-blend-luminosity"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80')" }}
      >
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-vaapty-purple-dark via-vaapty-purple-dark/95 to-vaapty-purple-dark z-10"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-vaapty-pink/10 blur-[120px] sm:blur-[150px] rounded-full z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="bg-vaapty-purple-dark/80 backdrop-blur-3xl rounded-[2.5rem] shadow-[0_0_50px_rgba(223,22,89,0.1)] overflow-hidden flex flex-col lg:flex-row border border-vaapty-pink/30 relative">
          
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-vaapty-pink via-vaapty-orange to-vaapty-pink z-30"></div>

          {/* Left Side - Info */}
          <div className="lg:w-2/5 p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-center relative overflow-hidden lg:border-r lg:border-white/5 bg-gradient-to-br from-vaapty-pink/10 to-transparent">
            <div className="absolute top-0 right-0 w-64 h-64 bg-vaapty-pink rounded-full blur-[100px] opacity-30 -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-vaapty-orange rounded-full blur-[100px] opacity-20 -ml-20 -mb-20 pointer-events-none"></div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 relative z-10 leading-tight">Agende sua <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange">Avaliação Gratuita</span></h3>
            <p className="text-slate-300 mb-12 relative z-10 text-base sm:text-lg font-medium leading-relaxed">
              Fale diretamente com nossa equipe pelo WhatsApp para agendar a avaliação do seu veículo de forma rápida e sem burocracia.
            </p>
            <ul className="space-y-6 relative z-10">
              <li className="flex items-center gap-5">
                <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-3.5 rounded-2xl shadow-lg shadow-vaapty-pink/30 shrink-0"><CarFront className="text-white" size={24} /></div>
                <span className="font-bold text-base sm:text-lg text-white">Avaliação presencial em Passo Fundo</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-3.5 rounded-2xl shadow-lg shadow-vaapty-pink/30 shrink-0"><CheckCircle className="text-white" size={24} /></div>
                <span className="font-bold text-base sm:text-lg text-white">Sem compromisso de venda</span>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-3.5 rounded-2xl shadow-lg shadow-vaapty-pink/30 shrink-0"><Calendar className="text-white" size={24} /></div>
                <span className="font-bold text-base sm:text-lg text-white">Horários flexíveis de seg a sáb</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-8 sm:p-12 lg:p-16 bg-white/[0.02] relative flex items-center">
            <div className="absolute inset-0 bg-gradient-to-bl from-vaapty-pink/5 to-transparent pointer-events-none"></div>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6 relative z-10 w-full max-w-md mx-auto">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-[#25D366]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-[#25D366]/20 shadow-[0_0_30px_rgba(37,211,102,0.15)]">
                  <MessageCircle className="text-[#25D366]" size={40} />
                </div>
                <h4 className="text-3xl font-black text-white mb-3">Fale no WhatsApp</h4>
                <p className="text-slate-400 text-sm sm:text-base font-medium">Preencha rapidamente para iniciarmos o atendimento</p>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-vaapty-pink font-bold mb-2 block ml-1">Seu Nome</label>
                  <input required type="text" placeholder="Como deseja ser chamado" className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-base focus:border-vaapty-pink focus:bg-vaapty-pink/5 outline-none text-white transition-all shadow-inner" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div>
                  <label className="text-[11px] uppercase tracking-[0.15em] text-vaapty-pink font-bold mb-2 block ml-1">Veículo (Marca e Modelo)</label>
                  <input required type="text" placeholder="Ex: Chevrolet Onix 2020" className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-base focus:border-vaapty-pink focus:bg-vaapty-pink/5 outline-none text-white transition-all shadow-inner" value={formData.vehicle} onChange={e => setFormData({...formData, vehicle: e.target.value})} />
                </div>
              </div>

              <button type="submit" className="w-full group bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f776a] text-white font-black py-5 rounded-2xl text-base sm:text-lg transition-all shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_20px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 tracking-widest uppercase mt-8 border border-[#25D366]/50 flex items-center justify-center gap-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <Phone size={22} className="group-hover:animate-bounce" />
                  Chamar no WhatsApp
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
