import { SectionHeader } from "./TrainingTypesSection"

const benefits = [
  "Развитие техники и координации",
  "Физическая форма и выносливость",
  "Навыки самообороны",
  "Уверенность в себе",
  "Начать можно с нуля",
  "Индивидуальный подбор нагрузки",
]

export default function WomenSection() {
  return (
    <section id="women" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text */}
          <div>
            <SectionHeader
              label="Для женщин"
              title="Тайский бокс для женщин"
            />
            <p className="mt-6 text-[#999999] text-base leading-relaxed">
              Тайский бокс в клубе «Медведь» — это полноценные тренировки для женщин, которые хотят стать сильнее, выносливее и увереннее в себе. Занятия помогают развить технику, координацию, физическую форму и навыки самообороны.
            </p>
            <p className="mt-4 text-[#999999] text-base leading-relaxed">
              Начать можно с любого уровня подготовки — тренер подберёт нагрузку и поможет постепенно войти в тренировочный процесс.
            </p>
          </div>

          {/* Benefits */}
          <div>
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-5">
              Что даёт тайский бокс
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#cccccc] text-sm">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
