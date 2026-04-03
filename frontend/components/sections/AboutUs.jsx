"use client"

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useInView from '@/hooks/useInView'

const highlights = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Bathrooms Remodeled' },
  { value: '98%', label: 'Customer Satisfaction' },
]

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} id="about" className="scroll-mt-28 md:scroll-mt-32 py-24 bg-gradient-to-b from-slate-50 via-blue-50/40 to-white">
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

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue-hover hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          {/* Bathroom Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-brand-border aspect-[4/3]">
              <Image
                src="/images/landing/bathroom_1.jpg"
                alt="Premium bathroom remodel by Happy Casa"
                fill
                className="object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3 px-4 py-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 14h16" /><path d="M5 14v2a4 4 0 004 4h6a4 4 0 004-4v-2" /><path d="M6 14V7a3 3 0 016 0" /><path d="M7 20v1.5M17 20v1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-text uppercase tracking-wide">Bathroom Remodeling</p>
                  <p className="text-xs text-brand-text-secondary">Premium Quality · Expert Craftsmanship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
