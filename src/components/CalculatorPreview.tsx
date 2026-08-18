import React, { useState } from 'react';

export function CalculatorPreview() {
  const [rendimiento, setRendimiento] = useState(24);
  const [makeUp, setMakeUp] = useState(5);
  const [manoDeObra, setManoDeObra] = useState(1500);
  const [packaging, setPackaging] = useState(800);
  const [margenObjetivo, setMargenObjetivo] = useState(40);
  const [comisionPos, setComisionPos] = useState(1.9);
  const [precioVentaReal, setPrecioVentaReal] = useState(850);

  const [ingredients, setIngredients] = useState([
    { id: 1, name: 'Harina sin polvos', cant: 0.5, uni: 'kg', cost: 1100 },
    { id: 2, name: 'Mantequilla', cant: 0.25, uni: 'kg', cost: 8990 },
    { id: 3, name: 'Azúcar flor', cant: 0.15, uni: 'kg', cost: 1840 },
  ]);

  const updateIngredient = (id: number, field: string, value: string) => {
    setIngredients(ingredients.map(ing => {
      if (ing.id !== id) return ing;
      if (field === 'name' || field === 'uni') return { ...ing, [field]: value };
      return { ...ing, [field]: parseFloat(value) || 0 };
    }));
  };

  const removeIngredient = (id: number) => {
    setIngredients(ingredients.filter(ing => ing.id !== id));
  };

  const addIngredient = () => {
    const newId = Math.max(0, ...ingredients.map(i => i.id)) + 1;
    setIngredients([...ingredients, { id: newId, name: 'Nuevo ingrediente', cant: 1, uni: 'kg', cost: 1000 }]);
  };

  // Calculations
  const costoInsumos = ingredients.reduce((sum, ing) => sum + (ing.cant * ing.cost), 0);
  const costoInsumosConMakeUp = costoInsumos * (1 + makeUp / 100);
  const costoLote = costoInsumosConMakeUp + manoDeObra + packaging;
  const costoUnitario = rendimiento > 0 ? costoLote / rendimiento : 0;
  
  const precioSugeridoNeto = margenObjetivo < 100 ? costoUnitario / (1 - margenObjetivo / 100) : 0;
  const ivaBase = precioSugeridoNeto * 0.19;
  const precioConIvaSinPos = precioSugeridoNeto + ivaBase;
  
  const factorPos = 1 - (comisionPos / 100) * 1.19;
  const precioVentaSugerido = factorPos > 0 ? precioConIvaSinPos / factorPos : 0;
  
  const posSugerido = precioVentaSugerido * (comisionPos / 100);
  const posIvaSugerido = posSugerido * 0.19;
  const margenValorSugerido = precioSugeridoNeto - costoUnitario;
  
  // Real margins
  const precioNetoReal = (precioVentaReal * factorPos) / 1.19;
  const margenRealValor = precioNetoReal - costoUnitario;
  const margenRealPorcentaje = precioNetoReal > 0 ? (margenRealValor / precioNetoReal) * 100 : 0;

  const formatMoney = (val: number) => Math.round(val).toLocaleString('es-CL');

  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200 text-sm font-sans flex flex-col h-full">
      {/* Browser Header */}
      <div className="bg-[#f3f3f3] px-4 py-3 flex items-center border-b border-gray-200">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="mx-auto bg-white border border-gray-200 rounded-md px-4 py-1 flex items-center text-xs text-gray-500 w-1/2 justify-center shadow-sm">
          <span className="truncate">foodhub.app/calculadora</span>
        </div>
      </div>

      {/* App Top Nav */}
      <div className="bg-[#0f0c29] text-white px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-md flex items-center justify-center transform rotate-45">
            <div className="w-3 h-3 bg-white rounded-sm transform -rotate-45"></div>
          </div>
          <span className="font-bold text-lg tracking-tight">FoodHub</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-lg">📦</span>
            <span className="font-medium text-sm">Insumos</span>
          </div>
          <div className="flex items-center space-x-2 bg-indigo-600 px-4 py-1.5 rounded-lg text-white">
            <span className="text-lg">🧮</span>
            <span className="font-medium text-sm">Calculadora</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <span className="text-lg">📋</span>
            <span className="font-medium text-sm">Recetas (50)</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-yellow-400 text-lg">🌙</div>
          <div className="flex items-center space-x-2 text-right">
            <div className="hidden lg:block">
              <div className="text-sm font-semibold leading-tight">Señora Juanita</div>
              <div className="text-xs text-gray-400 leading-tight">La Cocina de Juanita</div>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-indigo-500 overflow-hidden bg-indigo-900 flex items-center justify-center">
              <span className="text-xs font-bold text-white">SJ</span>
            </div>
          </div>
        </div>
      </div>

      {/* App Body */}
      <div className="flex-1 bg-gray-50 p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* Left Column: Recipe Editor */}
        <div className="lg:col-span-8 space-y-6 overflow-y-auto pr-2 custom-scrollbar">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex justify-between items-center">
            <div>
              <div className="flex items-center space-x-2 text-lg font-bold text-gray-800">
                <span>✏️</span>
                <span>Galletas de Mantequilla</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">ID 07772353-5a28-4fe0-9d41-e951ff9bdc82</div>
            </div>
            <div className="flex space-x-3">
              <button 
                onClick={() => setIngredients([])}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors"
              >
                × Limpiar
              </button>
              <button className="px-4 py-2 bg-[#10b981] rounded-lg text-white font-medium hover:bg-[#059669] transition-colors flex items-center space-x-2">
                <span>💾</span>
                <span>Actualizar</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-5 border-b border-gray-100">
              <div className="col-span-2">
                <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Nombre del producto</div>
                <div className="text-xl font-bold text-gray-800">Galletas de Mantequilla</div>
              </div>
              <div className="flex space-x-6 justify-end">
                <div className="text-center">
                  <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Rendimiento (Uni)</div>
                  <input 
                    type="number"
                    value={rendimiento}
                    onChange={(e) => setRendimiento(Number(e.target.value))}
                    className="text-2xl font-bold text-indigo-600 bg-indigo-50 py-1 px-4 rounded-lg inline-block w-24 text-center border border-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Costo Total Lote</div>
                  <div className="text-xl font-bold text-gray-800">${formatMoney(costoLote)}</div>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="grid grid-cols-12 gap-2 text-xs font-bold text-gray-400 uppercase tracking-wide mb-3 px-2">
                <div className="col-span-5">Ingrediente</div>
                <div className="col-span-2 text-center">Cant.</div>
                <div className="col-span-1 text-center">Uni.</div>
                <div className="col-span-2 text-right">$/Uni</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              
              <div className="space-y-3">
                {ingredients.map((ing) => (
                  <div key={ing.id} className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-5">
                      <input 
                        type="text" 
                        value={ing.name}
                        onChange={(e) => updateIngredient(ing.id, 'name', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white" 
                      />
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="number" 
                        value={ing.cant}
                        step="0.01"
                        onChange={(e) => updateIngredient(ing.id, 'cant', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 text-center text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white" 
                      />
                    </div>
                    <div className="col-span-1">
                      <input 
                        type="text" 
                        value={ing.uni}
                        onChange={(e) => updateIngredient(ing.id, 'uni', e.target.value)}
                        className="w-full bg-transparent text-center text-gray-500 font-medium focus:outline-none" 
                      />
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="number" 
                        value={ing.cost}
                        onChange={(e) => updateIngredient(ing.id, 'cost', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-2 py-2 text-right text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white" 
                      />
                    </div>
                    <div className="col-span-2 flex items-center justify-between pl-2">
                      <span className="font-semibold text-gray-800">${formatMoney(ing.cant * ing.cost)}</span>
                      <button onClick={() => removeIngredient(ing.id)} className="text-red-400 hover:text-red-600 font-bold px-2 text-lg transition-colors">×</button>
                    </div>
                  </div>
                ))}
              </div>
              
              <button onClick={addIngredient} className="mt-4 text-indigo-600 font-semibold text-sm hover:text-indigo-800 transition-colors px-2 inline-flex items-center">
                <span className="text-lg mr-1">+</span> Agregar ingrediente
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Column: Cost Structure */}
        <div className="lg:col-span-4 h-full">
          <div className="bg-[#1e1b4b] text-white rounded-xl shadow-lg border border-[#302b63] overflow-hidden flex flex-col h-full">
            <div className="p-5 border-b border-[#302b63]">
              <h3 className="text-lg font-bold mb-1">Estructura de Costo</h3>
              <p className="text-indigo-300 text-xs">Ajusta los valores para simular</p>
            </div>
            
            <div className="p-5 flex-1 flex flex-col overflow-y-auto custom-scrollbar">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-indigo-200 text-xs">MAKE UP / SEGURIDAD</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-400 text-xs">%</span>
                    <input 
                      type="number" 
                      value={makeUp}
                      onChange={(e) => setMakeUp(Number(e.target.value))}
                      className="bg-[#302b63] px-2 py-1.5 rounded-md text-right w-16 border border-indigo-500/30 focus:outline-none focus:border-indigo-400 text-white" 
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-indigo-200 text-xs">MANO DE OBRA (LOTE)</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-400 text-xs">$</span>
                    <input 
                      type="number" 
                      value={manoDeObra}
                      onChange={(e) => setManoDeObra(Number(e.target.value))}
                      className="bg-[#302b63] px-2 py-1.5 rounded-md text-right w-20 border border-indigo-500/30 focus:outline-none focus:border-indigo-400 text-white" 
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-indigo-200 text-xs">PACKAGING (LOTE)</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-indigo-400 text-xs">$</span>
                    <input 
                      type="number" 
                      value={packaging}
                      onChange={(e) => setPackaging(Number(e.target.value))}
                      className="bg-[#302b63] px-2 py-1.5 rounded-md text-right w-20 border border-indigo-500/30 focus:outline-none focus:border-indigo-400 text-white" 
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-t border-[#302b63] pt-5 mb-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-sm font-bold text-indigo-100">COSTO NETO UNITARIO</div>
                    <div className="text-xs text-indigo-400">(total lote / {rendimiento || 0})</div>
                  </div>
                  <div className="text-2xl font-bold">${formatMoney(costoUnitario)}</div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-200 text-xs">Margen objetivo</span>
                      <input 
                        type="number" 
                        value={margenObjetivo}
                        onChange={(e) => setMargenObjetivo(Number(e.target.value))}
                        className="bg-[#302b63] px-2 py-1 rounded border border-indigo-500/30 w-14 text-center text-xs focus:outline-none focus:border-indigo-400 text-white" 
                      />
                      <span className="text-indigo-400 text-xs">%</span>
                    </div>
                    <span className="font-medium text-emerald-400">+ ${formatMoney(margenValorSugerido)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-indigo-200 text-xs">IVA (19%)</span>
                    <span className="font-medium text-gray-300">+ ${formatMoney(ivaBase)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="text-indigo-200 text-xs">Comisión POS</span>
                      <input 
                        type="number" 
                        step="0.1"
                        value={comisionPos}
                        onChange={(e) => setComisionPos(Number(e.target.value))}
                        className="bg-[#302b63] px-2 py-1 rounded border border-indigo-500/30 w-14 text-center text-xs focus:outline-none focus:border-indigo-400 text-white" 
                      />
                      <span className="text-indigo-400 text-xs">%</span>
                    </div>
                    <span className="font-medium text-rose-300">+ ${formatMoney(posSugerido)}</span>
                  </div>
                  <div className="flex justify-between items-center pl-4 text-indigo-400 text-[10px]">
                    <span>↳ IVA 19% s/ comisión</span>
                    <span>+ ${formatMoney(posIvaSugerido)}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-[#302b63]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-center text-[10px] font-bold text-indigo-300 mb-1 uppercase tracking-wider">Precio Sugerido</div>
                    <div className="bg-[#3b3582] rounded-lg py-2 text-center shadow-inner border border-indigo-500/40">
                      <span className="text-xl font-bold">${formatMoney(precioVentaSugerido)}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-center text-[10px] font-bold text-[#10b981] mb-1 uppercase tracking-wider">Precio Real</div>
                    <div className="bg-[#1e293b] rounded-lg py-1.5 text-center border border-[#10b981]/30 flex items-center justify-center relative">
                      <span className="absolute left-3 text-[#10b981] font-bold">$</span>
                      <input 
                        type="number"
                        value={precioVentaReal}
                        onChange={(e) => setPrecioVentaReal(Number(e.target.value))}
                        className="w-full bg-transparent text-center text-xl font-bold text-[#10b981] focus:outline-none pl-6 pr-2"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4 p-2 bg-[#10b981]/10 rounded-lg border border-[#10b981]/20">
                  <span className="text-indigo-200 text-xs">Margen real con este precio: </span>
                  <span className="text-[#10b981] font-bold text-lg ml-1">{margenRealPorcentaje.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

