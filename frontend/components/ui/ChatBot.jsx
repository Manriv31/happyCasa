'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

// Session key — prevents the chat from auto-opening more than once per session
const SESSION_KEY = 'hc_chat_dismissed'

const INITIAL_PROMPT = {
  id: 'bot-0',
  role: 'bot',
  text: "Hi! 👋 I'm Happy, Happy Casa's AI assistant. Tell me about the space you'd like to renovate and I'll help you get a free preliminary quote in minutes. What would you like to remodel?",
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [messages, setMessages] = useState([INITIAL_PROMPT])
  const [input, setInput] = useState('')
  const [showBubble, setShowBubble] = useState(true)
  const inputRef = useRef(null)
  const messagesEndRef = useRef(null)

  // Auto-open after 15 s — only once per browser session
  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(SESSION_KEY) === 'true'
    if (wasDismissed) {
      setDismissed(true)
      return
    }
    const timer = setTimeout(() => {
      setOpen(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // Focus input when chat opens
  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  function handleDismiss() {
    setOpen(false)
    setDismissed(true)
    sessionStorage.setItem(SESSION_KEY, 'true')
  }

  function handleToggle() {
    setOpen((prev) => !prev)
  }

  function handleSend(e) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return

    setMessages((prev) => [
      ...prev,
      { id: `user-${Date.now()}`, role: 'user', text },
    ])
    setInput('')

    // Placeholder bot reply — replace with real AI call in next phase
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'bot',
          text: "Thanks for sharing! Our team will review your request and get back to you shortly. You can also call us at +1 (667) 404-9511 for immediate assistance.",
        },
      ])
    }, 900)
  }

  if (dismissed && !open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue shadow-[0_4px_24px_rgba(0,74,173,0.45)] hover:shadow-[0_4px_32px_rgba(0,74,173,0.65)] transition-all duration-300 hover:-translate-y-0.5 group"
      >
        <ChatIcon />
      </button>
    )
  }

  return (
    <>
      {/* ── Floating bubble button ── */}
      {!open && showBubble && (
        <button
          onClick={handleToggle}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue shadow-[0_4px_24px_rgba(0,74,173,0.45)] hover:shadow-[0_4px_32px_rgba(0,74,173,0.65)] transition-all duration-300 hover:-translate-y-0.5"
        >
          <ChatIcon />
          {/* Pulse ring */}
          <span className="absolute inline-flex w-full h-full rounded-full bg-brand-blue opacity-30 animate-ping" />
        </button>
      )}

      {/* ── Chat panel ── */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col w-[360px] max-w-[calc(100vw-1.5rem)] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(7,26,64,0.35)] border border-white/10 bg-white animate-fade-in-up">

          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#071a40] to-[#0e2a4e]">
            <div className="relative w-10 h-10 shrink-0">
              <Image
                src="/images/logos/happycasa-mascot.svg"
                alt="Happy — AI Assistant"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold text-sm leading-tight">Happy</p>
              <p className="text-brand-yellow text-xs font-medium">Happy Casa AI Assistant</p>
            </div>
            {/* Hide button */}
            <button
              onClick={handleDismiss}
              aria-label="Close and hide chat"
              title="Hide chat"
              className="ml-auto flex items-center justify-center w-7 h-7 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 px-4 py-4 h-72 overflow-y-auto bg-slate-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end`}
              >
                {msg.role === 'bot' && (
                  <div className="relative w-7 h-7 shrink-0 mb-0.5">
                    <Image
                      src="/images/logos/happycasa-mascot.svg"
                      alt="Happy"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-brand-blue text-white rounded-br-sm'
                      : 'bg-white text-brand-text border border-brand-border shadow-sm rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 px-3 py-3 bg-white border-t border-brand-border"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 text-sm px-3 py-2 rounded-xl border border-brand-border bg-slate-50 text-brand-text placeholder-brand-text-secondary focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all duration-200"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-brand-blue text-white hover:bg-brand-blue/90 transition-colors duration-200 shrink-0 disabled:opacity-40"
              disabled={!input.trim()}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
            </button>
          </form>

          {/* Footer branding */}
          <div className="px-4 py-2 bg-white border-t border-brand-border/60 flex items-center justify-center gap-1.5">
            <Image
              src="/images/logos/happycasa-web-logo.svg"
              alt="Happy Casa"
              width={72}
              height={20}
              className="h-4 w-auto opacity-60"
            />
            <span className="text-[10px] text-brand-text-secondary">· Powered by AI</span>
          </div>
        </div>
      )}
    </>
  )
}

function ChatIcon() {
  return (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-3 3v-3z" />
    </svg>
  )
}
