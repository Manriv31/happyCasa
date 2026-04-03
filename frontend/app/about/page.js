import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Us — Happy Casa',
  description:
    'Learn about Happy Casa, our story, our values, and the experienced team behind Maryland\'s premier home remodeling service.',
}

const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '50+', label: 'Expert Professionals' },
]

const values = [
  {
    title: 'Quality Craftsmanship',
    description:
      'Every project is executed with precision and care, using only premium materials that stand the test of time.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: 'Customer First',
    description:
      'Your vision drives every decision we make. We listen, plan carefully, and deliver results that exceed expectations.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Communication',
    description:
      'No surprises. We keep you informed throughout every phase with clear timelines and honest, upfront pricing.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: 'Reliable & On-Time',
    description:
      'We respect your home and your schedule. Projects are delivered on time without ever cutting corners on quality.',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-[#071a40] via-[#09122f] to-[#0e2a4e] py-24 md:py-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-yellow blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
          {/* Texto — arriba en mobile, derecha en large */}
          <div className="text-center lg:text-right pt-16 pb-4 md:pt-24 md:pb-6 lg:py-24 lg:max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              The Story Behind
              <br />
              <span className="text-brand-yellow">Happy Casa</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl lg:max-w-xl leading-relaxed lg:ml-auto">
              A family-built company with a passion for transforming houses into homes — one room at a time.
            </p>
          </div>

          {/* Mascota — debajo del texto en mobile, izquierda centrada en large */}
            <div className="flex justify-center lg:justify-start pointer-events-none w-full lg:w-auto">
              <Image
                src="/images/logos/happycasa-mascot-4.svg"
                alt="Happy Casa Mascot"
                width={440}
                height={440}
                className="w-42 sm:w-62 lg:w-[22rem] xl:w-[22 rem] h-auto"
              />
            </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight leading-tight">
                Built on Trust,{' '}
                <span className="text-brand-blue">Delivered with Pride</span>
              </h2>
              <p className="mt-6 text-brand-text-secondary text-lg leading-relaxed">
                Happy Casa was founded over a decade ago with a simple belief: every homeowner deserves
                a beautiful, functional space — and the peace of mind that comes with working with
                a team they can truly trust.
              </p>
              <p className="mt-4 text-brand-text-secondary text-lg leading-relaxed">
                What started as a small bathroom remodeling operation in Baltimore, MD, has grown
                into a full-service home improvement company serving families across Maryland.
                Our crew brings decades of combined experience to every single project.
              </p>
              <p className="mt-4 text-brand-text-secondary text-lg leading-relaxed">
                From concept to completion, we handle every detail so you don&apos;t have to worry.
                That&apos;s the Happy Casa promise.
              </p>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/landing/bathroom_1.jpg"
                alt="Happy Casa bathroom remodel project"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09122f]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg">Premium Bathroom Remodel</p>
                <p className="text-blue-100 text-sm">Baltimore, MD — 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-brand-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-brand-yellow">{stat.value}</p>
                <p className="mt-2 text-sm md:text-base text-blue-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-brand-blue/10 text-brand-blue font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight">
              What We Stand For
            </h2>
            <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="group bg-gradient-to-b from-slate-50 to-white rounded-2xl p-8 border border-brand-border hover:border-brand-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-blue/10 group-hover:bg-brand-blue text-brand-blue group-hover:text-white transition-colors duration-300 mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-3">{value.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-gradient-to-br from-[#071a40] to-[#09122f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to Transform Your Home?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Let&apos;s talk about your project. Free consultations, no commitments.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-lg shadow-[0_0_24px_rgba(244,180,0,0.35)] hover:bg-brand-yellow-hover hover:shadow-[0_0_36px_rgba(244,180,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
