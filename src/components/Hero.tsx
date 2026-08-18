import { ArrowRight, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative bg-[#0f0c29] pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1.1, 1],
            x: ["0%", "10%", "-5%", "0%"],
            y: ["0%", "-10%", "5%", "0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/40 mix-blend-screen filter blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1.2, 1],
            x: ["0%", "-15%", "10%", "0%"],
            y: ["0%", "15%", "-5%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-rose-600/30 mix-blend-screen filter blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1.1, 1],
            x: ["0%", "15%", "-10%", "0%"],
            y: ["0%", "-15%", "10%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] right-[20%] w-[50%] h-[50%] rounded-full bg-[#ff9000]/30 mix-blend-screen filter blur-[120px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-300 mb-8 border border-indigo-500/20">
            <TrendingUp className="w-4 h-4 mr-2" />
            Software de Costeo FoodHub by Rubika
          </span>
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-6xl mb-6">
            Multiplica tus Ganancias sin Cambiar tu Producto
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-indigo-100/80 mx-auto sm:text-xl mb-10">
            Optimizamos tus costos, rediseñamos tus precios usando economía conductual y te entregamos la tecnología para que tus márgenes nunca vuelvan a caer cuando los proveedores suban sus tarifas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/56967220978"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transition-all duration-200 transform hover:-translate-y-1"
            >
              Agenda tu diagnóstico gratuito
              <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-indigo-300 bg-transparent border-2 border-indigo-500/30 hover:border-indigo-400 hover:text-white transition-all duration-200"
            >
              Descubre cómo funciona
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
