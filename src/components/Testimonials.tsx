import { XCircle } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export function Testimonials() {
  const painPoints = [
    "Tienes un Excel de recetas que nadie actualiza hace 6 meses.",
    "Cuando sube el precio de la harina, te demoras días en recalcular toda tu carta.",
    "No sabes exactamente cuánto te quitan las aplicaciones de delivery (POS) de tu margen real.",
    "Fijas los precios de tu carta mirando a la competencia en lugar de basarte en tus costos reales y en lo que realmente necesitas ganar.",
    "Vendes muchísimo todos los días, pero al llegar a fin de mes sientes que el dinero simplemente no se refleja en la cuenta del negocio.",
    "Confundes el dinero en la caja con tu ganancia real, dándote cuenta muy tarde de que el IVA y los impuestos se comieron tu rentabilidad."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="py-24 bg-gradient-to-b from-[#0f0c29] to-[#1e1b4b] text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-rose-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-rose-500/10 text-rose-400 mb-6 border border-rose-500/20 uppercase tracking-widest">
              El Problema Real
            </span>
            <h2 className="text-3xl font-extrabold sm:text-5xl mb-6 text-white tracking-tight">
              ¿Te sientes identificado con esto?
            </h2>
            <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
              La mayoría de los negocios gastronómicos pierden dinero todos los días por no tener el control de sus números.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {painPoints.map((point, index) => (
            <PainPointCard key={`pain-point-${index}`} point={point} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function PainPointCard({ point }: { point: string; key?: React.Key }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-default"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent rounded-2xl transition-opacity duration-500 blur-xl ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`bg-[#0f0c29] rounded-2xl p-6 md:p-8 border relative z-10 flex items-start h-full transition-all duration-300 ${isHovered ? 'border-rose-500/50 shadow-[0_0_30px_rgba(244,63,94,0.15)] transform -translate-y-1' : 'border-[#302b63] shadow-lg'}`}>
        
        <div className="relative mr-5 flex-shrink-0 mt-0.5">
          <div className={`absolute inset-0 bg-rose-500 rounded-full blur-md transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-20'}`}></div>
          <XCircle className={`w-8 h-8 relative z-10 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-rose-500'}`} />
        </div>
        
        <p className={`text-lg leading-relaxed font-medium transition-colors duration-300 ${isHovered ? 'text-white' : 'text-indigo-100'}`}>
          {point}
        </p>
      </div>
    </motion.div>
  );
}
