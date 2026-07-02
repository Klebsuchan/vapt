import { motion } from 'motion/react';

export default function BrandsCarousel() {
  const brands = [
    "Toyota", "Volkswagen", "Chevrolet", "Fiat", "Jeep", "Hyundai", 
    "Renault", "Nissan", "Honda", "Ford", "BMW", "Audi", "Mercedes-Benz", "Porsche"
  ];
  
  // Duplicate array twice to ensure smooth infinite scroll
  // By moving -50%, it seamlessly loops
  const marqueeBrands = [...brands, ...brands];

  return (
    <div className="py-8 bg-[#0A0A0C] border-y border-white/5 overflow-hidden relative">
      {/* Gradient masks for fading edges */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10"></div>
      
      <div className="flex w-max animate-marquee">
        {marqueeBrands.map((brand, idx) => (
          <div key={idx} className="flex items-center justify-center px-6 sm:px-10">
            <span className="text-slate-500/80 font-black text-xl sm:text-3xl uppercase tracking-widest whitespace-nowrap hover:text-white transition-colors duration-300">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
