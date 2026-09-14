"use client"

import { useEffect, useState } from "react"
import { contacts } from "@/app/data/contacts"

const STORAGE_KEY = "medved_popup_shown"
const DELAY_MS = 15000

export default function PopupForm() {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return
    setStatus("loading")
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, type: "Групповая", comment: "Заявка через pop-up (первая тренировка)" }),
      })
      if (res.ok) {
        setStatus("success")
        try { (window as any).ym(109565621, "reachGoal", "form_popup") } catch {}
        setTimeout(close, 2500)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
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

        <div className="p-7">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/30 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <p className="text-white font-bold text-lg mb-1">Заявка отправлена!</p>
              <p className="text-[#888] text-sm">Свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <>
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
                Оставьте заявку — тренер свяжется и запишет на удобное время.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c41e3a]/50 rounded-xl px-4 py-3 text-white placeholder-[#555] text-sm outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#2a2a2a] focus:border-[#c41e3a]/50 rounded-xl px-4 py-3 text-white placeholder-[#555] text-sm outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 bg-[#c41e3a] hover:bg-[#e02244] disabled:opacity-60 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_25px_rgba(196,30,58,0.5)] text-sm mt-1"
                >
                  {status === "loading" ? "Отправка..." : "Записаться бесплатно"}
                </button>
                {status === "error" && (
                  <p className="text-center text-xs text-red-400">Ошибка. Попробуйте ещё раз.</p>
                )}
              </form>

              <div className="flex items-center gap-3 mt-4">
                <div className="flex-1 h-px bg-[#2a2a2a]" />
                <span className="text-[#555555] text-xs uppercase tracking-wider">или</span>
                <div className="flex-1 h-px bg-[#2a2a2a]" />
              </div>

              <a
                href={contacts.phoneHref}
                onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
                className="flex items-center justify-center gap-2 w-full mt-4 py-3.5 bg-[#1a1a1a] hover:bg-[#222] border border-[#2a2a2a] hover:border-[#c41e3a]/50 text-white font-bold rounded-xl transition-all duration-200 text-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Позвонить: {contacts.phone}
              </a>

              <p className="mt-4 text-center text-[#444] text-xs">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="text-[#666] hover:text-white underline transition-colors">политикой конфиденциальности</a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
