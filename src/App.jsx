import { useEffect, useRef } from 'react'
import useLocoScroll from './hooks/useLocoScroll.js'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

export default function App() {
  const containerRef = useRef(null)
  useLocoScroll(containerRef)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div ref={containerRef} data-scroll-container className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {!isHome && (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/explorar#about" className="font-semibold">Mi Portfolio</a>
            <div className="flex gap-4 text-sm">
              <a href="/explorar#about">Sobre mí</a>
              <a href="/explorar#work">Proyectos</a>
              <a href="/explorar#contact">Contacto</a>
            </div>
          </nav>
        </header>
      )}

      <main className={isHome ? '' : 'pt-16'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorar" element={<Explore />} />
          <Route path="/proyecto/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>

      {!isHome && (
        <footer className="py-10 text-center opacity-70">
          © {new Date().getFullYear()} — Hecho con React, Tailwind, Framer Motion y Spline
        </footer>
      )}
    </div>
  )
}
