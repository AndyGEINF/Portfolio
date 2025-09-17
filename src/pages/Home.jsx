import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

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

export default function Home() {
  return (
    <>
      <section id="hero" className="relative h-screen">
        <div className="absolute inset-0 -z-10">
          <Spline scene="https://prod.spline.design/AkTzU1OUqQjfvEmT/scene.splinecode" />
        </div>
      </section>

      <Section id="about" title="Sobre mí">
        <p>
          Soy un desarrollador front-end enfocado en UI, rendimiento y experiencias
          inmersivas. Me gustan React, TypeScript, Tailwind y el diseño de interacción.
        </p>
      </Section>

      <Section id="work" title="Proyectos">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {["proyecto-1","proyecto-2","proyecto-3","proyecto-4"].map((slug, i) => (
            <motion.li key={slug} className="p-6 rounded-lg border border-white/10 bg-white/5"
              whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
              <h3 className="text-2xl font-semibold">Proyecto {i + 1}</h3>
              <p className="mt-2 text-[var(--muted)]">Descripción breve del proyecto.</p>
              <Link className="mt-4 inline-block text-brand-500 hover:text-brand-700" to={`/proyecto/${slug}`}>Ver detalle →</Link>
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
    </>
  )
}
