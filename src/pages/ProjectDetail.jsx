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
          <Link className="text-brand-500 hover:text-brand-700 underline" to="/explorar">Volver a explorar</Link>
        </div>
      </div>
    )
  }

  const style = {
    '--accent': project.accent || '#0ea5e9',
    '--muted': 'rgba(255,255,255,0.7)',
    background: project.background || undefined,
  }

  const isYouTube = project.video && (project.video.includes('youtube.com') || project.video.includes('youtu.be'))
  const isVimeo = project.video && project.video.includes('vimeo.com')

  return (
    <div className="min-h-screen px-6 py-24" style={style}>
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold" style={{ color: 'var(--accent)' }}>{project.title}</h1>
          <p className="mt-4 text-[var(--muted)]">{project.description}</p>
        </header>

        {project.website && (
          <p className="mb-6">
            <a className="inline-block px-4 py-2 rounded-md text-white" style={{ backgroundColor: 'var(--accent)' }} href={project.website} target="_blank" rel="noreferrer">Visitar sitio</a>
          </p>
        )}

        {project.video && (
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-white/10 mb-8">
            {isYouTube ? (
              <iframe className="w-full h-full" src={project.video} title="Video de proyecto" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            ) : isVimeo ? (
              <iframe className="w-full h-full" src={project.video} title="Video de proyecto" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
            ) : (
              <video className="w-full h-full" src={project.video} controls />
            )}
          </div>
        )}

        <div className="mt-10">
          <Link className="underline" style={{ color: 'var(--accent)' }} to="/explorar">← Volver</Link>
        </div>
      </div>
    </div>
  )
}
