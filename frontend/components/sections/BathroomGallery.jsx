"use client"

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useInView from '@/hooks/useInView'

const features = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    label: 'Custom Tile & Stone Work',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    label: 'Walk-in Shower Conversions',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    label: 'Luxury Vanity & Fixtures',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    label: 'Full Waterproofing & Plumbing',
  },
]

export default function BathroomGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section
      ref={ref}
      id="gallery"
      className="scroll-mt-28 md:scroll-mt-32 py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            Bathroom Transformations
            <br />
            <span className="text-brand-blue">That Inspire</span>
          </h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
          <p className="mt-6 text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Every bathroom we touch becomes a sanctuary. Explore our craftsmanship
            and discover what&apos;s possible for your home.
          </p>
        </div>

        {/* Magazine-style gallery grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          {/* Large portrait card — spans 2 rows */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group md:row-span-2 aspect-[3/4] md:aspect-auto">
            <Image
              src="/images/landing/bathroom_1.jpg"
              alt="Luxury master bathroom remodel"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-block px-3 py-1 bg-brand-yellow text-black text-xs font-bold uppercase tracking-wide rounded-full mb-2">
                Master Bathroom
              </span>
              <p className="text-white font-semibold text-sm">Full spa-inspired renovation with custom tile work</p>
            </div>
          </div>

          {/* Landscape card */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3]">
            <Image
              src="/images/landing/bathroom_1.jpg"
              alt="Walk-in shower conversion"
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-brand-blue text-white text-xs font-bold uppercase tracking-wide rounded-full mb-2">
                Walk-in Shower
              </span>
              <p className="text-white font-semibold text-sm">Modern frameless glass shower conversion</p>
            </div>
          </div>

          {/* Square card */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[4/3]">
            <Image
              src="/images/landing/bathroom_1.jpg"
              alt="Vanity and fixtures upgrade"
              fill
              className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 bg-brand-yellow text-black text-xs font-bold uppercase tracking-wide rounded-full mb-2">
                Vanity Upgrade
              </span>
              <p className="text-white font-semibold text-sm">Custom double vanity with premium fixtures</p>
            </div>
          </div>

          {/* Wide landscape card — spans 2 columns */}
          <div className="relative rounded-2xl overflow-hidden shadow-md group aspect-[16/9] lg:col-span-2">
            <Image
              src="/images/landing/bathroom_1.jpg"
              alt="Complete bathroom renovation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="pl-8 max-w-sm">
                <span className="inline-block px-3 py-1 bg-brand-yellow text-black text-xs font-bold uppercase tracking-wide rounded-full mb-3">
                  Full Renovation
                </span>
                <p className="text-white font-bold text-xl leading-tight mb-2">
                  Complete Guest Bathroom Transformation
                </p>
                <p className="text-white/80 text-sm">
                  From concept to completion — new tiling, lighting, and fixtures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature list + CTA */}
        <div
          className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-6">
              Everything Your Bathroom Deserves
            </h3>
            <ul className="space-y-4">
              {features.map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-brand-text-secondary">
                  <span className="text-brand-blue shrink-0">{f.icon}</span>
                  <span className="font-medium">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue text-white font-semibold text-base shadow-lg hover:bg-brand-blue-hover hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-base shadow-lg hover:bg-brand-yellow-hover hover:-translate-y-0.5 transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
