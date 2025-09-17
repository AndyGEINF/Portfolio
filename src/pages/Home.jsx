import Spline from '@splinetool/react-spline'

export default function Home() {
  return (
    <section id="hero" className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Sustituye por tu escena */}
        <Spline scene="https://prod.spline.design/AkTzU1OUqQjfvEmT/scene.splinecode" />
      </div>
    </section>
  )
}
