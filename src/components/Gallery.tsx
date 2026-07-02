import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create alternating parallax speeds for the 3 columns
  const yFast = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  
  const images = [
    "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80",
  ];

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#0A0A0C] relative overflow-hidden" ref={containerRef}>
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-vaapty-pink/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Instagram Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mb-10 sm:mb-14 border-b border-white/10 pb-10 sm:pb-14">
          {/* Profile Picture */}
          <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-vaapty-pink via-vaapty-orange to-vaapty-pink shrink-0 shadow-[0_0_30px_rgba(223,22,89,0.3)]">
            <div className="w-full h-full rounded-full border-[6px] border-[#0A0A0C] bg-white/5 flex items-center justify-center overflow-hidden backdrop-blur-sm p-3">
              <img src="/vaptlogo.png" alt="Vaapty Passo Fundo Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6">
              <h2 className="text-2xl sm:text-3xl text-white font-medium">vaaptypassofundo</h2>
              <a 
                href="https://www.instagram.com/vaaptypassofundo?igsh=MWFodmZuZGthaW9r" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-2.5 rounded-xl transition-all border border-white/10 text-sm tracking-wide shadow-lg hover:shadow-white/5 flex items-center gap-2"
              >
                <Instagram size={18} />
                Seguir
              </a>
            </div>

            <div className="flex justify-center sm:justify-start gap-8 sm:gap-12 mb-6 text-white">
              <div className="text-center sm:text-left"><span className="font-bold text-lg sm:text-xl">102</span> <span className="text-slate-400">publicações</span></div>
              <div className="text-center sm:text-left"><span className="font-bold text-lg sm:text-xl">2.422</span> <span className="text-slate-400">seguidores</span></div>
              <div className="text-center sm:text-left"><span className="font-bold text-lg sm:text-xl">648</span> <span className="text-slate-400">seguindo</span></div>
            </div>

            <div className="text-slate-200 text-sm sm:text-base space-y-1.5 leading-relaxed">
              <h3 className="font-bold text-white">VAAPTY Passo Fundo 🚗</h3>
              <p className="text-slate-300">Venda seu carro em 40 minutos!</p>
              <p className="text-slate-300">Pagamento à vista na conta.</p>
              <p className="text-slate-300">Avaliação justa e segura.</p>
              <a href="#agendamento" className="text-vaapty-pink font-bold hover:text-vaapty-orange transition-colors flex items-center justify-center sm:justify-start gap-1.5 mt-2">
                <ExternalLink size={16} /> agendar-avaliacao.com
              </a>
            </div>
          </div>
        </div>

        {/* Instagram Grid Feed */}
        <div className="grid grid-cols-3 gap-1 sm:gap-4 pb-8">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              style={{ y: idx % 3 === 1 ? ySlow : yFast }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="aspect-square bg-[#16161A] overflow-hidden group relative cursor-pointer sm:rounded-xl shadow-lg border border-white/5"
            >
              <img 
                src={`${src}&w=800`}
                srcSet={`${src}&w=400 400w, ${src}&w=800 800w`}
                sizes="(max-width: 640px) 400px, 800px"
                alt={`Vaapty Post ${idx + 1}`} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 sm:gap-6">
                <div className="flex items-center gap-1 sm:gap-2 text-white font-bold text-sm sm:text-base">
                  <Heart fill="white" className="w-5 h-5 sm:w-6 sm:h-6" /> 
                  <span>{Math.floor(Math.random() * 200) + 50}</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 text-white font-bold text-sm sm:text-base">
                  <MessageCircle fill="white" className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>{Math.floor(Math.random() * 20) + 5}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <a 
            href="https://www.instagram.com/vaaptypassofundo?igsh=MWFodmZuZGthaW9r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-vaapty-pink hover:text-vaapty-orange transition-colors text-sm uppercase tracking-widest font-bold group"
          >
            Ver mais no Instagram <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
