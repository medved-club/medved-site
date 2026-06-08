"use client"

import { useState } from "react"
import { timeSlots, scheduleDays, scheduleNote } from "@/app/data/schedule"
import { SectionHeader } from "./TrainingTypesSection"

const dayShort = ["Пн", "Ср", "Пт"]

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(0)

  const selectTime = (day: string, slot: typeof timeSlots[0]) => {
    const el = document.querySelector("#lead-form")
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("schedule-select", {
          detail: {
            preferredTime: `${day} ${slot.time}`,
            who: slot.who,
            ageOptions: slot.ageOptions,
          }
        }))
      }, 800)
    }
  }

  return (
    <section id="schedule" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Расписание"
          title="Расписание тренировок"
          description="Нажмите на удобное время — оно подставится в форму записи"
        />

        {/* Мобайл: вкладки + один активный день */}
        <div className="md:hidden mt-10">
          <div className="flex rounded-xl bg-[#1a1a1a] border border-[#242424] p-1 gap-1">
            {scheduleDays.map((day, di) => (
              <button
                key={day}
                onClick={() => setActiveDay(di)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition-all duration-200 ${
                  activeDay === di
                    ? "bg-[#c41e3a] text-white shadow"
                    : "text-[#888888] hover:text-white"
                }`}
              >
                {dayShort[di]}
                <span className="block text-[10px] font-normal opacity-70">{day.slice(0, 2) === "По" ? "Понед." : day.slice(0, 2) === "Ср" ? "Среда" : "Пятн."}</span>
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                onClick={() => selectTime(scheduleDays[activeDay], slot)}
                className="flex items-center gap-3 py-3.5 px-4 rounded-xl bg-[#141414] border border-[#242424] hover:border-[#c41e3a]/50 active:bg-[#1e1e1e] transition-all duration-150 group w-full text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span className="text-white font-bold text-base">{slot.time}</span>
                  </div>
                  <span className="text-[#666666] text-xs mt-0.5 block pl-5">{slot.ageGroup}</span>
                </div>
                <span className="text-[#c41e3a] text-xs font-semibold flex-shrink-0">Записаться →</span>
              </button>
            ))}
          </div>
        </div>

        {/* Десктоп: оригинальный вид без изменений */}
        <div className="hidden md:grid md:grid-cols-3 gap-5 mt-12">
          {scheduleDays.map((day, di) => (
            <div
              key={day}
              className="bg-[#141414] border border-[#242424] rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="px-6 pt-6 pb-4 border-b border-[#1e1e1e]">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-black text-white">{day}</span>
                  <span className="text-xs font-bold text-[#c41e3a] bg-[#c41e3a]/10 border border-[#c41e3a]/20 rounded-full px-2.5 py-1">
                    {dayShort[di]}
                  </span>
                </div>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2 flex-1">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => selectTime(day, slot)}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[#1a1a1a] border border-[#222222] hover:border-[#c41e3a]/50 hover:bg-[#1e1e1e] transition-all duration-150 cursor-pointer group w-full text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span className="text-white font-bold text-base">{slot.time}</span>
                      </div>
                      <span className="text-[#666666] text-xs mt-0.5 block pl-5">{slot.ageGroup}</span>
                    </div>
                    <span className="text-[#444444] group-hover:text-[#c41e3a] text-xs transition-colors duration-150 flex-shrink-0">Записаться →</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[#555555] text-sm leading-relaxed max-w-2xl">
          {scheduleNote}
        </p>
      </div>
    </section>
  )
}
