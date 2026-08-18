import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <div className="bg-gradient-to-b from-[#1e1b4b] to-[#0f0c29] py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-96 h-96 bg-[#10b981] rounded-full mix-blend-multiply filter blur-[128px] opacity-20"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-3xl font-extrabold text-white sm:text-5xl mb-6 leading-tight">
          Deja de adivinar tus márgenes. <br /> Comienza a controlarlos hoy.
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          Únete a cientos de restaurantes, pastelerías y cafeterías que ya están maximizando su rentabilidad con FoodHub by Rubika.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://wa.me/56967220978"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-transform hover:-translate-y-1"
          >
            Agenda tu diagnóstico gratuito
            <ArrowRight className="ml-2 -mr-1 w-5 h-5" />
          </a>
        </div>
        <p className="mt-6 text-sm text-indigo-200">
          Sin compromisos. Conversamos 30 minutos y descubrimos si podemos ayudarte.
        </p>
      </div>
    </div>
  );
}
