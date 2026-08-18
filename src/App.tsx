/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { RubikaAlliance } from './components/RubikaAlliance';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CalculatorPreview } from './components/CalculatorPreview';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0c29] font-sans selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <RubikaAlliance />
        <Benefits />
        <HowItWorks />
        
        {/* Web App Preview Section */}
        <section className="py-24 bg-gradient-to-b from-[#1e1b4b] to-[#0f0c29] relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-[#10b981]/10 text-[#10b981] mb-6 border border-[#10b981]/20 uppercase tracking-widest">
                Prueba interactiva
              </span>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Prueba la Calculadora FoodHub
              </h2>
              <p className="mt-4 text-xl text-indigo-200 max-w-3xl mx-auto">
                Interactúa con nuestra herramienta y descubre lo fácil que es costear una receta, integrar mermas, comisiones de venta (POS) y proyectar tu margen real en segundos. ¡Cambia los valores y mira los resultados!
              </p>
            </div>
            
            <div className="relative mx-auto max-w-6xl rounded-2xl shadow-2xl overflow-hidden border border-[#302b63] bg-[#0f0c29]">
               <div className="w-full">
                  <CalculatorPreview />
               </div>
            </div>
          </div>
        </section>
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
