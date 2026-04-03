import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/images/landing/bathroom_1.jpg"
        alt="Luxury bathroom remodel by Happy Casa"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Gradient: stronger on left/bottom for text legibility, subtle on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="animate-fade-in-up max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
            <span className="text-brand-yellow">★★★★★</span>
            <span>Trusted by 500+ homeowners</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            Your Dream<br />
            Bathroom,<br />
            <span className="text-brand-yellow">Beautifully Crafted</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-xl leading-relaxed">
            We turn outdated bathrooms into stunning, spa-like retreats.
            Premium materials, expert craftsmanship, and a finish that lasts a lifetime.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-lg shadow-[0_0_24px_rgba(244,180,0,0.45)] hover:bg-brand-yellow-hover hover:shadow-[0_0_36px_rgba(244,180,0,0.6)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
            >
              See Our Work
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Quick stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Bathrooms Remodeled' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-extrabold text-brand-yellow">{stat.value}</p>
                <p className="text-sm text-white/70 font-medium mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
