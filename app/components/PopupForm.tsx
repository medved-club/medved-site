"use client"

import { useEffect, useState } from "react"
import { contacts } from "@/app/data/contacts"

const STORAGE_KEY = "medved_popup_shown"
const DELAY_MS = 15000

export default function PopupForm() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return
    } catch {}

    const timer = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setVisible(false)
    try { sessionStorage.setItem(STORAGE_KEY, "1") } catch {}
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) close() }}
    >
      <div className="relative bg-[#111111] border border-[#2a2a2a] rounded-2xl w-full max-w-md shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#555] hover:text-white transition-colors rounded-lg hover:bg-[#222]"
          aria-label="Закрыть"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-7 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#c41e3a]/10 border border-[#c41e3a]/20 rounded-full px-3 py-1 mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c41e3a]" />
            <span className="text-[#c41e3a] text-xs font-semibold uppercase tracking-wider">Специальное предложение</span>
          </div>

          <h2 className="text-2xl font-black text-white leading-tight mb-2">
            Первая тренировка —<br />
            <span className="text-[#c41e3a]">бесплатно</span>
          </h2>
          <p className="text-[#888] text-sm mb-6">
            Позвоните — тренер ответит и запишет на удобное время.
          </p>

          <a
            href={contacts.phoneHref}
            onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
            className="block text-2xl font-black text-white hover:text-[#c41e3a] transition-colors duration-200 mb-5"
          >
            {contacts.phone}
          </a>

          <a
            href={contacts.phoneHref}
            onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_25px_rgba(196,30,58,0.5)] text-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Позвонить
          </a>
        </div>
      </div>
    </div>
  )
}
