import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function Location() {
  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-vaapty-purple-dark relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-vaapty-pink/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">Onde <span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange">Estamos</span></h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">Faça-nos uma visita e traga seu veículo para a melhor avaliação de Passo Fundo.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-vaapty-purple/40 backdrop-blur-xl p-8 sm:p-12 lg:p-14 rounded-[2.5rem] border border-vaapty-pink/20 shadow-[0_0_30px_rgba(223,22,89,0.05)] flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-vaapty-pink via-vaapty-orange to-vaapty-pink"></div>
            
            <h3 className="text-3xl font-black text-white mb-10">Vaapty Passo Fundo</h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-3.5 rounded-2xl shadow-lg shadow-vaapty-pink/20 shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Endereço</h4>
                  <p className="text-slate-300 leading-relaxed">Av. Brasil Oeste, 3113 - Centro<br/>Passo Fundo - RS, 99025-533</p>
                </div>
              </li>
              
              <li className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-3.5 rounded-2xl shadow-lg shadow-vaapty-pink/20 shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Horário de Atendimento</h4>
                  <p className="text-slate-300 leading-relaxed">Segunda a Sexta: 08:30 às 18:30<br/>Sábado: 08:30 às 12:30</p>
                </div>
              </li>

              <li className="flex items-start gap-5">
                <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-3.5 rounded-2xl shadow-lg shadow-vaapty-pink/20 shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 text-lg">Telefone</h4>
                  <p className="text-slate-300 leading-relaxed">(54) 99620-7852</p>
                </div>
              </li>
            </ul>

            <a 
              href="https://maps.app.goo.gl/MHqDfo8jwQ24AbbSA?g_st=ic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-12 group bg-white/5 hover:bg-white/10 text-white font-bold py-5 rounded-2xl text-center transition-all border border-white/10 hover:border-vaapty-pink/50 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
            >
              <Navigation size={22} className="group-hover:text-vaapty-pink transition-colors" />
              Como Chegar
            </a>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] sm:h-[500px] lg:h-auto rounded-[2.5rem] overflow-hidden border border-vaapty-pink/20 shadow-[0_0_30px_rgba(223,22,89,0.1)] relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=Av.+Brasil+Oeste,+3113+-+Centro,+Passo+Fundo+-+RS,+99025-533&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-700 opacity-90 hover:opacity-100"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
