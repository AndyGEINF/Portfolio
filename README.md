

Aquí tienes una propuesta optimizada para un portfolio con scroll, animaciones modernas y Spline. Ya hay un esqueleto funcional con este stack, listo para ejecutar.

Stack Tecnológico

React + Vite → Framework base rápido y modular.

TailwindCSS → Para estilos rápidos y responsive.

Framer Motion → Animaciones fluidas y transiciones.

Locomotive Scroll o GSAP ScrollTrigger → Scroll moderno y suave.

Spline (con @splinetool/react-spline) → Escenas 3D interactivas.

React Router → Si en el futuro agregas más páginas.

Context API o Zustand → Para datos globales como nombre, logo, redes, etc.

Requisitos (instalados en tu equipo)

- Git (2.x)
- Node.js 18+ (recomendado 20 LTS)
- npm (incluido con Node) — opcional: pnpm o yarn
- (Opcional) VS Code y la extensión “Tailwind CSS IntelliSense”
- (Opcional) Cuenta en Spline para obtener la URL de tu escena

Cómo correr el proyecto

1) Instalar dependencias

```powershell
npm install
```

2) Levantar servidor de desarrollo

```powershell
npm run dev
```

3) Construir para producción (opcional)

```powershell
npm run build
npm run preview
```

Notas

- Reemplaza la URL de Spline en `src/App.jsx` por tu escena (Share → Embed → copia el enlace que termina en `scene.splinecode`).
- El scroll suave se maneja con Locomotive Scroll mediante el hook `src/hooks/useLocoScroll.js`.
- Tailwind está configurado; ajusta colores/tema en `tailwind.config.js`.
