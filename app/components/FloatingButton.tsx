"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { contacts } from "@/app/data/contacts"

export default function FloatingButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop — кнопка снизу справа */}
      <div
        className={`hidden lg:flex fixed bottom-8 right-8 z-40 transition-all duration-300 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        {/* Пульсирующий ореол */}
        <span className="absolute inset-0 rounded-full bg-[#c41e3a] animate-ping opacity-30" />
        <Link
          href="/sboryi"
          className="relative flex items-center gap-2.5 px-6 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-black rounded-full shadow-[0_6px_30px_rgba(196,30,58,0.6)] hover:shadow-[0_6px_40px_rgba(196,30,58,0.8)] transition-all duration-200 text-sm uppercase tracking-wide hover:scale-105"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
          </svg>
          Записаться на спортивные сборы
        </Link>
      </div>

      {/* Mobile — панель снизу */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 px-4 pb-4 pt-2 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex gap-2">
          <a
            href={contacts.phoneHref}
            aria-label="Позвонить"
            className="w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center text-white shadow-xl hover:bg-[#c41e3a] transition-colors duration-200 flex-shrink-0"
          >
            <PhoneIcon />
          </a>
          <Link
            href="/sboryi"
            className="flex-1 h-12 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-full shadow-xl shadow-[#c41e3a]/30 transition-all duration-200 text-sm flex items-center justify-center"
          >
            Записаться на спортивные сборы
          </Link>
        </div>
      </div>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
