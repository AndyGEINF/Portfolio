export const projects = [
  {
    slug: 'proyecto-1',
    title: 'Proyecto 1',
    description: 'Descripción breve del Proyecto 1 con foco en valor y tecnología.',
    website: '', // opcional
    video: '', // URL de video (YouTube/Vimeo/archivo) opcional
    accent: '#60A5FA',
  },
  {
    slug: 'proyecto-2',
    title: 'Proyecto 2',
    description: 'Descripción breve del Proyecto 2.',
    website: '',
    video: '',
    accent: '#F472B6',
  },
]

export function getProject(slug) {
  return projects.find(p => p.slug === slug)
}
