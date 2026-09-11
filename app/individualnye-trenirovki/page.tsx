import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Индивидуальные тренировки по тайскому боксу в Щёлково — Клуб «Медведь»",
  description: "Персональные тренировки по тайскому боксу в Щёлково. Тренер работает один на один — быстрый прогресс, чёткая программа. Стоимость — от 3 000 ₽ за занятие.",
  keywords: ["индивидуальные тренировки Щёлково", "персональный тренер тайский бокс Щёлково", "индивидуальные занятия единоборства", "персональные тренировки по боксу Щёлково"],
  alternates: {
    canonical: "https://medved-club.ru/individualnye-trenirovki",
  },
}

export default function IndividualPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Персональные тренировки", href: "/individualnye-trenirovki" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Персональный формат</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Индивидуальные тренировки<br />по тайскому боксу
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Занятия один на один с тренером в клубе «Медведь», Щёлково. Программа строится под ваши цели — техника, физическая форма, подготовка к соревнованиям или самооборона.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Подходит для любого уровня подготовки — от полного новичка до опытного спортсмена.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться на тренировку</Link>
              <Link href="/split-trenirovki" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">Сплит-тренировки</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">Чем индивидуальные тренировки отличаются от групповых</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                { title: "100% внимание тренера", text: "Каждое движение под контролем. Ошибки исправляются сразу — не накапливаются месяцами." },
                { title: "Быстрый прогресс", text: "За 3 месяца индивидуальных тренировок — уровень, который в группе достигается за 6–8 месяцев." },
                { title: "Гибкое расписание", text: "Время занятия согласовывается с тренером под ваш график." },
                { title: "Чёткая программа", text: "Тренер строит план под вашу цель: похудеть, выступать на соревнованиях или освоить технику." },
              ].map((b) => (
                <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-[#c41e3a]/15 border border-[#c41e3a]/25 flex items-center justify-center flex-shrink-0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#c41e3a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </div>
                    <h3 className="text-white font-bold text-sm">{b.title}</h3>
                  </div>
                  <p className="text-[#888888] text-sm leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-white mb-6">Кому подходят индивидуальные тренировки</h2>
            <div className="space-y-2">
              {[
                "Новичкам, которые хотят быстро освоить базу без лишнего времени",
                "Тем, у кого плотный график — занятия в удобное время",
                "Спортсменам, готовящимся к соревнованиям",
                "Людям с травмами — тренер корректирует нагрузку индивидуально",
                "Тем, кто хочет похудеть с максимальным результатом",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[#888888] text-sm bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Персональная тренировка — от 3 000 ₽</h2>
            <p className="text-[#888888] mb-8">Щёлково, Талсинская улица, 9/2 · Запись по телефону или через форму</p>
            <p className="text-[#555] text-sm mb-8">Хотите попробовать бесплатно? Первое занятие бесплатно только в групповом формате — <Link href="/probnaya-trenirovka" className="text-[#c41e3a] hover:underline">подробнее о пробной тренировке</Link>.</p>
            <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
