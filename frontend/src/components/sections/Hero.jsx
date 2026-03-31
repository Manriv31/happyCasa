import heroImage from '../../assets/landing/bathroom_1.jpg'

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-end">
        <div className="animate-fade-in-up max-w-2xl text-right">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
            For All Your<br />
            Big & Small Home<br />
            Improvement Needs
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-xl ml-auto leading-relaxed">
            Whether it's a small project or a major renovation,
            our team is ready to handle all your needs with expertise and efficiency.
          </p>
          <a
            href="#about"
            className="inline-block mt-8 px-8 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-lg shadow-lg hover:bg-brand-yellow-hover hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}
