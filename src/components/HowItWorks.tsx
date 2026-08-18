export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Auditoría y Levantamiento',
      description: 'Analizamos tus recetas, mermas y procesos actuales para descubrir fugas invisibles de dinero y oportunidades de mejora en tu operación.'
    },
    {
      number: '02',
      title: 'Tecnología FoodHub',
      description: 'Te entregamos nuestra Web App personalizada para costear tus recetas con precisión. Solo actualizas el precio de un insumo y todas las recetas vinculadas recalculan su costo, margen e impuestos automáticamente.'
    },
    {
      number: '03',
      title: 'Arquitectura de Precios',
      description: 'Rediseñamos tu oferta (packaging, comunicación y estructura) aplicando sesgos cognitivos para influir en la decisión de compra, validándolo con pilotos A/B.'
    }
  ];

  return (
    <div id="como-funciona" className="py-24 bg-gradient-to-b from-[#0f0c29] to-[#1e1b4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Un sistema probado en 3 simples pasos
          </h2>
          <p className="mt-4 text-xl text-indigo-200">
            Implementación rápida, sin fricciones mentales y con resultados medibles desde el primer mes.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-[#302b63] z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-xl border-4 border-[#1e1b4b] mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-indigo-200/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
