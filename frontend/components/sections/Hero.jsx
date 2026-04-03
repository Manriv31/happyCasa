import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      <Image
        src="/images/landing/bathroom_1.jpg"
        alt="Beautiful bathroom remodel by Happy Casa"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end">
        <div className="animate-fade-in-up max-w-2xl text-right">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold mb-6">
            <span className="text-brand-yellow">★★★★★</span>
            <span>Trusted by 500+ homeowners</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            For All Your<br />
            Big & Small Home<br />
            Improvement Needs
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-xl ml-auto leading-relaxed">
            Whether it&apos;s a small project or a major renovation,
            our team is ready to handle all your needs with expertise and efficiency.
          </p>
          <a
            href="#about"
            className="inline-block mt-8 px-8 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-lg shadow-[0_0_24px_rgba(244,180,0,0.45)] hover:bg-brand-yellow-hover hover:shadow-[0_0_36px_rgba(244,180,0,0.6)] transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
