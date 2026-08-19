export function Footer() {
  return (
    <footer className="bg-[#0f0c29] text-indigo-200/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white tracking-tight">FoodHub <span className="text-[#ff9000] text-lg">by Rubika</span> <span className="text-indigo-300 text-xs ml-2 font-normal">un proyecto de AMIPGo</span></span>
            <p className="text-sm mt-2">Tecnología y estrategia para rentabilidad gastronómica.</p>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm border-t border-[#302b63] pt-8">
          <p>&copy; {new Date().getFullYear()} FoodHub by Rubika. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
