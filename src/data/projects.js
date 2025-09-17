export const projects = [
  {
    slug: 'proyecto-1',
    title: 'Proyecto 1',
    description: 'SPA animada con énfasis en movilidad y microinteracciones.',
    website: 'https://ejemplo-proyecto1.com',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    accent: '#60A5FA',
    background: 'radial-gradient(1200px 600px at 10% 10%, rgba(96,165,250,.2), transparent), #0b0b0b',
  },
  {
    slug: 'proyecto-2',
    title: 'Proyecto 2',
    description: 'Dashboard con gráficos en tiempo real y theming dinámico.',
    website: '',
    video: 'https://player.vimeo.com/video/76979871',
    accent: '#F472B6',
    background: 'linear-gradient(135deg, rgba(244,114,182,.15), transparent), #0a0a0a',
  },
  {
    slug: 'proyecto-3',
    title: 'Proyecto 3',
    description: 'E-commerce con checkout optimizado y accesibilidad AA.',
    website: 'https://ejemplo-proyecto3.com',
    video: '',
    accent: '#34D399',
    background: 'radial-gradient(800px 400px at 80% 20%, rgba(52,211,153,.18), transparent), #0a0a0a',
  },
  {
    slug: 'proyecto-4',
    title: 'Proyecto 4',
    description: 'Landing 3D con integración Spline y scroll cinematográfico.',
    website: '',
    video: '',
    accent: '#F59E0B',
    background: 'linear-gradient(180deg, rgba(245,158,11,.15), transparent), #0a0a0a',
  },
]

export function getProject(slug) {
  return projects.find(p => p.slug === slug)
}
