import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Сплит-тренировки по тайскому боксу в Щёлково — Клуб «Медведь»",
  description: "Сплит-тренировки по тайскому боксу в Щёлково — занятия для 2–3 человек с тренером. Качество персональной тренировки по доступной цене. Первое занятие бесплатно.",
  keywords: ["сплит тренировки Щёлково", "сплит тренировки тайский бокс", "тренировки для двоих Щёлково", "групповые персональные тренировки единоборства"],
  alternates: {
    canonical: "https://medved-club.ru/split-trenirovki",
  },
}

export default function SplitPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Сплит-тренировки", href: "/split-trenirovki" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Малая группа</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Сплит-тренировки<br />по тайскому боксу
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Сплит — это тренировка для 2–3 человек с одним тренером. Качество персонального занятия, стоимость ниже индивидуального.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Идеально для друзей, пары или коллег, которые хотят тренироваться вместе.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться</Link>
              <Link href="/individualnye-trenirovki" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">Индивидуальные тренировки</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
              {[
                { title: "Групповая", text: "До 10 человек. Стандартное расписание пн/ср/пт. Общая программа для группы.", price: "Базовая цена" },
                { title: "Сплит", text: "2–3 человека. Гибкое расписание. Тренер уделяет внимание каждому участнику.", price: "Средняя цена" },
                { title: "Персональная", text: "Один на один. Максимальный результат. Программа полностью под вас.", price: "Выше" },
              ].map((f) => (
                <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <h3 className="text-[#c41e3a] font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-[#888888] text-sm leading-relaxed mb-3">{f.text}</p>
                  <span className="text-[#444] text-xs">{f.price}</span>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-white mb-4">Кому подходит сплит</h2>
            <div className="space-y-2">
              {[
                "Друзьям или паре, которые хотят тренироваться вместе",
                "Тем, кто хочет больше внимания тренера, чем в группе",
                "Родителям с детьми — тренируетесь в одно время",
                "Коллегам, которые хотят совместные тренировки после работы",
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
            <h2 className="text-2xl font-black text-white mb-4">Первое занятие — бесплатно</h2>
            <p className="text-[#888888] mb-8">Щёлково, Талсинская улица, 9/2</p>
            <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
