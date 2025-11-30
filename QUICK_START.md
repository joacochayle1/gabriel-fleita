# 🚀 Quick Start - Deploy en Vercel

## ✅ Proyecto listo para deploy

El proyecto está completamente configurado y listo para desplegarse en Vercel.

## 📋 Pasos rápidos

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "Initial commit: Landing page Malano"
git branch -M main
git remote add origin https://github.com/tu-usuario/malano-landing.git
git push -u origin main
```

### 2. Deploy en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Haz clic en "New Project"
3. Conecta tu repositorio de GitHub
4. Vercel detectará automáticamente Next.js
5. Haz clic en "Deploy"

**¡Listo!** Tu sitio estará disponible en `https://tu-proyecto.vercel.app`

## 🔧 Antes de deployar (opcional)

### Actualizar links

Actualiza los siguientes links en los componentes:

- **WhatsApp**: `components/Header.tsx`, `components/Founder.tsx`, `components/Footer.tsx`, `components/WhatsAppButton.tsx`
  - Cambia `5491123456789` por el número real

- **Instagram**: `components/Founder.tsx`, `components/Footer.tsx`
  - Cambia `gabyfleita`, `santi`, `malano` por los handles reales

### Agregar assets

Coloca en la carpeta `/public`:

- `logo.svg` - Logo de la empresa
- `founder.jpg` - Foto del fundador (alta resolución)
- `testimonial-screenshot1.jpg` - Screenshots de testimonios
- `testimonial-screenshot2.jpg`

### Actualizar testimonios

En `components/Testimonials.tsx`, actualiza:

- URLs de videos de testimonios
- Rutas de screenshots

## 📝 Comandos útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Ejecutar tests
npm test

# Linting
npm run lint

# Formatear código
npm run format
```

## 🎨 Características implementadas

✅ Diseño minimalista tipo Apple  
✅ Paleta de colores: Blanco (#FFFFFF), Rojo (#E63946), Negro (#000000)  
✅ Header sticky con navegación  
✅ Hero con CTAs  
✅ Secciones: Qué hacemos, Experiencia, Founder, Testimonios, Proceso, Contacto  
✅ Formulario de contacto con validación  
✅ Botón WhatsApp flotante  
✅ Páginas legales (Privacidad y Reembolsos)  
✅ SEO optimizado (meta tags, Open Graph, Twitter Cards)  
✅ Accesibilidad (ARIA, navegación por teclado, contraste WCAG AA)  
✅ Responsive mobile-first  
✅ Tests con React Testing Library  
✅ CI/CD con GitHub Actions  
✅ Optimización de imágenes y performance

## 📞 Soporte

Si tienes problemas con el deploy, revisa:

- `DEPLOY.md` - Guía detallada de deploy
- `README.md` - Documentación completa del proyecto



