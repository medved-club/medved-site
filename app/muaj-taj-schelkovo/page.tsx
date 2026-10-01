import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Link from "next/link"

export const metadata = {
  title: "Муай тай в Щёлково — Клуб «Медведь» | Запись на тренировку",
  description: "Муай тай (тайский бокс) в Щёлково — клуб «Медведь». Тренировки для детей от 6 лет, подростков и взрослых. Тренер КМС. Первое занятие бесплатно.",
  keywords: [
    "муай тай Щёлково",
    "муай тай клуб Щёлково",
    "секция муай тай Щёлково",
    "муай тай для детей Щёлково",
    "муай тай для взрослых Щёлково",
    "муай тай Щёлково запись",
    "тайский бокс муай тай Щёлково",
    "муай тай тренировки Щёлково",
  ],
  alternates: {
    canonical: "https://medved-club.ru/muaj-taj-schelkovo",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "LocalBusiness"],
  name: "Клуб тайского бокса «Медведь»",
  description: "Муай тай (тайский бокс) в Щёлково. Тренировки для детей, подростков и взрослых.",
  url: "https://medved-club.ru",
  telephone: "+7 968 675-07-00",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Щёлково",
    addressRegion: "Московская область",
    streetAddress: "Талсинская улица, 9",
    postalCode: "141100",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.9267,
    longitude: 38.0072,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "45",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday",    opens: "18:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "18:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday",    opens: "18:00", closes: "21:00" },
  ],
  sport: "Муай тай",
  priceRange: "₽₽",
}

const formats = [
  {
    title: "Групповые тренировки",
    price: "6 500 ₽/мес",
    text: "Пн/Ср/Пт — три раза в неделю. Группы по возрасту: дети 6–8 лет, подростки 9–13 лет, взрослые 14+.",
    href: "/#lead-form",
  },
  {
    title: "Персональная тренировка",
    price: "3 000 ₽",
    text: "Один на один с тренером. Программа под ваши цели. Гибкое расписание.",
    href: "/individualnye-trenirovki",
  },
  {
    title: "Сплит-тренировка",
    price: "4 000 ₽",
    text: "Для двоих — 2 000 ₽ с каждого. Подходит для друзей, пары, родителя с ребёнком.",
    href: "/split-trenirovki",
  },
]

const whyItems = [
  "Тренер — КМС по муай тай, 10+ лет опыта, тренерская лицензия Федерации Московской области",
  "Зал в Щёлково — Талсинская улица, 9, внутри фитнес-клуба «Олимп»",
  "Группы по возрасту: дети с 6 лет, подростки, взрослые",
  "Первое занятие бесплатно — без обязательств и давления",
  "5,0 ★ — 45 отзывов на Яндекс Картах",
]

export default function MuajTajSchelkovoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Муай тай в Щёлково", href: "/muaj-taj-schelkovo" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1 text-[#f5b800] text-xs font-bold">
                ★★★★★ <span className="text-[#888] font-normal ml-1">5,0 · 45 отзывов</span>
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Муай тай в Щёлково —<br />Клуб «Медведь»
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Профессиональные тренировки по муай тай (тайскому боксу) в Щёлково для детей с 6 лет, подростков и взрослых. Тренер — КМС, более 10 лет опыта.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Начните с нуля — тренер подберёт нагрузку под ваш уровень. Первое занятие бесплатно.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#lead-form"
                className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
              >
                Записаться на бесплатное занятие
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

        {/* Why us */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">Почему выбирают клуб «Медведь»</h2>
            <div className="space-y-2 mb-14">
              {whyItems.map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>

            {/* Formats */}
            <h2 className="text-xl font-bold text-white mb-6">Форматы тренировок по муай тай в Щёлково</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
              {formats.map((f) => (
                <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 flex flex-col">
                  <h3 className="text-white font-bold text-sm mb-1">{f.title}</h3>
                  <span className="text-[#c41e3a] font-black text-xl mb-3">{f.price}</span>
                  <p className="text-[#888888] text-sm leading-relaxed flex-1 mb-4">{f.text}</p>
                  <Link href={f.href} className="text-[#c41e3a] text-xs font-bold hover:underline">
                    Подробнее →
                  </Link>
                </div>
              ))}
            </div>

            {/* Audience */}
            <h2 className="text-xl font-bold text-white mb-6">Для кого муай тай в Щёлково</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                { title: "Дети с 6 лет", text: "Координация, дисциплина, уверенность. Отдельные группы по возрасту.", href: "/dlya-detey" },
                { title: "Подростки 9–17 лет", text: "Спорт, характер, самооборона, физическая форма и команда.", href: "/dlya-podrostkov" },
                { title: "Взрослые с нуля", text: "Начать в любом возрасте без опыта. Снять стресс, улучшить форму.", href: "/dlya-vzroslyh" },
                { title: "Девушки", text: "Сила, форма, уверенность и навыки самообороны без давления.", href: "/dlya-devushek" },
              ].map((a) => (
                <Link
                  key={a.title}
                  href={a.href}
                  className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl p-5 transition-all duration-200 block"
                >
                  <h3 className="text-white font-bold text-sm mb-2">{a.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{a.text}</p>
                </Link>
              ))}
            </div>

            {/* Schedule brief */}
            <h2 className="text-xl font-bold text-white mb-4">Расписание муай тай в Щёлково</h2>
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {["Понедельник", "Среда", "Пятница"].map((day) => (
                  <div key={day}>
                    <p className="text-[#c41e3a] font-bold text-sm mb-2">{day}</p>
                    <div className="space-y-1 text-[#888888] text-xs">
                      <p>18:00 — дети 6–8 лет</p>
                      <p>19:00 — подростки 9–13 лет</p>
                      <p>20:00 — 14 лет и старше</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[#555] text-sm mb-14">
              Персональные и сплит-тренировки — по согласованию в любой день.{" "}
              <Link href="/raspisanie-i-tseny" className="text-[#c41e3a] hover:underline">Полное расписание и цены →</Link>
            </p>

            {/* SEO text */}
            <div className="prose prose-invert max-w-none">
              <h2 className="text-xl font-bold text-white mb-4">Муай тай в Щёлково — клуб «Медведь»</h2>
              <p className="text-[#777] text-sm leading-relaxed mb-3">
                Муай тай — тайский бокс, национальный боевой вид спорта Таиланда. В отличие от классического бокса, в муай тай разрешены удары руками, ногами, коленями и локтями. Это один из самых эффективных и популярных видов единоборств для детей и взрослых.
              </p>
              <p className="text-[#777] text-sm leading-relaxed mb-3">
                Клуб «Медведь» проводит тренировки по муай тай в Щёлково по адресу Талсинская улица, 9 (фитнес-клуб «Олимп»). Занятия проходят три раза в неделю — в понедельник, среду и пятницу. Группы разделены по возрасту: дети от 6 лет, подростки 9–13 лет и взрослые от 14 лет.
              </p>
              <p className="text-[#777] text-sm leading-relaxed">
                Тренер клуба — Никита Эрденко, КМС по тайскому боксу, более 10 лет тренерского опыта. На тренировках отрабатываются техника ударов руками, ногами, коленями и локтями, работа в парах, физическая подготовка. Клуб принимает новичков без опыта и спортсменов с подготовкой. Первое групповое занятие — бесплатно.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Запишитесь на первое бесплатное занятие</h2>
            <p className="text-[#888888] mb-2">Щёлково, Талсинская улица, 9 (фитнес-клуб «Олимп»)</p>
            <p className="text-[#555] text-sm mb-8">Пн / Ср / Пт · +7 968 675-07-00</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                О пробном занятии
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
