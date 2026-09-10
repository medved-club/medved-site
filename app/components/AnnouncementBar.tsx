"use client"

import { useState } from "react"
import Link from "next/link"

export default function AnnouncementBar() {
  const [closed, setClosed] = useState(false)
  if (closed) return null

  return (
    <div className="relative z-50 bg-[#c41e3a] text-white text-sm font-semibold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3">
        <div className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
        <span className="text-center">
          Сборы на Азовском море — 30 июня · Осталось мало мест
        </span>
        <Link
          href="/sboryi"
          className="flex-shrink-0 bg-white text-[#c41e3a] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full hover:bg-red-50 transition-colors"
        >
          Записаться →
        </Link>
        <button
          onClick={() => setClosed(true)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          aria-label="Закрыть"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  )
}
