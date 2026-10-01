import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Тайский бокс для подростков — Клуб «Медведь», Щёлково",
  description: "Секция тайского бокса для подростков в Щёлково. Спорт, характер, команда. Тренировки для подростков 13+ лет.",
  alternates: {
    canonical: "https://medved-club.ru/dlya-podrostkov",
  },
}

const benefits = [
  { title: "Характер и стержень", text: "Спорт учит не сдаваться, работать через усталость, держать удар — в прямом и переносном смысле. Это формирует характер." },
  { title: "Физическая форма", text: "Тайский бокс даёт комплексную нагрузку на всё тело: кардио, сила, скорость, гибкость и выносливость." },
  { title: "Уверенность в себе", text: "Когда умеешь постоять за себя и знаешь, что тренируешься — это даёт спокойную уверенность в любой ситуации." },
  { title: "Команда и среда", text: "Подростки тренируются вместе, поддерживают друг друга, участвуют в соревнованиях. Клуб — это сообщество." },
  { title: "Дисциплина и режим", text: "Регулярные тренировки прививают привычку к режиму, ответственности и уважению — качества, которые помогают в жизни." },
  { title: "Соревнования", text: "Спортсмены клуба участвуют в соревнованиях. Для тех, кто хочет побеждать — есть полноценная спортивная подготовка." },
]

export default function DlyaPodrostkovPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Тайский бокс для подростков", href: "/dlya-podrostkov" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">

        {/* Hero */}
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Для подростков</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Тайский бокс<br />для подростков
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Тайский бокс — один из лучших видов спорта для подростков. Формирует характер, учит дисциплине, даёт физическую и психологическую уверенность.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Начать можно с нуля — тренер подберёт нагрузку под уровень подготовки и поможет войти в тренировочный процесс.
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
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Что даёт тайский бокс подросткам</p>
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
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Прийти на тренировку</h2>
            <p className="text-[#888888] mb-8">Расписание: пн / ср / пт. Первое групповое занятие — бесплатно.</p>
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
