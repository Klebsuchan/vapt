import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PrivacyPolicyProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicy({ isOpen, onClose }: PrivacyPolicyProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl max-h-[85vh] bg-[#16161A] rounded-2xl sm:rounded-3xl shadow-2xl border border-white/10 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/10">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Política de Privacidade e Termos de Uso</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 custom-scrollbar">
              
              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">1. Introdução</h3>
                <p>
                  A Vaapty Passo Fundo valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">2. Coleta de Dados</h3>
                <p className="mb-2">Coletamos informações pessoais que você nos fornece voluntariamente ao utilizar nosso site, como:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  <li>Nome completo;</li>
                  <li>Número de telefone / WhatsApp;</li>
                  <li>Informações sobre o seu veículo (marca, modelo, ano, quilometragem);</li>
                  <li>Quaisquer outras informações enviadas através de nossos formulários.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">3. Uso dos Dados</h3>
                <p className="mb-2">Seus dados são utilizados exclusivamente para:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  <li>Realizar a avaliação do seu veículo;</li>
                  <li>Entrar em contato com você para agendar uma avaliação física ou apresentar propostas;</li>
                  <li>Melhorar a experiência de navegação e os serviços oferecidos;</li>
                  <li>Cumprir obrigações legais ou regulatórias.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">4. Compartilhamento de Dados</h3>
                <p>
                  A Vaapty Passo Fundo não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing. Os dados podem ser compartilhados apenas internamente entre as equipes responsáveis pela avaliação e atendimento, ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">5. Uso de Cookies</h3>
                <p>
                  Utilizamos cookies e tecnologias semelhantes para melhorar o funcionamento do nosso site, analisar o tráfego e personalizar conteúdo. Você pode gerenciar as preferências de cookies diretamente no aviso exibido ao acessar o site ou pelas configurações do seu navegador.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">6. Seus Direitos (LGPD)</h3>
                <p className="mb-2">De acordo com a LGPD, você tem o direito de:</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  <li>Confirmar a existência de tratamento de dados;</li>
                  <li>Acessar, corrigir ou atualizar seus dados;</li>
                  <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                  <li>Revogar o consentimento a qualquer momento.</li>
                </ul>
                <p className="mt-2">
                  Para exercer seus direitos, entre em contato conosco através do telefone (54) 99620-7852.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-white mb-3 text-vaapty-pink">7. Alterações nesta Política</h3>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para se manter informado sobre como protegemos suas informações.
                </p>
              </section>
              
            </div>
            
            {/* Footer */}
            <div className="p-6 sm:p-8 border-t border-white/10 bg-[#0A0A0C]">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-vaapty-pink to-vaapty-orange text-white font-bold rounded-xl hover:opacity-90 transition-opacity uppercase tracking-widest text-sm"
              >
                Estou Ciente
              </button>
            </div>
            
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
