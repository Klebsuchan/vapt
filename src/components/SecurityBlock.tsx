import { motion } from 'motion/react';
import { ShieldCheck, Lock, FileText, BadgeDollarSign } from 'lucide-react';

export default function SecurityBlock() {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "100% Seguro Anti-Golpe",
      desc: "Nossa loja física em Passo Fundo garante a você um ambiente seguro. Sem intermediários falsos ou visitas suspeitas na sua casa."
    },
    {
      icon: <BadgeDollarSign size={32} />,
      title: "PIX na Hora",
      desc: "Você só entrega as chaves e o documento do carro após o dinheiro estar disponível e confirmado na sua conta bancária."
    },
    {
      icon: <FileText size={32} />,
      title: "Zero Burocracia",
      desc: "Temos despachante próprio. Cuidamos de toda a papelada, transferência e quitação de dívidas (se houver) no Detran."
    },
    {
      icon: <Lock size={32} />,
      title: "Sigilo Total",
      desc: "Seus dados pessoais e do veículo são tratados com máximo sigilo, conforme a LGPD, garantindo total privacidade na negociação."
    }
  ];

  return (
    <section className="py-24 bg-[#16161A] relative overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-sm tracking-widest uppercase mb-6 border border-emerald-500/20">
            <ShieldCheck size={18} />
            Segurança em Primeiro Lugar
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Sua tranquilidade <br className="hidden sm:block" /> não tem preço
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A maior dor de quem vende carro hoje é o medo de fraudes. Na Vaapty, estruturamos um processo blindado para você vender sem dor de cabeça.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#0A0A0C] p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group shadow-lg"
            >
              <div className="text-emerald-500 mb-6 bg-emerald-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 border border-emerald-500/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
