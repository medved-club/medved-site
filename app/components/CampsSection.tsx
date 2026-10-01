import Link from "next/link"
import Image from "next/image"
import { camps as defaultCamps } from "@/app/data/camps"
import { SectionHeader } from "./TrainingTypesSection"
import type { Camp } from "@/lib/site-content"

export default function CampsSection({ camps = defaultCamps }: { camps?: Camp[] }) {

  return (
    <section id="camps" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Сборы"
          title="Ежегодные спортивные сборы"
          description="Сборы — часть спортивной жизни клуба: тренировки, режим, дисциплина, команда и развитие за пределами обычного зала."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {camps.map((camp) => (
            <div
              key={camp.id}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_4px_30px_rgba(196,30,58,0.12)]"
            >
              {/* Фото */}
              <div className="relative w-full aspect-[16/9] bg-[#222222] overflow-hidden flex items-center justify-center">
                {camp.photo ? (
                  <Image
                    src={camp.photo}
                    alt={camp.title}
                    fill
                    sizes="(min-width: 1024px) 592px, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-[#444444] group-hover:text-[#555555] transition-colors duration-300">
                    <MountainsIcon />
                    <span className="text-sm">{camp.title}</span>
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c41e3a]/60 group-hover:bg-[#c41e3a] transition-colors duration-300" />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{camp.title}</h3>
                  {camp.subtitle && <p className="text-[#c41e3a] text-xs mt-1">{camp.subtitle}</p>}
                </div>

                <p className="text-[#888888] text-sm leading-relaxed">{camp.description}</p>

                {/* Periods */}
                {camp.periods && camp.periods.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold text-[#555555] uppercase tracking-wider">Даты</p>
                    {camp.periods.map((p, i) => (
                      <div key={i} className="flex items-center justify-between bg-[#111111] rounded-lg px-4 py-2.5">
                        <span className="text-white text-sm font-semibold">{p.dates}</span>
                        <span className="text-[#888888] text-xs">{p.age}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Details */}
                {camp.details && camp.details.length > 0 && (
                  <div className="flex flex-col gap-1.5">
                    <p className="text-xs font-semibold text-[#555555] uppercase tracking-wider">Условия</p>
                    {camp.details.map((d, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#888888] text-xs">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#c41e3a] flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                )}

                {/* Who */}
                {camp.who && (
                  <p className="text-[#666666] text-xs leading-relaxed border-t border-[#222222] pt-3">
                    {camp.who}
                  </p>
                )}

                <div className="flex gap-3 mt-auto">
                  <Link
                    href={camp.href}
                    className="flex-1 py-3 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-lg transition-all duration-200 text-sm text-center"
                  >
                    Подробнее
                  </Link>
                  <Link
                    href="/sboryi"
                    className="flex-1 py-3 bg-[#c41e3a] hover:bg-[#e02244] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(196,30,58,0.4)] text-sm text-center"
                  >
                    {camp.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MountainsIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
