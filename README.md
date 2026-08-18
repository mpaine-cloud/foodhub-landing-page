# FoodHub Landing Page by Rubika

Plataforma definitiva de costeo y optimización de precios para el sector gastronómico (restaurantes, pastelerías y cafeterías). Permite calcular costos de recetas, mermas, comisiones de venta (POS), mano de obra y proyectar márgenes reales en tiempo real.

## Características

- 🧮 **Calculadora Interactiva**: Simulación dinámica de costos netos unitarios, comisiones POS, IVA e impacto en el margen real.
- 📦 **Gestor de Insumos y Recetas**: Carga y actualización de ingredientes con recálculo automático.
- 🎨 **Diseño Moderno y Premium**: Interfaz fluida desarrollada con TailwindCSS v4, TypeScript y animaciones suaves usando Motion.
- 🚀 **Optimizado para SEO**: Incluye etiquetas meta estructuradas y esquemas JSON-LD (SoftwareApplication y FAQPage) para posicionamiento.

## Estructura del Proyecto

- `src/components/`: Componentes modulares de la interfaz (Hero, Navbar, CalculatorPreview, Pricing, FAQ, etc.).
- `src/App.tsx`: Ensamblado de secciones de la landing page.
- `src/index.css`: Directivas de TailwindCSS v4 y variables globales.
- `package.json`: Configuración de dependencias y scripts de construcción.

## Ejecución Local

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm

### Pasos para iniciar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

3. **Construir para producción:**
   ```bash
   npm run build
   ```

