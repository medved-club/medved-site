import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для женщин: форма, уверенность, самооборона — Клуб «Медведь»",
  description: "Почему тайский бокс эффективнее обычного фитнеса и что даёт три месяца тренировок. Клуб «Медведь» в Щёлково — тренировки для девушек с нуля.",
  keywords: ["тайский бокс для женщин", "женский тайский бокс", "тайский бокс для девушек Щёлково", "муай тай женщины"],
  alternates: {
    canonical: "https://medved-club.ru/blog/tayskiy-boks-dlya-zhenshchin",
  },
}

export default function ArticleZhenshchinPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Тайский бокс для женщин", href: "/blog/tayskiy-boks-dlya-zhenshchin" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">
              ← Блог
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Женщинам</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">7 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Тайский бокс для женщин: форма, уверенность, самооборона
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Тайский бокс давно перестал быть только мужским спортом. Сегодня многие женщины выбирают его вместо обычного фитнеса — и не жалеют.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Почему тайский бокс эффективнее фитнеса</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Тренировка по тайскому боксу — это полная нагрузка на всё тело. Работают руки, ноги, корпус, пресс, спина. Одновременно развивается координация и реакция.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Но главное отличие не в цифрах. В фитнесе есть потолок мотивации — рано или поздно становится скучно. В тайском боксе всегда есть что учить: новый удар, связка, работа в клинче. Скука не приходит.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что даёт три месяца тренировок</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Тело", text: "Подтягиваются руки, бёдра, живот. Улучшается осанка. Появляется рельеф там, где раньше его не было." },
                  { title: "Выносливость", text: "После первой тренировки будет тяжело. Через месяц — заметный прогресс. Через три — другой человек." },
                  { title: "Уверенность", text: "Женщины, которые умеют бить, ходят иначе. Это чувствуется в осанке, взгляде, поведении." },
                  { title: "Самооборона", text: "Несколько базовых ударов и умение оценить ситуацию — реальный навык, который остаётся с вами." },
                  { title: "Антистресс", text: "Час в зале снимает напряжение эффективнее, чем что-либо другое. Работа, бытовые проблемы — всё уходит." },
                  { title: "Социум", text: "Тренировки в группе — это общение, поддержка, атмосфера. Многие женщины приходят за формой, остаются за атмосферой." },
                ].map((b) => (
                  <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Типичные страхи — разбираем честно</h2>
              <div className="space-y-3">
                {[
                  { q: "«Меня будут бить»", a: "Нет. На начальном этапе вся работа — по лапам и мешку. Спарринги только по желанию, в полном снаряжении." },
                  { q: "«Я стану мужеподобной»", a: "Нет. Тайский бокс даёт подтянутое, рельефное тело — не «накачанное». Женские пропорции сохраняются." },
                  { q: "«Я не в форме — не потяну»", a: "Форма появляется на тренировках, не до них. Тренер подстраивает нагрузку под ваш уровень." },
                  { q: "«Там одни мужчины»", a: "Группы смешанные. Атмосфера в клубе «Медведь» уважительная — тренер задаёт тон с первого занятия." },
                ].map((item) => (
                  <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                    <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Как проходят тренировки в «Медведь»</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Группы смешанные — занимаются и мужчины, и женщины. Тренер подбирает нагрузку индивидуально. Никто не будет заставлять вас делать то, к чему вы не готовы.
              </p>
              <p className="text-[#888888] leading-relaxed mb-3">
                Занятия три раза в неделю — пн/ср/пт в 20:00. Если групповой формат не подходит по расписанию, есть{" "}
                <Link href="/individualnye-trenirovki" className="text-[#c41e3a] hover:underline">персональные тренировки</Link> в удобное время.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Адрес: Щёлково, Талсинская улица, 9/2 (фитнес-клуб «Олимп»).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что взять на первую тренировку</h2>
              <div className="space-y-2">
                {[
                  "Спортивные шорты или леггинсы и футболка",
                  "Удобную обувь или тренироваться босиком",
                  "Бутылку воды",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-[#555] text-sm mt-3">Перчатки и бинты на первое занятие клуб предоставит.</p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/dlya-devushek" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс для девушек →</Link>
                <Link href="/probnaya-trenirovka" className="text-[#c41e3a] text-sm hover:underline">Пробная тренировка →</Link>
                <Link href="/blog/tayskiy-boks-dlya-pohudeniya" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс для похудения →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Первая тренировка — бесплатно</h2>
              <p className="text-[#888888] text-sm mb-6">Щёлково, Талсинская улица, 9/2. Расписание: пн / ср / пт.</p>
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записаться на тренировку
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
