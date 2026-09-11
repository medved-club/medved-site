import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для подростков: почему это лучший выбор — Клуб «Медведь»",
  description: "Тайский бокс для подростков 9–17 лет в Щёлково. Дисциплина, уверенность, физическая форма. Клуб «Медведь» — первая тренировка бесплатно.",
  keywords: ["тайский бокс для подростков", "секция для подростков Щёлково", "муай тай подростки", "спорт для подростков Щёлково"],
  alternates: {
    canonical: "https://medved-club.ru/blog/tayskiy-boks-dlya-podrostkov",
  },
}

export default function ArticlePodrPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Тайский бокс для подростков", href: "/blog/tayskiy-boks-dlya-podrostkov" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">← Блог</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Подросткам</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">7 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Тайский бокс для подростков: почему это лучший выбор
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Подростковый возраст — сложный период. Тело меняется, появляется агрессия, нужно где-то выплеснуть энергию. Тайский бокс — одно из лучших решений для этого этапа жизни.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Зачем подростку тайский бокс</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Выброс энергии", text: "Подростковая агрессия и избыток энергии — в зал, а не на улицу. После тренировки усталость, а не раздражение." },
                  { title: "Дисциплина", text: "Правила зала, уважение к тренеру, режим. Дисциплина в спорте переносится на учёбу и жизнь." },
                  { title: "Уверенность", text: "Подросток, который умеет постоять за себя, меньше подвергается буллингу и легче находит своё место в коллективе." },
                  { title: "Физическое развитие", text: "Рост мышечной массы, координация, гибкость, выносливость — в подростковом возрасте тело отзывается на нагрузку быстро." },
                  { title: "Окружение", text: "Зал — это другой круг общения. Люди, которые занимаются спортом, думают и действуют иначе." },
                  { title: "Цель", text: "Соревнования, пояса, прогресс в технике — подростку важно видеть результат. В тайском боксе он всегда есть." },
                ].map((b) => (
                  <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">С какого возраста и как проходят тренировки</h2>
              <p className="text-[#888888] leading-relaxed mb-4">
                В клубе «Медведь» подростки тренируются с 9 лет в отдельной группе. С 14 лет переходят во взрослую группу — по уровню подготовки, а не только по возрасту.
              </p>
              <div className="space-y-2 mb-4">
                {[
                  { age: "9–13 лет", time: "Пн/Ср/Пт в 19:00", desc: "Техника ударов рук и ног, работа в парах на лапах, ОФП, начало спарринговой работы." },
                  { age: "14–17 лет", time: "Пн/Ср/Пт в 20:00", desc: "Полноценная взрослая программа. Техника, физподготовка, спарринги, подготовка к соревнованиям по желанию." },
                ].map((g) => (
                  <div key={g.age} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#c41e3a] font-bold text-sm">{g.age}</span>
                      <span className="text-[#444] text-xs">{g.time}</span>
                    </div>
                    <p className="text-[#777] text-sm leading-relaxed">{g.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#888888] leading-relaxed">
                Первое занятие — бесплатно. Тренер смотрит на уровень подготовки и определяет, в какую группу поставить.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что происходит на тренировке</h2>
              <div className="space-y-2">
                {[
                  "Разминка — бег, скакалка, суставная гимнастика (15 минут)",
                  "Техническая часть — отработка ударов, комбинаций, защиты (25 минут)",
                  "Работа в парах — на лапах, в спаррингах (15 минут)",
                  "Растяжка и заминка (5 минут)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Соревнования</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                Подростки, которые хотят соревноваться — участвуют. Кто хочет тренироваться для себя — остаётся в своём ритме. Тренер не давит. Первые соревнования обычно появляются через 6–12 месяцев тренировок.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Клуб «Медведь» участвует в соревнованиях Московской области. Тренер готовит к турниру индивидуально, подбирает соперника по весу и уровню.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Вопросы родителей</h2>
              <div className="space-y-3">
                {[
                  { q: "Это не опасно?", a: "При правильно организованных тренировках — нет. Контактные спарринги появляются только когда тренер считает подростка готовым, в полном защитном снаряжении." },
                  { q: "Что если ребёнок захочет бросить?", a: "Первое занятие бесплатно. Если не понравится — нет обязательств. Обычно подростки привыкают за 2–3 недели." },
                  { q: "Как тайский бокс влияет на учёбу?", a: "Положительно — режим, дисциплина, умение сосредотачиваться. Уставший после тренировки подросток меньше сидит в телефоне." },
                  { q: "Можно ли совмещать с другим спортом?", a: "Да. Тайский бокс хорошо сочетается с плаванием, лёгкой атлетикой, игровыми видами спорта." },
                ].map((item) => (
                  <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                    <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-3">Что говорят родители</h2>
              <div className="space-y-3">
                {[
                  "«Сын стал спокойнее дома и лучше учится — не ожидала такого эффекта»",
                  "«После секции перестал дружить с компанией во дворе, нашёл другой круг — спортивный»",
                  "«Видно, что растёт уверенность. Раньше боялся отвечать у доски, теперь нет»",
                ].map((q) => (
                  <div key={q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <p className="text-[#888888] text-sm italic">{q}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/dlya-podrostkov" className="text-[#c41e3a] text-sm hover:underline">Тренировки для подростков →</Link>
                <Link href="/blog/tayskiy-boks-dlya-detey" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс для детей →</Link>
                <Link href="/raspisanie-i-tseny" className="text-[#c41e3a] text-sm hover:underline">Расписание и цены →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Первая тренировка — бесплатно</h2>
              <p className="text-[#888888] text-sm mb-2">Щёлково, Талсинская улица, 9</p>
              <p className="text-[#666] text-sm mb-6">Пн / Ср / Пт · 19:00 — группа 9–13 лет</p>
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записать подростка
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
