import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'

export default function useLocoScroll(containerRef) {
  useEffect(() => {
    if (!containerRef?.current) return

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      lerp: 0.08,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    })

    // manejar enlaces con data-scroll-to
    const onClick = (e) => {
      const target = e.target.closest('[data-scroll-to]')
      if (target?.getAttribute) {
        const href = target.getAttribute('href')
        if (href?.startsWith('#')) {
          e.preventDefault()
          const id = href.slice(1)
          const el = document.getElementById(id)
          if (el) scroll.scrollTo(el, { offset: -80 })
        }
      }
    }
    document.addEventListener('click', onClick)

    // actualizar al cambiar tamaño
    const onResize = () => scroll.update()
    window.addEventListener('resize', onResize)

    // limpiar
    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      scroll.destroy()
    }
  }, [containerRef])
}
