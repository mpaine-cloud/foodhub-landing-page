const fs = require('fs');

const fileContent = `import { CheckCircle2 } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Software FoodHub',
      description: 'Ideal para quienes ya tienen sus recetas estandarizadas y buscan automatización.',
      price: '$49.000',
      period: '/mes',
      features: [
        'Acceso completo a la Web App',
        'Carga ilimitada de insumos',
        'Calculadora de costos en tiempo real',
        'Gestor de recetas (hasta 100)',
        'Soporte por WhatsApp'
      ],
      cta: 'Comenzar con la App',
      highlighted: false
    },
    {
      name: 'Plan Crecimiento',
      description: 'Nuestra solución más elegida. Incluye asesoría para levantamiento de procesos y costeo.',
      price: '$500.000',
      period: '/pago único',
      setupFee: '+ $49.000/mes por el software',
      features: [
        'Todo lo del plan Software',
        'Levantamiento completo de procesos',
        'Análisis de costeo',
        'Soporte por WhatsApp'
      ],
      cta: 'Agendar Diagnóstico',
      highlighted: true,
      badge: 'Recomendado'
    },
    {
      name: 'Consultoría Integral',
      description: 'Estrategia de precios y rediseño de valor para maximizar tu rentabilidad.',
      price: 'A medida',
      period: '/pago único',
      setupFee: '+ $49.000/mes por el software',
      features: [
        'Todo lo del plan Crecimiento',
        'Auditoría inicial de percepción y valor',
        'Rediseño de precios (Economía Conductual)',
        'Soporte prioritario por WhatsApp'
      ],
      cta: 'Contactar Ventas',
      highlighted: false
    }
  ];

  return (
    <div id="precios" className="py-24 bg-gradient-to-b from-[#0f0c29] to-[#1e1b4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Inversión que se paga sola con tu nuevo margen
          </h2>
          <p className="mt-4 text-xl text-indigo-200">
            Elige el plan que mejor se adapte a la etapa de tu negocio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={\`rounded-3xl p-8 relative flex flex-col \${
                plan.highlighted 
                  ? 'bg-gradient-to-b from-indigo-600 to-[#1e1b4b] text-white shadow-2xl scale-105 border border-indigo-500 z-10' 
                  : 'bg-[#1e1b4b] text-white shadow-sm border border-[#302b63]'
              }\`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-[#10b981] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={\`text-2xl font-bold mb-2 text-white\`}>
                  {plan.name}
                </h3>
                <p className={\`text-sm min-h-[3.5rem] \${plan.highlighted ? 'text-indigo-200' : 'text-indigo-300'}\`}>
                  {plan.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline flex-wrap">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={\`ml-2 text-lg \${plan.highlighted ? 'text-indigo-200' : 'text-indigo-400'}\`}>{plan.period}</span>
                </div>
                {plan.setupFee && (
                  <div className={\`mt-3 text-sm font-medium \${plan.highlighted ? 'text-[#10b981] bg-[#10b981]/10 px-3 py-1.5 rounded-lg inline-block border border-[#10b981]/20' : 'text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-lg inline-block border border-emerald-400/20'}\`}>
                    {plan.setupFee}
                  </div>
                )}
              </div>
              
              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className={\`w-5 h-5 mr-3 flex-shrink-0 \${plan.highlighted ? 'text-[#10b981]' : 'text-indigo-400'}\`} />
                    <span className={plan.highlighted ? 'text-gray-100' : 'text-indigo-100/90'}>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={\`w-full py-4 px-6 rounded-xl font-bold transition-all \${
                  plan.highlighted
                    ? 'bg-[#10b981] hover:bg-emerald-400 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'bg-[#302b63] hover:bg-[#403982] text-white'
                }\`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/components/Pricing.tsx', fileContent);
