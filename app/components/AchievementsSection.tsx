import { SectionHeader } from "./TrainingTypesSection"

const eventTypes = [
  { title: "Соревнования", icon: "🥊", description: "Участие в местных и региональных соревнованиях по тайскому боксу" },
  { title: "Жизнь клуба вне тренировок", icon: "🤝", description: "Мы не только тренируемся в зале, но и проводим время вместе: выезжаем на игры, активные мероприятия, лазертаг, командные встречи и спортивные события." },
  { title: "Спортивные сборы", icon: "✈️", description: "Интенсивные тренировки в Анапе и Таиланде" },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Достижения"
          title="Спортивная жизнь и достижения"
        />

        <p className="mt-4 text-[#888888] text-base leading-relaxed max-w-2xl">
          Спортсмены клуба «Медведь» участвуют в соревнованиях и спортивных мероприятиях. Для клуба важно не только обучение технике, но и развитие характера, дисциплины, уверенности и командного духа.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {eventTypes.map((event) => (
            <div
              key={event.title}
              className="group bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/30 rounded-xl p-4 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-[#222222] group-hover:bg-[#c41e3a]/10 flex items-center justify-center text-2xl transition-colors duration-300">
                {event.icon}
              </div>
              <h3 className="text-white font-semibold text-sm">{event.title}</h3>
              <p className="text-[#666666] text-xs leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-[#555555]">
          Конкретные результаты и фотографии с мероприятий будут добавлены в галерею
        </p>
      </div>
    </section>
  )
}
