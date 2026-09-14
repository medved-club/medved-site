"use client"

import { SectionHeader } from "./TrainingTypesSection"
import { contacts } from "@/app/data/contacts"

export default function LeadFormSection() {
  return (
    <section id="lead-form" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <div>
            <SectionHeader
              label="Запись"
              title="Записаться на тренировку"
            />
            <p className="mt-4 text-[#888888] text-base leading-relaxed">
              Позвоните — тренер ответит на вопросы и сразу подберёт группу, формат тренировки и удобное время.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">⏱</span>
                <p className="text-[#cccccc] text-sm">Ответим сразу или перезвоним в течение нескольких часов</p>
              </div>
              <div className="flex items-center gap-3 bg-[#c41e3a]/10 border border-[#c41e3a]/30 rounded-xl px-4 py-3">
                <span className="text-xl flex-shrink-0">🎁</span>
                <p className="text-white text-sm font-semibold">
                  Первая групповая тренировка — ознакомительная{" "}
                  <span className="text-[#c41e3a] font-black uppercase tracking-wide">бесплатно</span>
                  <span className="block text-[#888] text-xs font-normal normal-case mt-0.5">Персональные и сплит-тренировки — платные с первого занятия</span>
                </p>
              </div>
            </div>
          </div>

          {/* Call card */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 lg:p-10 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/30 flex items-center justify-center mb-6">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.42 2 2 0 0 1 3.6 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.15 6.15l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <p className="text-[#888888] text-sm mb-3">Записаться можно по телефону</p>
            <a
              href={contacts.phoneHref}
              onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
              className="text-3xl sm:text-4xl font-black text-white hover:text-[#c41e3a] transition-colors duration-200 mb-8"
            >
              {contacts.phone}
            </a>
            <a
              href={contacts.phoneHref}
              onClick={() => { try { (window as any).ym(109565621, "reachGoal", "phone_click") } catch {} }}
              className="w-full py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.5)] text-sm tracking-wide"
            >
              Позвонить
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
