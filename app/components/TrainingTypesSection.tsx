"use client"

import { useState } from "react"
import { trainingTypes } from "@/app/data/trainingTypes"

export default function TrainingTypesSection() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const scrollToForm = () => {
    document.querySelector("#lead-form")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="training-types" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Форматы"
          title="Направления тренировок"
          description="Выберите формат, который подходит именно вам"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {trainingTypes.map((type, index) => {
            const isExpanded = expanded[type.id]
            const shortDesc = type.description.split(".")[0] + "."

            return (
              <div
                key={type.id}
                className="group relative bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/50 rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 hover:shadow-[0_4px_30px_rgba(196,30,58,0.15)] hover:-translate-y-1"
              >
                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-black text-[#2a2a2a] group-hover:text-[#c41e3a]/20 transition-colors duration-300 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[#c41e3a]/10 border border-[#c41e3a]/20 flex items-center justify-center mb-5 group-hover:bg-[#c41e3a]/20 transition-colors duration-300">
                  <TrainingIcon id={type.id} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>

                {type.price && (
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="text-2xl font-black text-[#c41e3a]">{type.price}</span>
                    {type.priceNote && <span className="text-xs text-[#555555]">{type.priceNote}</span>}
                  </div>
                )}

                {/* Desktop: full description */}
                <p className="hidden md:block text-[#888888] text-sm leading-relaxed flex-1 mb-6">
                  {type.description}
                </p>

                {/* Mobile: collapsed description with expand toggle */}
                <div className="md:hidden mb-5">
                  <p className="text-[#888888] text-sm leading-relaxed">
                    {isExpanded ? type.description : shortDesc}
                  </p>
                  <button
                    onClick={() => setExpanded(prev => ({ ...prev, [type.id]: !prev[type.id] }))}
                    className="mt-2 flex items-center gap-1 text-[#c41e3a] text-xs font-semibold"
                  >
                    {isExpanded ? (
                      <>Свернуть <span className="text-[10px]">▲</span></>
                    ) : (
                      <>Подробнее <span className="text-[10px]">▼</span></>
                    )}
                  </button>
                </div>

                <button
                  onClick={scrollToForm}
                  className="w-full py-3 bg-[#111111] hover:bg-[#c41e3a] border border-[#333333] hover:border-[#c41e3a] text-white text-sm font-semibold rounded transition-all duration-200 mt-auto"
                >
                  {type.buttonText}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TrainingIcon({ id }: { id: string }) {
  if (id === "group") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
  if (id === "personal") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="7" r="4" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 11h6" />
      <path d="M19 8v6" />
    </svg>
  )
}

export function SectionHeader({
  label,
  title,
  description,
  center = false,
}: {
  label?: string
  title: string
  description?: string
  center?: boolean
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {label && (
        <span className="inline-block px-3 py-1 rounded-full bg-[#c41e3a]/10 border border-[#c41e3a]/20 text-[#c41e3a] text-xs font-semibold uppercase tracking-widest mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4">{title}</h2>
      {description && (
        <p className="text-[#888888] text-base leading-relaxed">{description}</p>
      )}
    </div>
  )
}
