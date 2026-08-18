import { ArrowRight, TrendingUp, PieChart, LineChart } from 'lucide-react';

export function RubikaAlliance() {
  return (
    <section className="py-24 bg-[#1e1b4b] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff9000] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#ff9000]/10 border border-[#ff9000]/20 mb-8">
              <span className="text-[#ffaa33] text-sm font-bold tracking-wide uppercase">Alianza Estratégica</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              Respaldado por la experiencia de{' '}
              <span style={{ fontFamily: "'Montserrat', sans-serif" }} className="text-[#ff9000]">Rubika Networking</span>
            </h2>
            <p className="text-lg text-indigo-200 mb-8 leading-relaxed">
              FoodHub nace de la necesidad de aplicar inteligencia de negocios real al sector gastronómico. En alianza con Rubika, integramos años de experiencia en levantamiento de procesos, consultoría financiera y estrategias de crecimiento.
            </p>
            <ul className="space-y-4 mb-10">
              {['Metodologías comprobadas de optimización', 'Estrategias de Behavioral Economics', 'Consultoría experta en operaciones gastronómicas'].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ff9000]/20 flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#ff9000]"></div>
                  </div>
                  <span className="text-indigo-100">{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="https://www.rubikanetworking.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#ffaa33] font-bold hover:text-[#ff9000] transition-colors group"
            >
              Conoce más sobre Rubika
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="relative">
            <div className="max-w-md mx-auto relative rounded-3xl bg-[#0f0c29] border border-[#302b63] shadow-2xl overflow-hidden p-8 text-left">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-indigo-300 text-sm font-medium mb-1">Impacto Promedio</p>
                  <h3 className="text-white text-xl font-bold">Crecimiento de Margen</h3>
                </div>
                <div className="p-3 bg-[#ff9000]/10 rounded-xl border border-[#ff9000]/20">
                  <TrendingUp className="w-6 h-6 text-[#ff9000]" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1e1b4b] rounded-2xl p-5 border border-[#302b63]">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-indigo-200 text-sm">Margen Bruto (Antes)</span>
                    <span className="text-white font-bold text-lg">35%</span>
                  </div>
                  <div className="w-full bg-[#0f0c29] rounded-full h-2.5">
                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: '35%' }}></div>
                  </div>
                </div>

                <div className="bg-[#1e1b4b] rounded-2xl p-5 border border-[#ff9000]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff9000] rounded-full mix-blend-multiply filter blur-[40px] opacity-20"></div>
                  <div className="flex justify-between items-end mb-2 relative z-10">
                    <span className="text-white font-medium text-sm">Margen (FoodHub + Rubika)</span>
                    <span className="text-[#ff9000] font-bold text-2xl">52%</span>
                  </div>
                  <div className="w-full bg-[#0f0c29] rounded-full h-2.5 relative z-10">
                    <div className="bg-[#ff9000] h-2.5 rounded-full" style={{ width: '52%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-[#1e1b4b] rounded-xl p-4 border border-[#302b63]">
                  <PieChart className="w-5 h-5 text-indigo-400 mb-2" />
                  <p className="text-white font-bold text-lg">100%</p>
                  <p className="text-indigo-300 text-xs mt-1">Visibilidad de costos</p>
                </div>
                <div className="bg-[#1e1b4b] rounded-xl p-4 border border-[#302b63]">
                  <LineChart className="w-5 h-5 text-[#10b981] mb-2" />
                  <p className="text-white font-bold text-lg">+2.5x</p>
                  <p className="text-indigo-300 text-xs mt-1">Retorno de inversión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
