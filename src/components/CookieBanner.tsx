import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacyPolicy: () => void;
}

export default function CookieBanner({ onOpenPrivacyPolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or declined cookies
    const cookieConsent = localStorage.getItem('vaapty_cookie_consent');
    if (!cookieConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vaapty_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('vaapty_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-4 sm:p-6 pb-6 sm:pb-8 pointer-events-none"
        >
          <div className="max-w-5xl mx-auto pointer-events-auto">
            <div className="bg-[#16161A]/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center gap-6">
              
              <div className="flex items-start sm:items-center gap-4 flex-1">
                <div className="bg-vaapty-pink/10 p-3 rounded-full hidden sm:block shrink-0">
                  <Cookie className="text-vaapty-pink" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                    <Cookie className="text-vaapty-pink sm:hidden" size={20} />
                    Sua Privacidade Importa
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Utilizamos cookies para oferecer a melhor experiência, analisar o tráfego do site e personalizar conteúdo. 
                    Ao continuar navegando, você concorda com nossa{' '}
                    <button 
                      onClick={onOpenPrivacyPolicy}
                      className="text-vaapty-orange hover:text-vaapty-pink underline underline-offset-2 transition-colors font-medium"
                    >
                      Política de Privacidade e LGPD
                    </button>.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                <button
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-5 py-2.5 rounded-lg border border-white/10 text-slate-300 font-medium text-sm hover:bg-white/5 hover:text-white transition-colors"
                >
                  Recusar
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-2.5 rounded-lg bg-gradient-to-r from-vaapty-pink to-vaapty-orange text-white font-bold text-sm hover:opacity-90 shadow-lg shadow-vaapty-pink/20 transition-all hover:-translate-y-0.5"
                >
                  Aceitar Cookies
                </button>
              </div>
              
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
