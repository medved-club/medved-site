import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Единоборства в Щёлково — Клуб «Медведь»: тайский бокс, муай-тай",
  description: "Секция единоборств в Щёлково. Тайский бокс и муай-тай для детей, подростков и взрослых. Клуб «Медведь» — тренировки пн/ср/пт. Первая групповая тренировка бесплатно.",
  keywords: ["единоборства Щёлково", "секция единоборств Щёлково", "боевые искусства Щёлково", "муай тай Щёлково", "бокс Щёлково", "спортивная секция Щёлково"],
  alternates: {
    canonical: "https://medved-club.ru/edinoborstva-schelkovo",
  },
}

const benefits = [
  { title: "Тайский бокс — лучшее единоборство для старта", text: "8 ударных поверхностей, работа на всех дистанциях, высокая физическая нагрузка. Подходит для спорта и самообороны." },
  { title: "Для любого уровня", text: "Начинаете с нуля или уже занимались — тренер выстроит программу под ваш уровень." },
  { title: "Дети, подростки, взрослые", text: "Отдельные группы по возрасту с 6 лет. Взрослые тренируются с 14 лет." },
  { title: "Первая групповая тренировка бесплатно", text: "Приходите без обязательств — посмотрите зал, познакомьтесь с тренером." },
]

export default function EdinoborstvaPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Единоборства в Щёлково", href: "/edinoborstva-schelkovo" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Щёлково</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Единоборства в Щёлково
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Клуб «Медведь» — секция тайского бокса и муай-тай в Щёлково. Тренировки для детей, подростков и взрослых. Групповые, персональные и сплит-форматы.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Щёлково, Талсинская улица, 9 · Пн / Ср / Пт с 18:00
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться на тренировку</Link>
              <Link href="/" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">О клубе</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {benefits.map((b) => (
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

            <h2 className="text-xl font-bold text-white mb-6">Форматы тренировок</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Групповые", text: "3 раза в неделю. Отдельные группы по возрасту: 6–8 лет, 9–13 лет, 14+ лет." },
                { title: "Персональные", text: "Индивидуальные занятия с тренером. Максимальный фокус на вашей технике и целях." },
                { title: "Сплит", text: "Тренировка для 2–3 человек. Экономия бюджета при высоком качестве внимания тренера." },
              ].map((f) => (
                <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <h3 className="text-[#c41e3a] font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Первая групповая тренировка — бесплатно</h2>
            <p className="text-[#888888] mb-8">Щёлково, Талсинская улица, 9 · Пн / Ср / Пт</p>
            <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
