# Instrucciones para el frontend para el proyecto - Happycasa

## Descripción
Este proyecto incluye la creacion de una landing page para la empresaa llamada Happycasa, lo que se busca principalemente es tener un sitio web moderno, diseño bien cuidado, responsive para cualquier tipo de dispositivo, y rapido.

## Stack tecnológico
- Frontend: Next.js (App Router) con React.js
- Estilos: Tailwind CSS v4

## Organizacion en la estructura de carpetas
- `app/`: App Router de Next.js (layouts, páginas, metadata SEO)
  - `layout.js`: Layout raíz con TopHeader, Header, Footer y metadata SEO
  - `page.js`: Página principal (Home)
  - `globals.css`: Estilos globales y configuración de Tailwind
- `components/`: Componentes reutilizables de la aplicación. (Ejemplo: Header, Footer, etc.)
  - `sections/`: Secciones de la landing (Hero, AboutUs, Services, Testimonials)
  - `ui/`: Componentes de UI (MascotShowcase, RoomScenes)
- `hooks/`: Custom hooks (useInView)
- `public/`: Recursos estáticos (imágenes, logos, favicon)
  - `images/landing/`: Imágenes de la landing
  - `images/logos/`: Logos y mascota

## Convenciones Next.js
- Componentes que usan hooks (useState, useEffect, useRef) DEBEN tener `"use client"` al inicio
- Componentes sin hooks son Server Components por defecto (mejor para SEO)
- Usar `next/image` para imágenes optimizadas
- Usar `next/link` para navegación interna
- Las imágenes en `public/` se referencian con rutas absolutas: `/images/logos/logo.svg`
- Los alias `@/*` apuntan a la raíz del proyecto

## Notas adicionales
- Es obligatorio para cada apartado visual que se cree seguir las reglas de estilo y diseño establecidas en el documento de diseño (design.instructions.md).