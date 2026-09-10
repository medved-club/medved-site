import Link from "next/link"
import { audience } from "@/app/data/trainingTypes"
import { SectionHeader } from "./TrainingTypesSection"

export default function AudienceSection() {
  return (
    <section id="audience" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Для кого"
          title="Для кого подходят тренировки"
          description="Тайский бокс подходит людям любого возраста и уровня подготовки"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-12">
          {audience.map((item) => (
            <div
              key={item.title}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(196,30,58,0.1)]"
            >
              <div className="w-12 h-12 rounded-full bg-[#c41e3a]/10 group-hover:bg-[#c41e3a]/20 flex items-center justify-center text-2xl transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-white font-bold text-base">{item.title}</h3>
              <p className="text-[#777777] text-xs leading-relaxed flex-1">{item.description}</p>
              <Link
                href={item.href}
                className="mt-1 text-xs text-[#c41e3a] hover:text-white border border-[#c41e3a]/30 hover:border-[#c41e3a] hover:bg-[#c41e3a] rounded-lg px-4 py-1.5 transition-all duration-200"
              >
                Подробнее
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
