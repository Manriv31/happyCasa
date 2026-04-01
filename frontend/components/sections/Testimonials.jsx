"use client"

import { useState, useRef } from 'react'
import useInView from '@/hooks/useInView'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'Baltimore, MD',
    rating: 5,
    text: 'Happy Casa completely transformed our master bathroom. The team was professional, clean, and delivered beyond our expectations. Our new walk-in shower is absolutely stunning!',
  },
  {
    name: 'Michael Rodriguez',
    location: 'Columbia, MD',
    rating: 5,
    text: 'From the initial consultation to the final walkthrough, everything was seamless. They finished our kitchen renovation on time and within budget. Highly recommend!',
  },
  {
    name: 'Jennifer Lee',
    location: 'Towson, MD',
    rating: 5,
    text: 'The attention to detail in our bathroom remodel was incredible. Every tile was placed perfectly, and the fixtures they recommended were exactly right for our style.',
  },
  {
    name: 'David Kim',
    location: 'Ellicott City, MD',
    rating: 5,
    text: 'We had a tight timeline for our guest bathroom remodel before the holidays, and Happy Casa made it happen without cutting corners. Quality work throughout.',
  },
  {
    name: 'Amanda Peters',
    location: 'Annapolis, MD',
    rating: 5,
    text: 'Our 1990s bathroom is now a modern spa-like retreat. The team listened to our ideas and made them even better. Worth every penny we invested!',
  },
  {
    name: 'Carlos Gutierrez',
    location: 'Frederick, MD',
    rating: 5,
    text: 'Best home improvement decision we ever made. Happy Casa handled everything — plumbing, tiling, electrical — all with one reliable team. So convenient and stress-free!',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-brand-yellow' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex-shrink-0 w-80 mr-6 bg-white rounded-2xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-shadow duration-300">
      <StarRating rating={testimonial.rating} />
      <p className="mt-4 text-brand-text-secondary leading-relaxed text-sm">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-sm">
          {testimonial.name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <p className="font-semibold text-brand-text text-sm">{testimonial.name}</p>
          <p className="text-xs text-brand-text-secondary">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef)

  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="scroll-mt-28 md:scroll-mt-32 py-24 bg-white overflow-hidden"
    >
      {/* Section Header */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 transition-all duration-700 ease-out ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
          <p className="mt-6 text-lg text-brand-text-secondary max-w-2xl mx-auto">
            Don&apos;t just take our word for it — here&apos;s what homeowners have to say
            about their experience with Happy Casa.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-scroll"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {allTestimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
