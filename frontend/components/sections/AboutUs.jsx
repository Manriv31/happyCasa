"use client"

import { useRef } from 'react'
import useInView from '@/hooks/useInView'
import MascotShowcase from '@/components/ui/MascotShowcase'

const highlights = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
]

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} id="about" className="scroll-mt-28 md:scroll-mt-32 py-24 bg-white">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
              Transforming Bathrooms,{' '}
              <span className="text-brand-blue">Transforming Homes</span>
            </h2>
            <p className="mt-6 text-brand-text-secondary text-lg leading-relaxed">
              Happy Casa specializes in premium bathroom restoration and home remodeling
              services. With over a decade of experience, we bring your vision to life
              with expert craftsmanship, quality materials, and attention to every detail.
            </p>
            <p className="mt-4 text-brand-text-secondary text-lg leading-relaxed">
              From outdated bathrooms to luxurious retreats, we handle every project with
              care and professionalism — so you can enjoy the home you&apos;ve always dreamed of.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {highlights.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-3xl md:text-4xl font-extrabold text-brand-blue">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-brand-text-secondary font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mascot Showcase */}
          <div className="flex justify-center lg:justify-end">
            <MascotShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
