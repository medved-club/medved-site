import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для женщин — Клуб «Медведь», Щёлково",
  description: "Тайский бокс для женщин в Щёлково: сила, форма, уверенность и навыки самообороны. Начать можно с нуля.",
  alternates: {
    canonical: "https://medved-club.ru/dlya-devushek",
  },
}

const benefits = [
  { title: "Физическая форма", text: "Тайский бокс даёт комплексную нагрузку: кардио, силовые элементы, работа с весом тела. Результат виден быстро." },
  { title: "Координация и техника", text: "Удары, защита, работа ног — всё это развивает координацию, пластичность и чувство тела." },
  { title: "Выносливость", text: "Тренировки постепенно повышают выносливость. Уже через месяц регулярных занятий вы почувствуете разницу." },
  { title: "Навыки самообороны", text: "Базовые навыки тайского бокса — это реальная самооборона. Вы будете знать, как защитить себя." },
  { title: "Уверенность в себе", text: "Спорт меняет не только тело. Регулярные тренировки дают уверенность, дисциплину и ощущение контроля над жизнью." },
  { title: "Снятие стресса", text: "Работа на лапах и мешках — один из лучших способов выплеснуть напряжение и выйти из зала с ясной головой." },
]

export default function DlyaDevushekPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Тайский бокс для девушек", href: "/dlya-devushek" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Для женщин</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Тайский бокс<br />для женщин
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-2xl">
              Тайский бокс в клубе «Медведь» — это полноценные тренировки для женщин, которые хотят стать сильнее, выносливее и увереннее в себе. Занятия помогают развить технику, координацию, физическую форму и навыки самообороны.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Начать можно с любого уровня подготовки — тренер подберёт нагрузку и поможет постепенно войти в тренировочный процесс.
            </p>
            <Link
              href="/#lead-form"
              className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(196,30,58,0.4)]"
            >
              Записаться на тренировку
            </Link>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Что даёт тайский бокс</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-sm">{b.title}</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Готова попробовать?</h2>
            <p className="text-[#888888] mb-8">Приходи на первую тренировку — расписание пн / ср / пт, 18:00 / 19:00 / 20:00</p>
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
