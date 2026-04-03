'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const categories = ['All', 'Bathroom', 'Kitchen', 'Other']

const projects = [
  {
    id: 1,
    category: 'Bathroom',
    title: 'Modern Master Bath',
    location: 'Baltimore, MD',
    year: '2025',
    image: '/images/landing/bathroom_1.jpg',
    tag: 'Full Remodel',
  },
  {
    id: 2,
    category: 'Bathroom',
    title: 'Full Bathroom Renovation',
    location: 'Columbia, MD',
    year: '2026',
    image: '/images/projects/bathroom/project-1/IMG-1.webp',
    gradient: 'from-slate-700 to-blue-800',
    tag: 'Renovation',
  },
  {
    id: 3,
    category: 'Kitchen',
    title: 'Contemporary Kitchen',
    location: 'Towson, MD',
    year: '2024',
    image: '/images/projects/bathroom/project-1/IMG-2.webp',
    gradient: 'from-blue-900 to-slate-700',
    tag: 'Full Remodel',
  },
  {
    id: 4,
    category: 'Bathroom',
    title: 'Spa-Style Master Suite',
    location: 'Ellicott City, MD',
    year: '2024',
    image: '/images/projects/bathroom/project-1/IMG-3.webp',
    gradient: 'from-teal-800 to-blue-900',
    tag: 'Luxury',
  },
  {
    id: 5,
    category: 'Kitchen',
    title: 'Open Concept Kitchen',
    location: 'Annapolis, MD',
    year: '2024',
    image: '/images/projects/bathroom/project-1/IMG-4.webp',
    gradient: 'from-indigo-800 to-slate-700',
    tag: 'Redesign',
  },
  {
    id: 6,
    category: 'Other',
    title: 'Full Home Interior',
    location: 'Frederick, MD',
    year: '2023',
    image: '/images/projects/bathroom/project-1/IMG-5.webp',
    gradient: 'from-slate-800 to-blue-700',
    tag: 'Home Renovation',
  },
  {
    id: 7,
    category: 'Bathroom',
    title: 'Walk-In Shower Addition',
    location: 'Rockville, MD',
    year: '2023',
    image: '/images/projects/bathroom/project-1/IMG-6.webp',
    gradient: 'from-blue-800 to-indigo-900',
    tag: 'Addition',
  },
  {
    id: 8,
    category: 'Other',
    title: 'Basement Conversion',
    location: 'Silver Spring, MD',
    year: '2023',
    gradient: 'from-slate-700 to-slate-900',
    tag: 'Conversion',
  },
  {
    id: 9,
    category: 'Kitchen',
    title: 'Farmhouse Kitchen',
    location: 'Gaithersburg, MD',
    year: '2022',
    gradient: 'from-amber-900 to-slate-800',
    tag: 'Redesign',
  },
]

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3]">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Tag */}
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 bg-brand-yellow text-black text-xs font-bold rounded-full uppercase tracking-wide">
          {project.tag}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-bold text-lg leading-tight">{project.title}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-blue-100 text-sm">{project.location}</p>
          <p className="text-white/60 text-xs">{project.year}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-[#071a40] via-[#09122f] to-[#0e2a4e] py-24 md:py-32 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brand-yellow blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
          {/* Text — arriba en mobile, derecha en large */}
          <div className="text-center lg:text-right pt-16 pb-4 md:pt-24 md:pb-6 lg:py-24 lg:max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              Past Projects
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Work
              <br />
              <span className="text-brand-yellow">Speaks for Itself</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl lg:max-w-xl leading-relaxed lg:ml-auto">
              Browse our portfolio of completed projects across Maryland. Every space has a story.
            </p>
          </div>

          {/* Mascot — debajo del texto en mobile, izquierda centrada en large */}
          <div className="flex justify-center lg:justify-start pointer-events-none w-full lg:w-auto">
            <Image
              src="/images/logos/happycasa-mascot-3.svg"
              alt="Happy Casa Mascot"
              width={440}
              height={440}
              className="w-52 sm:w-72 lg:w-[22rem] xl:w-[27rem] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                    : 'bg-white text-brand-text-secondary border border-brand-border hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Count */}
          <p className="text-center text-brand-text-secondary text-sm mb-8">
            Showing <span className="font-semibold text-brand-text">{filtered.length}</span> projects
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-gradient-to-br from-[#071a40] to-[#09122f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Love What You See?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Let&apos;s create something incredible for your home. Start with a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-brand-yellow text-black font-semibold text-lg shadow-[0_0_24px_rgba(244,180,0,0.35)] hover:bg-brand-yellow-hover hover:shadow-[0_0_36px_rgba(244,180,0,0.5)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Start Your Project
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
