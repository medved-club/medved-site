import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Спортивные сборы по тайскому боксу: что это и зачем ехать — Клуб «Медведь»",
  description: "Сборы по тайскому боксу на Азовском море и в Таиланде от клуба «Медведь». Что даёт выезд, как подготовиться и сколько стоит.",
  keywords: ["сборы по тайскому боксу", "сборы муай тай", "тайский бокс сборы Таиланд", "спортивные сборы Азовское море"],
  alternates: {
    canonical: "https://medved-club.ru/blog/sbory-po-tajskomu-boksu",
  },
}

export default function ArticleSboryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Сборы по тайскому боксу", href: "/blog/sbory-po-tajskomu-boksu" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">← Блог</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">Сборы</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">6 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Спортивные сборы по тайскому боксу: что это и зачем ехать
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Сборы — это не просто выезд на природу. За 7–14 дней интенсивных тренировок вы проходите то, на что в обычном режиме уходит 2–3 месяца.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что даёт выезд на сборы</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Резкий прогресс", text: "2 тренировки в день вместо трёх в неделю. Тело адаптируется быстро, техника закрепляется." },
                  { title: "Новая среда", text: "Вы отрезаны от работы, телефона и бытовых забот. Только тренировки, еда и отдых." },
                  { title: "Команда", text: "Совместный выезд сближает. Отношения внутри клуба становятся другими после совместных сборов." },
                  { title: "Смена нагрузки", text: "Открытый воздух, море или тайский климат — тело реагирует на новые условия иначе, чем на зал." },
                ].map((b) => (
                  <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                    <p className="text-[#666] text-sm leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Куда едем</h2>
              <div className="space-y-3">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">🌊</span>
                    <h3 className="text-white font-bold">Азовское море</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed mb-3">
                    Летние сборы на берегу. Тренировки утром и вечером, море в перерывах. Подходит для всех уровней — от начинающих до соревнующихся спортсменов.
                  </p>
                  <Link href="/sboryi/azovskoe-more" className="text-[#c41e3a] text-xs font-bold hover:underline">Подробнее о сборах на Азовском море →</Link>
                </div>
                <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-lg">🥊</span>
                    <h3 className="text-white font-bold">Таиланд</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed mb-3">
                    Тренировки на родине муай-тай. Настоящие тайские тренеры, профессиональные залы, правильная атмосфера. Для тех, кто хочет погрузиться в спорт по-настоящему.
                  </p>
                  <Link href="/sboryi/tailand" className="text-[#c41e3a] text-xs font-bold hover:underline">Подробнее о сборах в Таиланде →</Link>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Как выглядит день на сборах</h2>
              <div className="space-y-2">
                {[
                  { time: "07:00–08:30", desc: "Утренняя тренировка: пробежка, ОФП, техника" },
                  { time: "08:30–10:00", desc: "Завтрак и отдых" },
                  { time: "10:00–14:00", desc: "Свободное время, море, восстановление" },
                  { time: "14:00–15:00", desc: "Обед" },
                  { time: "17:00–19:00", desc: "Вечерняя тренировка: спарринги, работа в парах, специальная подготовка" },
                  { time: "19:30", desc: "Ужин, отдых, сон" },
                ].map((s) => (
                  <div key={s.time} className="flex gap-4 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                    <span className="text-[#c41e3a] font-bold text-xs w-24 flex-shrink-0 mt-0.5">{s.time}</span>
                    <span className="text-[#888888] text-sm">{s.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что взять на сборы</h2>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Боксёрские перчатки",
                  "Бинты (2–3 пары)",
                  "Шлем и капа",
                  "Щитки на голень",
                  "Шорты для бокса (3–4 пары)",
                  "Футболки (4–5 штук)",
                  "Бутылка для воды",
                  "Солнцезащитный крем",
                  "Флипы или шлёпанцы",
                  "Аптечка по необходимости",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#888888]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Кто может ехать</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                На сборы едут ученики клуба с любым уровнем подготовки. Новичков это не ограничивает — программа адаптируется. На сборах в Таиланде желателен опыт тренировок от 3–6 месяцев.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Берут и детей, и взрослых. Есть выезды семьями — пока взрослые тренируются, дети проводят время на море.
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/sboryi" className="text-[#c41e3a] text-sm hover:underline">Страница сборов →</Link>
                <Link href="/blog/kak-podgotovitsya-k-sorevnovaniyam" className="text-[#c41e3a] text-sm hover:underline">Подготовка к соревнованиям →</Link>
                <Link href="/tajskij-boks-schelkovo" className="text-[#c41e3a] text-sm hover:underline">Клуб «Медведь» →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Узнать про ближайшие сборы</h2>
              <p className="text-[#888888] text-sm mb-6">Даты, программа и стоимость — на странице сборов или по запросу.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/sboryi" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                  Страница сборов
                </Link>
                <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">
                  Записаться в клуб
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
