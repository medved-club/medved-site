import { SectionHeader } from "./TrainingTypesSection"

const advantages = [
  "Тренировки для детей и взрослых",
  "Можно начать с нуля",
  "Пол и уровень подготовки не имеют значения",
  "Групповой, персональный и сплит-формат",
  "Регулярное расписание",
  "Спортивная атмосфера",
  "Участие в соревнованиях",
  "Ежегодные спортивные сборы",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <SectionHeader
              label="О нас"
              title="О клубе"
            />
            <div className="mt-6 space-y-4 text-[#999999] text-base leading-relaxed">
              <p>
                «Медведь» — клуб тайского бокса в Щёлково, где тренируются дети, подростки и взрослые. В клубе проходят групповые, персональные и сплит-тренировки. На занятиях спортсмены развивают силу, выносливость, координацию, дисциплину, технику и уверенность в себе.
              </p>
              <p>
                Тренировки подходят как для новичков, так и для спортсменов с опытом — независимо от уровня подготовки.
              </p>
            </div>
          </div>

          {/* Advantages */}
          <div>
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-5">
              Преимущества клуба
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[#cccccc] text-sm"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/30 flex items-center justify-center">
                    <CheckIcon />
                  </span>
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

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
