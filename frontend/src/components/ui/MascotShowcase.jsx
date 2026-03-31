import { useState, useEffect, useRef } from 'react'
import mascot from '../../assets/logos/happycasa-mascot.svg'
import useInView from '../../hooks/useInView'
import { BathroomScene, KitchenScene, LivingRoomScene, PatioScene } from './RoomScenes'

const scenes = [
  { Component: BathroomScene, label: 'Bathroom' },
  { Component: KitchenScene, label: 'Kitchen' },
  { Component: LivingRoomScene, label: 'Living Room' },
  { Component: PatioScene, label: 'Garden' },
]

const SCENE_INTERVAL = 4500

export default function MascotShowcase() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef)

  const [hasSlidIn, setHasSlidIn] = useState(false)
  const [activeScene, setActiveScene] = useState(0)

  /* Trigger mascot slide-in once the section is visible */
  useEffect(() => {
    if (isInView && !hasSlidIn) {
      const timer = setTimeout(() => setHasSlidIn(true), 400)
      return () => clearTimeout(timer)
    }
  }, [isInView, hasSlidIn])

  /* Cycle room scenes */
  useEffect(() => {
    if (!hasSlidIn) return
    const interval = setInterval(() => {
      setActiveScene(prev => (prev + 1) % scenes.length)
    }, SCENE_INTERVAL)
    return () => clearInterval(interval)
  }, [hasSlidIn])

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-brand-border"
    >
      {/* Room backgrounds – crossfade */}
      {scenes.map(({ Component }, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === activeScene ? 1 : 0 }}
        >
          <Component />
        </div>
      ))}

      {/* Scene label pill */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm transition-opacity duration-500">
        <span className="text-[11px] font-bold text-brand-blue tracking-[0.15em] uppercase">
          {scenes[activeScene].label}
        </span>
      </div>

      {/* Scene indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {scenes.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === activeScene
                ? 'w-6 bg-brand-yellow'
                : 'w-1.5 bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Mascot – slides in from right, then floats */}
      <div
        className={`absolute bottom-0 left-1/2 z-10 transition-all duration-1000 ease-out ${
          hasSlidIn
            ? '-translate-x-1/2 opacity-100'
            : 'translate-x-[150%] opacity-0'
        }`}
      >
        <img
          src={mascot}
          alt="Happy Casa Mascot"
          className={`w-36 md:w-44 drop-shadow-xl`}
        />
      </div>
    </div>
  )
}
