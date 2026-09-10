import type { Metadata } from "next"
import Link from "next/link"
import { contacts } from "@/app/data/contacts"

export const metadata: Metadata = {
  title: "Спасибо за заявку — Клуб тайского бокса «Медведь»",
  robots: { index: false, follow: false },
}

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* Header */}
      <header className="border-b border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5">
          <Link href="/" className="flex flex-col leading-tight w-fit">
            <span className="text-lg font-black text-white tracking-wider uppercase">Медведь</span>
            <span className="text-[10px] text-[#555555] uppercase tracking-[0.2em]">клуб тайского бокса</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-lg w-full text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/30 flex items-center justify-center mx-auto mb-8">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Спасибо за заявку!
          </h1>

          <p className="text-[#999999] text-base leading-relaxed mb-10">
            Мы свяжемся с вами, чтобы подтвердить запись и подобрать подходящий формат тренировки.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Вернуться на главную
            </Link>
            <a
              href={contacts.phoneHref}
              className="px-6 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <PhoneIcon />
              Позвонить
            </a>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#c41e3a] hover:bg-[#e02244] text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
            >
              <TelegramIcon />
              Написать в Telegram
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.545 13.986l-2.97-.924c-.646-.203-.658-.646.136-.953l11.57-4.461c.537-.194 1.007.131.613 1.573z" />
    </svg>
  )
}
