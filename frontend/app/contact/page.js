'use client'

import { useState } from 'react'
import Image from 'next/image'

const serviceOptions = [
  'Bathroom Remodeling',
  'Kitchen Renovation',
  'General Repairs',
  'Plumbing & Electrical',
  'Painting & Finishing',
  'Interior Design',
  'Other',
]

const contactInfo = [
  {
    title: 'Phone',
    value: '+1 (667) 404-9511',
    href: 'tel:+16674049511',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: 'Email',
    value: 'info@happycasa.com',
    href: 'mailto:info@happycasa.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75" />
      </svg>
    ),
  },
  {
    title: 'Service Area',
    value: 'Maryland & Surrounding Areas',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Hours',
    value: 'Mon – Sat, 8:00 AM – 6:00 PM',
    href: null,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    // TODO: Connect to FastAPI backend endpoint
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

    await new Promise((r) => setTimeout(r, 1000)) // Simulated delay
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-gradient-to-br from-[#071a40] via-[#09122f] to-[#0e2a4e] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-brand-blue blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-yellow blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Texto — arriba en mobile, izquierda en large */}
          <div className="text-center lg:text-left pt-0 pb-4 md:pb-6 lg:py-0 lg:max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-brand-yellow/20 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Talk About
              <br />
              <span className="text-brand-yellow">Your Project</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl lg:max-w-xl leading-relaxed">
              Get a free consultation and estimate. No obligations, just honest advice from our team.
            </p>
          </div>

          {/* Mascota — debajo del texto en mobile, izquierda centrada en large */}
          <div className="flex justify-center lg:justify-end pointer-events-none w-full lg:w-auto">
            <Image
              src="/images/logos/happycasa-mascot-5.svg"
              alt="Happy Casa Mascot"
              width={440}
              height={440}
              className="w-52 sm:w-72 lg:w-[22rem] xl:w-[27rem] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Contact Section ── */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* ── Contact Info ── */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="inline-block px-4 py-1.5 bg-brand-yellow/10 text-brand-yellow font-semibold text-sm rounded-full mb-4 tracking-wide uppercase">
                  Reach Us
                </span>
                <h2 className="text-3xl font-extrabold text-brand-text leading-tight">
                  We&apos;re Here<br />
                  <span className="text-brand-blue">to Help You</span>
                </h2>
                <p className="mt-4 text-brand-text-secondary leading-relaxed">
                  Whether you have a question, want to schedule a walkthrough, or are ready to start,
                  our team is just a message away.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {contactInfo.map((info, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl border border-brand-border shadow-sm"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-text-secondary uppercase tracking-wide mb-0.5">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a href={info.href} className="text-brand-text font-semibold hover:text-brand-blue transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-brand-text font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Form ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-white rounded-3xl border border-brand-border shadow-sm">
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-brand-text mb-3">Message Sent!</h3>
                  <p className="text-brand-text-secondary max-w-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-3xl border border-brand-border shadow-sm p-8 md:p-10 space-y-6"
                >
                  <h3 className="text-xl font-bold text-brand-text">Send Us a Message</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-text mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-text mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-text mb-1.5" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-text mb-1.5" htmlFor="service">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition"
                      >
                        <option value="">Select a service</option>
                        {serviceOptions.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-text mb-1.5" htmlFor="message">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 rounded-xl border border-brand-border bg-slate-50 text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold text-lg shadow-lg hover:bg-brand-blue-hover hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
