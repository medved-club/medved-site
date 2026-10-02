import Image from "next/image"
import { SectionHeader } from "./TrainingTypesSection"

const competitionPhotos = [
  { src: "/images/gallery/competitions-6988b.jpg", alt: "Соревнования — тренер со спортсменами" },
  { src: "/images/gallery/competitions-0662.jpg", alt: "Соревнования — боксёр на ринге", objectPosition: "top" },
  { src: "/images/gallery/competitions-ac4d.jpg", alt: "Соревнования — победа" },
  { src: "/images/gallery/competitions-45c3.jpg", alt: "Соревнования — с медалями" },
  { src: "/images/gallery/competitions-4004.jpg", alt: "Соревнования — юные спортсмены с тренером" },
  { src: "/images/gallery/competitions-6508.jpg", alt: "Соревнования на открытом воздухе" },
]

const facts = [
  { title: "6 лет сборов", text: "Каждый год на сборы в Анапу выезжает от 80 до 120 спортсменов клуба." },
  { title: "Тренер — КМС", text: "Никита Эрденко — кандидат в мастера спорта, чемпион Республики Мордовия и Твери." },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-28 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Достижения"
          title="Спортивная жизнь и достижения"
          description="Спортсмены клуба «Медведь» участвуют в соревнованиях и спортивных мероприятиях. Для клуба важно не только обучение технике, но и развитие характера, дисциплины, уверенности и командного духа."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Фото с соревнований */}
          <div className="lg:col-span-3 grid grid-cols-3 gap-3">
            {competitionPhotos.map((p) => (
              <div key={p.src} className="relative aspect-square rounded-xl overflow-hidden bg-[#1a1a1a] border border-[#2a2a2a]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 220px, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  style={p.objectPosition ? { objectPosition: p.objectPosition } : undefined}
                />
              </div>
            ))}
          </div>

          {/* Факты и отзыв */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {facts.map((f) => (
              <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                <h3 className="text-[#c41e3a] font-black text-xl mb-1">{f.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
            <div className="bg-[#1a1a1a] border border-[#c41e3a]/30 rounded-xl p-5 flex-1">
              <p className="text-[#cccccc] text-sm leading-relaxed italic mb-3">
                «У сына 5 золотых медалей и пояс чемпиона Москвы... Заслуга тренера!»
              </p>
              <p className="text-[#666666] text-xs">— Olga Gorbunova, отзыв на Яндекс.Картах</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
