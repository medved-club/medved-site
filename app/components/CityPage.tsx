import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Link from "next/link"
import type { CityData } from "@/app/data/cities"
import { getSiteContent } from "@/lib/site-content"

const checkIcon = (
  <div className="w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </div>
)

interface Props {
  city: CityData
}

export default async function CityPage({ city }: Props) {
  const content = await getSiteContent()
  const priceOf = (id: string) => content.trainingTypes.find((t) => t.id === id)?.price ?? ""

  const formats = [
    { title: "Групповые", price: priceOf("group"), desc: "Пн/Ср/Пт — 3 раза в неделю. Группы по возрасту.", href: "/#lead-form" },
    { title: "Разовая групповая", price: priceOf("single"), desc: "Одно занятие в группе без абонемента.", href: "/#lead-form" },
    { title: "Персональные", price: priceOf("personal"), desc: "Один на один с тренером. Гибкое расписание.", href: "/individualnye-trenirovki" },
    { title: "Сплит", price: priceOf("split"), desc: "Для двоих. Качество персонального, цена ниже.", href: "/split-trenirovki" },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: `Тайский бокс в ${city.name}`, href: `/${city.slug}` },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              {city.distance} {city.nameFrom}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Тайский бокс рядом<br />с {city.name}
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Клуб тайского бокса «Медведь» в Щёлково — {city.distance} {city.nameFrom} {city.transport}. Тренировки для детей с 6 лет, подростков и взрослых.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Тренер КМС — более 10 лет опыта. Первое групповое занятие бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#lead-form"
                className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
              >
                Записаться на тренировку
              </Link>
              <Link
                href="/raspisanie-i-tseny"
                className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Расписание и цены
              </Link>
            </div>
          </div>
        </section>

        {/* Why + Formats */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Why */}
            <h2 className="text-xl font-bold text-white mb-6">Почему выбирают клуб «Медведь»</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {[
                { title: `${city.distance} ${city.nameFrom}`, text: `Зал в Щёлково, Талсинская улица, 9 — ${city.transport}.` },
                { title: "Тренер КМС", text: "Никита Эрденко — кандидат в мастера спорта, чемпион, тренерская лицензия Федерации Московской области." },
                { title: "Группы по возрасту", text: "Дети 6–8 лет · Подростки 9–13 лет · Взрослые 14+. Для каждой группы — отдельная программа." },
                { title: "5,0 ★ на Яндекс Картах", text: "45 отзывов — реальные ученики о результатах и атмосфере клуба." },
              ].map((b) => (
                <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {checkIcon}
                    <h3 className="text-white font-bold text-sm">{b.title}</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            {/* Schedule */}
            <h2 className="text-xl font-bold text-white mb-4">Расписание тренировок</h2>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-14">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["Понедельник", "Среда", "Пятница"].map((day) => (
                  <div key={day}>
                    <p className="text-[#c41e3a] font-bold text-sm mb-2">{day}</p>
                    <div className="space-y-1 text-[#888888] text-sm">
                      <p>18:00 — дети 6–8 лет</p>
                      <p>19:00 — подростки 9–13 лет</p>
                      <p>20:00 — от 14 лет</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[#555] text-xs">Персональные и сплит-тренировки — по согласованию в любой день.</p>
            </div>

            {/* Formats */}
            <h2 className="text-xl font-bold text-white mb-6">Форматы тренировок</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
              {formats.map((f) => (
                <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex flex-col">
                  <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                  <span className="text-[#c41e3a] font-black text-lg mb-2">{f.price}</span>
                  <p className="text-[#888888] text-sm leading-relaxed flex-1 mb-4">{f.desc}</p>
                  <Link href={f.href} className="text-[#c41e3a] text-xs font-bold hover:underline">Подробнее →</Link>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-xl font-bold text-white mb-6">Частые вопросы</h2>
            <div className="space-y-3 mb-14">
              {city.faq.map((item) => (
                <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* SEO text */}
            <div className="border-t border-[#1e1e1e] pt-10">
              <h2 className="text-lg font-bold text-white mb-4">Тайский бокс рядом с {city.name}</h2>
              <p className="text-[#666] text-sm leading-relaxed">{city.seoText}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Первое групповое занятие — бесплатно</h2>
            <p className="text-[#888888] mb-2">Щёлково, Талсинская улица, 9 (фитнес-клуб «Олимп»)</p>
            <p className="text-[#555] text-sm mb-8">Пн / Ср / Пт · +7 968 675-07-00</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#lead-form"
                className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
              >
                Записаться
              </Link>
              <Link
                href="/probnaya-trenirovka"
                className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200"
              >
                О пробной тренировке
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
