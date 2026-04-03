import Link from 'next/link'

export default function TopHeader() {
  return (
    <div className="bg-gradient-to-r from-[#0a1628] to-[#0e2a4e] text-white py-1.5 px-4 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm">
        {/* Contact info */}
        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="tel:+16674049511"
            className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-medium">+1 (667) 404-9511</span>
          </a>

          <span className="hidden md:inline text-white/20">|</span>

          <a
            href="mailto:info@happycasa.com"
            className="hidden md:flex items-center gap-1.5 hover:text-brand-yellow transition-colors"
          >
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75" />
            </svg>
            <span className="font-medium">info@hellohappycasa.com</span>
          </a>
        </div>

        {/* CTA */}
        <Link href="/contact" className="hidden sm:flex items-center gap-1.5 bg-brand-yellow text-black px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide transition-all duration-300 hover:shadow-[0_0_14px_rgba(244,180,0,0.45)] hover:scale-105">
          <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 20.25v-1.125C3.75 16.007 6.257 13.5 9.375 13.5h.008c.343 0 .682.023 1.014.069M21.75 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97l-2.66.886.886-2.66A8.962 8.962 0 013 15.75C3 11.194 7.03 7.5 12 7.5s9 3.694 9 4.5z" />
          </svg>
          Get in Touch
        </Link>
      </div>
    </div>
  )
}
