# Refactor: Migración de React + Vite → Next.js

## ¿Qué se hizo?

Se migró el frontend completo de **React + Vite (SPA)** a **Next.js (App Router)** para mejorar el SEO y la velocidad de carga.

---

## ¿Por qué se hizo?

React + Vite genera una **SPA (Single Page Application)** donde todo el HTML se genera en el navegador con JavaScript. Esto significa que cuando Google visita tu página, ve un HTML vacío:

```html
<div id="root"></div>
```

Con **Next.js**, el HTML llega **completamente renderizado desde el servidor**. Google ve todo el contenido directamente, lo que mejora significativamente el posicionamiento en buscadores.

Para una landing page de un negocio como Happycasa que depende de búsquedas locales ("bathroom remodeling Maryland"), esto es crítico.

---

## Estructura anterior vs nueva

### Antes (Vite + React)
```
frontend/
├── index.html          ← Entry point HTML
├── vite.config.js      ← Configuración de Vite
├── src/
│   ├── main.jsx        ← Entry point JS
│   ├── App.jsx         ← Componente raíz + Router
│   ├── index.css       ← Estilos globales
│   ├── pages/Home.jsx
│   ├── components/...
│   └── assets/...      ← Imágenes importadas con `import`
```

### Ahora (Next.js)
```
frontend/
├── next.config.mjs     ← Configuración de Next.js
├── app/
│   ├── layout.js       ← Layout raíz (reemplaza App.jsx + index.html)
│   ├── page.js         ← Página Home (ruta /)
│   └── globals.css     ← Estilos globales (misma paleta de colores)
├── components/         ← Mismos componentes, misma estructura
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── TopHeader.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Services.jsx
│   │   └── Testimonials.jsx
│   └── ui/
│       ├── MascotShowcase.jsx
│       └── RoomScenes.jsx
├── hooks/
│   └── useInView.js
└── public/
    └── images/         ← Imágenes accesibles por URL directa
        ├── landing/bathroom_1.jpg
        └── logos/
            ├── happycasa-web-logo.svg
            └── happycasa-mascot.svg
```

---

## Archivos eliminados (ya no se necesitan)

| Archivo | Razón |
|---------|-------|
| `index.html` | Next.js genera el HTML automáticamente |
| `main.jsx` | Next.js tiene su propio entry point |
| `App.jsx` | Su contenido se dividió entre `layout.js` (estructura) y `page.js` (contenido) |
| `vite.config.js` | Se reemplaza por `next.config.mjs` |
| `react-router-dom` | Next.js usa routing basado en archivos: cada archivo en `app/` es una ruta |

---

## Cambios clave en el código

### 1. `"use client"` — La diferencia más importante

En Next.js, los componentes son **Server Components** por defecto. Esto es genial para SEO porque se renderizan en el servidor.

Pero si un componente usa hooks como `useState`, `useEffect`, o `useRef`, **DEBE** tener `"use client"` en la primera línea del archivo. Sin esto, Next.js lanza un error.

**Componentes con `"use client"`:**
- `Header.jsx` — usa `useState` para el menú móvil
- `AboutUs.jsx` — usa `useRef` + `useInView`
- `Services.jsx` — usa `useRef` + `useInView`
- `Testimonials.jsx` — usa `useState` + `useRef` + `useInView`
- `MascotShowcase.jsx` — usa `useState` + `useEffect` + `useRef`
- `useInView.js` — usa `useState` + `useEffect`

**Componentes SIN `"use client"` (Server Components):**
- `TopHeader.jsx` — solo renderiza HTML estático
- `Footer.jsx` — solo renderiza HTML estático
- `Hero.jsx` — solo renderiza HTML estático
- `RoomScenes.jsx` — solo SVGs estáticos

**Esto es importante:** Los Server Components se renderizan en el servidor y llegan al navegador como HTML puro. Google los ve inmediatamente → mejor SEO.

### 2. Imágenes — De `import` a rutas públicas

**Antes (Vite):**
```jsx
import heroImage from '../../assets/landing/bathroom_1.jpg'
<img src={heroImage} />
```

**Ahora (Next.js):**
```jsx
import Image from 'next/image'
<Image src="/images/landing/bathroom_1.jpg" alt="..." width={1200} height={800} />
```

El componente `Image` de Next.js:
- Optimiza automáticamente las imágenes (WebP, compresión)
- Carga lazy por defecto
- Sirve el tamaño correcto según el dispositivo
- Mejora Core Web Vitals (métrica de Google)

Las imágenes ahora viven en `public/images/` y se acceden por URL directa.

### 3. Layout — De `App.jsx` a `layout.js`

**Antes:** `App.jsx` tenía el `BrowserRouter`, Header, Footer, y Routes todo junto.

**Ahora:** `layout.js` contiene:
- La configuración de fuentes con `next/font/google` (carga optimizada, sin FOUT)
- **Metadata SEO** (título, descripción, Open Graph) — esto antes no existía
- El TopHeader, Header, y Footer como layout compartido
- `{children}` donde se renderiza el contenido de cada página

### 4. Routing — De react-router a archivos

**Antes:** Necesitabas definir cada ruta manualmente:
```jsx
<Routes>
  <Route path="/" element={<Home />} />
</Routes>
```

**Ahora:** Cada archivo en `app/` ES una ruta automáticamente:
- `app/page.js` → ruta `/`
- `app/about/page.js` → ruta `/about` (si la creas)
- `app/services/page.js` → ruta `/services` (si la creas)

### 5. Aliases — Imports más limpios

**Antes:**
```jsx
import useInView from '../../hooks/useInView'
```

**Ahora:**
```jsx
import useInView from '@/hooks/useInView'
```

`@/` siempre apunta a la raíz del proyecto. No más contar `../../../`.

---

## SEO que ganaste con la migración

1. **Metadata nativa**: Título, descripción, y Open Graph definidos en `layout.js` → Google y redes sociales muestran tu info correctamente
2. **HTML pre-renderizado**: Todo el contenido llega en el HTML inicial, sin esperar JavaScript
3. **Imágenes optimizadas**: `next/image` sirve WebP, lazy loading, y tamaños adaptativos
4. **Fuentes optimizadas**: `next/font` carga las fuentes sin flash de texto sin estilo
5. **Build estático (SSG)**: La landing se genera como HTML puro en build time → carga instantánea

---

## Comandos

```bash
# Desarrollo (igual que antes)
npm run dev

# Build de producción
npm run build

# Previsualizar build de producción
npm start

# Lint
npm run lint
```

El dev server corre en `http://localhost:3000` (no en 5173 como Vite).

---

## Backup

El código original está en la carpeta `frontend-old/`. Una vez verificado que todo funciona correctamente, se puede eliminar.
