"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-md w-full border-b-2 border-brand-yellow shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-brand-blue" href="/">
          <span className="sr-only">Home</span>
            <Image src="/images/logos/happycasa-web-logo.svg" alt="Happy Casa Logo" width={112} height={56} className="h-14 w-auto" priority />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className={`${menuOpen ? 'block' : 'hidden'} md:block flex-1`}
          >
            <ul
              className={`
                flex gap-6 text-lg
                ${menuOpen ? 'flex-col items-center bg-white/80 absolute left-0 top-16 w-full z-20 p-4 shadow md:static md:bg-transparent md:flex-row md:p-0 md:shadow-none' : 'items-center justify-center'}
              `}
            >
              <li>
                <a className="text-gray-800 transition hover:text-gray-500 hover:border-b-2 hover:border-yellow-400 border-transparent border-b-2 pb-1" href="/about"> About Us</a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500 hover:border-b-2 hover:border-yellow-400 border-transparent border-b-2 pb-1" href="/services"> Services </a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500 hover:border-b-2 hover:border-yellow-400 border-transparent border-b-2 pb-1" href="/projects"> Past Projects </a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500 hover:border-b-2 hover:border-yellow-400 border-transparent border-b-2 pb-1" href="/contact"> Contact Us </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-1.5 text-brand-blue font-semibold border-b-2 border-transparent hover:border-brand-yellow pb-1 transition"
                  href="/handyman"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                  </svg>
                  Handyman
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 ml-auto">
            <div className="sm:flex sm:gap-4">
              <a className="block rounded-md bg-brand-yellow px-5 py-2.5 text-sm font-medium text-black transition hover:bg-brand-yellow-hover" href="#">
                Login
              </a>

              <a className="hidden rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-black transition hover:text-blue-800 / sm:block" href="#">
                Register
              </a>
            </div>

            <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
