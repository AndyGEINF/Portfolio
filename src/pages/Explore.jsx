import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

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

export default function Explore() {
  const four = projects.slice(0, 4)
  return (
    <>
      <Section id="about" title="Sobre mí">
        <p>
            Estudiante de cuarto año de Ingeniería Informática en la Universidad de Girona con gran capacidad de
            adaptación y trabajo en equipo. Interesado en aplicar mis conocimientos en lenguajes de programación y desarrollo
            de software en un entorno profesional.
            Busco oportunidades para ganar experiencia laboral en el sector tecnológico.
        </p>
      </Section>

      <Section id="work" title="Proyectos">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {four.map((p, i) => (
            <motion.li key={p.slug} className="p-6 rounded-lg border border-white/10 bg-white/5"
              whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
              <h3 className="text-2xl font-semibold" style={{ color: p.accent }}>{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.description}</p>
              <Link className="mt-4 inline-block text-brand-500 hover:text-brand-700" to={`/proyecto/${p.slug}`}>Ver detalle →</Link>
            </motion.li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contacto">
        <p>
          Escríbeme a <a className="underline" href="mailto:andy.m.ramon@gmail.com">andy.m.ramon@gmail.com</a> o por
          <a className="underline ml-1" href="#">LinkedIn</a>.
        </p>
      </Section>
    </>
  )
}