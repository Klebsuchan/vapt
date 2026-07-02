import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const disadvantages = [
    "Risco de cair em golpes e fraudes",
    "Meses esperando um comprador real",
    "Receber pessoas estranhas na sua casa",
    "Burocracia chata e filas no Detran",
    "Lidar com pechinchas e curiosos",
    "Gastos com anúncios e manutenção extra"
  ];

  const advantages = [
    "100% Seguro, sem risco de fraudes",
    "Venda resolvida em até 40 minutos",
    "Atendimento em loja física confiável",
    "Nós cuidamos de toda a burocracia",
    "Melhor avaliação do mercado garantida",
    "PIX na hora, sem enrolação"
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0A0A0C] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vaapty-pink/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange">Vaapty?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Vender carro não precisa ser uma dor de cabeça. Veja a diferença entre tentar vender sozinho e contar com a nossa experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Vender Sozinho */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 text-red-500 pointer-events-none">
              <X size={150} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="bg-red-500/20 text-red-500 p-2 rounded-lg"><X size={24} /></span>
              Vender Sozinho
            </h3>
            <ul className="space-y-6 relative z-10">
              {disadvantages.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-300">
                  <X className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Vender com Vaapty */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-vaapty-purple/20 border border-vaapty-pink/30 rounded-3xl p-8 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(223,22,89,0.1)]"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 text-vaapty-pink pointer-events-none">
              <Check size={150} strokeWidth={1} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="bg-gradient-to-r from-vaapty-pink to-vaapty-orange p-2 rounded-lg text-white">
                <Check size={24} />
              </span>
              Vender com a Vaapty
            </h3>
            <ul className="space-y-6 relative z-10">
              {advantages.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-white font-medium">
                  <Check className="text-vaapty-orange shrink-0 mt-0.5" size={20} strokeWidth={3} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
