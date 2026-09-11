import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Link from "next/link"

export const metadata = {
  title: "Пробная тренировка по тайскому боксу в Щёлково — бесплатно | Клуб «Медведь»",
  description: "Запишитесь на бесплатную пробную тренировку по тайскому боксу в Щёлково. Клуб «Медведь» — занятия для детей, подростков и взрослых. Первое занятие без оплаты.",
  keywords: [
    "пробная тренировка тайский бокс Щёлково",
    "бесплатная тренировка по боксу Щёлково",
    "первое занятие тайский бокс Щёлково",
    "попробовать тайский бокс Щёлково",
    "записаться на тренировку по боксу Щёлково",
  ],
  alternates: {
    canonical: "https://medved-club.ru/probnaya-trenirovka",
  },
}

const steps = [
  {
    n: "01",
    title: "Оставьте заявку",
    text: "Заполните форму ниже или напишите в Telegram. Тренер подтвердит время в течение нескольких часов.",
  },
  {
    n: "02",
    title: "Приходите на тренировку",
    text: "Щёлково, Талсинская улица, 9. Возьмите удобную спортивную одежду и воду — всё остальное есть в зале.",
  },
  {
    n: "03",
    title: "Тренируйтесь бесплатно",
    text: "Первое занятие полностью бесплатно. Тренер познакомит вас с техникой, оценит уровень и ответит на все вопросы.",
  },
  {
    n: "04",
    title: "Принимайте решение",
    text: "После занятия вы сами решаете — продолжать или нет. Никакого давления и обязательств.",
  },
]

const faqItems = [
  {
    q: "Нужна ли физическая подготовка?",
    a: "Нет. Пробная тренировка рассчитана на любой уровень. Тренер подберёт нагрузку индивидуально.",
  },
  {
    q: "Что взять с собой?",
    a: "Удобную спортивную одежду и воду. Перчатки и бинты на первое занятие клуб предоставит.",
  },
  {
    q: "Подходит ли пробная тренировка для ребёнка?",
    a: "Да. Пробные занятия есть для детей от 6 лет, подростков и взрослых. Время подбирается по расписанию.",
  },
  {
    q: "Можно ли прийти без предварительной записи?",
    a: "Лучше записаться заранее, чтобы тренер вас ждал и уделил максимум внимания.",
  },
]

export default function ProbnajaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Пробная тренировка", href: "/probnaya-trenirovka" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Первое занятие бесплатно
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Пробная тренировка<br />по тайскому боксу
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Клуб «Медведь» в Щёлково приглашает на бесплатное первое занятие. Подходит для детей от 6 лет, подростков и взрослых без опыта.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Попробуйте тайский бокс без обязательств — один раз, бесплатно, в удобное время.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#lead-form"
                className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200"
              >
                Записаться на пробную тренировку
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

        {/* Steps */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-8">Как записаться на пробную тренировку</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
              {steps.map((s) => (
                <div key={s.n} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <span className="text-[#c41e3a] font-black text-2xl mb-3 block">{s.n}</span>
                  <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>

            {/* For whom */}
            <h2 className="text-xl font-bold text-white mb-6">Пробная тренировка подходит</h2>
            <div className="space-y-2 mb-14">
              {[
                "Детям от 6 лет — первое знакомство со спортом в безопасной среде",
                "Подросткам 9–17 лет — дисциплина, физическая форма, уверенность",
                "Взрослым без опыта — начать с нуля в любом возрасте",
                "Девушкам — форма, самооборона, уверенность в себе",
                "Всем, кто хочет попробовать тайский бокс перед абонементом",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>

            {/* FAQ */}
            <h2 className="text-xl font-bold text-white mb-6">Частые вопросы</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Первое занятие — бесплатно</h2>
            <p className="text-[#888888] mb-8">
              Щёлково, Талсинская улица, 9 · Запись по телефону или через форму
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
