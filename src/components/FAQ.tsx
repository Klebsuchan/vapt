import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Quanto tempo leva a avaliação do veículo?',
      answer: 'Nossa avaliação é super rápida e leva em média apenas 40 minutos. É um processo totalmente gratuito e sem compromisso.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'O pagamento é feito à vista via PIX direto na sua conta assim que o negócio for fechado e o contrato assinado, com total segurança e transparência.'
    },
    {
      question: 'Vocês compram carros com financiamento ou dívidas?',
      answer: 'Sim! Avaliamos o seu veículo e, caso haja interesse na venda, descontamos o valor da dívida (financiamento, IPVA, multas) e pagamos a diferença para você.'
    },
    {
      question: 'Quais documentos preciso levar para a avaliação?',
      answer: 'Para a avaliação física, traga o documento do carro (CRLV) e sua CNH ou RG. Se tiver o manual e a chave reserva, traga também, pois isso pode valorizar seu veículo.'
    },
    {
      question: 'Tenho que pagar alguma taxa se não quiser vender?',
      answer: 'Não. Nossa avaliação é 100% gratuita. Você recebe nossa proposta e é totalmente livre para aceitar ou recusar, sem nenhum custo ou pressão.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#0A0A0C] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-vaapty-pink/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 sm:mb-20 relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Dúvidas <span className="text-transparent bg-clip-text bg-gradient-to-r from-vaapty-pink to-vaapty-orange">Frequentes</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre como vender seu carro de forma rápida, segura e sem burocracia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`bg-vaapty-purple/40 backdrop-blur-xl border transition-all duration-300 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(223,22,89,0.02)] ${
                  isOpen ? 'border-vaapty-pink/50' : 'border-white/10 hover:border-vaapty-pink/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full text-left px-6 py-5 sm:px-8 sm:py-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg shrink-0 transition-colors duration-300 ${isOpen ? 'bg-vaapty-pink text-white' : 'bg-white/5 text-vaapty-pink'}`}>
                      <HelpCircle size={20} />
                    </div>
                    <span className="text-white font-bold text-base sm:text-lg">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-vaapty-pink' : ''}`} 
                    size={24} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                        <div className="pl-14 text-slate-300 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
