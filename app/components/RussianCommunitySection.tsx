"use client"

import { SectionHeader } from "./TrainingTypesSection"

export default function RussianCommunitySection() {
  const scrollToForm = () => {
    const el = document.querySelector("#lead-form")
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="russian-community" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              label="Спортивное направление"
              title="Тренировки спортсменов «Русской Общины»"
            />
            <p className="mt-6 text-[#999999] text-base leading-relaxed">
              Клуб тайского бокса «Медведь» также тренирует спортсменов из «Русской Общины». Занятия проходят в спортивном формате и направлены на развитие физической подготовки, дисциплины, силы, выносливости, техники тайского бокса и командного духа.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Тайский бокс",
                "Физическая подготовка",
                "Дисциплина",
                "Командный дух",
                "Техника",
                "Выносливость",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#cccccc] text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToForm}
              className="mt-8 px-6 py-3 bg-[#c41e3a] hover:bg-[#e02244] text-white font-semibold rounded transition-all duration-200 hover:shadow-[0_0_20px_rgba(196,30,58,0.4)] text-sm"
            >
              Записаться на тренировку
            </button>
          </div>

          {/* Photo placeholder */}
          <div className="relative aspect-[4/3] bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center gap-3 text-[#444444]">
              <TeamIcon />
              <p className="text-sm text-[#555555] text-center px-8">
                Фото тренировок спортсменов будут добавлены
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c41e3a]/40" />
          </div>
        </div>
      </div>
    </section>
  )
}

function TeamIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
