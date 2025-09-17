import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProject } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = useMemo(() => getProject(slug), [slug])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
          <Link className="text-brand-500 hover:text-brand-700 underline" to="/">Volver al inicio</Link>
        </div>
      </div>
    )
  }

  const style = project.accent ? { '--accent': project.accent } : {}

  return (
    <div className="min-h-screen px-6 py-24" style={style}>
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold" style={{ color: 'var(--accent, var(--brand-500))' }}>{project.title}</h1>
          <p className="mt-4 text-[var(--muted)]">{project.description}</p>
        </header>

        {project.website && (
          <p className="mb-6">
            <a className="inline-block px-4 py-2 rounded-md bg-brand-500 hover:bg-brand-700 text-white" href={project.website} target="_blank" rel="noreferrer">Visitar sitio</a>
          </p>
        )}

        {project.video && (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 mb-8">
            {/* Puedes poner iframe YouTube/Vimeo o <video controls src=... /> */}
            {project.video.includes('youtube.com') || project.video.includes('youtu.be') ? (
              <iframe className="w-full h-full" src={project.video} title="Video de proyecto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ) : project.video.includes('vimeo.com') ? (
              <iframe className="w-full h-full" src={project.video} title="Video de proyecto" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            ) : (
              <video className="w-full h-full" src={project.video} controls />
            )}
          </div>
        )}

        <div className="mt-10">
          <Link className="text-brand-500 hover:text-brand-700 underline" to="/">← Volver</Link>
        </div>
      </div>
    </div>
  )
}
