import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Services — Happy Casa',
  description:
    'Explore the full range of home improvement services offered by Happy Casa — from bathroom remodeling and kitchen renovations to plumbing, electrical, and interior design.',
}

const services = [
  {
    title: 'Bathroom Remodeling',
    description:
      'Transform your bathroom into a luxury retreat. We handle complete renovations including tiling, fixtures, vanities, walk-in showers, and full layout redesigns.',
    details: ['Custom tile installation', 'Walk-in shower conversions', 'Vanity & fixture upgrades', 'Full waterproofing'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      'Modernize your kitchen with custom cabinetry, durable countertops, and functional layouts tailored to your cooking style and daily life.',
    details: ['Custom cabinet installation', 'Countertop replacement', 'Island additions', 'Backsplash & flooring'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      'From minor leaks to major fixes, our skilled team handles all your home maintenance needs with reliability and speed.',
    details: ['Leak & water damage repair', 'Drywall patching', 'Door & window repairs', 'Structural fixes'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Plumbing & Electrical',
    description:
      'Licensed professionals handle your plumbing and electrical work safely and up to code, giving you lasting peace of mind.',
    details: ['Pipe replacement & repair', 'Water heater installation', 'Panel upgrades', 'Outlet & lighting'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 10 5 14a7 7 0 0014 0c0-4-7-12-7-12z" />
        <path d="M13 11l-2 3h3l-2 3" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Painting & Finishing',
    description:
      'Give your home a fresh, polished look with professional painting services for interior walls, ceilings, trim, and exterior surfaces.',
    details: ['Interior & exterior painting', 'Trim & molding finishing', 'Texture & faux finishes', 'Color consulting'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      'Our design team creates personalized spaces that reflect your style, maximize functionality, and feel like home from day one.',
    details: ['Space planning & layout', 'Material & finish selection', 'Lighting design', 'Furniture coordination'],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
]

const steps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Start your journey with our AI-powered chatbot. Get instant answers and guidance tailored to your project.'
  },
  {
    number: '02',
    title: 'Get Your Quote',
    description: 'Follow the instructions and provide your measurements to receive a preliminary estimate quickly and easily.'
  },
  {
    number: '03',
    title: 'Book Your Visit',
    description: 'Schedule your on-site visit and receive confirmation from our team to plan your project day.'
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'We review every detail with you to make sure the result exceeds your expectations.'
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-[#071a40] via-[#09122f] to-[#0e2a4e] py-24 md:py-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-yellow blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between">
          {/* Text — siempre arriba en mobile, izquierda en large */}
          <div className="text-center lg:text-left pt-16 pb-4 md:pt-24 md:pb-6 lg:pt-32 lg:pb-16 lg:max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Everything Your Home
              <br />
              <span className="text-brand-yellow">Deserves</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl lg:max-w-xl leading-relaxed">
              From single-room upgrades to full-home transformations — we do it all with expertise and care.
            </p>
          </div>

          {/* Mascot — debajo del texto en mobile, derecha pegada al fondo en large */}
          <div className="flex justify-center lg:justify-end lg:self-end pointer-events-none w-full lg:w-auto">
            <Image
              src="/images/logos/png/happycasa-mascot-2.png"
              alt="Happy Casa Mascot"
              width={400}
              height={400}
              className="w-48 sm:w-64 lg:w-80 xl:w-96 h-auto mb-0"
            />
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight">
              What We Offer
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl border border-brand-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-brand-blue/20 group-hover:bg-brand-blue transition-colors duration-300" />
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white transition-colors duration-300 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>
                  <p className="text-brand-text-secondary leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-brand-text-secondary">
                        <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 bg-gradient-to-br from-[#071a40] to-[#09122f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Our Simple Process
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-px bg-white/10" />
                )}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-blue/20 border border-brand-blue/40 group-hover:bg-brand-blue transition-colors duration-300 mb-5">
                  <span className="text-2xl font-extrabold text-brand-yellow">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-gradient-to-b from-blue-50/60 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-brand-text-secondary">
            Contact us today for a free, no-obligation consultation and estimate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-lg shadow-lg hover:bg-brand-blue-hover hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/projects"
              className="px-8 py-3.5 rounded-xl bg-brand-text text-white font-semibold text-lg hover:bg-brand-text/80 transition-all duration-300 hover:-translate-y-0.5"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
