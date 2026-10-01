import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для новичков — Клуб «Медведь», Щёлково",
  description: "Начать тайский бокс с нуля в Щёлково. Клуб «Медведь» — тренировки для начинающих с любым уровнем подготовки.",
  alternates: {
    canonical: "https://medved-club.ru/dlya-novichkov",
  },
}

const steps = [
  { num: "01", title: "Первое групповое занятие бесплатно", text: "Приходите на ознакомительное групповое занятие — это бесплатно. Познакомитесь с тренером, клубом и форматом занятий." },
  { num: "02", title: "Индивидуальный подход", text: "Тренер оценит вашу физическую форму и подберёт нагрузку. Никаких резких стартов — только постепенный прогресс." },
  { num: "03", title: "Обучение с нуля", text: "Постановка стойки, базовые удары, защита, работа в парах — всё с самого начала, в комфортном темпе." },
  { num: "04", title: "Результат через месяц", text: "Уже после первого месяца регулярных тренировок вы почувствуете разницу: форма, выносливость, координация." },
]

const faq = [
  { q: "Нужна ли физическая подготовка?", a: "Нет. Начать можно с любого уровня. Тренер подберёт нагрузку под вашу форму." },
  { q: "Что нужно принести на первую тренировку?", a: "Спортивную одежду и обувь. Всё остальное (перчатки, бинты) уточните у тренера." },
  { q: "Буду ли я драться с первого занятия?", a: "Нет. Новички начинают с базовой техники и ОФП. Спарринги — только когда вы сами будете готовы." },
  { q: "Подходит ли тайский бокс, если у меня есть лишний вес?", a: "Да. Тайский бокс — один из лучших видов спорта для снижения веса. Нагрузка регулируется тренером." },
]

export default function DlyaNovichkovPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Тайский бокс для новичков", href: "/dlya-novichkov" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Для новичков</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Начать тайский бокс<br />с нуля
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              В клубе «Медведь» можно начать с абсолютного нуля — без опыта, без специальной подготовки, в любом возрасте.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Тренер подберёт нагрузку с учётом вашей физической формы и целей. Первая тренировка — ознакомительная и бесплатная.
            </p>
            <Link
              href="/#lead-form"
              className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
            >
              Записаться на первую тренировку
            </Link>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Как начать</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {steps.map((s) => (
                <div key={s.num} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="text-[#c41e3a] text-xs font-black uppercase tracking-wider mb-3">{s.num}</div>
                  <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Вопросы новичков</p>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Первое групповое занятие — бесплатно</h2>
            <p className="text-[#888888] mb-8">Записывайтесь — тренер ответит на все вопросы и подберёт удобное время.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/#lead-form"
                className="px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
              >
                Записаться на тренировку
              </Link>
              <Link
                href="/"
                className="px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200"
              >
                На главную
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
