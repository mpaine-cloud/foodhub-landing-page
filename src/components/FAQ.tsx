import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: '¿Qué pasa si mis proveedores cambian los precios todas las semanas?',
      answer: 'Esa es exactamente la principal ventaja de FoodHub. Solo necesitas actualizar el precio del insumo en el catálogo principal, y la aplicación recalculará automáticamente el costo, margen y precio sugerido de todas las recetas que lo utilicen. Nunca más tendrás costos desactualizados.'
    },
    {
      question: '¿Tengo que cambiar o modificar mis productos actuales?',
      answer: 'No. Nuestra metodología basada en Economía Conductual se enfoca en modificar la arquitectura de opciones, el empaquetado (packaging) y cómo comunicas el valor. Aumentamos la percepción de valor de lo que ya haces, para que puedas capturar más margen sin tocar la calidad de tu producto base.'
    },
    {
      question: '¿Es difícil usar la aplicación de FoodHub?',
      answer: 'Es extremadamente intuitiva. Diseñamos la interfaz para que cualquier miembro de tu equipo pueda usarla. Es tan simple como llenar un formulario, y el sistema se encarga de los cálculos de mermas, comisiones de POS, IVA y mano de obra por lote.'
    },
    {
      question: '¿Cuánto tiempo toma la implementación del Levantamiento de Procesos?',
      answer: 'Depende de la complejidad de tu negocio, pero generalmente un levantamiento inicial y la propuesta de arquitectura de precios toma entre 2 y 3 semanas. La entrega de la aplicación es inmediata.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#1e1b4b]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-xl text-indigo-200">
            Resolvemos tus dudas antes de comenzar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-[#302b63] bg-[#0f0c29] rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-white/5"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-white text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-indigo-300 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-indigo-200/80 leading-relaxed pt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
