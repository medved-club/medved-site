"use client"

import { useState } from "react"
import { faq as defaultFaq } from "@/app/data/faq"
import { SectionHeader } from "./TrainingTypesSection"
import type { FaqItem } from "@/lib/site-content"

export default function FaqSection({ faq = defaultFaq }: { faq?: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeader label="FAQ" title="Частые вопросы" center />
          </div>

          <div className="space-y-2">
            {faq.map((item) => {
              const isOpen = openId === item.id
              return (
                <div
                  key={item.id}
                  className={`bg-[#1a1a1a] border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? "border-[#c41e3a]/40" : "border-[#2a2a2a] hover:border-[#333333]"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-semibold text-sm sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "bg-[#c41e3a] border-[#c41e3a] rotate-45"
                          : "bg-[#111111] border-[#333333]"
                      }`}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-5 pb-5 text-[#888888] text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
