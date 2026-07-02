import { motion } from 'motion/react';
import { Clock, ShieldCheck, DollarSign, FileText } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Clock className="w-8 h-8 text-vaapty-pink" />,
      title: 'Venda Super Rápida',
      description: 'Seu carro avaliado e vendido em tempo recorde. Nosso processo leva em média apenas 40 minutos.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-vaapty-pink" />,
      title: 'Pagamento à Vista',
      description: 'Sem enrolação. O dinheiro cai direto na sua conta PIX assim que o negócio for fechado com segurança.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-vaapty-pink" />,
      title: 'Segurança Total',
      description: 'A maior franquia de veículos do Brasil garante uma transação 100% segura e transparente para você.'
    },
    {
      icon: <FileText className="w-8 h-8 text-vaapty-pink" />,
      title: 'Zero Burocracia',
      description: 'Cuidamos de toda a documentação, transferência e idas ao cartório. Você não se preocupa com nada.'
    }
  ];

  return (
    <section id="vantagens" className="py-24 sm:py-32 bg-vaapty-purple-dark relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[300px] sm:h-[400px] bg-vaapty-pink/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-24 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Por que vender na <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange">Vaapty</span>?
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
            Nosso método foi criado para oferecer a melhor experiência na venda do seu veículo. Esqueça o estresse de negociar com desconhecidos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-vaapty-purple/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-vaapty-pink/20 hover:border-vaapty-pink/50 transition-all duration-300 hover:-translate-y-2 group shadow-[0_0_30px_rgba(223,22,89,0.05)] hover:shadow-[0_15px_40px_rgba(223,22,89,0.2)] relative overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-vaapty-pink/0 via-vaapty-pink to-vaapty-pink/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-vaapty-pink/20 to-vaapty-orange/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-vaapty-pink/30 border border-vaapty-pink/20 group-hover:border-vaapty-pink/40 shadow-lg shadow-vaapty-pink/10 shrink-0">
                {feature.icon}
              </div>
              
              <h3 className="text-white font-bold text-xl sm:text-2xl mb-4 group-hover:text-vaapty-pink transition-colors">{feature.title}</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
