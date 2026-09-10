import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import CampsFormSection from "@/app/components/CampsFormSection"
import CampCountdown from "@/app/components/CampCountdown"
import FloatingButton from "@/app/components/FloatingButton"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Записаться на сборы — Клуб тайского бокса «Медведь»",
  description: "Запись на ежегодные спортивные сборы клуба «Медведь»: Азовское море (июнь–июль) и Таиланд (март 2027).",
  alternates: {
    canonical: "https://medved-club.ru/sboryi",
  },
}

const whatToTake = [
  "Спортивная форма (шорты, футболки) — 5–7 комплектов",
  "Боксёрские перчатки и бинты",
  "Капа (обязательно)",
  "Шлем и щитки (если есть)",
  "Скакалка",
  "Сланцы/шлёпки для бассейна",
  "Солнцезащитный крем",
  "Личные документы",
]

const faq = [
  {
    q: "Можно ли ехать без опыта?",
    a: "Да. На сборах тренируются и новички, и опытные спортсмены — группы и нагрузка подбираются под уровень.",
  },
  {
    q: "Едут ли родители вместе с детьми?",
    a: "Да. Сопровождающие (родители, бабушки, дедушки) приветствуются. На базе есть всё для комфортного отдыха.",
  },
  {
    q: "Сколько тренировок в день?",
    a: "Обычно 2 тренировки в день. Между занятиями — отдых, море, бассейн.",
  },
  {
    q: "Как добраться до базы?",
    a: "Орг вопросы по трансферу уточняйте при записи — тренер расскажет актуальную информацию по каждой смене.",
  },
  {
    q: "Что входит в стоимость?",
    a: "Проживание в домиках, 3-разовое питание, тренировки. Дорога оплачивается отдельно.",
  },
]

export default function SboriyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Сборы", href: "/sboryi" },
      ]} />
      <Header />
      <main className="bg-[#111111]">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <CampCountdown />
        </div>
        <CampsFormSection />

        {/* Что взять */}
        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Что взять с собой</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whatToTake.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[#cccccc] text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-8">Частые вопросы о сборах</p>
            <div className="space-y-3">
              {faq.map((item) => (
                <div key={item.q} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <p className="text-white font-semibold text-sm mb-2">{item.q}</p>
                  <p className="text-[#888888] text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Links to camp pages */}
        <section className="py-8 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold text-[#666666] uppercase tracking-widest mb-6">Подробнее о каждых сборах</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/sboryi/azovskoe-more" className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl p-5 transition-all duration-200">
                <p className="text-white font-bold mb-1">Сборы на Азовском море</p>
                <p className="text-[#c41e3a] text-xs mb-2">30 июня — 22 июля · две смены</p>
                <p className="text-[#666] text-xs">Краснодарский край, посёлок Темрюк</p>
              </Link>
              <Link href="/sboryi/tailand" className="bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 rounded-xl p-5 transition-all duration-200">
                <p className="text-white font-bold mb-1">Сборы в Таиланде</p>
                <p className="text-[#c41e3a] text-xs mb-2">Март 2027</p>
                <p className="text-[#666] text-xs">Родина муай-тай</p>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingButton />
    </>
  )
}
