# Malano Landing Page

Landing page minimalista tipo Apple para servicios de importación desde China, construida con Next.js 14, React y TailwindCSS.

## 🚀 Características

- **Diseño minimalista**: Estética tipo Apple con mucho espacio en blanco y tipografías limpias
- **Paleta de colores**: Blanco (#FFFFFF), Rojo (#E63946), Negro (#000000)
- **Responsive**: Mobile-first, completamente adaptable
- **SEO optimizado**: Meta tags, Open Graph y Twitter Cards
- **Accesible**: ARIA labels, navegación por teclado, contraste WCAG AA
- **Performance**: Optimización de imágenes, lazy-loading
- **Tests**: React Testing Library configurado
- **CI/CD**: GitHub Actions para lint y tests

## 📋 Requisitos

- Node.js 20 o superior
- npm o yarn

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

## 📝 Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm start` - Servidor de producción
- `npm run lint` - Ejecutar ESLint
- `npm run format` - Formatear código con Prettier
- `npm test` - Ejecutar tests
- `npm run test:watch` - Tests en modo watch
- `npm run test:coverage` - Coverage de tests

## 🎨 Estructura del proyecto

```
├── app/
│   ├── layout.tsx          # Layout principal con metadata
│   ├── page.tsx             # Página principal
│   ├── globals.css          # Estilos globales
│   ├── privacy/             # Página de privacidad
│   └── refunds/             # Página de reembolsos
├── components/
│   ├── Header.tsx           # Header sticky con navegación
│   ├── Hero.tsx             # Sección hero
│   ├── Services.tsx         # Qué hacemos
│   ├── Metrics.tsx          # Experiencia/Autoridad
│   ├── Founder.tsx          # Founder/Equipo
│   ├── Testimonials.tsx     # Testimonios
│   ├── Process.tsx          # Proceso/Cómo funciona
│   ├── ContactForm.tsx      # Formulario de contacto
│   ├── Footer.tsx           # Footer
│   └── WhatsAppButton.tsx   # Botón flotante WhatsApp
├── __tests__/               # Tests
└── public/                  # Assets estáticos
```

## 🚀 Deploy en Vercel

1. Conecta tu repositorio con Vercel
2. Vercel detectará automáticamente Next.js
3. El deploy se realizará automáticamente en cada push a `main`

O manualmente:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 📦 Assets necesarios

Para completar la landing page, necesitarás:

- Foto del fundador (alta resolución) - colocar en `/public/founder.jpg`
- 2 videos de testimonios (MP4 o URLs de YouTube)
- Screenshots de testimonios - colocar en `/public/testimonial-screenshot*.jpg`
- Logo en SVG - colocar en `/public/logo.svg`

## 🔧 Configuración

### Variables de entorno

Crea un archivo `.env.local` si necesitas variables de entorno:

```env
NEXT_PUBLIC_SITE_URL=https://malano.vercel.app
```

### Links a actualizar

Actualiza los siguientes links en los componentes:

- WhatsApp: `components/Header.tsx`, `components/Founder.tsx`, `components/Footer.tsx`, `components/WhatsAppButton.tsx`
- Instagram: `components/Founder.tsx`, `components/Footer.tsx`

## 📄 Licencia

Privado - Todos los derechos reservados
