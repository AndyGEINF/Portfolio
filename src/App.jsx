import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import useLocoScroll from './hooks/useLocoScroll.js'

function Section({ id, title, children }) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-500">{title}</h2>
        <div className="text-lg text-gray-700 dark:text-gray-200">
          {children}
        </div>
      </motion.div>
    </section>
  )
}

export default function App() {
  const containerRef = useRef(null)
  useLocoScroll(containerRef)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div ref={containerRef} data-scroll-container className="bg-[var(--bg)] text-[var(--fg)]">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="font-semibold">Mi Portfolio</a>
          <div className="flex gap-4 text-sm">
            <a href="#about" data-scroll-to>Sobre mí</a>
            <a href="#work" data-scroll-to>Proyectos</a>
            <a href="#contact" data-scroll-to>Contacto</a>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0 -z-10">
          {/* Escena Spline principal */}
          <Spline scene="https://prod.spline.design/AkTzU1OUqQjfvEmT/scene.splinecode" />
        </div>
        {/* Hero sin copy para que Spline sea el protagonista */}
      </section>

      <Section id="about" title="Sobre mí">
        <p>
          Soy un desarrollador front-end enfocado en UI, rendimiento y experiencias
          inmersivas. Me gustan React, TypeScript, Tailwind y el diseño de interacción.
        </p>
      </Section>

      <Section id="work" title="Proyectos">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <motion.li key={i} className="p-6 rounded-lg border border-white/10 bg-white/5"
              whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
              <h3 className="text-2xl font-semibold">Proyecto {i + 1}</h3>
              <p className="mt-2 text-[var(--muted)]">Descripción breve del proyecto con foco en valor y tecnología.</p>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contacto">
        <p>
          ¿Tienes una idea? Escríbeme a <a className="underline" href="mailto:tu.email@ejemplo.com">tu.email@ejemplo.com</a> o por
          <a className="underline ml-1" href="#">LinkedIn</a>.
        </p>
      </Section>

      <footer className="py-10 text-center opacity-70">
        © {new Date().getFullYear()} — Hecho con React, Tailwind, Framer Motion y Spline
      </footer>
    </div>
  )
}
