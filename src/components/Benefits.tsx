import { ShieldCheck, BrainCircuit, Clock } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      title: 'Tranquilidad financiera garantizada',
      description: 'Protege tu margen de ganancia. Deja de perder dinero cada vez que tus proveedores suben los precios. Nuestra plataforma recalcula tus costos automáticamente para que siempre sepas tu rentabilidad real.',
      icon: ShieldCheck,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      title: 'Decisiones basadas en datos, no en intuición',
      description: 'Maximiza el valor percibido por tus clientes sin cambiar el producto base. Aplicamos economía conductual para rediseñar tu menú y arquitectura de opciones, aumentando la conversión sin fricción.',
      icon: BrainCircuit,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      title: 'Recupera tu tiempo para hacer crecer tu negocio',
      description: 'Olvídate de las hojas de Excel desactualizadas y las fórmulas rotas. Concentramos todas tus recetas, mermas y comisiones de POS en un solo lugar, haciendo el trabajo pesado por ti.',
      icon: Clock,
      color: 'bg-rose-100 text-rose-600'
    }
  ];

  return (
    <div id="beneficios" className="py-24 bg-gradient-to-b from-[#1e1b4b] to-[#0f0c29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            ¿Qué ganas al implementar FoodHub?
          </h2>
          <p className="mt-4 text-xl text-indigo-200">
            No somos solo un software; somos el sistema operativo de tu rentabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#1e1b4b] rounded-2xl p-8 shadow-sm border border-[#302b63] hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all">
              <div className={`inline-flex p-4 rounded-xl ${benefit.color} mb-6`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-indigo-200/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
