import Header from "@/app/components/Header"
import BreadcrumbJsonLd from "@/app/components/BreadcrumbJsonLd"
import Footer from "@/app/components/Footer"
import Link from "next/link"

export const metadata = {
  title: "Персональный тренер по единоборствам в Щёлково — Клуб «Медведь»",
  description: "Персональный тренер по тайскому боксу в Щёлково. КМС, более 10 лет опыта. Индивидуальные и сплит-тренировки, а также группы. Первое групповое занятие — бесплатно.",
  keywords: ["персональный тренер Щёлково", "тренер по единоборствам Щёлково", "тренер по боксу Щёлково", "персональный тренер по тайскому боксу", "тренер муай тай Щёлково"],
  alternates: {
    canonical: "https://medved-club.ru/personalnyj-trener-schelkovo",
  },
}

export default function PersonalTrainerPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Главная", href: "/" },
        { name: "Персональный тренер в Щёлково", href: "/personalnyj-trener-schelkovo" },
      ]} />
      <Header />
      <main className="bg-[#111111] min-h-screen">
        <section className="pt-32 pb-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-block text-[#c41e3a] text-xs font-bold uppercase tracking-[0.2em] mb-4">Щёлково</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Персональный тренер<br />по единоборствам в Щёлково
            </h1>
            <p className="text-[#aaaaaa] text-lg leading-relaxed mb-4 max-w-2xl">
              Никита Эрденко — профессиональный тренер по тайскому боксу. КМС, более 10 лет опыта, тренерская лицензия Федерации тайского бокса Московской области.
            </p>
            <p className="text-[#888888] text-base leading-relaxed mb-10 max-w-2xl">
              Работает с детьми от 6 лет, подростками и взрослыми. Индивидуальные и сплит-тренировки.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться к тренеру</Link>
              <Link href="/" className="inline-block px-8 py-4 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#c41e3a]/40 text-white font-semibold rounded-xl transition-all duration-200">О клубе</Link>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">О тренере</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                "КМС по тайскому боксу",
                "Более 10 лет тренерского опыта",
                "Лицензия Федерации тайского бокса МО",
                "Член Федерации тайского бокса МО",
                "Чемпион Республики Мордовия, 2012",
                "Чемпион Твери, 2014",
                "Призёр Всероссийского турнира «Кубок Альфы»",
                "Основатель клуба «Медведь»",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c41e3a] flex-shrink-0" />
                  <span className="text-[#888888] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-xl font-bold text-white mb-4">Форматы занятий</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Индивидуально", text: "Один на один. Максимальное внимание, быстрый прогресс." },
                { title: "Сплит", text: "2–3 человека. Высокое качество тренировки по доступной цене." },
                { title: "Группа", text: "Пн / Ср / Пт. Отдельные группы по возрасту с 6 лет." },
              ].map((f) => (
                <div key={f.title} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                  <h3 className="text-[#c41e3a] font-bold text-sm mb-2">{f.title}</h3>
                  <p className="text-[#888888] text-sm">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-black text-white mb-4">Первое групповое занятие — бесплатно</h2>
            <p className="text-[#888888] mb-8">Щёлково, Талсинская улица, 9/2</p>
            <Link href="/#lead-form" className="inline-block px-8 py-4 bg-[#c41e3a] hover:bg-[#e02244] text-white font-bold rounded-xl transition-all duration-200">Записаться</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
