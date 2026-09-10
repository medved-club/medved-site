import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Соревнования — Клуб тайского бокса «Медведь», Щёлково",
  description: "Результаты выступлений тренера и спортсменов клуба «Медведь» на соревнованиях по тайскому боксу и муай-тай. Чемпионы и призёры турниров.",
  keywords: ["соревнования тайский бокс Щёлково", "турниры муай тай Подмосковье", "клуб Медведь результаты"],
  alternates: {
    canonical: "https://medved-club.ru/competitions",
  },
}

const trainerResults = [
  { year: "2014", event: "Чемпионат Твери по тайскому боксу", result: "🥇 Чемпион", level: "Региональный" },
  { year: "2012", event: "Чемпионат Республики Мордовия по тайскому боксу", result: "🥇 Чемпион", level: "Региональный" },
  { year: "2012", event: "Чемпионат Московской области по тайскому боксу", result: "🥈 Призёр", level: "Областной" },
  { year: "—", event: "Всероссийский турнир «Кубок Альфы»", result: "🥈 Призёр", level: "Всероссийский" },
  { year: "—", event: "Турнир «Время быть сильным»", result: "🥇 Победитель", level: "Открытый турнир" },
]

const stats = [
  { value: "10+", label: "лет опыта тренера" },
  { value: "КМС", label: "по тайскому боксу" },
  { value: "5+", label: "чемпионских титулов" },
  { value: "МО", label: "лицензия Федерации" },
]

export default function CompetitionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Соревнования", href: "/competitions" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">

        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Спортивные результаты</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Соревнования
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed max-w-2xl">
              Тренер клуба «Медведь» Никита Эрденко — действующий спортсмен с опытом выступлений на региональных и всероссийских соревнованиях. Воспитанники клуба также участвуют в турнирах по желанию.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 text-center">
                  <div className="text-2xl font-black text-[#c41e3a] mb-1">{s.value}</div>
                  <div className="text-[#666] text-xs">{s.label}</div>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-white mb-6">Результаты тренера</h2>
            <div className="space-y-3">
              {trainerResults.map((r, i) => (
                <div key={i} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-[#444] text-xs w-10 flex-shrink-0">{r.year}</span>
                    <div>
                      <div className="text-white text-sm font-semibold">{r.event}</div>
                      <div className="text-[#555] text-xs mt-0.5">{r.level}</div>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">{r.result}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-4">Хотите участвовать в соревнованиях?</h2>
            <p className="text-[#888888] leading-relaxed mb-6 max-w-2xl">
              Тренер готовит желающих к выступлениям на турнирах любого уровня — от открытых местных соревнований до чемпионатов Московской области. Участие — всегда по желанию спортсмена.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">
                Записаться на тренировку
              </Link>
              <Link href="/dlya-sportsmenov" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">
                Тренировки для спортсменов
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
