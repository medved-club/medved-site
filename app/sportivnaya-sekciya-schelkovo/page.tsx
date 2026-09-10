import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Спортивная секция в Щёлково для детей и взрослых — Клуб «Медведь»",
  description: "Спортивная секция в Щёлково. Тайский бокс и единоборства для детей от 6 лет, подростков и взрослых. Клуб «Медведь» — Щёлково, Талсинская 9/2.",
  keywords: ["спортивная секция Щёлково", "секция для детей Щёлково", "спортивный клуб Щёлково", "секция единоборств Щёлково", "спорт для детей Щёлково", "кружки Щёлково"],
  alternates: {
    canonical: "https://medved-club.ru/sportivnaya-sekciya-schelkovo",
  },
}

export default function SportSectionPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Спортивная секция в Щёлково", href: "/sportivnaya-sekciya-schelkovo" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Щёлково</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Спортивная секция<br />в Щёлково
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Клуб «Медведь» — секция тайского бокса и единоборств в Щёлково. Тренировки для детей от 6 лет, подростков и взрослых. Опытный тренер, результат с первых занятий.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Щёлково, Талсинская улица, 9/2 · Пн / Ср / Пт
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться в секцию</Link>
              <Link href="/" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">О клубе</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">Группы по возрасту</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {[
                { age: "6–8 лет", time: "18:00", text: "Игровые тренировки. Координация, дисциплина, физическое развитие." },
                { age: "9–13 лет", time: "19:00", text: "Техника, ОФП, командная работа. Возможность участвовать в соревнованиях." },
                { age: "14 лет и старше", time: "20:00", text: "Полноценные тренировки для взрослых. Все форматы." },
              ].map((g) => (
                <div key={g.age} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <div className="text-[#c41e3a] font-black text-lg mb-1">{g.age}</div>
                  <div className="text-[#555] text-xs mb-3">Начало в {g.time} · Пн/Ср/Пт</div>
                  <p className="text-[#888888] text-sm">{g.text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Дисциплина и характер", text: "Правила зала, уважение, работа над собой — навыки, которые переносятся в жизнь." },
                { title: "Безопасность", text: "Профессиональный тренер, защитное снаряжение, постепенная нагрузка." },
                { title: "Соревнования по желанию", text: "Никто не заставляет выступать. Хочешь — готовим, не хочешь — тренируешься для себя." },
                { title: "Первая тренировка бесплатно", text: "Приходите познакомиться без обязательств." },
              ].map((b) => (
                <div key={b.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                  <p className="text-[#888888] text-sm">{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Записаться в секцию</h2>
            <p className="text-[#888888] mb-8">Щёлково, Талсинская улица, 9/2 · +7 968 675-07-00</p>
            <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Оставить заявку</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
