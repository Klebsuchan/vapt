import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  const transforms = [y1, y2, y3];

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Cliente Vaapty',
      content: 'Vendi meu carro em menos de 1 hora! O atendimento foi excepcional e o PIX caiu na conta na mesma hora. Recomendo muito a unidade de Passo Fundo!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Maria Oliveira',
      role: 'Cliente Vaapty',
      content: 'Estava com receio de vender meu carro por conta da burocracia, mas a equipe da Vaapty resolveu tudo. Super seguro, prático e sem estresse.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Cliente Vaapty',
      content: 'Melhor avaliação que encontrei na cidade. Preço super justo e processo totalmente transparente. Com certeza voltarei a fazer negócio.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  return (
    <section id="depoimentos" className="py-24 sm:py-32 relative overflow-hidden bg-[#0A0A0C]" ref={containerRef}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] sm:h-[600px] bg-vaapty-pink/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            O que dizem <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange">Nossos Clientes</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Histórias reais de quem já experimentou a forma mais rápida e segura de vender um carro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              style={{ y: transforms[index] }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-vaapty-purple/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-vaapty-pink/20 hover:border-vaapty-pink/50 transition-all duration-300 hover:-translate-y-2 group shadow-[0_0_30px_rgba(223,22,89,0.05)] hover:shadow-[0_15px_40px_rgba(223,22,89,0.2)] relative flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-vaapty-pink/0 via-vaapty-pink to-vaapty-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <Quote className="text-vaapty-pink/40 w-12 h-12 absolute top-6 right-8 group-hover:text-vaapty-pink/60 transition-colors" />

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-vaapty-orange text-vaapty-orange" />
                ))}
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 flex-grow relative z-10 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-vaapty-pink to-vaapty-orange flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-vaapty-pink/20 overflow-hidden p-0.5">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base group-hover:text-vaapty-pink transition-colors">{testimonial.name}</h4>
                  <span className="text-slate-400 text-sm">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
