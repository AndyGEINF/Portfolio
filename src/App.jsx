import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <BrowserRouter>
      <div className="bg-[var(--bg)] text-[var(--fg)] min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/20">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="font-semibold">Mi Portfolio</Link>
            <div className="flex gap-4 text-sm">
              <a href="#about" data-scroll-to>Sobre mí</a>
              <a href="#work" data-scroll-to>Proyectos</a>
              <a href="#contact" data-scroll-to>Contacto</a>
            </div>
          </nav>
        </header>

        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyecto/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>

        <footer className="py-10 text-center opacity-70">
          © {new Date().getFullYear()} — Hecho con React, Tailwind, Framer Motion y Spline
        </footer>
      </div>
    </BrowserRouter>
  )
}
