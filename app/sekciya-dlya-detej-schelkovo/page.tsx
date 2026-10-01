import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Секция для детей в Щёлково — тайский бокс, единоборства, Клуб «Медведь»",
  description: "Детская секция единоборств в Щёлково. Тайский бокс для детей от 6 лет. Опытный тренер, безопасно, результат. Первое групповое занятие бесплатно.",
  keywords: ["секция для детей Щёлково", "детская секция Щёлково", "кружки для детей Щёлково", "спорт для детей Щёлково", "единоборства для детей Щёлково", "бокс для детей Щёлково"],
  alternates: {
    canonical: "https://medved-club.ru/sekciya-dlya-detej-schelkovo",
  },
}

export default function SekciyaDetejPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Секция для детей в Щёлково", href: "/sekciya-dlya-detej-schelkovo" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Для детей · Щёлково</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Секция для детей<br />в Щёлково
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Клуб «Медведь» — детская секция тайского бокса в Щёлково. Принимаем детей от 6 лет. Тренер с 10-летним опытом работы с детьми и подростками.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Безопасно. Интересно. С результатом.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записать ребёнка</Link>
              <Link href="/dlya-detey" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">Подробнее</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
              {[
                { title: "С 6 лет", text: "Оптимальный возраст для старта. Игровые элементы, координация, ОФП — без скуки." },
                { title: "Дисциплина", text: "Уважение, режим, правила зала. Переносится в учёбу и жизнь." },
                { title: "Уверенность", text: "Ребёнок видит прогресс. Меньше подвергается буллингу. Находит своё место в коллективе." },
                { title: "Безопасность", text: "Полное снаряжение, постепенная нагрузка, постоянный контроль тренера." },
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

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Расписание детских групп</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[#c41e3a] font-bold text-sm w-20">6–8 лет</span>
                  <span className="text-[#888888] text-sm">Понедельник, Среда, Пятница · 18:00</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#c41e3a] font-bold text-sm w-20">9–13 лет</span>
                  <span className="text-[#888888] text-sm">Понедельник, Среда, Пятница · 19:00</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Первое групповое занятие — бесплатно</h2>
            <p className="text-[#888888] mb-8">Щёлково, Талсинская улица, 9 · +7 968 675-07-00</p>
            <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записать ребёнка</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
