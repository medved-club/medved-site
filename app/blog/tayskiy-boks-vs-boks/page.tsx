import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Чем тайский бокс отличается от обычного бокса — Клуб «Медведь»",
  description: "8 оружий вместо двух, клинч, работа ногами и коленями. Разбираем ключевые отличия муай-тай от бокса и как выбрать подходящий вид спорта.",
  keywords: ["тайский бокс vs бокс", "отличия тайский бокс", "муай тай что это", "муай тай или бокс"],
  alternates: {
    canonical: "https://medved-club.ru/blog/tayskiy-boks-vs-boks",
  },
}

export default function ArticleVsBoksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Блог", href: "/blog" },
        { name: "Тайский бокс vs бокс", href: "/blog/tayskiy-boks-vs-boks" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-12 bg-[#0f0f0f]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-6 hover:opacity-80 transition-opacity">
              ← Блог
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold text-[#c41e3a] uppercase tracking-wider">О спорте</span>
              <span className="text-[#333] text-xs">·</span>
              <span className="text-[#555] text-xs">6 мин</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-6">
              Чем тайский бокс отличается от обычного бокса
            </h1>
            <p className="text-[#888888] text-lg leading-relaxed">
              Оба вида спорта называют «боксом» — но это разные дисциплины с разной техникой, правилами и философией. Разбираем главные отличия, чтобы вы могли сделать осознанный выбор.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            <div>
              <h2 className="text-xl font-bold text-white mb-4">8 оружий против двух</h2>
              <p className="text-[#888888] leading-relaxed mb-4">
                В классическом боксе используют только кулаки. В тайском боксе — восемь «оружий»:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {["Кулаки", "Локти", "Колени", "Голени / стопы"].map((w) => (
                  <div key={w} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 text-center">
                    <span className="text-white font-semibold text-sm">{w}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#888888] leading-relaxed">
                Это делает тайский бокс более разнообразным тактически и более полным с точки зрения физической нагрузки — работает буквально всё тело.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Клинч — уникальный элемент муай-тай</h2>
              <p className="text-[#888888] leading-relaxed mb-3">
                В классическом боксе судья разводит бойцов при захвате. В тайском боксе клинч — полноценная техническая позиция, из которой наносятся удары коленями и локтями, а также делаются броски.
              </p>
              <p className="text-[#888888] leading-relaxed">
                Работа в клинче — отдельный раздел подготовки. Бойцы, которые умеют работать в клинче, имеют серьёзное преимущество на ближней дистанции.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Стойка и дистанция</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <h3 className="text-white font-bold text-sm mb-3">Классический бокс</h3>
                  <ul className="space-y-2">
                    {[
                      "Стойка более низкая, уклончивая",
                      "Активное движение корпуса (slip, roll)",
                      "Работа на средней и ближней дистанции",
                      "Акцент на скорость и связки руками",
                    ].map((i) => (
                      <li key={i} className="text-[#666] text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#555] mt-2 flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-5">
                  <h3 className="text-white font-bold text-sm mb-3">Тайский бокс</h3>
                  <ul className="space-y-2">
                    {[
                      "Стойка более вертикальная и прямая",
                      "Работа на трёх дистанциях: дальней, средней, клинч",
                      "Контроль ног — защита от лоу-киков",
                      "Акцент на мощность ударов",
                    ].map((i) => (
                      <li key={i} className="text-[#666] text-sm flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#c41e3a] mt-2 flex-shrink-0" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Сравнение по задачам</h2>
              <div className="space-y-3">
                {[
                  {
                    label: "Фитнес и похудение",
                    boxing: "Хорошо",
                    muay: "Отлично — больше мышечных групп в работе",
                  },
                  {
                    label: "Самооборона",
                    boxing: "Базовые навыки рукопашного боя",
                    muay: "Шире арсенал — работают ноги, колени, локти",
                  },
                  {
                    label: "Соревновательный спорт",
                    boxing: "Развитая федеральная система соревнований",
                    muay: "Активные турниры по Московской области",
                  },
                  {
                    label: "Для детей",
                    boxing: "Да, популярный выбор",
                    muay: "Да, клуб «Медведь» принимает с 6 лет",
                  },
                ].map((row) => (
                  <div key={row.label} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white font-semibold text-sm mb-3">{row.label}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-[#444] text-xs mb-1">Классический бокс</p>
                        <p className="text-[#666] text-sm">{row.boxing}</p>
                      </div>
                      <div>
                        <p className="text-[#c41e3a] text-xs mb-1">Тайский бокс</p>
                        <p className="text-[#666] text-sm">{row.muay}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-white mb-4">Что выбрать</h2>
              <div className="space-y-3">
                {[
                  { q: "Хочу научиться бить руками и улучшить реакцию", a: "Подойдёт любой из видов. Начните с тайского — техника рук там тоже полноценная." },
                  { q: "Хочу похудеть и быть в форме", a: "Тайский бокс — нагрузка выше из-за работы всего тела включая ноги и корпус." },
                  { q: "Хочу для самообороны", a: "Тайский бокс даёт более широкий арсенал: удары ногами, коленями, навыки в клинче." },
                  { q: "Хочу заниматься серьёзно и выступать", a: "Оба варианта реальны. В «Медведь» готовят к соревнованиям по тайскому боксу Московской области." },
                ].map((item) => (
                  <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                    <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                    <p className="text-[#666] text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#1e1e1e] rounded-xl p-5">
              <p className="text-[#555] text-sm mb-3">Читайте также:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/tajskij-boks-schelkovo" className="text-[#c41e3a] text-sm hover:underline">Тайский бокс в Щёлково →</Link>
                <Link href="/blog/tayskiy-boks-s-nulya" className="text-[#c41e3a] text-sm hover:underline">Начать с нуля →</Link>
                <Link href="/raspisanie-i-tseny" className="text-[#c41e3a] text-sm hover:underline">Расписание и цены →</Link>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#c41e3a]/20 rounded-xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Попробуйте тайский бокс бесплатно</h2>
              <p className="text-[#888888] text-sm mb-6">Первая тренировка в Щёлково — без оплаты и обязательств.</p>
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записаться
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
