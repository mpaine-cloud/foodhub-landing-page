import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#0f0c29]/90 backdrop-blur-md border-b border-[#302b63]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-white tracking-tight">FoodHub <span className="text-[#ff9000] text-lg">by Rubika</span></span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#beneficios" className="text-indigo-200 hover:text-white font-medium transition-colors">Beneficios</a>
            <a href="#como-funciona" className="text-indigo-200 hover:text-white font-medium transition-colors">Cómo Funciona</a>
            <a href="#precios" className="text-indigo-200 hover:text-white font-medium transition-colors">Planes</a>
            <a 
              href="https://calendar.app.google/uKGC2Vu5tCCNSpEh6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-500 shadow-sm transition-all hover:shadow-md"
            >
              Comenzar Ahora
            </a>
          </div>

          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-indigo-200 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0c29] border-b border-[#302b63]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#beneficios" className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900/50 rounded-md">Beneficios</a>
            <a href="#como-funciona" className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900/50 rounded-md">Cómo Funciona</a>
            <a href="#precios" className="block px-3 py-2 text-base font-medium text-indigo-200 hover:text-white hover:bg-indigo-900/50 rounded-md">Planes</a>
            <div className="px-3 mt-4">
              <a href="https://calendar.app.google/uKGC2Vu5tCCNSpEh6" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500">
                Comenzar Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
