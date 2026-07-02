import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 lg:pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-vaapty-purple-dark/95 via-vaapty-purple/80 to-black/40 z-10"></div>
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/faca_um_video_tipo_a_garagem_d.mp4" type="video/mp4" />
      </video>

      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-vaapty-pink/20 blur-[120px] rounded-full z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-vaapty-orange/10 blur-[150px] rounded-full z-10 pointer-events-none"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="bg-vaapty-purple-dark/60 backdrop-blur-xl border border-vaapty-pink/20 p-6 sm:p-12 lg:p-16 rounded-[2rem] shadow-[0_0_50px_rgba(223,22,89,0.15)] relative overflow-hidden mt-10 sm:mt-0"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-vaapty-pink via-vaapty-orange to-vaapty-pink"></div>
            <span className="text-vaapty-orange font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-6 inline-block bg-vaapty-pink/10 px-4 py-1.5 rounded-full border border-vaapty-pink/30">
              A maior rede de franquias de carros
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4">
              Vendemos seu carro em até <br className="hidden sm:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange drop-shadow-[0_0_15px_rgba(223,22,89,0.5)]">40 minutos</span>
            </h1>
            
            <div className="bg-gradient-to-br from-vaapty-pink/10 to-vaapty-orange/5 border border-vaapty-pink/20 rounded-2xl p-5 sm:p-6 mb-8 mt-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-1.5 rounded-full shadow-[0_0_15px_rgba(223,22,89,0.4)] shrink-0"><CheckCircle2 className="text-white" size={20} /></div>
                  <span className="text-white font-bold text-sm sm:text-lg">Melhor avaliação do seu veículo</span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-vaapty-pink to-vaapty-orange p-1.5 rounded-full shadow-[0_0_15px_rgba(223,22,89,0.4)] shrink-0"><CheckCircle2 className="text-white" size={20} /></div>
                  <span className="text-white font-bold text-sm sm:text-lg">Preço justo e Pix na hora</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-200 max-w-md text-sm sm:text-lg leading-relaxed mb-8 font-black uppercase tracking-wider">
              Agende a sua avaliação gratuita!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
              <a href="#agendamento" className="group bg-gradient-to-r from-vaapty-pink to-vaapty-orange hover:from-vaapty-pink/90 hover:to-vaapty-orange/90 text-white px-8 py-5 rounded-2xl font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[0_10px_30px_rgba(223,22,89,0.4)] hover:shadow-[0_15px_40px_rgba(223,22,89,0.6)] uppercase tracking-widest border border-vaapty-pink/50 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">Agendar Agora <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" /></span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0C] to-transparent pointer-events-none z-20"></div>
    </section>
  );
}
