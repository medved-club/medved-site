import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Link from "next/link"

export const metadata = {
  title: "Цены на тайский бокс в Щёлково — от 6 500 ₽/мес | Расписание",
  description: "Групповые — от 6 500 ₽/мес (пн/ср/пт), персональные — от 3 000 ₽, сплит — от 2 000 ₽ с человека. Актуальное расписание и цены клуба «Медведь» в Щёлково.",
  keywords: [
    "расписание тайский бокс Щёлково",
    "цены на тренировки по боксу Щёлково",
    "абонемент тайский бокс Щёлково",
    "стоимость тренировок по тайскому боксу Щёлково",
    "цена секции тайского бокса для детей",
    "расписание единоборства Щёлково",
  ],
  alternates: {
    canonical: "https://medved-club.ru/raspisanie-i-tseny",
  },
}

const schedule = [
  {
    day: "Понедельник",
    short: "Пн",
    slots: [
      { time: "18:00–19:00", group: "Дети 6–8 лет" },
      { time: "19:00–20:00", group: "Подростки 9–13 лет" },
      { time: "20:00–21:00", group: "14 лет и старше" },
    ],
  },
  {
    day: "Среда",
    short: "Ср",
    slots: [
      { time: "18:00–19:00", group: "Дети 6–8 лет" },
      { time: "19:00–20:00", group: "Подростки 9–13 лет" },
      { time: "20:00–21:00", group: "14 лет и старше" },
    ],
  },
  {
    day: "Пятница",
    short: "Пт",
    slots: [
      { time: "18:00–19:00", group: "Дети 6–8 лет" },
      { time: "19:00–20:00", group: "Подростки 9–13 лет" },
      { time: "20:00–21:00", group: "14 лет и старше" },
    ],
  },
]

const prices = [
  {
    title: "Групповые тренировки",
    price: "6 500 ₽",
    period: "в месяц",
    note: "Абонемент · 12 занятий в месяц",
    features: [
      "Пн / Ср / Пт — три раза в неделю",
      "Группы по возрасту и уровню",
      "Техника ударов, работа в парах, ОФП",
      "Подходит для детей и взрослых",
    ],
    cta: "Записаться в группу",
    href: "/#lead-form",
    accent: false,
  },
  {
    title: "Персональная тренировка",
    price: "3 000 ₽",
    period: "за занятие",
    note: "Один на один с тренером",
    features: [
      "Гибкий график — в удобное время",
      "Программа под ваши цели",
      "Максимальное внимание тренера",
      "Быстрый прогресс",
    ],
    cta: "Записаться",
    href: "/individualnye-trenirovki",
    accent: true,
  },
  {
    title: "Сплит-тренировка",
    price: "4 000 ₽",
    period: "за занятие",
    note: "Для 2 человек — 2 000 ₽ с каждого",
    features: [
      "Тренировка для двоих",
      "Больше внимания, чем в группе",
      "Выгоднее персональной",
      "Для друзей, пары или родителя с ребёнком",
    ],
    cta: "Записаться",
    href: "/split-trenirovki",
    accent: false,
  },
]

export default function RaspisaniyePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Расписание и цены", href: "/raspisanie-i-tseny" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Клуб «Медведь», Щёлково
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Расписание и цены
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-10 max-w-2xl">
              Тренировки по тайскому боксу три раза в неделю для детей, подростков и взрослых. Первое занятие — бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#lead-form"
                className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
              >
                Записаться бесплатно
              </Link>
              <Link
                href="/probnaya-trenirovka"
                className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Пробная тренировка
              </Link>
            </div>
          </div>
        </section>

        {/* Schedule */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-8">Расписание тренировок</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-4">
              {schedule.map((day) => (
                <div
                  key={day.day}
                  className="bg-[#141414] border border-[#242424] rounded-2xl overflow-hidden"
                >
                  <div className="px-6 pt-6 pb-4 border-b border-[#1e1e1e] flex items-center justify-between">
                    <span className="text-lg font-black text-white">{day.day}</span>
                    <span className="text-xs font-bold text-[#c41e3a] bg-[#c41e3a]/10 border border-[#c41e3a]/20 rounded-full px-2.5 py-1">
                      {day.short}
                    </span>
                  </div>
                  <div className="px-6 py-4 flex flex-col gap-2">
                    {day.slots.map((slot) => (
                      <div
                        key={slot.time}
                        className="flex items-center gap-3 py-3 px-4 rounded-xl bg-[#1a1a1a] border border-[#222222]"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <div>
                          <span className="text-white font-bold text-sm block">{slot.time}</span>
                          <span className="text-[#666666] text-xs">{slot.group}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[#555555] text-sm">
              Персональные и сплит-тренировки — по согласованию с тренером в любой день.
            </p>
          </div>
        </section>

        {/* Prices */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-8">Цены на тренировки</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {prices.map((p) => (
                <div
                  key={p.title}
                  className={`rounded-2xl p-6 flex flex-col ${
                    p.accent
                      ? "bg-[#1a1a1a] border-2 border-[#c41e3a]/40"
                      : "bg-[#141414] border border-[#242424]"
                  }`}
                >
                  {p.accent && (
                    <span className="text-[#c41e3a] text-xs font-bold uppercase tracking-[0.15em] mb-3">
                      Популярный выбор
                    </span>
                  )}
                  <h3 className="text-white font-bold text-base mb-4">{p.title}</h3>
                  <div className="mb-1">
                    <span className="text-3xl font-black text-white">{p.price}</span>
                    <span className="text-[#666] text-sm ml-2">{p.period}</span>
                  </div>
                  <p className="text-[#555] text-xs mb-5">{p.note}</p>
                  <ul className="space-y-2 flex-1 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[#888888] text-sm">
                        <svg className="flex-shrink-0 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className={`block text-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 ${
                      p.accent
                        ? "bg-[#c41e3a] hover:bg-[#e02244] text-white"
                        : "bg-[#1e1e1e] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white"
                    }`}
                  >
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
              <p className="text-[#888888] text-sm leading-relaxed">
                <span className="text-white font-semibold">Первое занятие — бесплатно</span> для любого формата. Приходите попробовать без обязательств — запись через форму на сайте или в Telegram.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Запишитесь на первое занятие</h2>
            <p className="text-[#888888] mb-8">
              Щёлково, Талсинская улица, 9 · Пн / Ср / Пт
            </p>
            <Link
              href="/#lead-form"
              className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
            >
              Записаться бесплатно
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
