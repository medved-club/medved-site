"use client"

import { useState } from "react"
import Image from "next/image"
import { trainers } from "@/app/data/trainers"
import { SectionHeader } from "./TrainingTypesSection"

export default function TrainersSection() {
  const [expanded, setExpanded] = useState(false)
  const trainer = trainers[0]
  const bioParagraphs = trainer.bio.split("\n\n")
  const bioPreview = bioParagraphs.slice(0, 2)
  const bioRest = bioParagraphs.slice(2)

  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Тренер"
          title="Тренер и основатель клуба"
          description="Профессиональный подход к каждому спортсмену"
        />

        <div className="mt-12">
          {/* Фото + текст в обтекание */}
          <div className="clearfix">
            {/* Фото — слева, текст обтекает */}
            <div className="float-left mr-8 mb-4 w-64 sm:w-80 flex-shrink-0">
              <div className="relative w-full aspect-[3/4] bg-[#222222] rounded-xl overflow-hidden">
                {trainer.photo ? (
                  <Image
                    src={trainer.photo}
                    alt={trainer.name}
                    fill
                    className="object-cover object-center"
                    sizes="320px"
                    priority
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 text-[#444444] h-full">
                    <PersonIcon />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c41e3a]" />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {trainer.worksWithKids && (
                  <span className="px-2 py-1 rounded bg-[#c41e3a]/10 border border-[#c41e3a]/20 text-[#c41e3a] text-xs">Работает с детьми</span>
                )}
                {trainer.competes && (
                  <span className="px-2 py-1 rounded bg-[#1a1a1a] border border-[#333333] text-[#888888] text-xs">Соревнования</span>
                )}
              </div>
            </div>

            {/* Текст */}
            <h3 className="text-2xl font-black text-white mb-1">{trainer.name}</h3>
            <p className="text-[#c41e3a] text-sm font-semibold uppercase tracking-wider mb-2">{trainer.role}</p>
            <div className="flex items-center gap-2 text-[#888888] text-sm mb-4">
              <StarIcon />
              <span>Стаж: {trainer.experience}</span>
            </div>
            {trainer.quote && (
              <blockquote className="pl-4 border-l-2 border-[#c41e3a] italic text-[#888888] text-sm mb-4">
                «{trainer.quote}»
              </blockquote>
            )}
            {/* Desktop: full bio */}
            <div className="hidden md:block text-[#999999] text-sm leading-relaxed space-y-3">
              {bioParagraphs.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Mobile: preview + expand */}
            <div className="md:hidden text-[#999999] text-sm leading-relaxed space-y-3">
              {bioPreview.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
              {expanded && bioRest.map((para: string, i: number) => (
                <p key={i + 2}>{para}</p>
              ))}
              {bioRest.length > 0 && (
                <button
                  onClick={() => setExpanded(prev => !prev)}
                  className="flex items-center gap-1 text-[#c41e3a] text-xs font-semibold mt-1"
                >
                  {expanded ? <>Свернуть <span className="text-[10px]">▲</span></> : <>Подробнее <span className="text-[10px]">▼</span></>}
                </button>
              )}
            </div>
          </div>

          {/* Достижения — под всем */}
          {trainer.achievements && Array.isArray(trainer.achievements) && (
            <div className="mt-8 clear-both">
              <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-4">Достижения и квалификация</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {trainer.achievements.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-[#888888] text-xs">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c41e3a] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function PersonIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#c41e3a" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
