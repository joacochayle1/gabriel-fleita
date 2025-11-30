# 🚀 Guía de Deploy en Vercel

## ⚠️ Protección del Código

**Importante**: El código ya está configurado con protecciones:

- ✅ Source maps desactivados en producción
- ✅ Código minificado y ofuscado
- ✅ Headers de seguridad configurados
- ✅ Compresión activada

**Nota**: Es imposible proteger completamente el código fuente del frontend, ya que cualquier código que se ejecuta en el navegador puede ser inspeccionado. Sin embargo, las configuraciones aplicadas dificultan significativamente la extracción del código.

## 📋 Pasos para Deploy

### 1. Preparar el repositorio

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit: Landing page Malano"

# Agregar remote (reemplaza con tu URL de GitHub)
git remote add origin https://github.com/tu-usuario/malano-landing.git

# Push a main
git push -u origin main
```

### 2. Deploy en Vercel

#### Opción A: Desde la web de Vercel (Recomendado)

1. Ve a [vercel.com](https://vercel.com) y crea una cuenta o inicia sesión
2. Haz clic en **"Add New..."** → **"Project"**
3. Conecta tu repositorio de GitHub (autoriza Vercel si es necesario)
4. Vercel detectará automáticamente Next.js
5. **Configuración del proyecto**:
   - Framework Preset: Next.js (detectado automáticamente)
   - Root Directory: `./` (dejar por defecto)
   - Build Command: `npm run build` (automático)
   - Output Directory: `.next` (automático)
6. Haz clic en **"Deploy"**

#### Opción B: Desde la CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Para producción
vercel --prod
```

### 3. Variables de entorno (opcional)

Si necesitas variables de entorno (por ejemplo, para Calendly):

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Environment Variables
3. Agrega las variables:
   - `NEXT_PUBLIC_CALENDLY_URL` (si quieres configurar la URL de Calendly)

### 4. Configuración post-deploy

Una vez deployado, verifica:

- ✅ La página carga correctamente en la URL proporcionada por Vercel
- ✅ Todos los links funcionan (Instagram, etc.)
- ✅ El calendario de Calendly se muestra correctamente
- ✅ Las páginas legales (`/privacy`, `/refunds`, `/terms`) cargan
- ✅ El sitio es responsive en mobile
- ✅ Los videos de testimonios se reproducen correctamente

### 5. Configurar dominio personalizado (opcional)

1. En el dashboard de Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Sigue las instrucciones para configurar los DNS

## Troubleshooting

### Build falla

```bash
# Verificar errores localmente
npm run build

# Verificar linting
npm run lint
```

### Imágenes no cargan

- Verifica que las imágenes estén en `/public`
- Usa rutas relativas: `/imagen.jpg` (no `./imagen.jpg`)

### Estilos no se aplican

- Verifica que TailwindCSS esté configurado correctamente
- Revisa `tailwind.config.ts` y `postcss.config.js`

## Actualizar después del deploy

Cada vez que hagas cambios:

```bash
# Hacer cambios
git add .
git commit -m "Descripción de cambios"
git push
```

Vercel detectará automáticamente el push y hará un nuevo deploy.
