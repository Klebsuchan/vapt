import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

const sales = [
  { name: "Carlos M.", car: "Honda Civic", time: "Há 15 min", price: "R$ 115.000" },
  { name: "Ana P.", car: "Jeep Compass", time: "Há 42 min", price: "R$ 138.000" },
  { name: "Ricardo T.", car: "VW Nivus", time: "Há 1 hora", price: "R$ 105.000" },
  { name: "Juliana S.", car: "Toyota Corolla", time: "Há 2 horas", price: "R$ 145.000" },
  { name: "Fernando C.", car: "Fiat Toro", time: "Há 3 horas", price: "R$ 122.000" },
];

export default function SocialProof() {
  const [currentSale, setCurrentSale] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first popup after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Set interval to rotate sales every 15 seconds (visible for 5s, hidden for 10s)
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSale((prev) => (prev + 1) % sales.length);
        setIsVisible(true);
      }, 1000); 
    }, 15000); 

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // auto hide
  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => setIsVisible(false), 5000);
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 sm:bottom-8 left-4 sm:left-8 z-[80] max-w-[320px] w-[calc(100%-2rem)] sm:w-auto"
        >
          <div className="bg-[#16161A]/95 backdrop-blur-xl border border-vaapty-pink/30 rounded-2xl p-4 shadow-[0_10px_40px_rgba(223,22,89,0.2)] flex gap-4 items-start relative overflow-hidden">
            {/* progress bar */}
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5, ease: "linear" }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-vaapty-pink to-vaapty-orange"
            />
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={14} />
            </button>

            <div className="bg-emerald-500/10 text-emerald-400 p-2 rounded-full shrink-0">
              <CheckCircle2 size={24} />
            </div>
            
            <div>
              <p className="text-slate-300 text-[13px] mb-1">
                <span className="font-bold text-white">{sales[currentSale].name}</span> acabou de vender um
              </p>
              <p className="font-black text-vaapty-orange text-lg leading-tight mb-1.5">
                {sales[currentSale].car}
              </p>
              <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400">
                <span className="bg-white/5 px-2 py-0.5 rounded text-white">{sales[currentSale].time}</span>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">PIX Realizado</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
