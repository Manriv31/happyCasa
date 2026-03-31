import { useRef } from 'react'
import useInView from '../../hooks/useInView'

const services = [
  {
    title: 'Bathroom Remodeling',
    description:
      'Transform your bathroom into a luxury retreat with our expert tiling, fixtures, and complete renovation services.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14h16" />
        <path d="M5 14v2a4 4 0 004 4h6a4 4 0 004-4v-2" />
        <path d="M6 14V7a3 3 0 016 0" />
        <path d="M7 20v1.5M17 20v1.5" />
      </svg>
    ),
  },
  {
    title: 'Kitchen Renovation',
    description:
      'Modernize your kitchen with custom cabinetry, durable countertops, and functional layouts designed for your lifestyle.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 12h18" />
        <circle cx="8" cy="7.5" r="1.5" />
        <circle cx="16" cy="7.5" r="1.5" />
        <rect x="7" y="15" width="10" height="3" rx="1" />
      </svg>
    ),
  },
  {
    title: 'General Repairs',
    description:
      'From minor leaks to major fixes, our skilled team handles all your home maintenance and repair needs.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Plumbing & Electrical',
    description:
      'Safe and reliable plumbing and electrical services for your peace of mind, handled by certified professionals.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 10 5 14a7 7 0 0014 0c0-4-7-12-7-12z" />
        <path d="M13 11l-2 3h3l-2 3" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Painting & Finishing',
    description:
      'Give your home a fresh, polished look with our professional interior and exterior painting services.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="14" height="6" rx="2" />
        <path d="M18 5h2v4a1 1 0 01-1 1h-1" />
        <path d="M12 8v4" />
        <rect x="10" y="12" width="4" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Interior Design',
    description:
      'Personalized design consultations to bring your vision to life and maximize every inch of your space.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section ref={ref} id="services" className="scroll-mt-28 md:scroll-mt-32 py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            What We Offer
          </h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
          <p className="mt-6 text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Comprehensive home improvement solutions tailored to your needs.
            From minor repairs to complete transformations.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 border border-brand-border flex flex-col items-center text-center group hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-bg group-hover:bg-brand-yellow shadow-sm transition-colors duration-300 mb-6">
                <div className="text-brand-yellow group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-text mb-3">
                {service.title}
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
